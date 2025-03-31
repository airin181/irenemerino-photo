import type { ContactForm } from '@/types/_types'
import axios from 'axios'
const apiUrl = import.meta.env.__VITE_APP_API_URL__
  ? `${import.meta.env.__VITE_APP_API_URL__}/api/send-email`
  : import.meta.env.VITE_HOST
    ? `${import.meta.env.VITE_HOST}/send-email`
    : 'paco'

export async function sendEmail(emailData: ContactForm, url = apiUrl) {
  try {
    console.log('📡 Sending request to:', apiUrl)
    const response = await axios.post(apiUrl, emailData, {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    })
    return response
  } catch (error) {
    console.error('❌ Request error:', error)
    throw error
  }
}
