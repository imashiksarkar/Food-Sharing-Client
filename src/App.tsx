import { RouterProvider } from 'react-router'
import '@/styles/App.css'
import router from '@/routes'
import { ThemeProvider } from '@/contexts/ThemeProvider'
import AuthProvider from '@/contexts/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LoadIncons from './components/LoadIncons'

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient()

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <LoadIncons />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
