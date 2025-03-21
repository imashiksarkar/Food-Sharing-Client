import useFetchExpiringSoonFoods from '@/hooks/useFetchExpiringSoonFoods'
import { motion, useAnimation, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router'

const EndingSooNFoods = () => {
  const { data, isLoading, isError, error } = useFetchExpiringSoonFoods()

  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  })

  useEffect(() => {
    if (isInView) controls.start('show')
  }, [controls, isInView, isLoading])

  return (
    <section className='ending-soon-foods py-8'>
      <div className='con'>
        <h2 className='text-2xl font-bold mb-4'>Expiring Soon</h2>
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
          {isLoading &&
            [1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className='food-box-skeleton h-52 bg-slate-400 flex items-end animate-pulse rounded-xl overflow-hidden'
              >
                <div className='h-8 w-full bg-slate-500' />
              </div>
            ))}

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

export default EndingSooNFoods
