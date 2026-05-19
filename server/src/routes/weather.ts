import axios from 'axios'
import { Router } from 'express'

const router = Router()

const fallback: Record<string, unknown> = {
  Marrakech: { city: 'Marrakech', temperature: 27, description: 'Clear sky', humidity: 31, windSpeed: 3.4, icon: '01d' },
  Essaouira: { city: 'Essaouira', temperature: 21, description: 'Atlantic breeze', humidity: 68, windSpeed: 8.2, icon: '02d' },
  Safi: { city: 'Safi', temperature: 23, description: 'Mild coast', humidity: 62, windSpeed: 5.1, icon: '03d' },
}

router.get('/:city', async (req, res) => {
  const city = req.params.city
  const key = process.env.OPENWEATHER_API_KEY

  if (!key) {
    res.json(fallback[city] ?? fallback.Marrakech)
    return
  }

  const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: { q: `${city},MA`, units: 'metric', appid: key },
  })

  res.json({
    city,
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    windSpeed: response.data.wind.speed,
    icon: response.data.weather[0].icon,
  })
})

export default router
