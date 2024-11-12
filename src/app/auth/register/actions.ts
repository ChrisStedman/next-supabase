'use server';

import { createClient } from "@/utils/supabase/server"
import { AuthFormSchema, FormState } from "../authForm"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const register = async (state: FormState, formData: FormData) => {
    const validatedFields = AuthFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
      })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const client = await createClient();

    const { data } = await client
    .auth
    .signUp({
        email: String(formData.get('email')),
        password: String(formData.get('password'))
    })

    if (data.user) {
        revalidatePath('/', 'layout')
        redirect('/')
    }

    console.log("registered user", data)
    
}