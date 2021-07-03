import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, ErrorMsg } from './styles'

export const UserForm = ({ title, onSubmit, errorMsg, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} type='email' placeholder='Email' {...email} />
        <Input disabled={disabled} type='password' placeholder='Password' {...password} />
        <Button disabled={disabled}>Iniciar sesion</Button>
      </Form>
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </>
  )
}
