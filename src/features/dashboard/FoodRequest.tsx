import FoodCards from '@/components/FoodCards'
import useFetchRequestedFoods from '@/hooks/useFetchRequestedFoods'
import { useEffect, useState } from 'react'

const FoodRequest = () => {
  const [foods, setFoods] = useState<
    Exclude<typeof data, undefined>[number]['food'][]
  >([])
  const { data, isError, isFetching, error } = useFetchRequestedFoods()

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
          <h2>List Of Foods That You Requested</h2>
        </header>
        {isFetching && <p>Fetching Foods...</p>}
        {isError && <p>{error.message}</p>}
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
          {foods && <FoodCards foods={foods} />}
        </div>
      </div>
    </section>
  )
}

export default FoodRequest
