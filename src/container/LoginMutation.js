import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
    mutation login($input: UserCredentials!){
        login(input: $input)
    }
`
export const useLoginMutation = (email, password) => {
  const [loginMutation, { loading: loginLoading, error: loginError }] = useMutation(LOGIN, { variables: { input: { email, password } } })
  return { loginMutation, loginLoading, loginError }
}
