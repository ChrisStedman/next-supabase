import Link from "next/link";
import { IconLogo } from "./components/icons/Logo";

const links = [
    {label: "Articles", href: '/articles'},
    {label: "Demo", href: '/demo'}
]

export default function NavBar() {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
        <Link href="/"><IconLogo className="h-14" /></Link>
        <ul className="flex space-x-6">
            {links.map(link => 
                <Link 
                key={link.href} 
                className='text-zinc-500 hover:text-zinc-800 transition-colors' 
                href={link.href}>{link.label}</Link>
            )}
        </ul>
    </nav>
  )
}