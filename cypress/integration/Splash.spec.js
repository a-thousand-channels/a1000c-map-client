
describe('Splash', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/a1000c-map-client/')
  })
  it('displays splash page ', () => {
    cy.get('h2').contains('Welcome')
  })
  it('on button click loads map ', () => {
    cy.contains('Check it out').click()
    cy.url().should('eq', 'http://localhost:3000/a1000c-map-client/main#map')
  })
})
