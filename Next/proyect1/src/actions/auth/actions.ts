'use server'

import { SignupFormSchema, FormState } from "@/lib/definitions";
import { createSession, deleteSession } from "@/lib/session";

import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';
import { FormValues } from "@/schema";

    export async function signup( formData: FormValues) {
    const validatedFields = SignupFormSchema.safeParse(formData)
    console.log('validatedFields', validatedFields)

    if(!validatedFields.success) {
        return{
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    const {name, email, password} = validatedFields.data
    console.log('name', name)
    const userId = uuidv4()
    const hashedPassword = await hash(password, 10)

    await createSession(name)

    redirect('/profile')
}

export async function logout() {
    await deleteSession()
    redirect('/')
  }