import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = ({ detailId }) => {
  return (
    <Layout
      title={`Foto ${detailId}`}
      description='Comparte las imágenes de tus lomitos, aves y nekos'
    >
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
