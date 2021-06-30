import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { Navbar } from './components/Navbar'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <>
      <Logo />
      <GlobalStyles />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {
              ({ isAuth }) => isAuth
                ? <Router>
                  <UserProfile path='/user' />
                </Router>
                : <Router>
                  <LoginScreen path='/user' />
                </Router>
                        }
      </UserLogged>
      <Navbar />
    </>
  )
}
