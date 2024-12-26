import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
//eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const FoodSlider = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null)

  const handleSwipe = (direction: 'next' | 'prev') => {
    if (direction === 'prev') swiperRef?.current?.slidePrev()
    else if (direction === 'next') swiperRef?.current?.slideNext()
  }

  return (
    <div className='swiper-container relative w-full text-white'>
      <button
        onClick={() => handleSwipe('prev')}
        className='absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-slate-950/15 h-full hover:bg-slate-950/20 transition-all'
      >
        <IoIosArrowBack className='text-4xl' />
      </button>
      <Swiper
        loop
        navigation
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className='cursor-pointer bg-red-600'
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SwiperSlide key={index} className='my-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center px-4 py-8 gap-6 sm:gap-0'>
              <div className='details flex flex-col gap-6'>
                <h1 className='text-4xl font-bold'>Cineverse</h1>
                <p className='text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, eaque!
                </p>
                <Button className='w-max'>Watch Now</Button>
              </div>
              <figure className='banner'>
                <img
                  className='h-full w-full object-cover'
                  src={`/banner/banner-${index + 1}.png`}
                  alt={`banner-${index + 1}`}
                  loading='lazy'
                />
              </figure>
            </div>
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

export default FoodSlider
