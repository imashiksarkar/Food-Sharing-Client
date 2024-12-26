import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import MovieForm from './FoodForm'
import MovieService from './FoodService'
import { useToast } from '@/hooks/use-toast'
import { useNavigate } from 'react-router'
import { Helmet } from 'react-helmet'

const formSchema = z.object({
  duration: z
    .preprocess((value) => {
      const parsedValue = parseInt(value as string, 10)
      return isNaN(parsedValue) ? undefined : parsedValue
    }, z.number())
    .refine((value) => value >= 60, {
      message: 'Must be at least 60 minutes',
    }),
  genre: z.enum(['action', 'comedy', 'drama', 'horror', 'romance', 'thriller']),
  poster: z.string().url(),
  rating: z
    .number()
    .transform((value) => parseFloat(value.toFixed(1)))
    .refine((value) => !isNaN(value) && value >= 1 && value <= 5, {
      message: 'Must be between 0 and 5',
    }),
  releasingYear: z
    .preprocess((value) => {
      const parsedValue = parseInt(value as string, 10)
      return isNaN(parsedValue) ? undefined : parsedValue
    }, z.number())
    .refine((value) => value >= 1500 && value <= 2030, {
      message: 'Must be between 1500 and 2030',
    }),
  summery: z.string().trim().min(10, 'Min 10 chars.'),
  title: z.string().trim().min(2, 'Min 2 chars.'),
  netflixOriginal: z.boolean().default(false),
})

const AddMovie = () => {
  const { toast } = useToast()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      duration: undefined,
      genre: undefined,
      poster: '',
      rating: 3.5,
      releasingYear: undefined,
      summery: '',
      netflixOriginal: false,
    },
    mode: 'all',
  })

  const { isValid, isSubmitting } = form.formState

  function onSubmit(values: z.infer<typeof formSchema>) {
    MovieService.addMovie(JSON.stringify(values))
      .then((res) => {
        toast({
          title: 'Success!',
          description: 'Movie Added Successfully.',
        })

        navigate(`/movies/${res._id}`)
      })
      .catch((error: Error) => {
        toast({
          title: 'Could Not Add Movie.',
          description: error.message,
        })
      })
  }

  return (
    <section className='add-movie'>
      <Helmet>
        <title>CV | Add Movie </title>
      </Helmet>
      <div className='con p-4 md:p-8'>
        <FormProvider {...form}>
          <MovieForm
            form={form}
            onSubmit={onSubmit}
            isValid={!isValid}
            isSubmitting={isSubmitting}
          />
        </FormProvider>
      </div>
    </section>
  )
}

export default AddMovie
