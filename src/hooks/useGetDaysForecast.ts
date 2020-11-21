import { useEffect, useState } from 'react'
import config from '../config'

/* Types */
interface Location {
  lat: number | null
  lon: number | null
}

function useGetDaysForecast({ lat, lon }: Location) {
  const API_KEY = config.API_KEY
  const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${3}&appid=${API_KEY}`
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | Error>(null)

  useEffect(() => {
    if (lat && lon) {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    }
  }, [lat, lon])

  return { data, error, loading }
}

export default useGetDaysForecast
