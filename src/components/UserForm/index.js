import React, { useState } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ title, onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) =>{
    event.preventDefault()
    onSubmit({email: email.value, password: password.value})
  }

  return (
    <>
    <Title>{title}</Title>
    <Form onSubmit={handleSubmit}>
      <Input type='email' placeholder='Email' {...email} />
      <Input type='password' placeholder='Password' {...password} />
      <Button>Iniciar sesion</Button>
    </Form>
    </>
  )
}
