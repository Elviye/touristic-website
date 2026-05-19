import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import type { WeatherData } from '../types'

const fallback: Record<string, WeatherData> = {
  Marrakech: { city: 'Marrakech', temperature: 27, description: 'Clear sky', humidity: 31, windSpeed: 3.4, icon: '01d' },
  Essaouira: { city: 'Essaouira', temperature: 21, description: 'Atlantic breeze', humidity: 68, windSpeed: 8.2, icon: '02d' },
  Safi: { city: 'Safi', temperature: 23, description: 'Mild coast', humidity: 62, windSpeed: 5.1, icon: '03d' },
}

export function useWeather(city: string) {
  const [weather, setWeather] = useState<WeatherData | null>(fallback[city] ?? null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchWeather() {
      setIsLoading(true)
      setError(null)
      try {
        const result = await api.weather(city)
        if (!controller.signal.aborted) setWeather(result)
      } catch {
        if (!controller.signal.aborted) setError('Live weather unavailable. Showing regional estimate.')
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }

    fetchWeather()
    const timer = window.setInterval(fetchWeather, 30 * 60 * 1000)

    return () => {
      controller.abort()
      window.clearInterval(timer)
    }
  }, [city])

  return { weather, isLoading, error }
}
