import React from 'react'
import { Helmet } from 'react-helmet'
import { TitleContainer, Title, Subtitle } from './styles'

export const Layout = ({ children, title, description, showTitle = false, showDescription = false }) => {
  return (
    <>
      <Helmet>
        {title && <title>Petgram | {title}</title>}
        {description && <meta name='description' content={description} />}
      </Helmet>
      <TitleContainer>
        {(title && showTitle) && <Title>{title}</Title>}
        {(description && showDescription) && <Subtitle>{description}</Subtitle>}
        {children}
      </TitleContainer>
    </>
  )
}
