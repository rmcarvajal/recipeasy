import { createContext, useContext, useState, useEffect } from "react"
import { auth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import type { User } from 'firebase/auth';

type AuthContextType= {
    user: User | null;
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)