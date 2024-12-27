import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthProvider'
import { isFavorite } from '@/lib/manageFav'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLoaderData, useNavigate } from 'react-router'
import FavService from '../dashboard/DashboardService'
import MovieService from './FoodService'

const MovieDetail = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [isFavoriteMovie, setIsFavoriteMovie] = useState(false)
  const movie = useLoaderData() as Awaited<
    ReturnType<typeof MovieService.getMovie>
  >

  useEffect(() => {
    setIsFavoriteMovie(isFavorite(movie?._id || ''))
  }, [movie])

  if (!movie)
    return (
      <div className='con h-screen w-full flex justify-center items-center'>
        Movie Not Found
      </div>
    )

  return (
    <section className='movie-detail'>
      <Helmet>
        <title>CV | {movie.title || 'Movie Details'} </title>
      </Helmet>
      <div className='con pt-12 grid gird-cols-1 sm:grid-cols-[2fr,_3fr] gap-4'>
        <div className='banner'>
          <figure className='w-full aspect-square overflow-hidden'>
            <img
              className='w-full h-full object-cover'
              src={movie.poster}
              alt={movie.title}
            />
          </figure>
        </div>
        <div className='details flex flex-col gap-4'>
          <h1 className='text-4xl font-bold'>{movie.title}</h1>
          <p>{movie.summery}</p>
          <p>Movie Durations: {movie.duration} Mins</p>
          <p>Releasing Year: {movie.releasingYear}</p>
          <p className='capitalize'>Genre: {movie.genre}</p>
          <p>Rating: {movie.rating}</p>
          <p className='text-red-500'>
            {movie.netflixOriginal && 'Netflix Original'}
          </p>
          <Button
            className='mt-4 w-max'
            variant='secondary'
            onClick={async () => {
              if (isFavoriteMovie) await FavService.deleteFromFav(movie._id)
              else await FavService.addToFav(movie._id)

              setIsFavoriteMovie(!isFavoriteMovie)
            }}
          >
            {isFavoriteMovie ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
          <div className='flex items-center gap-4'>
            {user?.email === movie?.createdBy && (
              <>
                <Button className='w-max'>
                  <Link to={`/movies/${movie._id}/edit`}>Update Movie</Link>
                </Button>
                <Button
                  onClick={() => {
                    MovieService.deleteMovie(movie._id).then(() =>
                      navigate('/movies')
                    )
                  }}
                  className='w-max'
                >
                  Delete Movie
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieDetail
