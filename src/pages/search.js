import { Autocomplete, BackButton } from '@/ui/components'

export default function Home () {
  return (
    <div style={{ width: '100%' }}>
      <BackButton route='/' />
      <Autocomplete />
    </div>
  )
}
