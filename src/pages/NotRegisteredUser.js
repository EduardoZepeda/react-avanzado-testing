import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../container/RegisterMutation'


export const NotRegisteredUser = () => {
    const { registerMutation } = useRegisterMutation()
    
    return (
        <Context.Consumer>
            {
                ({activateAuth}) => {
                    const onSubmit = ({email, password}) => {
                        const input = { email, password }
                        const variables = { input } // Necesario para que graphql reciba un objeto con la estructura de abajo
                        registerMutation({ variables }) // {"input": "email": "email@example.org", "password": "********"}
                        .then(activateAuth)
                    }
                    return <>
                        <UserForm onSubmit={onSubmit} title='Registrarse'/>
                        <UserForm onSubmit={activateAuth} title='Iniciar Sesion'/>
                    </>
                }
            }
        </Context.Consumer>
    )
}
