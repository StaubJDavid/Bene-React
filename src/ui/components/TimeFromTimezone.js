import { useEffect, useState } from 'react'
import { HourText } from './HourText'

export function TimeFromTimezone (props) {
  const { timezone } = props

  function getTime (timezone) {
    const localTime = new Date().getTime()
    const localOffset = new Date().getTimezoneOffset() * 60000
    const currentUtcTime = localOffset + localTime
    const cityOffset = currentUtcTime + 1000 * timezone
    const cityTime = new Date(cityOffset).toTimeString().split(' ')

    const splitCityTime = cityTime[0].split(':')

    return { hours: splitCityTime[0], minutes: splitCityTime[1], seconds: splitCityTime[2] }
  }

  const [time, setTime] = useState(getTime(timezone))
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    const tempTimeoutId = setTimeout(() => {
      setTime(getTime(timezone))
    }, (60 - time.seconds) * 1000)

    setTimeoutId(tempTimeoutId)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [time])

  return (
    <div>
      <HourText>
        {time.hours}
      </HourText>
      <HourText>
        {time.minutes}
      </HourText>
    </div>
  )
}
