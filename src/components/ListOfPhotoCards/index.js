import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useQuery, gql } from "@apollo/client"

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(withPhotos);

  if (error) {
    return <h2>Something went wrong :(</h2>;
  }
  if (loading) {
    return <AiOutlineLoading3Quarters size='32px'/>;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};