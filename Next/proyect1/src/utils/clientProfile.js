// src/utils/clientProfile.ts
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_USER_URL;

export async function getProfileClient() {
    try {
        const response = await axios.get(`${API_URL}/detail-user/`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener perfil del usuario:', error);
        return null;
    }
}