'use client'

//import { cookies } from "next/headers"
// import { logout } from "@/actions/auth"
import axios from "axios"
import {useEffect, useState} from "react"
import { logout } from "@/actions/auth/actions"
import { redirect } from "next/navigation"
import { getProfileClient } from "@/utils/clientProfile"

const ProfilePage = () => {
    const [userName, setUserName] = useState('')

    const logoutAction = async () => {
        await logout()
        redirect('/')
    }

    useEffect(() => {
        try {
          const getUserName = async () => {
            const response = await getProfileClient();
            setUserName(response.username)
          }
          getUserName();
        } catch (error) {
          console.error('Error al obtener el nombre de usuario:', error)
        }
      }, []);
    return (
        <div className="h-screen mt-20">
            <h1 className="text-2xl font-bold">Perfil</h1>
            <p className="">
                {userName ? `ID de Usuario: ${userName}` : 'No has iniciado sesión'}
            </p>
            <button className="btn btn-secondary" onClick={logoutAction}>Log out</button>
        </div>
    )
}

export default ProfilePage