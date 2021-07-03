import React from 'react'
import { useGetFavorites } from '../hooks/useGetFavorites'
import { ListOfFavorites } from '../components/ListOfFavorites'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export const Favorites = () => {
  const { favorites, favoritesError, favoritesLoading } = useGetFavorites()
  if (favoritesLoading) return <AiOutlineLoading3Quarters animate='spin' />
  if (favoritesError) return <p>Something went wrong :(</p>
  return (<ListOfFavorites favorites={favorites.favs} />)
}
