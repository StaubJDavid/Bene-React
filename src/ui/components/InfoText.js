import colours from '@/styles/colours'

export function InfoText (props) {
  const { Icon, text, width = 32, height = 32 } = props

  return (
    <div
      style={{
        color: colours.pastelBlue,
        marginTop: '8px',
        width: '90px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <Icon fill={colours.darkBlue} width={width} height={height} />
      </div>
      <span>
        {text}
      </span>
    </div>
  )
}
