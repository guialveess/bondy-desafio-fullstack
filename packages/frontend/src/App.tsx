import { useState } from 'react'
import LoginPage from './pages/LoginPage.tsx'
import WelcomePage from './pages/WelcomePage.tsx'

export type User = {
  _id: string
  name?: string
  email: string
  company?: string
  createdAt?: string
  updatedAt?: string
}

function App() {
  const [user, setUser] = useState<User | null>(null)

  if (!user) {
    return <LoginPage onSuccess={setUser} />
  }

  return <WelcomePage user={user} onLogout={() => setUser(null)} />
}

export default App
