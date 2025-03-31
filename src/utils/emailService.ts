import type { ContactForm } from '@/types/_types'
import axios from 'axios'
const apiUrl = import.meta.env.VITE_APP_API_URL
  ? `${import.meta.env.VITE_APP_API_URL}/api/send-email`
  : import.meta.env.VITE_HOST
    ? `${import.meta.env.VITE_HOST}/send-email`
    : ''

export async function sendEmail(emailData: ContactForm) {
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
