
describe('Main > Map', () => {

  const project_title = 'Queer Poems'

  before(() => {
    cy.visit('http://localhost:3000/')
  })
  describe('Call page and change page views', () => {
    before(() => {
      cy.wait(1000)
      cy.visit('http://localhost:3000/main')
    })
    it('displays main > map page ', () => {
      cy.wait(1000)
      cy.get('#map_header_content').contains('Start —')
      cy.get('#map_header_content').contains(project_title)
    })
    it('click on right nav button switches to list ', () => {
      cy.get("a#link_to_list").should("have.attr", "href", "/main#list").click()
      cy.url().should('eq', 'http://localhost:3000/main#list')
      cy.wait(1500)
      cy.get('section#list ul li h2').contains(project_title)
    })
    it('click on left nav button switches back to map ', () => {
      cy.get("a#link_from_list_to_map").should("have.attr", "href", "/main#map").click()
      cy.url().should('eq', 'http://localhost:3000/main#map')
    })
    it('click again on left nav button switches to info ', () => {
      cy.get("a#link_to_info").should("have.attr", "href", "/main#info").click()
      cy.url().should('eq', 'http://localhost:3000/main#info')
    })
    it('shows header of info block ', () => {
      cy.get('#info_content_header h2').contains(project_title)
    })
  })

})
