import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import Context from './Context'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://react-avanzado-testing-b39h5jmoy-eduardozepeda.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
