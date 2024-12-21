'use client'

import { MenuIcon, BellIcon } from 'lucide-react'
import { Button } from '@/app/components/ui/Button'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            type="button"
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={onMenuClick}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="p-2">
              <BellIcon className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </header>
  )
} 