import { useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
//eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const sliders = [
  {
    id: 1,
    title: 'Vibrant Quinoa Power Bowl',
    image:
      'https://res.cloudinary.com/imashiksarkar/image/upload/v1735514705/ph-hosting/food-sharing/banner/banner-3_c0irgq.png',
    description:
      'A colorful and nutritious bowl featuring fluffy quinoa, fresh greens, crunchy croutons, vibrant pickled onions, creamy feta cheese, and a mix of sweet and tangy diced fruits and veggies. Perfect for a wholesome meal packed with flavor and texture!',
  },
  {
    id: 2,
    title: 'Burger Meal Combo',
    image:
      'https://res.cloudinary.com/imashiksarkar/image/upload/v1735514706/ph-hosting/food-sharing/banner/banner-1_tdc4on.png',
    description:
      'A classic meal featuring a juicy double-patty cheeseburger loaded with fresh lettuce, tomatoes, and grilled toppings, served with crispy golden fries and a refreshing bottle of Coca-Cola. A satisfying indulgence for burger lovers!',
  },
  {
    id: 3,
    title: 'Chicken Biryani Delight',
    image:
      'https://res.cloudinary.com/imashiksarkar/image/upload/v1735514706/ph-hosting/food-sharing/banner/banner-4_duexld.png',
    description:
      'A rich and aromatic dish of perfectly spiced basmati rice layered with tender, juicy chicken drumsticks, garnished with fresh cilantro, sliced onions, and zesty lemon wedges. A true treat for lovers of flavorful Indian cuisine!',
  },
]

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
        {sliders.map((slide) => (
          <SwiperSlide key={slide.id} className='my-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center px-14 py-8 gap-6 sm:gap-0'>
              <div className='details flex flex-col gap-6'>
                <h1 className='text-4xl font-bold'>{slide.title}</h1>
                <p className='text-lg'>{slide.description}</p>
              </div>
              <figure className='banner'>
                <img
                  className='h-full w-full object-cover'
                  src={slide.image}
                  alt={slide.title}
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
