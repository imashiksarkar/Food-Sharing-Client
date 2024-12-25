import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import NotFound from '@/pages/NotFound'
import { createBrowserRouter } from 'react-router'

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
          // try {
          //   const featured = await MovieService.getFeaturedMovies()
          //   const originals = await MovieService.getNetflixOriginalMovies()

          //   return { featured, originals }
          // } catch (error) {
          //   console.log(error)
          // }
        },
      },
      // {
      //   path: 'movies',
      //   children: [
      //     {
      //       index: true,
      //       loader: async ({ request }) => {
      //         const pageNum = parseInt(
      //           new URL(request.url).searchParams.get('page') || '1'
      //         )

      //         try {
      //           return await MovieService.getMovies(pageNum)
      //         } catch (error) {
      //           console.log(error)
      //           return []
      //         }
      //       },
      //       element: <ExploreMovies />,
      //     },
      //     {
      //       path: 'add',
      //       element: (
      //         <RequireAuth>
      //           <AddMovie />
      //         </RequireAuth>
      //       ),
      //     },
      //     {
      //       path: 'trending',
      //       element: <TrendingMovies />,
      //     },
      //     {
      //       path: ':id',
      //       children: [
      //         {
      //           index: true,
      //           element: <MovieDetail />,
      //           loader: async ({ params }) => {
      //             try {
      //               return await MovieService.getMovie(params.id as string)
      //             } catch (error) {
      //               console.log(error)
      //             }
      //           },
      //         },
      //         {
      //           path: 'edit',
      //           element: (
      //             <RequireAuth>
      //               <EditMovie />
      //             </RequireAuth>
      //           ),
      //           loader: async ({ params }) => {
      //             try {
      //               return await MovieService.getMovie(params.id as string)
      //             } catch (error) {
      //               console.log(error)
      //             }
      //           },
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   path: 'favorites',
      //   element: (
      //     <RequireAuth>
      //       <ExploreFavMovies />
      //     </RequireAuth>
      //   ),
      //   loader: async () => {
      //     try {
      //       return await FavService.getFavMovie()
      //     } catch (error) {
      //       console.log(error)
      //     }
      //   },
      // },
      // {
      //   path: 'auth',
      //   children: [
      //     {
      //       index: true,
      //       element: <Navigate to={'/auth/login'} />,
      //     },
      //     {
      //       path: 'login',
      //       element: <Login />,
      //     },
      //     {
      //       path: 'register',
      //       element: <Signup />,
      //     },
      //   ],
      // },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
