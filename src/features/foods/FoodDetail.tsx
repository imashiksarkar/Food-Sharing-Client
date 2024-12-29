import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthProvider'
import useDeleteFood from '@/hooks/useDeleteFood'
import useFetchFood from '@/hooks/useFetchFood'
import { Link, useNavigate, useParams } from 'react-router'

const FoodDetail = () => {
  const { user, loading } = useAuth()
  const { foodId } = useParams()
  const navigate = useNavigate()

  const { data: food, isFetching } = useFetchFood(foodId as string)
  const deleteFoodMutation = useDeleteFood(foodId as string)
  const isAuthor = user?.email === food?.authorEmail

  const handleDeleteFood = async () => {
    deleteFoodMutation.mutate(foodId as string, {
      onSuccess: () => {
        navigate('/dashboard/foods')
      },
    })
  }

  const handleMakeRequest = async () => {
    // navigate(`/dashboard/foods/${foodId}/request`)
  }

  return (
    <section className='food-detail'>
      <div className='con py-12 grid gird-cols-1 sm:grid-cols-[2fr,_3fr] gap-4'>
        {isFetching || loading ? (
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
                <p className='p-2 bg-red-600/15 w-max capitalize rounded-md'>
                  {food.foodStatus}
                </p>

                <div className='flex items-center gap-4'>
                  {isAuthor && (
                    <>
                      <Button className='w-max' asChild>
                        <Link to={`/foods/${food._id}/edit`}>Update food</Link>
                      </Button>
                      <Button onClick={handleDeleteFood} className='w-max'>
                        Delete food
                      </Button>
                    </>
                  )}
                  {!isAuthor && food.foodStatus === 'available' && (
                    <Button onClick={handleMakeRequest} className='w-max'>
                      Make Request
                    </Button>
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
