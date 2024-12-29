import FoodSlider from '@/features/foods/FoodSlider'
import useFetchExpiringSoonFoods from '@/hooks/useFetchExpiringSoonFoods'
import useFetchFeaturedFoods from '@/hooks/useFetchFeaturedFoods'
import { motion, useAnimation, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router'

const HomePage = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  })
  useEffect(() => {
    if (isInView) controls.start('show')
  }, [controls, isInView])

  const {
    data: featuredFoods,
    isFetching,
    isError,
    error,
  } = useFetchFeaturedFoods()
  const {
    data: expiringSoonFoods,
    isFetching: isFetchingExpiringSoonFoods,
    isError: isErrorExpiringSoonFoods,
    error: errorExpiringSoonFoods,
  } = useFetchExpiringSoonFoods()

  return (
    <section className='home-page'>
      <FoodSlider />

      <section className='featured-foods py-8'>
        <div className='con'>
          <h2 className='text-2xl font-bold mb-4'>Featured Foods</h2>
          {isFetching && <p>Fetching Featured Foods...</p>}
          {isError && <p>{error.message}</p>}
          <motion.ul
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            initial='hidden'
            animate='show'
            className='food-box-group grid
          grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]
           gap-4'
          >
            {featuredFoods?.map((food) => (
              <motion.li
                key={food._id}
                variants={{
                  hidden: { scale: 0 },
                  show: { scale: 1 },
                }}
              >
                <Link
                  to={`/foods/${food._id}`}
                  className={`food-box bg-[url('${food.imageUrl}')] bg-cover bg-no-repeat bg-center h-52 flex flex-col justify-end`}
                >
                  <h3 className='text-lg font-bold bg-black bg-opacity-80 p-4 py-1 text-white'>
                    {food.name}
                  </h3>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className='ending-soon-foods py-8'>
        <div className='con'>
          <h2 className='text-2xl font-bold mb-4'>Expiring Soon</h2>
          {isFetchingExpiringSoonFoods && (
            <p>Fetching Expiring Soon Foods...</p>
          )}
          {isErrorExpiringSoonFoods && <p>{errorExpiringSoonFoods.message}</p>}
          <motion.ul
            ref={ref}
            className='food-box-group grid
          grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]
           gap-4'
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial='hidden'
            animate={controls}
          >
            {expiringSoonFoods?.map((food) => (
              <motion.li
                key={food._id}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
              >
                <Link
                  to={`/foods/${food._id}`}
                  className={`food-box bg-[url('${food.imageUrl}')] bg-cover bg-no-repeat bg-center h-52 flex flex-col justify-end rounded-lg`}
                >
                  <h3 className='text-lg font-bold bg-black bg-opacity-80 p-4 py-1 text-white'>
                    {food.name}
                  </h3>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className='showcase py-8 pt-4'>
        <div className='con'>
          <h2 className='text-2xl font-bold mb-4 text-center'>Showcase</h2>
          <div className='promo-box grid grid-cols-1 sm:grid-cols-2 auto-rows-[300px]'>
            <figure className='banner'>
              <img
                className='w-full h-full object-cover'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxsbBVRy2cML4NcnwsTPa6yQf5gWZxhc69sXai35urQDrXCDqOiqSVHD7QMCNA8YOfUI&usqp=CAU'
                alt='1'
              />
            </figure>
            <div className='content bg-orange-600 p-4 flex flex-col justify-center gap-4'>
              <h1 className='text-2xl font-semibold'>Business Launch</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                consequuntur delectus molestias blanditiis adipisci eveniet cum,
                voluptas necessitatibus commodi nesciunt labore enim excepturi
                cupiditate facilis. Non nulla aliquam distinctio atque!
              </p>
            </div>
          </div>
          <div className='promo-box grid grid-cols-1 sm:grid-cols-2 auto-rows-[300px]'>
            <figure className='banner'>
              <img
                className='w-full h-full object-cover'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxsbBVRy2cML4NcnwsTPa6yQf5gWZxhc69sXai35urQDrXCDqOiqSVHD7QMCNA8YOfUI&usqp=CAU'
                alt='1'
              />
            </figure>
            <div className='content bg-green-600 sm:col-start-1 sm:row-start-1 p-4 flex flex-col justify-center gap-4'>
              <h1 className='text-2xl font-semibold'>Business Launch</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit quae quod saepe? Dicta alias tempora a facilis
                molestiae ipsum in, consequuntur magnam dolorem earum fuga ipsa
                provident, reprehenderit deleniti praesentium?
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default HomePage
