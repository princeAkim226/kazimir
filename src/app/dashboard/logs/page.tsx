import { Card } from '@/app/components/ui/Card'

export default function LogsPage() {
  const logs = [
    {
      id: 1,
      action: 'Création de ticket',
      user: 'John Doe',
      timestamp: '2024-02-20 14:30',
      details: 'Ticket #12345 créé pour Cyber A',
      status: 'success',
    },
    {
      id: 2,
      action: 'Connexion',
      user: 'Jane Smith',
      timestamp: '2024-02-20 14:25',
      details: 'Connexion réussie',
      status: 'success',
    },
    // Ajoutez plus de logs ici
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Logs du système</h1>

      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Utilisateur
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Détails
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Statut
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {logs.map((log) => (
                <tr key={log.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {log.action}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {log.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {log.timestamp}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {log.details}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      log.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {log.status}
                    </span>
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