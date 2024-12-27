import { Button } from '@/components/ui/button'
import DatePicker from '@/components/ui/date-picker'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MovieForm = ({ isSubmitting, form, onSubmit, isValid }: any) => {
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
      <FormField
        control={form.control}
        name='name'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Food Name</FormLabel>
            <FormControl>
              <Input placeholder='Chicken Biryani' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='imageUrl'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Food Photo</FormLabel>
            <FormControl>
              <Input placeholder='https://...' type='url' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='additionalNotes'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Additional Notes</FormLabel>
            <FormControl>
              <Textarea placeholder='Describe your food here' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='category'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className='uppercase'>
                  <SelectValue placeholder='Select a category to display' />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {['breakfast', 'lunch', 'dinner', 'snacks', 'drinks'].map(
                  (category) => (
                    <SelectItem
                      key={category}
                      value={category}
                      className='uppercase'
                    >
                      {category}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='expiresAt'
        render={({ field }) => (
          <FormItem>
            <span className='flex items-center gap-8'>
              <FormLabel>Expiration Date</FormLabel>
              <FormControl>
                <DatePicker
                  defaultValue={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
            </span>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='quantity'
        render={({ field }) => (
          <FormItem className='flex flex-col'>
            <FormLabel>Quantity</FormLabel>
            <FormControl>
              <Input
                type='number'
                placeholder='Food quantity in grams'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='pickupLocation'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Pickup Location</FormLabel>
            <FormControl>
              <Input placeholder='Pickup location' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button disabled={isValid} type='submit'>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  )
}

export default MovieForm
