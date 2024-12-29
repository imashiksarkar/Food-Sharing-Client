import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import getFormattedDate from '@/lib/getFormattedDate'
import { Link } from 'react-router'

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
            <p>Expires At: {getFormattedDate(food.expiresAt) || 'Unknown'}</p>
            <p className='capitalize'>Category: {food.category}</p>
            <p className='capitalize'>Quantity: {food.quantity} grams</p>
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
