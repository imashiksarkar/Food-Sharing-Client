import Login from '@/features/auth/Login'
import Signup from '@/features/auth/Signup'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import NotFound from '@/pages/NotFound'
import { createBrowserRouter, Navigate } from 'react-router'
import RequireAuth from './RequireAuth'
import ExploreFoods from '@/features/foods/ExploreFoods'
import Dashboard from '@/features/dashboard/Dashboard'
import AddFood from '@/features/dashboard/AddFood'

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
            <Dashboard />
          </RequireAuth>
        ),
        loader: async () => {
          document.title = 'CV | Dashboard'
          return null
        },
        children: [
          {
            index: true,
            element: <Navigate to={'/dashboard/foods'} />,
          },
          {
            path: 'foods',
            element: <ExploreFoods />,
          },
          {
            path: 'foods/new',
            element: <AddFood />,
          },
        ],
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
