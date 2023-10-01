import { useRouter } from 'next/router'
import BackArrowSvg from '../icons/arrow_back.svg'
import colours from '@/styles/colours'

export function BackButton (props) {
  const { route } = props
  const router = useRouter()

  return (
    <BackArrowSvg
      fill={colours.main}
      width='26'
      height='26'
      className='point'
      onClick={() => {
        router.push(route)
      }}
    />
  )
}
