import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'
import { PropTypes } from 'prop-types'

export const FavButton = ({ liked, likes, onClick, disabled }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Button disabled={disabled} onClick={onClick}>
      <Icon size='32px' />{likes} likes!
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}
