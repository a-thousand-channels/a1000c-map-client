
describe('Splash', () => {


  it('displays splash page ', () => {
    cy.visit('http://localhost:3000/a1000c-map-client/')
    cy.get('h2').contains('Welcome to an early prototype of our web map.')
  })
})
