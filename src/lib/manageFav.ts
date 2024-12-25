export const addToFav = (movieId: string) => {
  const favs = new Set(
    JSON.parse(localStorage.getItem('favs') || '[]') as Set<string>
  )

  favs.add(movieId)

  localStorage.setItem('favs', JSON.stringify(Array.from(favs)))
}

export const isFavorite = (movieId: string): boolean => {
  return new Set(
    JSON.parse(localStorage.getItem('favs') || '[]') as string[]
  ).has(movieId)
}

export const deleteFromFav = (movieId: string) => {
  const favs = new Set(
    JSON.parse(localStorage.getItem('favs') || '[]') as string[]
  ) as Set<string>

  const hasDeleted = favs.delete(movieId)

  localStorage.setItem('favs', JSON.stringify(Array.from(favs)))

  return hasDeleted
}
