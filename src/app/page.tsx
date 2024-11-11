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
      setData(data)
    }

  }

  useEffect(() => {
    setNewView();
  }, []);

  return (    
    <div className='w-auto m-5'>
      <ul className="flex">
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="/articles">Articles</a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="">Link</a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="/chat">Chatbot</a>
        </li>
        <li className="mr-6">
          <p className="text-blue-500 hover:text-blue-800" onClick={logout}>Logout</p>
        </li>
      </ul>
      <div>You are logged in</div>
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
