import { Article } from "@/types/articles"
import { createClient } from "@/utils/supabase/client"
import { useState } from "react"


export const useArticles = () => {
    const [articles, setArticles] = useState<Article[]>([])

    const getArticles = async () => {
        const {data, error} = await createClient()
        .from("articles")
        .select();

        if (data) {
            setArticles(data)
        }

        if(error) {
            console.log(error)
        }
    }

    return {
        articles, 
        getArticles
    }
}