import { cloneElement } from 'react'
import Cloud from '../icons/wi-cloud.svg'
import Cloudy from '../icons/wi-cloudy.svg'
import DayCloudy from '../icons/wi-day-cloudy.svg'
import DayFog from '../icons/wi-day-fog.svg'
import DayRain from '../icons/wi-day-rain.svg'
import DayShowers from '../icons/wi-day-showers.svg'
import DaySnow from '../icons/wi-day-snow.svg'
import DaySunny from '../icons/wi-day-sunny.svg'
import DayThunderstorm from '../icons/wi-day-thunderstorm.svg'
import NightCloudy from '../icons/wi-night-alt-cloudy.svg'
import NightClear from '../icons/wi-night-clear.svg'
import NightFog from '../icons/wi-night-fog.svg'
import NightSnow from '../icons/wi-night-snow.svg'
import NightRain from '../icons/wi-night-rain.svg'
import NightShowers from '../icons/wi-night-showers.svg'
import NightThunderstorm from '../icons/wi-night-thunderstorm.svg'

const Icons = {
  '01d': <DaySunny />,
  '02d': <DayCloudy />,
  '03d': <Cloud />,
  '04d': <Cloudy />,
  '09d': <DayShowers />,
  '10d': <DayRain />,
  '11d': <DayThunderstorm />,
  '13d': <DaySnow />,
  '50d': <DayFog />,

  '01n': <NightClear />,
  '02n': <NightCloudy />,
  '03n': <Cloud />,
  '04n': <Cloudy />,
  '09n': <NightShowers />,
  '10n': <NightRain />,
  '11n': <NightThunderstorm />,
  '13n': <NightSnow />,
  '50n': <NightFog />
}

export function WeatherIcon (props) {
  const { code } = props
  return cloneElement(Icons[code], { ...props })
}
