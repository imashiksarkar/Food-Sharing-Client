import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import FoodForm from './FoodForm'
import { DevTool } from '@hookform/devtools'

const formSchema = z.object({
  category: z.enum([
    'action',
    'comedy',
    'drama',
    'horror',
    'romance',
    'thriller',
  ]),
  imageUrl: z.string().url(),
  quantity: z
    .number()
    .transform((value) => parseFloat(value.toFixed(1)))
    .refine((value) => !isNaN(value) && value >= 1 && value <= 5, {
      message: 'Must be between 0 and 5',
    }),
  expiresAt: z.date().min(new Date(Date.now() + 1000 * 60 * 60)),
  additionalNotes: z.string().trim().min(10, 'Min 10 chars.'),
  name: z.string().trim().min(2, 'Min 2 chars.'),
})

const AddFood = () => {
  // const { toast } = useToast()
  // const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      category: undefined,
      imageUrl: '',
      quantity: 50,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60),
      additionalNotes: '',
    },
    mode: 'all',
  })

  const { isValid, isSubmitting } = form.formState

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <section className='add-movie'>
      <div className='con p-4 md:p-8'>
        <FormProvider {...form}>
          <FoodForm
            form={form}
            onSubmit={onSubmit}
            isValid={!isValid}
            isSubmitting={isSubmitting}
          />
        </FormProvider>
        <DevTool control={form.control} />
      </div>
    </section>
  )
}

export default AddFood
