import ExpandMoreSvg from '@/ui/icons/expand_more.svg'

export function ExpandIcon (props) {
  const { inputRef, showResults } = props

  return (
    <div
      className={`flex-center point chevron ${showResults ? 'chevron-rotate' : ''}`}
      style={{
        position: 'absolute',
        zIndex: 5,
        right: 0,
        top: 3
      }}
      onClick={(e) => {
        e.preventDefault()
        if (showResults) {
          inputRef.current.blur()
        } else {
          inputRef.current.focus()
        }
      }}
    >
      <ExpandMoreSvg fill='white' />
    </div>
  )
}
