'use client'

import { useEffect } from 'react'
import { XIcon } from 'lucide-react'
import Sidebar from './Sidebar'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-gray-900/80" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white dark:bg-gray-800">
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="flex items-center justify-end px-4 py-4">
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <Sidebar isMobile={true} onMobileNavClose={onClose} />
        </div>
      </div>
    </div>
  )
} 