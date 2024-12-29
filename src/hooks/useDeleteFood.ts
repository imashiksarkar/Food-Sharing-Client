import { useMutation, useQueryClient } from '@tanstack/react-query'

const useDeleteFood = (foodId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['foods', 'delete', foodId],
    mutationFn: async (foodId: string) => {
      return fetch(`${import.meta.env.VITE_API_URL}/foods/${foodId}`, {
        method: 'DELETE',
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

export default useDeleteFood
