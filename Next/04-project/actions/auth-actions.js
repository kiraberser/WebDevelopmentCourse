'use server'

import { hashUserPassword, verifyPassword } from "@/lib/hash"
import { createUser, getUserByEmail } from "@/lib/user"
import { createAuthSession, destroyAuthSession } from "@/lib/auth"

import { redirect } from 'next/navigation'

export const signUp = async (prevState, formData) => {
    const email = formData.get('email')
    const password = formData.get('password')

    let errors = {}

    if (!email.includes('@')) {
        errors.email = 'Email must contain @'
    }

    if (password.trim().length < 8) {
        errors.password = 'Password must contain more than 8 characters'
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors,
        }
    }

    const hashedPassword = hashUserPassword(password)
    try {
        const id = createUser(email, hashedPassword)
        await createAuthSession(id)
        redirect('/training')
    } catch (error) {
        if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            return {
                errors: {
                    email: 'Email already exists'
                }
            }
        }
        throw error
    }
}

export const login = async (prevState, formData) => {
    const email = formData.get('email')
    const password = formData.get('password')

    const user = getUserByEmail(email)

    let errors = {}
    if (!user) {
        return {
            errors: {
                email: 'Could not autheticate user, please check your credentials.'
            }
        }
    }

    const isValidPassword = verifyPassword(user.password, password)

    if (!isValidPassword) {
        return {
            errors: {
                password: 'Could not authenticate user, please check your credentials.'
            }
        }
    }

    await createAuthSession(user.id)
    redirect('/training')
}

export const auth = async (mode, prevState, formData) => {
    if (mode === 'login') {
        return await login(prevState, formData);
    }
    return signUp(prevState, formData);
}


export const logout = async () => {
    await destroyAuthSession()
    redirect('/')
}