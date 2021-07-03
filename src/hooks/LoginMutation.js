import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
    mutation login($input: UserCredentials!){
        login(input: $input)
    }
`
export const useLoginMutation = (email, password) => {
  const [mutation, { loading: loginLoading, error: loginError }] = useMutation(LOGIN, { variables: { input: { email, password } } })
  return { loginMutation: mutation, loginLoading, loginError }
}
