import React from 'react'
import { Grid, Link, Image } from './styles'

export const ListOfFavorites = ({ favorites = [] }) => {
  return (
    <Grid>
      <h2>Favorites</h2>
      {
    favorites.map(favorite => <Link key={favorite.id} to={`/detail/${favorite.id}`}><Image key={favorite.id} src={favorite.src} /></Link>)
}
    </Grid>
  )
}
