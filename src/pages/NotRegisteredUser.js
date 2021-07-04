import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/RegisterMutation'
import { useLoginMutation } from '../hooks/LoginMutation'
import { Layout } from '../components/Layout'

export const NotRegisteredUser = () => {
  const { registerMutation, registerLoading, registerError } = useRegisterMutation()
  const { loginMutation, loginLoading, loginError } = useLoginMutation()

  return (
    <Layout
      title='Bienvenido a Petgram'
      description='Comparte las imágenes de tus lomitos, aves y nekos'
    >
      <Context.Consumer>
        {
                ({ activateAuth }) => {
                  const handleRegister = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input } // Necesario para que graphql reciba un objeto con la estructura de abajo
                    registerMutation({ variables }) // {"input": "email": "email@example.org", "password": "********"}
                      .then(({ data }) => {
                        const { signup } = data
                        activateAuth(signup)
                      })
                      .catch(error => console.log(error))
                  }
                  const handleLogin = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input } // Necesario para que graphql reciba un objeto con la estructura de abajo
                    loginMutation({ variables }) // {"input": "email": "email@example.org", "password": "********"}
                      .then(({ data }) => {
                        const { login } = data
                        activateAuth(login)
                      })
                      .catch(error => console.log(error))
                  }
                  const registerErrorMessage = registerError && 'El usuario ya existe o hay algún problema'
                  const loginErrorMessage = loginError && 'El usuario y/o la contraseña son incorrectos'
                  return (
                    <>
                      <UserForm onSubmit={handleRegister} disabled={registerLoading} errorMsg={registerError} title='Registrarse' />
                      <UserForm onSubmit={handleLogin} disabled={loginLoading} errorMsg={loginErrorMessage} title='Iniciar Sesion' />
                    </>
                  )
                }
            }
      </Context.Consumer>
    </Layout>
  )
}
