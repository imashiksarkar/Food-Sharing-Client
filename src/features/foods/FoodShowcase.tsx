const FoodShowcase = () => {
  return (
    <section className='showcase py-8 pt-4'>
      <div className='con'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Showcase</h2>
        <div className='promo-box grid grid-cols-1 sm:grid-cols-2 auto-rows-[300px]'>
          <figure className='banner'>
            <img
              className='w-full h-full object-cover'
              src='/showcase-1.jpg'
              alt='1'
            />
          </figure>
          <div className='content bg-orange-600 p-4 flex flex-col justify-center gap-4'>
            <h1 className='text-2xl font-semibold'>Crispy KFC Chicken</h1>
            <p>
              Savor the irresistible crunch of KFC's signature crispy fried
              chicken, perfectly complemented by the rich, tangy flavor of
              tomato sauce. A mouthwatering combo that hits all the right notes
              for your taste buds!
            </p>
          </div>
        </div>
        <div className='promo-box grid grid-cols-1 sm:grid-cols-2 auto-rows-[300px]'>
          <figure className='banner'>
            <img
              className='w-full h-full object-cover'
              src='/showcase-2.jpg'
              alt='1'
            />
          </figure>
          <div className='content bg-green-600 sm:col-start-1 sm:row-start-1 p-4 flex flex-col justify-center gap-4'>
            <h1 className='text-2xl font-semibold'>Succulent Chicken Kebabs</h1>
            <p>
              These mouthwatering chicken kebabs are perfectly grilled and
              bursting with flavor. The juicy chicken pieces are interspersed
              with colorful bell peppers, adding a delightful sweetness and
              crunch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodShowcase
