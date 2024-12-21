'use client'
import { Card } from '@/app/components/ui/Card'
import { WifiIcon, UsersIcon, TicketIcon, DollarSignIcon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function DashboardPage() {
  const stats = [
    {
      name: 'Cyber actifs',
      value: '12',
      icon: WifiIcon,
      change: '+2.5%',
      changeType: 'positive',
    },
    {
      name: 'Tickets vendus',
      value: '245',
      icon: TicketIcon,
      change: '+18.3%',
      changeType: 'positive',
    },
    {
      name: 'Groupes',
      value: '4',
      icon: UsersIcon,
      change: '0%',
      changeType: 'neutral',
    },
    {
      name: 'Revenus',
      value: '15,789 FCFA',
      icon: DollarSignIcon,
      change: '+12.3%',
      changeType: 'positive',
    },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 p-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Tableau de bord
        </h1>
        <div className="flex items-center space-x-4">
          {/* Ajout de filtres ou boutons d'action si nécessaire */}
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={stat.name}
          >
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
              <div className="absolute top-4 right-4 text-blue-500">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.name}
                </p>
                <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                <p className={`mt-2 text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 
                  stat.changeType === 'negative' ? 'text-red-600' : 
                  'text-gray-600'
                }`}>
                  {stat.change}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Activité récente
          </h2>
          {/* Contenu de l'activité récente */}
        </Card>
        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Ventes de tickets
          </h2>
          {/* Contenu des ventes */}
        </Card>
      </div>
    </motion.div>
  )
} 