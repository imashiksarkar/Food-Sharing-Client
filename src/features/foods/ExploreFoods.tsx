import FoodCards from '@/components/FoodCards'
import FoodSkeleton from '@/components/FoodSkeleton'
import useFetchFoods from '@/hooks/useFetchFoods'

const ExploreFoods = () => {
  const { data: foods } = useFetchFoods()

  return (
    <section className='explore-foods'>
      <div className='con'>
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
          {foods ? (
            <FoodCards foods={foods} />
          ) : (
            [1, 2, 3, 4, 5, 6].map((item) => <FoodSkeleton key={item} />)
          )}
        </div>
      </div>
    </section>
  )
}

export default ExploreFoods
