export const API_URL = 'http://34.89.184.248/api'

const url = (route: string) => `${API_URL}${route}`

export const login = (body: { email: string, password: string }) => fetch(url('/account/login'), {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
}).then((res) => {
  if (!res.ok) throw new Error('Login fetch error')
  return res.json()
})