import { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'

const Reviews = () => {
  const reviewsData = [
    {
      name: 'Jane Smith',
      designation: 'Founder of Foodies Unite',
      review:
        'This app has revolutionized the way I share meals. It’s a fantastic platform for connecting people who care about good food and giving back to the community!',
    },
    {
      name: 'Mike Johnson',
      designation: 'Restaurant Owner',
      review:
        'I’ve been using this food-sharing app for a while now, and I love how it’s helping reduce food waste. It’s a win-win for everyone involved!',
    },
    {
      name: 'Emily Davis',
      designation: 'Home Cook',
      review:
        'As someone who loves cooking but often ends up with extra food, this app has been a game changer. It’s so easy to share and help others enjoy a delicious meal.',
    },
    {
      name: 'Carlos Perez',
      designation: 'Volunteer at Food for All',
      review:
        'We’ve partnered with this app to help distribute meals to those in need, and the experience has been amazing. The platform is so easy to navigate, and it has truly made a positive impact.',
    },
    {
      name: 'Sarah Williams',
      designation: 'College Student',
      review:
        'I love using this app! It’s perfect for finding extra food on campus and connecting with others who care about reducing food waste. Highly recommend!',
    },
  ]

  const [activeReview, setActiveReview] = useState(0)

  const handleReviewChange = (direction: 'next' | 'prev') => () => {
    if (direction === 'next')
      setActiveReview((prev) => (prev + 1) % reviewsData.length)
    else if (direction === 'prev')
      setActiveReview(
        (prev) => (prev - 1 + reviewsData.length) % reviewsData.length
      )
  }

  return (
    <section className='reviews py-10'>
      <div className='con'>
        <h2 className='text-2xl font-bold pb-1 text-center'>
          What people say about us
        </h2>
        <p className='text-center pb-6'>
          Here are some reviews from our customers
        </p>

        <div className='grid bg-orange-500 p-4 grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center justify-items-center gap-y-2 gap-x-8 text-center'>
          <figure className='quote-icone hidden lg:block'>
            <FaQuoteRight className='text-4xl text-gray-600/50' />
          </figure>

          <p className='review-text'>{reviewsData[activeReview].review}</p>

          <hr className='lg:hidden w-full border-t-2 border-gray-200' />
          <div className='reviewer-details space-y-1'>
            <h2 className='reviewer-name text-2xl font-bold'>
              {reviewsData[activeReview].name}
            </h2>
            <p className='reviewer-designation'>
              {reviewsData[activeReview].designation}
            </p>
          </div>

          <div className='controlls lg:col-span-3 flex gap-4'>
            <button onClick={handleReviewChange('prev')} className='prev'>
              Prev
            </button>
            <button onClick={handleReviewChange('next')} className='next'>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
