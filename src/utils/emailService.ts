import type { ContactForm } from '@/types/_types';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL + '/api/send-email';

export async function sendEmail(emailData: ContactForm) {
    try {
        const response = await axios.post(apiUrl, emailData, {
            headers: { 'Content-Type': 'application/json' },
        });
        return response;
    } catch (error) {
        console.error('❌ Request error:', error);
        throw error;
    }
}
