import { redirect } from 'next/navigation'

export default async function Home() {
  // Vous pouvez ajouter une vérification de session ici
  // Par exemple :
  // const session = await getSession()
  // if (session) return redirect('/dashboard')
  
  return redirect('/login')
}
