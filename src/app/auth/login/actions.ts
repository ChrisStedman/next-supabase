'use server';

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function login(email: string, password: string) {
    const client = await createClient();

    const { data } = await client
    .auth
    .signInWithPassword({
        email,
        password
    })

    if (data.user) {
        revalidatePath('/', 'layout')
        redirect('/')
    }
}