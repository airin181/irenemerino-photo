import type { ContactForm } from '@/types/_types'
import axios from 'axios'
const apiUrl =
  import.meta.env.VITE_APP_API_URL + '/api' + '/send-email' ||
  import.meta.env.VITE_HOST + '/send-email'

export async function sendEmail(emailData: ContactForm) {
  try {

    const response = await axios.post(apiUrl, emailData, { withCredentials: true })
    return response
  } catch (error) {
    throw error
  }
}
