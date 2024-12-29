import FoodCards from '@/components/FoodCards'
import { useAuth } from '@/contexts/AuthProvider'
import useFetchAuthorFoods from '@/hooks/useFetchAuthorFoods'

const ExploreMyFoods = () => {
  const { user } = useAuth()
  const {
    data: foods,
    isFetching,
    isError,
    error,
  } = useFetchAuthorFoods(user?.email as string)

  console.log(foods && foods[1]?.authorEmail);
  

  return (
    <section className='explore-foods'>
      <div className='con'>
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
          {isFetching && <p>Fetching Foods...</p>}
          {isError && <p>{error.message}</p>}
          {foods && <FoodCards foods={foods} />}
        </div>
      </div>
    </section>
  )
}

export default ExploreMyFoods
