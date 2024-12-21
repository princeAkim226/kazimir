'use client'

import { useState } from 'react'
import { Card } from '@/app/components/ui/Card'
import { Input } from '@/app/components/ui/Input'
import { Button } from '@/app/components/ui/Button'

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+237 6XX XXX XXX',
    company: 'WiFi Zone',
  })

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Mon Profil</h1>

      <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative group">
              <div className="h-32 w-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                <span className="text-4xl text-white">{formData.name[0]}</span>
              </div>
              <button className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold">{formData.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{formData.email}</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">{formData.company}</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Input
                label="Nom complet"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Input
                label="Téléphone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <Input
                label="Entreprise"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline">Annuler</Button>
              <Button type="submit">Sauvegarder</Button>
            </div>
          </form>
        </div>
      </Card>

      <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Sécurité
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <Input
              label="Mot de passe actuel"
              type="password"
            />
            <Input
              label="Nouveau mot de passe"
              type="password"
            />
            <Input
              label="Confirmer le mot de passe"
              type="password"
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit">Changer le mot de passe</Button>
          </div>
        </form>
      </Card>
    </div>
  )
} 