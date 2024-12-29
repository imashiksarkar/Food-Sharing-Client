const FoodShowcase = () => {
  return (
    <section className='showcase py-8 pt-4'>
      <div className='con'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Showcase</h2>
        <div className='promo-box grid grid-cols-1 sm:grid-cols-2 auto-rows-[300px]'>
          <figure className='banner'>
            <img
              className='w-full h-full object-cover'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxsbBVRy2cML4NcnwsTPa6yQf5gWZxhc69sXai35urQDrXCDqOiqSVHD7QMCNA8YOfUI&usqp=CAU'
              alt='1'
            />
          </figure>
          <div className='content bg-orange-600 p-4 flex flex-col justify-center gap-4'>
            <h1 className='text-2xl font-semibold'>Business Launch</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              consequuntur delectus molestias blanditiis adipisci eveniet cum,
              voluptas necessitatibus commodi nesciunt labore enim excepturi
              cupiditate facilis. Non nulla aliquam distinctio atque!
            </p>
          </div>
        </div>
        <div className='promo-box grid grid-cols-1 sm:grid-cols-2 auto-rows-[300px]'>
          <figure className='banner'>
            <img
              className='w-full h-full object-cover'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxsbBVRy2cML4NcnwsTPa6yQf5gWZxhc69sXai35urQDrXCDqOiqSVHD7QMCNA8YOfUI&usqp=CAU'
              alt='1'
            />
          </figure>
          <div className='content bg-green-600 sm:col-start-1 sm:row-start-1 p-4 flex flex-col justify-center gap-4'>
            <h1 className='text-2xl font-semibold'>Business Launch</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quae quod saepe? Dicta alias tempora a facilis
              molestiae ipsum in, consequuntur magnam dolorem earum fuga ipsa
              provident, reprehenderit deleniti praesentium?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodShowcase
