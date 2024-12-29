import EndingSooNFoods from '@/features/foods/EndingSooNFoods'
import FeaturedFoods from '@/features/foods/FeaturedFoods'
import FoodShowcase from '@/features/foods/FoodShowcase'
import FoodSlider from '@/features/foods/FoodSlider'

const HomePage = () => {
  return (
    <section className='home-page'>
      <FoodSlider />
      <FeaturedFoods />
      <EndingSooNFoods />
      <FoodShowcase />
    </section>
  )
}

export default HomePage
