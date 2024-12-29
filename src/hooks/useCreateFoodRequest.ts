import { useMutation, useQueryClient } from '@tanstack/react-query'

const useCreateFoodRequest = (foodId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['foods', 'request'],
    mutationFn: async () => {
      return fetch(`${import.meta.env.VITE_API_URL}/foods/request/${foodId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['foods'] })
    },
  })
}

export default useCreateFoodRequest
