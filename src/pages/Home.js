import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = ({ id }) => {
  return (
    <>
      <Layout
        title='Tu app de mascotas'
        description='Comparte las imágenes de tus lomitos, aves y nekos'
      >
        <ListOfCategories />
        <ListOfPhotoCards categoryId={id} />
      </Layout>
    </>
  )
}
