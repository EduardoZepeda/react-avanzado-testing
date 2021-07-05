import React from 'react'
import { Grid, Link, Image } from './styles'
import { PropTypes } from 'prop-types'

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

ListOfFavorites.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string
    }))
}
