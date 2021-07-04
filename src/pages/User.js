import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout
      title='Tu perfil'
      description='Tu cuenta en Petgram'
    >
      <h1>Users</h1>
      <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
    </Layout>
  )
}
