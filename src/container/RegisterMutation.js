import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
    mutation signup($input: UserCredentials!){
        signup(input: $input)
    }
`
export const useRegisterMutation = (email, password) => {
  const [registerMutation, { loading: registerLoading, error: registerError }] = useMutation(REGISTER, { variables: { input: { email, password } } })
  return { registerMutation, registerLoading, registerError }
}
