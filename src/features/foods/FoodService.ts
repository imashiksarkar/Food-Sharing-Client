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
  _id: string
  createdBy: string
}

export default class MovieService {
  static baseUrl = 'https://vcapi.ashiksarkar.xyz'

  static async getMovies(page: number) {
    const response = await fetch(`${this.baseUrl}/movies?page=${page}`)

    const serverData = await response.json()

    if (!response.ok) throw new Error(serverData.message)

    return serverData as Movie[]
  }

  static async getMovie(id: string) {
    const response = await fetch(`${this.baseUrl}/movies/${id}`)

    const serverData = await response.json()

    if (!response.ok) throw new Error(serverData.message)

    return serverData as Movie | null
  }

  static async addMovie(data: string) {
    const response = await fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token.getToken()}`,
      },
      body: data,
    })

    const serverData = await response.json()

    if (!response.ok) throw new Error(serverData.message)

    return serverData as Movie
  }

  static async deleteMovie(id: string) {
    const response = await fetch(`${this.baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      },
    })

    const serverData = await response.json()

    if (!response.ok) throw new Error(serverData.message)

    return serverData as Movie
  }

  static async updateFood(id: string, data: Partial<Movie>) {
    const response = await fetch(`${this.baseUrl}/movies/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token.getToken()}`,
      },
      body: JSON.stringify(data),
    })

    const serverData = await response.json()

    if (!response.ok) throw new Error(serverData.message)

    return serverData as Movie
  }

  static async getFeaturedMovies() {
    const response = await fetch(`${this.baseUrl}/movies/featured`)
    const serverData = await response.json()

    if (!response.ok) throw new Error(serverData.message)

    return serverData as Pick<Movie, 'poster' | 'title' | '_id'>[]
  }
  static async getNetflixOriginalMovies() {
    const response = await fetch(`${this.baseUrl}/movies/originals`)
    const serverData = await response.json()

    if (!response.ok) throw new Error(serverData.message)

    return serverData as Pick<Movie, 'poster' | 'title' | '_id'>[]
  }
}
