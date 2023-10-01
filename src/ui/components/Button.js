export function Button (props) {
  const { onClick } = props

  return (
    <div
      className='btn'
      onClick={onClick}
    >
      {props.children}
    </div>
  )
}
