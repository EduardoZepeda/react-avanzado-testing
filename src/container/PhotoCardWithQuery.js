import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql, useQuery } from '@apollo/client'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const query = gql`
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
  const { loading, error, data } = useQuery(query, {
    variables: {
      id: id
    }
  })
  if (error) {
    return <h2>Something went wrong :(</h2>
  }
  if (loading) {
    return <AiOutlineLoading3Quarters />
  }

  return (
    <PhotoCard {...data.photo} />
  )
}
