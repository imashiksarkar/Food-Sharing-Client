import Login from '@/auth/Login'
import Signup from '@/auth/Signup'
import AddFood from '@/dashboard/AddFood'
import Dashboard from '@/dashboard/Dashboard'
import ExploreMyFoods from '@/dashboard/ExploreMyFoods'
import FoodRequest from '@/dashboard/FoodRequest'
import ExploreFoods from '@/foods/ExploreFoods'
import FoodDetail from '@/foods/FoodDetail'
import UpdateFood from '@/foods/UpdateFood'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import NotFound from '@/pages/NotFound'
import { createBrowserRouter, Navigate } from 'react-router'
import RequireAuth from './RequireAuth'

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
          document.title = 'FS | Home'
          return null
        },
      },
      {
        path: 'foods',
        children: [
          {
            index: true,
            element: <ExploreFoods />,
            loader: async () => {
              document.title = 'FS | Foods'
              return null
            },
          },
          {
            path: ':foodId',
            element: <FoodDetail />,
            loader: async () => {
              document.title = "FS | Food's Detail"
              return null
            },
          },
          {
            path: ':foodId/edit',
            element: <UpdateFood />,
            loader: async () => {
              document.title = "FS | Food's Detail"
              return null
            },
          },
        ],
      },
      {
        path: 'dashboard',
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
        children: [
          {
            index: true,
            element: <Navigate to={'/dashboard/foods'} />,
          },
          {
            path: 'foods',
            element: <ExploreMyFoods />,
            loader: async () => {
              document.title = 'FS | My Foods'
              return null
            },
          },
          {
            path: 'foods/new',
            element: <AddFood />,
            loader: () => {
              document.title = 'FS | Add Food'
              return null
            },
          },
          {
            path: 'foods/request',
            element: <FoodRequest />,
            loader: () => {
              document.title = 'FS | Food Request'
              return null
            },
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
              document.title = 'FS | Login'
              return null
            },
          },
          {
            path: 'register',
            element: <Signup />,
            loader: async () => {
              document.title = 'FS | Register'
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
