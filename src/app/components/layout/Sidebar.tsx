'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { 
  HomeIcon, 
  UserIcon, 
  WifiIcon, 
  ClipboardIcon, 
  LogOutIcon 
} from 'lucide-react'

interface SidebarProps {
  isMobile?: boolean
  onMobileNavClose?: () => void
}

export default function Sidebar({ isMobile = false, onMobileNavClose }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()

  const navigation = [
    { name: 'Accueil', href: '/dashboard', icon: HomeIcon },
    { name: 'Mon Profil', href: '/dashboard/profile', icon: UserIcon },
    { name: 'Wifi', href: '/dashboard/wifi', icon: WifiIcon },
    { name: 'Logs', href: '/dashboard/logs', icon: ClipboardIcon },
  ]

  return (
    <div className={`${!isMobile ? 'hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col' : 'w-full'}`}>
      <div className="flex flex-col flex-grow border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 pt-5">
        <div className="flex items-center flex-shrink-0 px-4">
          <h1 className="text-xl font-bold">KAZIMIR TECH</h1>
        </div>
        <nav className="mt-8 flex-1 space-y-1 px-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onMobileNavClose}
              className={`sidebar-link ${
                pathname === item.href ? 'active' : ''
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-800 p-4">
          <button 
            onClick={() => router.push('/login')}
            className="sidebar-link w-full text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <LogOutIcon className="h-5 w-5" />
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  )
} 