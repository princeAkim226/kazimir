'use client'

import { useState } from 'react'
import { Card } from '@/app/components/ui/Card'
import { Button } from '@/app/components/ui/Button'
import { PlusIcon, WifiIcon } from 'lucide-react'

export default function CyberPage() {
  const [cybers] = useState([
    {
      id: 1,
      name: 'Cyber A',
      location: 'Douala, Akwa',
      status: 'active',
      connectedUsers: 15,
      bandwidth: '100 Mbps',
    },
    {
      id: 2,
      name: 'Cyber B',
      location: 'Yaoundé, Centre',
      status: 'inactive',
      connectedUsers: 0,
      bandwidth: '50 Mbps',
    },
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Mes Cyber</h1>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          Nouveau Cyber
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cybers.map((cyber) => (
          <Card key={cyber.id} className="relative">
            <div className="absolute top-4 right-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                cyber.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {cyber.status === 'active' ? 'Actif' : 'Inactif'}
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <WifiIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-medium">{cyber.name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cyber.location}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Utilisateurs connectés</span>
                  <span className="font-medium">{cyber.connectedUsers}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Bande passante</span>
                  <span className="font-medium">{cyber.bandwidth}</span>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button variant="outline" className="flex-1">Configurer</Button>
                <Button variant="outline" className="flex-1">Statistiques</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 