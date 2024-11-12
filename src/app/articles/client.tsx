'use client';

import { Article } from "@/types/articles";
import { createClient } from "@/utils/supabase/client";
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import ArticleItem from "../components/ArticleItem";

const ClientArticles = (
    {
        serverArticles
    }: 
    {
        serverArticles: Article[]
    }) => {
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
              <ArticleItem key={article.id} article={article} liked={article.likes?.[0]}/>
          )})}
        </>
      );
}

export default ClientArticles