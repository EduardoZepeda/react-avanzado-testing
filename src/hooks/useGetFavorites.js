import { gql, useQuery } from '@apollo/client'

const GET_FAVORITES = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const useGetFavorites = () => {
  const { data: favorites, error: favoritesError, loading: favoritesLoading } = useQuery(GET_FAVORITES, { fetchPolicy: 'cache-and-network' })
  return { favorites, favoritesError, favoritesLoading }
}
