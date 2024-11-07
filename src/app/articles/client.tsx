'use client';

import { Article } from "@/types/articles";
import { createClient } from "@/utils/supabase/client";
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import { useEffect, useState } from "react";


const ClientArticles = ({serverArticles}: {serverArticles: Article[]}) => {
    const supabaseClient = createClient();
    const [articles, setArticles] = useState<Article[]>(serverArticles);


    useEffect(() => {
        const channel = supabaseClient
        .channel('articles-realtime')
        .on('postgres_changes', {
          event: "INSERT",
          schema: "public",
          table: "articles"
        }, (payload: RealtimePostgresChangesPayload<Article>) => {
            console.log(payload)
            setArticles([...articles, payload.new as Article])
        })
        .subscribe();

        return () => {
            supabaseClient.removeChannel(channel)
        }
    }, [supabaseClient, articles, setArticles])

    return (
        <>
          {articles && articles.map((article) => {
            return (
              <div key={article.id} className='w-4/12 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm/6 m-2'>
                <p>Created At: {article.created_at}</p>
                <p>Title: {article.title}</p>
                <p>Content: {article.content}</p>
                <p>Author: {article.author ?? "Anonymous"}</p>
              </div>
    
          )})}
        </>
      );
}

export default ClientArticles