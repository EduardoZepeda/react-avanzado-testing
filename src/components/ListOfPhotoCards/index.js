import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { getPhotos } from '../../hoc/getPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, data, error } = getPhotos(categoryId)
  if (error) {
    return <h2>Something went wrong :(</h2>
  }
  if (loading) {
    return <AiOutlineLoading3Quarters size='32px' />
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
