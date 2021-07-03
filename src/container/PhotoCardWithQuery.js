import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql, useQuery } from '@apollo/client'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const GET_SINGLE_PHOTO_BY_ID = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO_BY_ID, {
    variables: {
      id: id
    }
  })
  if (error) {
    return <h2>Something went wrong :(</h2>
  }
  if (loading) {
    return <AiOutlineLoading3Quarters animate='spin' />
  }

  return (
    <PhotoCard {...data.photo} />
  )
}
