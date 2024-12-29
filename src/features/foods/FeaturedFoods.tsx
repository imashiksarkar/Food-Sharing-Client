import useFetchFeaturedFoods from '@/hooks/useFetchFeaturedFoods'
import { motion } from 'motion/react'
import { Link } from 'react-router'

const FeaturedFoods = () => {
  const { data, isFetching, isError, error } = useFetchFeaturedFoods()

  return (
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
                    className='w-full h-full object-cover'
                    src={food.imageUrl}
                    alt={food.name}
                  />
                  <summary className='bg-black bg-opacity-80 p-4 py-1 text-white'>
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
