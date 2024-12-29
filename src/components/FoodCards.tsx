import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface IFood {
  _id: string
  name: string
  additionalNotes: string
  imageUrl: string
  category: string
  expiresAt: string
  authorEmail: string
  donatorName: string
  pickupLocation: string
  foodStatus: string
  quantity: number
  createdAt: string
  updatedAt: string
}

const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'Asia/Dhaka',
  })
}

const FoodCards = ({ foods }: { foods: IFood[] }) => {
  return (
    <>
      {foods.map((food) => (
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
            <p>
              Releasing Year: {getFormattedDate(food.expiresAt) || 'Unknown'}
            </p>
            <p className='capitalize'>Genre: {food.category}</p>
            <p className='capitalize'>Duration: {food.quantity} mins</p>
            <p className='capitalize p-2 bg-red-400/20 w-max rounded-md'>
              {food.foodStatus}
            </p>
          </CardContent>
          <CardFooter className='p-0 mt-5'>
            <Button asChild>
              <Link to={`/foods/${food._id}`}>See Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

export default FoodCards
