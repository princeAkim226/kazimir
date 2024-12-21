import { Card } from '@/app/components/ui/Card'
import Link from 'next/link'
import { WifiIcon, UsersIcon, TicketIcon, DollarSignIcon } from 'lucide-react'

export default function WifiPage() {
  const sections = [
    {
      title: 'Mes Cyber',
      description: 'Gérez vos points d\'accès WiFi',
      icon: WifiIcon,
      href: '/dashboard/wifi/cyber',
      stats: '12 cyber actifs',
      color: 'blue'
    },
    {
      title: 'Groupes',
      description: 'Gérez vos groupes d\'utilisateurs',
      icon: UsersIcon,
      href: '/dashboard/wifi/groups',
      stats: '4 groupes',
      color: 'green'
    },
    {
      title: 'Tickets',
      description: 'Gérez vos tickets WiFi',
      icon: TicketIcon,
      href: '/dashboard/wifi/tickets',
      stats: '245 tickets vendus',
      color: 'purple'
    },
    {
      title: 'Revenus',
      description: 'Suivez vos revenus',
      icon: DollarSignIcon,
      href: '/dashboard/wifi/revenue',
      stats: '15,789 FCFA',
      color: 'amber'
    },
  ]

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-3xl font-bold text-primary">
        Gestion WiFi
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {sections.map((section) => (
          <div key={section.title}>
            <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gradient-to-br from-transparent to-${section.color}-500/5`}>
              <Link href={section.href} className="block p-6">
                <div className="flex items-center gap-4 group">
                  <div className={`p-4 rounded-xl bg-${section.color}-500/10 transition-all duration-300 group-hover:bg-${section.color}-500/20 group-hover:rotate-3`}>
                    <section.icon className={`h-7 w-7 text-${section.color}-500 transition-all duration-300 group-hover:scale-110`} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold transition-all duration-300 group-hover:translate-x-1">
                      {section.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {section.description}
                    </p>
                    <p className={`text-sm font-medium text-${section.color}-500 transition-all duration-300 group-hover:translate-x-1`}>
                      {section.stats}
                    </p>
                  </div>
                </div>
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
} 