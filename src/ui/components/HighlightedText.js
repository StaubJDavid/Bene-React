import { useMemo, useState } from 'react'
import colours from '@/styles/colours'

export function HighlightedText (props) {
  const { name, start, length, noCut = false, onClick } = props

  const [hovered, setHovered] = useState(false)

  const baseColor = useMemo(() => {
    return hovered ? colours.mainLighter : colours.main
  }, [hovered])

  const highlightColor = useMemo(() => {
    return hovered ? colours.secondaryLighter : colours.secondary
  }, [hovered])

  return (
    <div
      className='point'
      style={{
        marginBottom: '8px'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {!noCut && (
        <>
          <span style={{ color: baseColor }}>
            {name.substring(0, start)}
          </span>
          <span style={{ color: highlightColor }}>
            {name.substring(start, start + length)}
          </span>
          <span style={{ color: baseColor }}>
            {name.substring(start + length, name.length)}
          </span>
        </>
      )}
      {noCut && (
        <span style={{ color: baseColor }}>
          {name}
        </span>
      )}
    </div>
  )
}
