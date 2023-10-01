import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import AddSvg from '../ui/icons/add.svg'
import { useRouter } from 'next/router'
import colours from '@/styles/colours'

export default function Home () {
  const savedCapitals = useSelector(state => state.weather.savedCapitals)
  const router = useRouter()

  const handleCapitalClick = useCallback((capital) => {
    router.push(`/${capital}`)
  }, [])

  return (
    <div style={{ width: '100%', paddingTop: '32px' }}>
      {savedCapitals.map(capital => {
        return (
          <div
            key={capital}
            className='flex-center point'
            style={{
              color: colours.secondary,
              fontWeight: 'bold',
              fontSize: '20px',
              marginBottom: '8px'
            }}
            onClick={() => handleCapitalClick(capital)}
          >
            {capital}
          </div>
        )
      })}

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <AddSvg
          fill={colours.green}
          width='32'
          height='32'
          className='point'
          onClick={() => {
            router.push('/search')
          }}
        />
      </div>
    </div>
  )
}
