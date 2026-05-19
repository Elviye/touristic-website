import type { BudgetInput, BudgetResult, DayPlan, PlannerInput, WeatherData } from '../types'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000/api'

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json() as Promise<T>
}

export const api = {
  weather: (city: string) => request<WeatherData>(`/weather/${encodeURIComponent(city)}`),
  calculateBudget: (input: BudgetInput) =>
    request<BudgetResult>('/budget/calculate', {
      method: 'POST',
      body: JSON.stringify(input),
    }),
  generatePlan: (input: PlannerInput) =>
    request<DayPlan[]>('/planner/generate', {
      method: 'POST',
      body: JSON.stringify(input),
    }),
  contact: (payload: { name: string; email: string; subject: string; message: string }) =>
    request<{ ok: boolean }>('/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
}
