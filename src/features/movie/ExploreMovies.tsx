import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { MouseEvent } from 'react'
import { Link, useLoaderData, useSearchParams } from 'react-router'
import MovieService from './MovieService'
import { Helmet } from 'react-helmet'

const ExploreMovies = () => {
  const totalPage = 4
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = (searchParams.get('page') || 1).toString()

  const handlePagination =
    (page: number | string) =>
    (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
      e.preventDefault()
      let pageToNavigate = page
      if (page === 'prev') pageToNavigate = Math.max(Number(currentPage) - 1, 1)
      else if (page === 'next')
        pageToNavigate = Math.min(Number(currentPage) + 1, totalPage)
      setSearchParams({ page: pageToNavigate.toString() })
    }

  const movies = useLoaderData() as Awaited<
    ReturnType<typeof MovieService.getMovies>
  >
  return (
    <section className='explore-movies'>
      <Helmet>
        <title>CV | Explore Movies </title>
      </Helmet>
      <div className='con'>
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
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
      <div className='con py-8'>
        <Pagination className='[&>ul>li>a]:text-lg [&>ul>li>a]:cursor-pointer'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePagination('prev')} />
            </PaginationItem>

            {Array(totalPage)
              .fill(0)
              .map((_, i) => (
                <PaginationItem>
                  <PaginationLink
                    onClick={handlePagination(i + 1)}
                    isActive={currentPage === (++i).toString()}
                  >
                    {i}
                  </PaginationLink>
                </PaginationItem>
              ))}

            <PaginationItem>
              <PaginationNext onClick={handlePagination('next')} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  )
}

export default ExploreMovies
