import { addToFav, deleteFromFav } from '@/lib/manageFav'
import Token from '@/lib/token'

interface Movie {
  duration: number
  genre: 'action' | 'comedy' | 'drama' | 'horror' | 'romance' | 'thriller'
  poster: string
  rating: number
  releasingYear: number
  summery: string
  title: string
  netflixOriginal: boolean
}

export default class FavService {
  static baseUrl = 'https://vcapi.ashiksarkar.xyz'

  static async getFavMovie() {
    const response = await fetch(`${this.baseUrl}/favorites`, {
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      },
    })

    const serverData = await response.json()

    if (!response.ok) throw new Error(serverData.message)

    return serverData as {
      _id: string
      userEmail: string
      movies: (Movie & { _id: string })[]
    }
  }

  static async addToFav(movieId: string) {
    const response = await fetch(`${this.baseUrl}/favorites/${movieId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      },
    })

    const serverData = await response.json()

    if (!response.ok) throw new Error(serverData.message)
    addToFav(movieId)

    return serverData as {
      _id: string
      userEmail: string
      movies: string[]
    }
  }

  static async deleteFromFav(movieId: string) {
    const response = await fetch(`${this.baseUrl}/favorites/${movieId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      },
    })

    const serverData = await response.json()

    if (!response.ok) throw new Error(serverData.message)
    deleteFromFav(movieId)

    return serverData as {
      _id: string
      userEmail: string
      movies: string[]
    }
  }
}
