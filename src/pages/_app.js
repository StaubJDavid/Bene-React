import store from '@/lib/redux/store'
import { Provider, useDispatch } from 'react-redux'
import '../styles/globals.css'
import axios from 'axios'
import { useEffect } from 'react'
import { setCapitals } from '@/lib/redux/slices/weatherSlice/weatherSlice'
import Head from 'next/head'

export default function App ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>React Weather App</title>
      </Head>
      <ReduxLoader />
      <main>
        <div style={{ width: '100%' }}>
          <Component {...pageProps} />
        </div>
      </main>
    </Provider>
  )
}

function ReduxLoader (props) {
  const dispatch = useDispatch()

  useEffect(() => {
    async function getCapitals () {
      try {
        const capitals = await axios.get('https://restcountries.com/v3.1/independent?status=true&fields=capital')
        const parsedCapitals = capitals.data.map((capital) => capital.capital[0]).sort()

        dispatch(setCapitals(parsedCapitals))
      } catch (error) {
        console.log(error)
        return []
      }
    }

    getCapitals()
  }, [])

  return (<></>)
}
