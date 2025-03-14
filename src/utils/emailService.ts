import axios from 'axios'
const apiUrl = `${import.meta.env.VITE_APP_API_URL}/send-email`

export const sendEmail = async (emailData: any) => {
  try {
    const response = await axios.post(apiUrl, emailData)
    return response
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}
