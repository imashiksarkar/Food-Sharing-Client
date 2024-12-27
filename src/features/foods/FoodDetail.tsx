import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthProvider'
import useFetchFood from '@/hooks/useFetchFood'
import { Link, useParams } from 'react-router'

const FoodDetail = () => {
  const { user } = useAuth()
  const { foodId } = useParams()

  const { data: food, isFetching } = useFetchFood(foodId as string)

  return (
    <section className='food-detail'>
      <div className='con pt-12 grid gird-cols-1 sm:grid-cols-[2fr,_3fr] gap-4'>
        {isFetching ? (
          <div className='h-screen w-full flex gap-7 flex-col justify-center items-center'>
            <p>Fetching Food...</p>
          </div>
        ) : (
          food && (
            <>
              <div className='banner'>
                <figure className='w-full aspect-square overflow-hidden'>
                  <img
                    className='w-full h-full object-cover'
                    src={food.imageUrl}
                    alt={food.name}
                  />
                </figure>
              </div>
              <div className='details flex flex-col gap-4'>
                <h1 className='text-4xl font-bold'>{food.name}</h1>
                <p>{food.additionalNotes}</p>
                <p>food Durations: {food.expiresAt} Mins</p>
                <p>Releasing Year: {food.donatorName}</p>
                <p className='capitalize'>Genre: {food.category}</p>
                <p className='p-2 bg-red-600/15 w-max capitalize rounded-md'>{food.foodStatus}</p>

                <div className='flex items-center gap-4'>
                  {user?.email === food.authorEmail && (
                    <>
                      <Button className='w-max'>
                        <Link to={`/foods/${food._id}/edit`}>Update food</Link>
                      </Button>
                      <Button onClick={() => {}} className='w-max'>
                        Delete food
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </>
          )
        )}
      </div>
    </section>
  )
}

export default FoodDetail
