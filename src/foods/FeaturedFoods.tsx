import useFetchFeaturedFoods from '@/hooks/useFetchFeaturedFoods'
import { motion } from 'motion/react'
import { Link } from 'react-router'

const FeaturedFoods = () => {
  const { data, isLoading, isError, error } = useFetchFeaturedFoods()

  return (
    <section className='featured-foods py-8'>
      <div className='con'>
        <h2 className='text-2xl font-bold mb-4'>Featured Foods</h2>
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
          {isLoading &&
            [1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className='food-box-skeleton h-52 bg-slate-400 flex items-end animate-pulse'
              >
                <div className='h-8 w-full bg-slate-500' />
              </div>
            ))}

          {data?.map((food) => (
            <motion.li
              key={food._id}
              variants={{
                hidden: { scale: 0 },
                show: { scale: 1 },
              }}
            >
              <Link to={`/foods/${food._id}`} className='block'>
                <figure>
                  <img
                    className='w-full h-full object-cover max-w-[600px] aspect-[1.5/1]'
                    src={food.imageUrl}
                    alt={food.name}
                    loading='lazy'
                  />
                  <summary className='bg-black bg-opacity-80 p-4 py-1 text-white text-nowrap overflow-hidden'>
                    {food.name}
                  </summary>
                </figure>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default FeaturedFoods
