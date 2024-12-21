'use client'

import { useState } from 'react'
import { Card } from '@/app/components/ui/Card'
import { Button } from '@/app/components/ui/Button'
import { Input } from '@/app/components/ui/Input'
import { PlusIcon, FilterIcon, DownloadIcon } from 'lucide-react'

export default function TicketsPage() {
  const [tickets] = useState([
    {
      id: 'TK-001',
      code: 'WIFI-2024-001',
      duration: '1 heure',
      price: '500 FCFA',
      status: 'unused',
      createdAt: '2024-02-20',
      cyber: 'Cyber A',
    },
    {
      id: 'TK-002',
      code: 'WIFI-2024-002',
      duration: '24 heures',
      price: '2000 FCFA',
      status: 'used',
      createdAt: '2024-02-19',
      cyber: 'Cyber B',
    },
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Tickets WiFi</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <FilterIcon className="h-4 w-4 mr-2" />
            Filtrer
          </Button>
          <Button variant="outline">
            <DownloadIcon className="h-4 w-4 mr-2" />
            Exporter
          </Button>
          <Button>
            <PlusIcon className="h-4 w-4 mr-2" />
            Générer des tickets
          </Button>
        </div>
      </div>

      <Card>
        <div className="p-4">
          <Input
            placeholder="Rechercher un ticket..."
            className="max-w-sm"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Durée
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Prix
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Cyber
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date de création
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {ticket.code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {ticket.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {ticket.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      ticket.status === 'unused' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {ticket.status === 'unused' ? 'Non utilisé' : 'Utilisé'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {ticket.cyber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {ticket.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Button variant="outline" size="sm">
                      Détails
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
} 