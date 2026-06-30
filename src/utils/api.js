
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': import.meta.env.VITE_MY_API_KEY, 
    },
})

export default api