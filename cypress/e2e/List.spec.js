describe('List', () => {

  before(() => {
    cy.visit('http://localhost:3000/');
    cy.wait(1500);
    cy.visit('http://localhost:3000/main#list');
  })

  it('should show list content (and not the map)', () => {
    cy.wait(1500)
    cy.url().should('eq', 'http://localhost:3000/main/#list')
    cy.get('#list div div ul').should('not.be.empty');
    cy.get('#list div div ul li').should('have.length.greaterThan', 0);

  });
  it('should focus on list section only', () => {
    cy.wait(1500)
    cy.get('#list').should(($el) => {
      const bottom = Cypress.$(cy.state('window')).height();
      const rect = $el[0].getBoundingClientRect();
      expect(rect.top).to.be.at.least(0);
      expect(rect.bottom).to.be.lessThan(bottom+10);
    });
  })
});
