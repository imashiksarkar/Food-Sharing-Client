import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import FoodForm from './FoodForm'
import { DevTool } from '@hookform/devtools'
import { useToast } from '@/hooks/use-toast'
import { useNavigate } from 'react-router'
import useAddFood from '@/hooks/useAddFood'

const formSchema = z.object({
  category: z.enum(['breakfast', 'lunch', 'dinner', 'snacks', 'drinks']),
  imageUrl: z.string().url(),
  quantity: z.preprocess(
    (value) => parseInt(value as string, 10),
    z.number().min(50, 'Qty. must be at least 50 grams.')
  ),
  expiresAt: z.preprocess(
    (value) => {
      const d = new Date(value as string)
      d.setHours(23)
      d.setMinutes(59)
      d.setSeconds(59)
      d.setMilliseconds(999)

      return d.toISOString()
    },
    z
      .string()
      .datetime()
      .refine(
        (value) => {
          const date = new Date(value)

          if (date.getTime() > Date.now() + 1000 * 60 * 60) return true

          return false
        },
        {
          message: 'Date must be 1h to the future.',
        }
      )
  ),
  additionalNotes: z.string().trim().min(10, 'Min 10 chars.'),
  name: z.string().trim().min(2, 'Min 2 chars.'),
  pickupLocation: z.string().trim().min(2, 'Min 2 chars.'),
})

const AddFood = () => {
  const { toast } = useToast()
  const navigate = useNavigate()
  const nutation = useAddFood()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      category: undefined,
      imageUrl: '',
      quantity: 50,
      expiresAt: new Date(Date.now() + 1000 * 60 * 61).toISOString(),
      additionalNotes: '',
      pickupLocation: '',
    },
    mode: 'all',
  })

  const { isValid, isSubmitting } = form.formState

  function onSubmit(values: z.infer<typeof formSchema>) {
    nutation.mutate(values, {
      onSuccess() {
        toast({
          title: 'Success!',
          description: 'food Added Successfully.',
        })
        navigate('/dashboard/foods')
      },
    })
  }

  return (
    <section className='add-food'>
      <div className='con p-4 md:p-8'>
        <FormProvider {...form}>
          <FoodForm
            form={form}
            onSubmit={onSubmit}
            isValid={!isValid}
            isSubmitting={isSubmitting}
          />
        </FormProvider>
        {import.meta.env.VITE_ENV === 'development' && (
          <DevTool control={form.control} />
        )}
      </div>
    </section>
  )
}

export default AddFood
