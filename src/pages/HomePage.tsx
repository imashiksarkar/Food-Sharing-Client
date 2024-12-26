import FoodSlider from '@/features/foods/FoodSlider'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <section className='home-page'>
      <FoodSlider />

      <section className='featured-foods py-8'>
        <div className='con'>
          <h2 className='text-2xl font-bold mb-4'>Featured Foods</h2>
          <div
            className='food-box-group grid
          grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]
           gap-4'
          >
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <Link
                  key={index}
                  // TODO: add food id
                  to='/:foodId'
                  className="food-box bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxsbBVRy2cML4NcnwsTPa6yQf5gWZxhc69sXai35urQDrXCDqOiqSVHD7QMCNA8YOfUI&usqp=CAU')] bg-cover bg-no-repeat bg-center h-52 flex flex-col justify-end"
                >
                  <h3 className='text-lg font-bold bg-black bg-opacity-80 p-4 py-1 text-white'>
                    Bhakar Puri
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className='ending-soon-foods py-8'>
        <div className='con'>
          <h2 className='text-2xl font-bold mb-4'>Expiring Soon</h2>
          <div
            className='food-box-group grid
          grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]
           gap-4'
          >
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <Link
                  key={index}
                  // TODO: add food id
                  to='/:foodId'
                  className="food-box bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxsbBVRy2cML4NcnwsTPa6yQf5gWZxhc69sXai35urQDrXCDqOiqSVHD7QMCNA8YOfUI&usqp=CAU')] bg-cover bg-no-repeat bg-center h-52 flex flex-col justify-end rounded-lg"
                >
                  <h3 className='text-lg font-bold bg-black bg-opacity-80 p-4 py-1 text-white'>
                    Bhakar Puri
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
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
      {/* <section className='upcoming-movies'>
        <div className='con'>
          <h1 className='text-2xl font-bold mb-4'>Upcoming Movies</h1>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] auto-rows-[200px]  gap-4'>
            <img
              className='w-full h-full object-cover block md:col-span-2'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9gHxWXNMUr3lMJr4W8rWpVh6vwyjriJ6bQ&s'
              alt='1'
            />
            <img
              className='w-full h-full object-cover block'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxsbBVRy2cML4NcnwsTPa6yQf5gWZxhc69sXai35urQDrXCDqOiqSVHD7QMCNA8YOfUI&usqp=CAU'
              alt='1'
            />
            <img
              className='w-full h-full object-cover block md:row-span-2'
              src='https://e1.pxfuel.com/desktop-wallpaper/998/938/desktop-wallpaper-brahmastra-bollywood-2022-movie-poster-thumbnail.jpg'
              alt='1'
            />
            <img
              className='w-full h-full object-cover block'
              src='https://i.redd.it/rw1uaprbvaqa1.jpg'
              alt='1'
            />
            <img
              className='w-full h-full object-cover block'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpX5zqSMWOtM-glD5pKu8IRRdpFnUtjy_SSQ&s'
              alt='1'
            />
            <img
              className='w-full h-full object-cover block'
              src='https://middaycdn.s.llnwi.net/Radiocity-images/images/uploads/web-stories/5movieposter1_ws.jpg'
              alt='1'
            />
          </div>
        </div>
      </section> */}
    </section>
  )
}

export default HomePage
