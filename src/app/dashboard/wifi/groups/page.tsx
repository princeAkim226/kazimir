'use client'

import { useState } from 'react'
import { Card } from '@/app/components/ui/Card'
import { Button } from '@/app/components/ui/Button'
import { PlusIcon, UsersIcon, SettingsIcon, TrashIcon } from 'lucide-react'

export default function GroupsPage() {
  const [groups] = useState([
    {
      id: 1,
      name: 'Étudiants',
      members: 45,
      discount: '20%',
      cybers: ['Cyber A', 'Cyber B'],
      status: 'active',
    },
    {
      id: 2,
      name: 'Entreprises',
      members: 12,
      discount: '15%',
      cybers: ['Cyber A'],
      status: 'active',
    },
    {
      id: 3,
      name: 'VIP',
      members: 8,
      discount: '25%',
      cybers: ['Cyber A', 'Cyber B', 'Cyber C'],
      status: 'inactive',
    },
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Groupes d'utilisateurs</h1>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          Nouveau groupe
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <Card key={group.id}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <UsersIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{group.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {group.members} membres
                    </p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  group.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {group.status === 'active' ? 'Actif' : 'Inactif'}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Réduction</span>
                  <span className="font-medium">{group.discount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Cyber accessibles</span>
                  <span className="font-medium">{group.cybers.length}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <SettingsIcon className="h-4 w-4 mr-2" />
                  Gérer
                </Button>
                <Button variant="outline" className="flex-1 text-red-600 hover:text-red-700">
                  <TrashIcon className="h-4 w-4 mr-2" />
                  Supprimer
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 