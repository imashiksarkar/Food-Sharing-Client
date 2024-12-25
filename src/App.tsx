import { RouterProvider } from 'react-router'
import '@/styles/App.css'
import router from '@/routes'
import { ThemeProvider } from '@/contexts/ThemeProvider'
import AuthProvider from '@/contexts/AuthProvider'

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
