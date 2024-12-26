import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router'

const movies = [
  {
    _id: '675769c2e3d20a15c1a4b2a3',
    title: 'Interstellar',
    poster: 'https://m.media-amazon.com/images/I/716P1xCmnPL.jpg',
    genre: 'action',
    rating: 8.5,
  },
  {
    _id: '675769c2e3d20a15c1a4b2a6',
    title: 'Martian',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyxCIj9CLzij7McWFhCaYHJ-DcLXevZg8lA&s',
    genre: 'action',
    rating: 8.5,
  },
  {
    _id: '675769c2e3d20a15c1a4b2a4',
    title: 'Gravity',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUylKmcVA5CovFXGcU5mHbGCvYjxPVQA-oeg&s',
    genre: 'action',
    rating: 8.5,
  },
]

const TrendingMovies = () => {
  return (
    <section className='trending-movies'>
      <Helmet>
        <title>CV | Trending </title>
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
              </CardHeader>
              <CardContent className='p-0 flex flex-col gap-2'>
                <p className='capitalize'>Genre: {movie.genre}</p>
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

export default TrendingMovies
