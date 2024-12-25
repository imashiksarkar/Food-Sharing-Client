import { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router'
//eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Movie {
  movies: {
    _id: string
    poster: string
    title: string
  }[]
}

const FeaturedMoviesSlider = ({ movies }: Movie) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null)

  const [numSlides, setNumSlider] = useState(0)

  const getNumSlidesPerView = (size: number) => {
    let numSlidesPerView = 1

    if (size >= 400) numSlidesPerView = 3
    if (size >= 800) numSlidesPerView = 4
    if (size >= 1000) numSlidesPerView = 7

    return numSlidesPerView
  }

  useEffect(() => {
    setNumSlider(getNumSlidesPerView(window.innerWidth as number))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.onresize = (e: any) => {
      setNumSlider(getNumSlidesPerView(e?.target?.innerWidth as number))
    }
  }, [])

  const handleSwipe = (direction: 'next' | 'prev') => {
    if (direction === 'prev') swiperRef?.current?.slidePrev()
    else if (direction === 'next') swiperRef?.current?.slideNext()
  }

  return (
    <div className='swiper-container relative w-full'>
      <button
        onClick={() => handleSwipe('prev')}
        className='absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-slate-950/15 h-full hover:bg-slate-950/20 transition-all'
      >
        <IoIosArrowBack className='text-4xl' />
      </button>
      <Swiper
        navigation
        slidesPerView={numSlides}
        spaceBetween={30}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className='cursor-pointer w-full aspect-[10/5] sm:aspect-[10/4] md:aspect-[10/2]'
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie._id} className='rounded-xl overflow-hidden'>
            <Link to={`/movies/${movie._id}`}>
              <img
                className='w-full h-full object-cover'
                src={movie.poster}
                alt={movie.title}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => handleSwipe('next')}
        className='absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-slate-950/15 h-full hover:bg-slate-950/20 transition-all'
      >
        <IoIosArrowForward className='text-4xl' />
      </button>
    </div>
  )
}

export default FeaturedMoviesSlider
