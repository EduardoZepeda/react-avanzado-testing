import React from 'react'
import { useGetFavorites } from '../hooks/useGetFavorites'
import { ListOfFavorites } from '../components/ListOfFavorites'

export const Favorites = () => {
  const { favorites, favoritesError, favoritesLoading } = useGetFavorites()
  console.log(favoritesError)
  if (favoritesLoading) return <p>Loading...</p>
  if (favoritesError) return <p>Error!</p>
  return (<ListOfFavorites favorites={favorites.favs} />)
}
