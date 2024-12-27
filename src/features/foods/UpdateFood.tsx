import { useToast } from '@/hooks/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useLoaderData, useNavigate, useParams } from 'react-router'
import { z } from 'zod'
import FoodForm from '../dashboard/FoodForm'
import FoodService from './FoodService'

const formSchema = z.object({
  duration: z
    .preprocess((value) => {
      const parsedValue = parseInt(value as string, 10)
      return isNaN(parsedValue) ? undefined : parsedValue
    }, z.number())
    .refine((value) => value >= 60, {
      message: 'Must be at least 60 minutes',
    })
    .default(60),
  genre: z
    .enum(['action', 'comedy', 'drama', 'horror', 'romance', 'thriller'])
    .default('action'),
  poster: z.string().url().default(''),
  rating: z
    .number()
    .transform((value) => parseFloat(value.toFixed(1)))
    .refine((value) => !isNaN(value) && value >= 1 && value <= 5, {
      message: 'Must be between 0 and 5',
    })
    .default(3.5),
  releasingYear: z
    .preprocess((value) => {
      const parsedValue = parseInt(value as string, 10)
      return isNaN(parsedValue) ? undefined : parsedValue
    }, z.number())
    .default(1500)
    .refine((value) => value >= 1500 && value <= 2030, {
      message: 'Must be between 1500 and 2030',
    }),
  summery: z.string().trim().min(10, 'Min 10 chars.').default(''),
  title: z.string().trim().min(2, 'Min 2 chars.').default(''),
  netflixOriginal: z.boolean().default(false),
})

const UpdateFood = () => {
  const { id } = useParams()

  const navigate = useNavigate()
  const { toast } = useToast()

  const foodData = useLoaderData() as z.infer<typeof formSchema>

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: foodData,
    mode: 'all',
  })

  const { isValid } = form.formState

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!id) return

    FoodService.updateFood(id, values)
      .then((res) => {
        toast({
          title: 'Success!',
          description: 'food Updated Successfully.',
        })

        navigate(`/foods/${res._id}`)
      })
      .catch((error: Error) => {
        console.log(error)

        toast({
          title: 'Could Not Update food.',
          description: error.message,
        })
      })
  }

  return (
    <section className='add-food'>
      <div className='con p-4 md:p-8'>
        <FormProvider {...form}>
          <FoodForm form={form} onSubmit={onSubmit} isValid={!isValid} />
        </FormProvider>
      </div>
    </section>
  )
}

export default UpdateFood
