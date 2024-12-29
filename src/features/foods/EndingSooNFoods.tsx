import useFetchExpiringSoonFoods from '@/hooks/useFetchExpiringSoonFoods'
import { motion, useAnimation, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router'

const EndingSooNFoods = () => {
  const { data, isFetching, isError, error } = useFetchExpiringSoonFoods()

  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  })

  useEffect(() => {
    if (isInView) controls.start('show')
  }, [controls, isInView, isFetching])

  return (
    <section className='ending-soon-foods py-8'>
      <div className='con'>
        <h2 className='text-2xl font-bold mb-4'>Expiring Soon</h2>
        {isFetching && <p>Fetching Expiring Soon Foods...</p>}
        {isError && <p>{error.message}</p>}
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
          {data?.map((food) => (
            <motion.li
              key={food._id}
              variants={{
                hidden: { y: 20, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
            >
              <Link
                to={`/foods/${food._id}`}
                className='block rounded-xl overflow-hidden'
              >
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

export default EndingSooNFoods
