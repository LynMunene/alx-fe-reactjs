import React from 'react'
import { Navigate } from 'react-router-dom'

// Create a simple authentication context/hook simulation
const useAuth = () => {
  
  return {
    isAuthenticated: false 
  }
}

const ProtectedRoute = ({ children, isAuthenticated }) => {

  const auth = useAuth()
  
  const authenticated = isAuthenticated !== undefined ? isAuthenticated : auth.isAuthenticated

  if (!authenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute