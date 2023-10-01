import { HighlightedText } from './HighlightedText'

export function AutocompleteOptions (props) {
  const { results, showResults, selected, search, setSelected, setSearch } = props

  if (showResults && selected === '') {
    return (
      <div
        style={{
          position: 'absolute',
          top: 30,
          zIndex: 10,
          fontSize: '20px',
          width: '100%'
        }}
      >
        {/* Show found capitals */}
        {results.slice(0, 8).map((result) => {
          return (
            <HighlightedText
              key={result.name}
              onClick={() => {
                setSelected(result.name)
                setSearch(result.name)
              }}
              {...result}
            />
          )
        })}

        {/* No Result */}
        {(results.length === 0 && search !== '') && (
          <HighlightedText
            onClick={() => {}}
            name='No Result'
            start={0}
            length={0}
            noCut
          />
        )}
      </div>
    )
  }

  return <></>
}
