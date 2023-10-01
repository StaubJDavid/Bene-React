import colours from '@/styles/colours'

export function HourText (props) {
  return (
    <div
      style={{
        fontSize: '32px',
        color: colours.main
      }}
    >
      {props.children}
    </div>
  )
}
