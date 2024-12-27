import { useMutation, useQueryClient } from '@tanstack/react-query'

interface IFoodInput {
  category: 'breakfast' | 'lunch' | 'dinner' | 'snacks' | 'drinks'
  imageUrl: string
  quantity: number
  expiresAt: string
  additionalNotes: string
  name: string
  pickupLocation: string
}

const useAddFood = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['foods'],
    mutationFn: async (data: IFoodInput) => {
      return fetch(`${import.meta.env.VITE_API_URL}/foods`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['foods'] })
    },
  })
}

export default useAddFood
