import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
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
import { Rating } from 'react-simple-star-rating'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MovieForm = ({isSubmitting, form, onSubmit, isValid }: any) => {
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
      <FormField
        control={form.control}
        name='title'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Movie Name</FormLabel>
            <FormControl>
              <Input placeholder='Mr. Bean' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='poster'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Movie Poster</FormLabel>
            <FormControl>
              <Input placeholder='https://...' type='url' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='summery'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Movie Descriptions</FormLabel>
            <FormControl>
              <Textarea placeholder='Describe movie here' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='genre'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Genre</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder='Select a genre to display' />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {[
                  'action',
                  'comedy',
                  'drama',
                  'horror',
                  'romance',
                  'thriller',
                ].map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre.toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='releasingYear'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Releasing Year</FormLabel>
            <FormControl>
              <Input
                type='number'
                placeholder='Movie Releasing Year'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='rating'
        render={({ field }) => (
          <FormItem className='flex flex-col'>
            <FormLabel>Rating:</FormLabel>
            <FormControl>
              <Rating
                onClick={field.onChange}
                initialValue={field.value}
                size={40}
                transition
                allowFraction
                emptyStyle={{ display: 'flex' }}
                SVGstyle={{ display: 'inline-block', marginBottom: 10 }}
                style={{ marginBottom: -10 }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='duration'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Duration</FormLabel>
            <FormControl>
              <Input
                type='number'
                placeholder='Movie Duration in minutes'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='netflixOriginal'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel>Netflix Original?</FormLabel>
          </FormItem>
        )}
      />
      <Button disabled={isValid} type='submit'>
        {isSubmitting?'Submitting...':'Submit'}
      </Button>
    </form>
  )
}

export default MovieForm
