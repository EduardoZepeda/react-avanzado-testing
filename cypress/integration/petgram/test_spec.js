/* global describe, it, cy */
describe('Petgram', function () {
  it('Prueba que la aplicación funcione', function () {
    cy.visit('/')
  })
  it('La ruta del detalle de una mascota muestra un elemento article', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })
  it('Tras visitar el primer enlace de la navbar nos redirige al home de la app', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('eq', Cypress.config().baseUrl)
  })
  it('La ruta favs debe mostrar dos formularios para usuarios no loggeados', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
