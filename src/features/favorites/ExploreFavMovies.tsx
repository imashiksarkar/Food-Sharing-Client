import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import FavService from '@/features/favorites/FavService'
import { Helmet } from 'react-helmet'
import { Link, useLoaderData } from 'react-router'

const ExploreFavMovies = () => {
  const { movies } = useLoaderData() as Awaited<
    ReturnType<typeof FavService.getFavMovie>
  >

  return (
    <section className='explore-movies'>
      <Helmet>
        <title>CV | Explore Movies </title>
      </Helmet>
      <div className='con'>
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
          {movies.length === 0 && <h2>No Favorite Movies Found</h2>}
          {movies.map((movie) => (
            <Card key={movie._id} className='text-wrap p-2'>
              <CardHeader className='space-y-0 p-0'>
                <figure className='aspect-video bg-red-300 overflow-hidden'>
                  <img
                    className='w-full h-full object-cover'
                    src={movie.poster}
                    alt={movie.title}
                  />
                </figure>
                <CardTitle className='py-5'>{movie.title}</CardTitle>
                <CardDescription>{movie.summery}</CardDescription>
              </CardHeader>
              <CardContent className='p-0 flex flex-col gap-2'>
                <p>Releasing Year: {movie.releasingYear || 'Unknown'}</p>
                <p className='capitalize'>Genre: {movie.genre}</p>
                <p className='capitalize'>Duration: {movie.duration} mins</p>
                <p>Rating: {movie.rating}</p>
              </CardContent>
              <CardFooter className='p-0 mt-5'>
                <Button>
                  <Link to={`/movies/${movie._id}`}>See Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExploreFavMovies
