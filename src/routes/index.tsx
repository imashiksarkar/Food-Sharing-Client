import Login from '@/features/auth/Login'
import Signup from '@/features/auth/Signup'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import NotFound from '@/pages/NotFound'
import { createBrowserRouter, Navigate } from 'react-router'
import RequireAuth from './RequireAuth'
import ExploreFoods from '@/features/foods/ExploreFoods'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: async () => {
          document.title = 'CV | Home'
          return null
        },
      },
      {
        path: 'foods',
        element: <ExploreFoods />,
        loader: async () => {
          document.title = 'CV | Home'
          return null
        },
      },
      {
        path: 'dashboard',
        element: (
          <RequireAuth>
            <h1>Dashboard</h1>
          </RequireAuth>
        ),
        loader: async () => {
          document.title = 'CV | Dashboard'
          return null
        },
      },
      {
        path: 'auth',
        children: [
          {
            index: true,
            element: <Navigate to={'/auth/login'} />,
          },
          {
            path: 'login',
            element: <Login />,
            loader: async () => {
              document.title = 'CV | Login'
              return null
            },
          },
          {
            path: 'register',
            element: <Signup />,
            loader: async () => {
              document.title = 'CV | Register'
              return null
            },
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
