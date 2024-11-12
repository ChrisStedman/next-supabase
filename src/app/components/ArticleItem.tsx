'use client';

import { Article } from "@/types/articles";
import { IconHeart } from "./icons/Heart";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { Like } from "@/types/likes";

const ArticleItem = (
  {
    article, 
    liked
  }: {
    article: Article,
    liked: Like | null
  }) => {

  const supabaseClient = createClient();
    const [like, setLike] = useState<Like | null>(liked)

    const saveLike = async () => {
      if(like) {
        await supabaseClient
        .from('likes')
        .delete()
        .eq('id', like?.id)

        setLike(null)
      } else {
        const { data } = await supabaseClient
        .from('likes')
        .insert({
          user_id : (await supabaseClient.auth.getUser()).data.user!.id,
          article_id: article.id
        })
        .select()
        .returns<Like[]>()
        
        if(data) {
          setLike(data[0])
        }
      }
    }

    return (
    <div className='w-4/12 flex-col rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm/6 m-2'>
      <div className="h-48">
        <p>Created At: {article.created_at}</p>
        <p>Title: {article.title}</p>
        <p>Content: {article.content}</p>
        <p>Author: {article.author ?? "Anonymous"}</p>
      </div>
      <div className="justify-items-end">
        <IconHeart className={`${like ? 'text-red-500' : 'text-gray-200'} cursor-pointer`} onClick={saveLike}  />
      </div>
    </div>
    )
}

export default ArticleItem;