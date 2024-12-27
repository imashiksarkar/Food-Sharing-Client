import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

const DatePicker = ({
  onChange,
  defaultValue,
}: {
  onChange: (date: string) => void
  defaultValue: string
}) => {
  const [date, setDate] = useState<Date>(new Date(defaultValue))

  useEffect(() => {
    onChange(date.toISOString())
  }, [date, onChange])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={(day) => day && setDate(day)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker
