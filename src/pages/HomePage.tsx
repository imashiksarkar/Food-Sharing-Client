// import { Button } from '@/components/ui/button'
// import FeaturedMoviesSlider from '@/features/movie/FeaturedMoviesSlider'
// import MovieService from '@/features/movie/MovieService'
import MovieSlider from '@/features/movie/MovieSlider'
// import { Link, useLoaderData } from 'react-router'

const HomePage = () => {
  // const { featured, originals } = useLoaderData() as {
  //   featured: Awaited<ReturnType<typeof MovieService.getFeaturedMovies>>
  //   originals: Awaited<ReturnType<typeof MovieService.getNetflixOriginalMovies>>
  // }

  return (
    <section className='home-page'>
      
      <MovieSlider />

      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, unde tempore odio minima quis qui ipsa! Reiciendis voluptate facere blanditiis voluptas ut tenetur nihil velit, molestias nostrum ullam tempora veritatis ipsa sapiente deserunt provident. Odit officia ipsa obcaecati, quia repudiandae quas asperiores earum ipsam, laboriosam nisi, necessitatibus distinctio natus illo.
      </div>
      {/* <section className='featured-movies py-8'>
        <div className='con'>
          <h2 className='text-2xl font-bold mb-4'>Featured Movies</h2>
          <FeaturedMoviesSlider movies={featured} />
          <Button
            variant='default'
            className='mt-6 text-lg sm:text-2xl font-normal'
            asChild
          >
            <Link to='/movies'>Explore All Movies</Link>
          </Button>
        </div>
      </section> */}
      {/* <section className='top-rated-movies py-8 pt-4'>
        <div className='con'>
          <h2 className='text-2xl font-bold mb-4'>Netflix Originals</h2>
          <FeaturedMoviesSlider movies={originals} />
        </div>
      </section>
      <section className='upcoming-movies'>
        <div className='con'>
          <h1 className='text-2xl font-bold mb-4'>Upcoming Movies</h1>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] auto-rows-[200px]  gap-4'>
            <img
              className='w-full h-full object-cover block md:col-span-2'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9gHxWXNMUr3lMJr4W8rWpVh6vwyjriJ6bQ&s'
              alt='1'
            />
            <img
              className='w-full h-full object-cover block'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxsbBVRy2cML4NcnwsTPa6yQf5gWZxhc69sXai35urQDrXCDqOiqSVHD7QMCNA8YOfUI&usqp=CAU'
              alt='1'
            />
            <img
              className='w-full h-full object-cover block md:row-span-2'
              src='https://e1.pxfuel.com/desktop-wallpaper/998/938/desktop-wallpaper-brahmastra-bollywood-2022-movie-poster-thumbnail.jpg'
              alt='1'
            />
            <img
              className='w-full h-full object-cover block'
              src='https://i.redd.it/rw1uaprbvaqa1.jpg'
              alt='1'
            />
            <img
              className='w-full h-full object-cover block'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpX5zqSMWOtM-glD5pKu8IRRdpFnUtjy_SSQ&s'
              alt='1'
            />
            <img
              className='w-full h-full object-cover block'
              src='https://middaycdn.s.llnwi.net/Radiocity-images/images/uploads/web-stories/5movieposter1_ws.jpg'
              alt='1'
            />
          </div>
        </div>
      </section> */}
    </section>
  )
}

export default HomePage
