import { useAuth } from '@/contexts/AuthProvider'
import { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router'

const RequireAuth = ({ children }: PropsWithChildren) => {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) return <Navigate state={{ from: location }} to={'/auth/login'} />

  return children
}

export default RequireAuth
