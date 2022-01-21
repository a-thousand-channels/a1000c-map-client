
describe('Splash', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('displays splash page ', () => {
    cy.get('h2').contains('Queer Poems')
    cy.get('a#jump').contains('Check it out')
  })
  it('on button click loads map ', () => {
    cy.contains('Check it out').click()
    cy.url().should('eq', 'http://localhost:3000/main#map')
  })
})
