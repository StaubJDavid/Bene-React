import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BackButton, InfoText, TimeFromTimezone, WeatherIcon } from '@/ui/components'
import { useSelector } from 'react-redux'
import axios from 'axios'
import ThermometerSvg from '../ui/icons/wi-thermometer.svg'
import SunriseSvg from '../ui/icons/wi-sunrise.svg'
import SunsetSvg from '../ui/icons/wi-sunset.svg'
import colours from '@/styles/colours'
import { getTimeStringFromUnix } from '@/utils/getTimeStringFromUnix'

export default function Capital () {
  const capitals = useSelector(state => state.weather.capitals)
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getCapitalWeather (capital) {
      try {
        const weatherResult = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=56628465c0d08198a075d6349a760f6b&units=metric`)

        setData(weatherResult.data)
        setLoading(false)
      } catch (error) {
        router.push('/')
      }
    }

    if (capitals.length > 0 && router.query.capital) {
      const capitalString = router.query.capital.toLowerCase()

      const foundCapital = capitals.findIndex(capital => capital.toLowerCase() === capitalString)

      if (foundCapital === -1) {
        router.push('/')
      } else {
        getCapitalWeather(capitals[foundCapital])
      }
    }
  }, [router, capitals])

  if (loading) {
    return (
      <div className='flex-center' style={{ width: '100%' }}>
        <div className='loader' />
      </div>
    )
  }

  return (
    <div style={{ width: '100%' }}>
      <BackButton route='/' />
      <div className='flex-center' style={{ marginTop: '32px', flexDirection: 'column' }}>
        <TimeFromTimezone timezone={data.timezone} />
        <div
          style={{
            fontSize: '24px',
            color: colours.secondary,
            fontWeight: 'bold'
          }}
        >
          {data.name}
        </div>
        <WeatherIcon
          code={data.weather[0].icon}
          fill={colours.pastelBlue}
          width={128}
          height={128}
        />
        <div
          style={{
            fontSize: '12px',
            color: colours.secondary,
            margin: '8px 0px'
          }}
        >
          {data.weather[0].description}
        </div>
        <InfoText
          Icon={(props) => <ThermometerSvg {...props} />}
          text={`${Math.round(data.main.temp)} °C`}
        />
        <InfoText
          Icon={(props) => <SunriseSvg {...props} />}
          text={getTimeStringFromUnix(data.timezone, data.sys.sunrise)}
        />
        <InfoText
          Icon={(props) => <SunsetSvg {...props} />}
          text={getTimeStringFromUnix(data.timezone, data.sys.sunset)}
        />
      </div>

    </div>
  )
}
