import { z } from "zod";

export const schema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Email is required' }),
    phone: z
        .string()
        .min(10, { message: "Phone number must have at least 10 digits" })
        .regex(/^\d+$/, { message: "Phone number must contain only numbers" })
        .optional(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z.string().min(8, { message: 'Password must be 8 characters long' }),
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas son invalidas",
    path: ['confirmPassword']
})

export type FormValues = z.infer<typeof schema>;