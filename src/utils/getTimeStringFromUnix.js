export function getTimeStringFromUnix (timezone, timestamp) {
  const time = new Date((timezone + timestamp) * 1000).toISOString().split('T')[1].split('.')[0]
  const splitCityTime = time.split(':')

  return `${splitCityTime[0]}:${splitCityTime[1]}`
}
