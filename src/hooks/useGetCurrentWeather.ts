import { useEffect, useState } from 'react'
import config from '../config'

interface Location {
  lat: number | null
  lon: number | null
}

function useGetCurrentWeather() {
  const [location, setLocation] = useState<Location>({
    lat: 4.6,
    lon: -74
  })

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${config.API_KEY}&units=metric`
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | Error>(null)

  useEffect(() => {
    const success: PositionCallback = ({ coords }) => {
      setLocation({
        lat: coords.latitude,
        lon: coords.longitude
      })
    }

    const error: PositionErrorCallback = (err) => {
      console.error(err)
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(success, error)
    }
  }, [location.lat, location.lon])

  useEffect(() => {
    if (location.lon && location.lat) {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
        })
        .catch((err) => {
          setError(err)
          setLocation({
            lat: 4.6,
            lon: -74
          })
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
  }, [URL])

  return { data, loading, error }
}

export default useGetCurrentWeather
