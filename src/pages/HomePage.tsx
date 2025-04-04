import EndingSooNFoods from '@/foods/EndingSooNFoods'
import FeaturedFoods from '@/foods/FeaturedFoods'
import FoodShowcase from '@/foods/FoodShowcase'
import FoodSlider from '@/foods/FoodSlider'
import Reviews from '@/Reviews'
import WhyChooseUs from '@/WhyChooseUs'

const HomePage = () => {
  return (
    <section className='home-page'>
      <FoodSlider />
      <FeaturedFoods />
      <EndingSooNFoods />
      <FoodShowcase />
      <WhyChooseUs />
      <Reviews />
    </section>
  )
}

export default HomePage
