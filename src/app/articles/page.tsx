import { Article } from '@/types/articles';
import { createClient } from '@/utils/supabase/server';
import ClientArticles from './client';

export default async function Articles() {
  const supabaseClient = await createClient();

    const { data } = await supabaseClient
                .from("articles")
                .select('*, likes(*)', )
                .eq("likes.user_id", (await supabaseClient.auth.getUser()).data.user?.id)
                .returns<Article[]>()

                
  return (
    <div className='w-auto m-5'>
        <div className='w-auto flex flex-wrap flex-row'>
            <ClientArticles serverArticles={data ?? []} />
        </div>
    </div>
  );
}
