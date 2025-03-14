import useFetchFood from '@/hooks/useFetchFood'
import { zodResolver } from '@hookform/resolvers/zod'
import { Suspense, useLayoutEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Await, useNavigate, useParams } from 'react-router'
import { z } from 'zod'
import FoodForm from '../dashboard/FoodForm'
import useUpdateFood from '@/hooks/useUpdateFood'

let oldDate: string | null = null

const formSchema = z.object({
  category: z.enum(['breakfast', 'lunch', 'dinner', 'snacks', 'drinks']),
  imageUrl: z.string().url(),
  quantity: z.preprocess(
    (value) => parseInt(value as string, 10),
    z.number().min(50, 'Qty. must be at least 50 grams.')
  ),
  expiresAt: z
    .string()
    .datetime()
    .refine(
      (value) => {
        const newDateTime = new Date(value).getTime()
        const oldDateTime = new Date(oldDate as string).getTime()

        return newDateTime >= oldDateTime
      },
      {
        message: 'Date must be greater than or equal to old date.',
      }
    ),
  additionalNotes: z.string().trim().min(10, 'Min 10 chars.'),
  name: z.string().trim().min(2, 'Min 2 chars.'),
  pickupLocation: z.string().trim().min(2, 'Min 2 chars.'),
})

type FormSchema = z.infer<typeof formSchema>
type CategoryEnum = z.infer<typeof formSchema>['category']

const UpdateFoodForm = ({
  initialData,
  id,
}: {
  initialData: FormSchema
  id: string
}) => {
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
    mode: 'all',
  })
  const { isValid } = form.formState

  useLayoutEffect(() => {
    oldDate = initialData.expiresAt
  }, [initialData.expiresAt])

  const updateFoodMutation = useUpdateFood(id)

  function handleSubmit(values: FormSchema) {
    updateFoodMutation.mutate(values, {
      onSuccess: () => {
        navigate(`/foods/${id}`)
      },
    })
  }
  return (
    <section className='add-food'>
      <div className='con p-4 md:p-8'>
        <FormProvider {...form}>
          <FoodForm form={form} onSubmit={handleSubmit} isValid={!isValid} />
        </FormProvider>
      </div>
    </section>
  )
}

const UpdateFood = () => {
  const { foodId } = useParams()

  const { error, promise: foodDataPromise } = useFetchFood(foodId as string)

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={foodDataPromise} errorElement={<p>{error?.message}</p>}>
        {({
          name,
          category,
          imageUrl,
          quantity,
          expiresAt,
          additionalNotes,
          pickupLocation,
          _id,
        }) => (
          <UpdateFoodForm
            id={_id}
            initialData={{
              name,
              category: category as CategoryEnum,
              imageUrl,
              quantity,
              expiresAt,
              additionalNotes,
              pickupLocation,
            }}
          />
        )}
      </Await>
    </Suspense>
  )
}

export default UpdateFood
