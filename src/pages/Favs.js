import React from 'react'
import { Favorites } from '../container/getFavorites'
import { Layout } from '../components/Layout'

export default () => {
  return (
      <Layout
        title='Lo que te importa'
        description='Guarda aquí lo que importa'
      >
        <Favorites />
      </Layout>
  )
}
