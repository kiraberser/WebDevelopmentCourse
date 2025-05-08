'use server'

import { SignupFormSchema, FormState } from "@/lib/definitions";
import { createSession, deleteSession } from "@/lib/session";

import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';

export async function signup(state: FormState, formData: FormData) {
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if(!validatedFields.success) {
        return{
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    const {name, email, password} = validatedFields.data
    const userId = uuidv4()
    const hashedPassword = await hash(password, 10)

    await createSession(name)

    redirect('/profile')
}

export async function logout() {
    await deleteSession()
    redirect('/')
  }