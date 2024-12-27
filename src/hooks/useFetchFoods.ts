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

const useFetchFoods = () =>
  useQuery({
    queryKey: ['foods'],
    queryFn: async () => {
      return fetch(`${import.meta.env.VITE_API_URL}/foods`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json()) as Promise<IFood[]>
    },
    staleTime: 60 * 1000 * 60,
  })

export default useFetchFoods
