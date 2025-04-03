import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

import trust from '@/assets/trust.png'
import healthy from '@/assets/healthy.png'
import cash from '@/assets/cash.png'

const WhyChooseUs = () => {
  const data = [
    {
      sticker: trust,
      text: 'quality food',
      description:
        'We are committed to providing our customers with the highest quality food.',
    },
    {
      sticker: healthy,
      text: 'serve healthy food',
      description: 'Provided foods are highly healthy and nutritious.',
    },
    {
      sticker: cash,
      text: 'cash free',
      description: 'We offer a cash free delivery option for our customers.',
    },
  ]

  const Reason = ({
    data: { sticker, text, description },
  }: {
    data: {
      sticker: string
      text: string
      description: string
    }
  }) => (
    <Card className='flex flex-col items-center'>
      <CardHeader>
        <figure className='sticker w-16 h-16 bg-purple-400 rounded-full'>
          <img src={sticker} alt={text} />
        </figure>
      </CardHeader>
      <CardContent>
        <h2 className='text-2xl font-bold capitalize'>{text}</h2>
      </CardContent>
      <CardFooter>
        <p>{description}</p>
      </CardFooter>
    </Card>
  )

  return (
    <section className='why-choose-us py-10'>
      <div className='con'>
        <h2 className='text-2xl font-bold pb-1 text-center'>Why Choose Us?</h2>
        <p className='text-center pb-6'>
          Here are some reasons why you should choose us.
        </p>

        <div className='cards grid gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-content-center text-center'>
          <Reason data={data[0]} />
          <Reason data={data[1]} />
          <Reason data={data[2]} />
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
