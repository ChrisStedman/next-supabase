'use client'

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Views } from '@/types/views';
import Button from './components/Button';
import { useRouter } from 'next/navigation';


export default function Home() {
  const [data, setData] = useState<Views[]>([]);
  const router = useRouter();
  const supabaseClient = createClient();

  const logout = async () => {
    await supabaseClient
    .auth
    .signOut();

    router.refresh()
  }

  const setNewView = async () => {
    const {data, error } = await supabaseClient
    .from("views")
    .select()

    if(error) {
      console.log(error);
    }

    if(data) {
      console.log(data)
      setData(data)
    }

  }

  useEffect(() => {
    setNewView();
  }, []);

  return (
    <div className='w-auto m-5'>
      <div>You are logged in</div>
      <Button title="View articles" onClick={() => router.push("/articles")} className='w-1/5 m-2'/>

      <div className='w-full justify-items-end' >
      <Button title='Logout' onClick={logout} className='w-1/5 ' />
      </div>
      <div className='w-full flex'>
      {data && data.map((view) => {
        return (
          <div key={view.id} className='w-4/12 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm/6 m-2'>
            <p>Created At: {view.created_at}</p>
            <p>Name: {view.name}</p>
          </div>

      )})}
      </div>
    </div>
  );
}
