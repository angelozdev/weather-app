import { useState, useEffect } from 'react'

/* Types */
interface Location {
  lat: number | null
  lon: number | null
}

function useLocation() {
  const [location, setLocation] = useState<Location>({
    lat: 4.6,
    lon: -74
  })

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

  return { lat: location.lat, lon: location.lon }
}

export default useLocation
