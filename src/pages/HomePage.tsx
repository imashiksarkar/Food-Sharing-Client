import EndingSooNFoods from '@/features/foods/EndingSooNFoods'
import FeaturedFoods from '@/features/foods/FeaturedFoods'
import FoodShowcase from '@/features/foods/FoodShowcase'
import FoodSlider from '@/features/foods/FoodSlider'
import WhyChooseUs from '@/WhyChooseUs'

const HomePage = () => {
  return (
    <section className='home-page'>
      <FoodSlider />
      <FeaturedFoods />
      <EndingSooNFoods />
      <FoodShowcase />
      <WhyChooseUs />
    </section>
  )
}

export default HomePage
