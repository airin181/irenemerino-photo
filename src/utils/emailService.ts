import type { ContactForm } from '@/types/_types'
import axios from 'axios'
const apiUrl =
  import.meta.env.VITE_APP_API_URL + '/send-email' || import.meta.env.VITE_HOST + '/send-email'

export const sendEmail = async (emailData: ContactForm) => {
  try {
    const response = await axios.post(apiUrl, emailData, { withCredentials: true })
    return response
  } catch (error) {
    throw error
  }
}
