'use client'

import { useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function Home() {
  const supabaseClient = createClient();

  const setNewView = async () => {
    console.log("user",await supabaseClient.auth.getUser())
    const {data, error } = await supabaseClient
    .from("views")
    .select()

    if(error) {
      console.log(error);
    }

    if(data) {
      console.log(data);
    }

  }

  useEffect(() => {
    setNewView();
  }, []);

  return (
    <div>Home</div>
  );
}
