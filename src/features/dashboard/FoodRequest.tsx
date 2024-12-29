import FoodCards from '@/components/FoodCards'
import useFetchRequestedFoods from '@/hooks/useFetchRequestedFoods'

const FoodRequest = () => {
  const { data: foods, isError, isFetching, error } = useFetchRequestedFoods()

  return (
    <section className='food-request'>
      <div className='con'>
        <header>
          <h2>List Of Foods That You Requested</h2>
        </header>
        {isFetching && <p>Fetching Foods...</p>}
        {isError && <p>{error.message}</p>}
        {foods && <FoodCards foods={foods} />}
      </div>
    </section>
  )
}

export default FoodRequest
