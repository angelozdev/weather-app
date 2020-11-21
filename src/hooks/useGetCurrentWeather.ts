import { useEffect, useState } from 'react'
import config from '../config'

interface Location {
  lat: number | null
  lon: number | null
}

function useGetCurrentWeather({ lon, lat }: Location) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.API_KEY}&units=metric`
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | Error>(null)

  useEffect(() => {
    if (lon && lat) {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
        })
        .catch((err) => {
          setError(err)
        })
        .finally(() => {
          setLoading(false)
        })

      /* const request = new XMLHttpRequest()
      request.onreadystatechange = () => {
        console.log(request.readyState)
      }
      request.open('GET', URL, true)
      request.send(null) */
    }
  }, [lon, lat])

  return { data, loading, error }
}

export default useGetCurrentWeather
