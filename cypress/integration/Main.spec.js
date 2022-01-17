
describe('Main > Map', () => {

  const project_title = 'Queer Poems'

  before(() => {
    cy.visit('http://localhost:3000/a1000c-map-client/')
  })
  describe('Call page and change page views', () => {
    before(() => {
      cy.visit('http://localhost:3000/a1000c-map-client/main#map')
    })
    it('displays main > map page ', () => {
      cy.get('#map_header_content').contains('Start —')
      cy.get('#map_header_content').contains(project_title)
    })
    it('click on right nav button switches to list ', () => {
      cy.get("a#link_to_list").should("have.attr", "href", "main#list").click()
      cy.url().should('eq', 'http://localhost:3000/a1000c-map-client/main#list')
    })
    it('shows header of list block', () => {
      cy.get('ul li h2').contains(project_title)
    })
    it('click on left nav button switches back to map ', () => {
      cy.get("a#link_from_list_to_map").should("have.attr", "href", "/a1000c-map-client/main#map").click()
      cy.url().should('eq', 'http://localhost:3000/a1000c-map-client/main#map')
    })
    it('click again on left nav button switches to info ', () => {
      cy.get("a#link_to_info").should("have.attr", "href", "/a1000c-map-client/main#info").click()
      cy.url().should('eq', 'http://localhost:3000/a1000c-map-client/main#info')
    })
    it('shows header of info block ', () => {
      cy.get('#info_content_header h2').contains(project_title)
    })
  })

})
