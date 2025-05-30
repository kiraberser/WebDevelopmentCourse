'use server'

import axios from "axios";
import { schemaLogin } from "@/schema/form.model";
import { FormValuesSignup, FormValuesLogin } from "@/schema/form.model";
import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_USER_URL

export async function signup( formData: FormValuesSignup) {
    try {
        const {name, email, password} = formData
        const username=name.split(' ').join('').toLowerCase()
        const response = await axios.post(`${API_URL}/signup/`, { username, email, password}, {withCredentials: true})
        console.log('response', response)
        return response.data
    } catch (error) {
        console.error('Error al registrar usuario:', error)
        return { error: 'Error al registrar usuario' }
    }
}
export const login = async (formData: FormValuesLogin) => {
    const validatedFields = schemaLogin.safeParse(formData)
    if(!validatedFields.success) {
        return Promise.reject({
            type: 'validation',
            errors: validatedFields.error.flatten().fieldErrors,
        });
    }
    const {email, password} = validatedFields.data
    try {
        const response = await axios.post(`${API_URL}/login/`, 
            { email, password }, 
            { withCredentials: true});
        if (response.status === 200) {
            const cookieStore = await cookies()
            cookieStore.set('access_token', response.data.token.access_token)
            cookieStore.set('refresh_token', response.data.token.refresh_token)
            return response.status;
        } else {
            return Promise.reject({
                 type: 'server',
                error: response.data || 'Unknown server error',
            });
        }
    } catch (error: any) {
        console.error('Login error:', error.response?.data || error.message);
        return Promise.reject({
            type: 'server',
            error: error.response?.data || 'Unknown server error',
        });
    }
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('access_token')
    cookieStore.delete('refresh_token')
    const response = await axios.post(`${API_URL}/logout/`, {withCredentials: true})
    return response.data
  }

// Obtener perfil del usuario por ID

// Obtener lista de todos los usuarios
