import FoodCards from '@/components/FoodCards'
import FoodSkeleton from '@/components/FoodSkeleton'
import useFetchRequestedFoods from '@/hooks/useFetchRequestedFoods'
import { useEffect, useState } from 'react'

const FoodRequest = () => {
  const [foods, setFoods] = useState<
    Exclude<typeof data, undefined>[number]['food'][]
  >([])
  const { data, isError, isLoading, error } = useFetchRequestedFoods()

  useEffect(() => {
    if (data) {
      const foods = data.map((item) => item.food)
      setFoods(foods)
    }
  }, [data])

  return (
    <section className='food-request'>
      <div className='con'>
        <header>
          <h2 className='text-2xl font-bold'>
            List Of Foods That You Requested
          </h2>
        </header>
        {isError && <p>{error.message}</p>}
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
          {foods && <FoodCards foods={foods} />}
          {isLoading &&
            [1, 2, 3, 4, 5, 6].map((item) => <FoodSkeleton key={item} />)}
        </div>
      </div>
    </section>
  )
}

export default FoodRequest
