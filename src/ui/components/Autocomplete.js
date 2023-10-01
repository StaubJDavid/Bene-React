import { addCapital } from '@/lib/redux/slices/weatherSlice/weatherSlice'
import { AutocompleteOptions } from './AutocompleteOptions'
import { Button } from './Button'
import { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import colours from '@/styles/colours'
import { ExpandIcon } from './ExpandIcon'

export function Autocomplete (props) {
  const router = useRouter()

  const capitals = useSelector(state => state.weather.capitals)
  const savedCapitals = useSelector(state => state.weather.savedCapitals)
  const dispatch = useDispatch()

  const inputRef = useRef(null)

  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    if (selected !== search || search === '') {
      setSelected('')
    }

    if (search !== '') {
      const lowerCasedSearch = search.toLowerCase()
      const searchLength = lowerCasedSearch.length

      // Filter items that are already saved, and then filter for substring
      const foundCapitals = capitals.filter(str => !savedCapitals.includes(str)).filter(str => str.toLowerCase().includes(lowerCasedSearch))
      const parsedFoundCapitals = foundCapitals.map((fc) => {
        return {
          name: fc,
          start: fc.toLowerCase().indexOf(lowerCasedSearch),
          length: searchLength
        }
      })

      setResults(parsedFoundCapitals)
    } else {
      setResults([])
    }
  }, [search])

  const handleCapitalSave = useCallback((capital) => {
    dispatch(addCapital(capital))
    router.push('/')
  }, [])

  return (
    <form autoComplete='off'>
      <div style={{ position: 'relative', width: '100%', marginBottom: '32px' }}>
        <input
          ref={inputRef}
          style={{
            position: 'absolute',
            top: 0,
            zIndex: 5,
            border: 'none',
            borderBottom: `1px solid ${colours.main}`,
            fontSize: '20px',
            backgroundColor: colours.background,
            color: colours.secondary,
            outline: 'none',
            width: '100%'
          }}
          type='text'
          placeholder='Country'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onFocus={() => {
            setShowResults(true)
          }}
          onBlur={() => {
            setTimeout(() => {
              setShowResults(false)
            }, 100)
          }}
        />
        <ExpandIcon
          inputRef={inputRef}
          showResults={showResults}
        />
        <AutocompleteOptions
          results={results}
          showResults={showResults}
          selected={selected}
          search={search}
          setSelected={setSelected}
          setSearch={setSearch}
        />
      </div>

      {selected && (
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            paddingTop: '32px'
          }}
        >
          <Button
            onClick={() => handleCapitalSave(selected)}
          >
            Save
          </Button>
        </div>
      )}
    </form>
  )
}
