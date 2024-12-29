import { useQuery } from '@tanstack/react-query'

interface IFood {
  _id: string
  name: string
  additionalNotes: string
  imageUrl: string
  category: string
  expiresAt: string
  authorEmail: string
  donatorName: string
  pickupLocation: string
  foodStatus: string
  quantity: number
  createdAt: string
  updatedAt: string
}

const useFetchRequestedFoods = () =>
  useQuery({
    queryKey: ['foods', 'author', 'request'],
    queryFn: async () => {
      return fetch(`${import.meta.env.VITE_API_URL}/foods/request`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }).then((res) => res.json()) as Promise<IFood[]>
    },
    staleTime: 60 * 1000 * 60,
  })

export default useFetchRequestedFoods
