import FoodCards from '@/components/FoodCards'
import useFetchFoods from '@/hooks/useFetchFoods'

const ExploreFoods = () => {
  const { data: foods } = useFetchFoods()

  const FoodSkeleton = () => (
    <div
      className='food-skeleton w-full h-full rounded-md overflow-hidden border p-2
          [&>div]:animate-pulse
          [&>div]:bg-slate-700
          '
    >
      <div className='h-[50%] w-full' />
      <div className='h-6 w-full mt-4' />
      <div className='h-4 w-[40%] mt-4' />
      <div className='h-4 w-[80%] mt-4' />
      <div className='h-4 w-[60%] mt-4' />
      <div className='h-4 w-[60%] mt-4' />
      <div className='h-10 w-[25%] mt-4' />
      <div className='h-10 w-[35%] mt-4' />
    </div>
  )

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
