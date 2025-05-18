import { createSession } from "@/lib/session"
import { redirect } from "next/navigation"

const getUsers = async () => {
    const response = await fetch('http://localhost:8000/api/users/list-users/')
    const data = await response.json()
    return data
}

const getUserById = async (id: string) => {
    const response = await fetch(`http://localhost:8000/api/users/detail-user/${id}`)
    const data = await response.json()
    
    return data
}

interface User {
    id?: string
    name: string
    email: string
    password: string
}
const createUser = async (user: User) => {
    const response = await fetch('http://localhost:8000/api/users/create-user/', {
        method: 'POST',
        body: JSON.stringify(user),
    })
}

export { getUsers, getUserById, createUser }



