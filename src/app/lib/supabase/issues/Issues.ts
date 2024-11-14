import { Issue } from "@/types/issues"
import { createClient } from "@/utils/supabase/server"

export const getIssues = async () => {
    const supabaseClient = await createClient()

    const { data, error } = await supabaseClient
    .from("issues")
    .select()
    .eq("user_id", (await supabaseClient.auth.getUser()).data.user?.id)
    .returns<Issue[]>()

    if(error) {
        console.log(error)
        return []
    }

    return data
}