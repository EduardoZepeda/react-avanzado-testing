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
      <Form disabled={disabled || email.value.length < 4 || password.value.length < 1} onSubmit={handleSubmit}>
        <Input minlength='4' disabled={disabled} type='email' placeholder='Email' {...email} />
        <Input minlength='1' disabled={disabled} type='password' placeholder='Password' {...password} />
        <Button disabled={disabled || email.value.length < 4 || password.value.length < 1}>Iniciar sesion</Button>
      </Form>
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </>
  )
}
