import FoodCards from '@/components/FoodCards'
import FoodSkeleton from '@/components/FoodSkeleton'
import { useAuth } from '@/contexts/AuthProvider'
import useFetchAuthorFoods from '@/hooks/useFetchAuthorFoods'

const ExploreMyFoods = () => {
  const { user, loading } = useAuth()
  const {
    data: foods,
    isLoading,
    isError,
    error,
  } = useFetchAuthorFoods(user?.email as string)

  return (
    <section className='explore-foods'>
      <div className='con'>
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
          {isError && <p>{error.message}</p>}
          {foods && <FoodCards foods={foods} />}
          {(isLoading || loading) &&
            [1, 2, 3, 4, 5, 6].map((item) => <FoodSkeleton key={item} />)}
        </div>
      </div>
    </section>
  )
}

export default ExploreMyFoods
