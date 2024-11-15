'use client';

import Link from "next/link";
import { IconLogo } from "./components/icons/Logo";
import { usePathname } from "next/navigation";

const links = [
    {label: "Articles", href: '/articles'},
    {label: "Issues", href: '/issues'}
]

export default function NavBar() {
  const currentPath = usePathname()

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
        <Link href="/"><IconLogo className="h-14" /></Link>
        <ul className="flex space-x-6">
            {links.map(link => 
                <Link 
                  key={link.href} 
                  className={`${link.href === currentPath ? 'text-zic-500' : 'text-zinc-500' } hover:text-zinc-800 transition-colors`}
                  href={link.href}>{link.label}
                </Link>
            )}
        </ul>
    </nav>
  )
}