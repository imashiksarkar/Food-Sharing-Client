import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Link } from 'react-router'

const Explorefoods = () => {
  // const totalPage = 4
  // const [searchParams, setSearchParams] = useSearchParams()
  // const currentPage = (searchParams.get('page') || 1).toString()

  const foods = [
    {
      _id: '676c2e0220ac48670157a2d4',
      name: 'Chicken Biriyani 2',
      additionalNotes: 'This is a Chicken biriyani you love.',
      imageUrl: 'https://placehold.co/600x400',
      category: 'breakfast',
      expiresAt: '2024-12-25T16:53:34.476Z',
      authorEmail: 'ashiksarkar.s18@gmail.com',
      donatorName: 'Ashik Sarkar',
      pickupLocation: 'Dhaka',
      foodStatus: 'available',
      quantity: 50,
      createdAt: '2024-12-25T16:08:34.494Z',
      updatedAt: '2024-12-25T16:08:34.494Z',
    },
    {
      _id: '676c2e37d84701c3ccd27df7',
      name: 'Chicken Biriyani 2',
      additionalNotes: 'This is a Chicken biriyani you love.',
      imageUrl: 'https://placehold.co/600x400',
      category: 'breakfast',
      expiresAt: '2024-12-25T16:54:26.217Z',
      authorEmail: 'ashiksarkar.s18@gmail.com',
      donatorName: 'Ashik Sarkar',
      pickupLocation: 'Dhaka',
      foodStatus: 'available',
      quantity: 50,
      createdAt: '2024-12-25T16:09:27.583Z',
      updatedAt: '2024-12-25T16:09:27.583Z',
    },
  ]

  return (
    <section className='explore-foods'>
      <div className='con'>
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
          {foods.map((food) => {
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
          })}
        </div>
      </div>
      {/* <div className='con py-8'>
        <Pagination className='[&>ul>li>a]:text-lg [&>ul>li>a]:cursor-pointer'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePagination('prev')} />
            </PaginationItem>

            {Array(totalPage)
              .fill(0)
              .map((_, i) => (
                <PaginationItem>
                  <PaginationLink
                    onClick={handlePagination(i + 1)}
                    isActive={currentPage === (++i).toString()}
                  >
                    {i}
                  </PaginationLink>
                </PaginationItem>
              ))}

            <PaginationItem>
              <PaginationNext onClick={handlePagination('next')} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div> */}
    </section>
  )
}

export default Explorefoods
