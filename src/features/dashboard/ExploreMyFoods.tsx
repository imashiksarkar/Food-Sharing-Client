import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useAuth } from '@/contexts/AuthProvider'
import useFetchAuthorFoods from '@/hooks/useFetchAuthorFoods'
import { Link } from 'react-router'

const ExploreMyFoods = () => {
  const { user } = useAuth()
  const { data: foods, isFetching } = useFetchAuthorFoods(user?.email as string)

  return (
    <section className='explore-foods'>
      <div className='con'>
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
          {isFetching ? (
            <div>Fetching Your Foods...</div>
          ) : (
            foods?.map((food) => {
              const date = new Date(food.expiresAt)
              const formattedDate = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: 'Asia/Dhaka',
              })
              return (
                <Card key={food._id} className='text-wrap p-2'>
                  <CardHeader className='space-y-0 p-0'>
                    <figure className='aspect-video bg-red-300 overflow-hidden'>
                      <img
                        className='w-full h-full object-cover'
                        src={food.imageUrl}
                        alt={food.name}
                      />
                    </figure>
                    <CardTitle className='pt-5 pb-3'>{food.name}</CardTitle>
                    <CardDescription className='pb-3'>
                      {food.additionalNotes}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='flex flex-col gap-2 p-0'>
                    <p>Releasing Year: {formattedDate || 'Unknown'}</p>
                    <p className='capitalize'>Genre: {food.category}</p>
                    <p className='capitalize'>Duration: {food.quantity} mins</p>
                    <p className='capitalize p-2 bg-red-400/20 w-max rounded-md'>
                      {food.foodStatus}
                    </p>
                  </CardContent>
                  <CardFooter className='p-0 mt-5'>
                    <Button>
                      <Link to={`/foods/${food._id}`}>See Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}

export default ExploreMyFoods
