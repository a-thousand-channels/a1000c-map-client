describe('Leaflet map', () => {

  before(() => {
    cy.visit('http://localhost:3000/');
    cy.wait(1000);
    cy.visit('http://localhost:3000/main');
  })

  it('should render map and depending controls', () => {

    // Assert that the map container element exists
    cy.get('.vue2leaflet-map').should('exist');

    // Assert that the Leaflet library exists
    cy.window().then((win) => {
      expect(win.L).to.exist;
    });

    cy.get('.leaflet-control-zoom').should('exist');

    // Assert that the containter for the basemap exists and is not empty
    cy.get('.leaflet-tile-pane').should('exist');
    cy.get('.leaflet-tile-pane').should('not.be.empty');
  });
  it('should render markers', () => {
    cy.get('.leaflet-marker-pane').should('not.be.empty');
    cy.get('.leaflet-marker-pane svg').should('have.length.greaterThan', 0);
  }),
  it('should be zoomable', () => {

    // Assert that the zoom control element exists
    cy.get('.leaflet-control-zoom-in').should('exist');
    cy.get('.leaflet-control-zoom-out').should('exist');

    // Assert initial zoom levels
    cy.get('#map_map')
      .invoke('attr', 'data-zoom')
      .should('equal', '3')

    // Assert that zooming in changes the zoom level
    cy.get('.leaflet-control-zoom-in').click();
    cy.get('#map_map')
      .invoke('attr', 'data-zoom')
      .should('equal', '4')

    // Assert that zooming in twice changes the zoom level by two levels
    cy.get('.leaflet-control-zoom-in').click();
    cy.get('#map_map')
      .invoke('attr', 'data-zoom')
      .should('equal', '5')


    // Assert that zooming out changes the zoom level
    cy.get('.leaflet-control-zoom-out').click();
    cy.get('#map_map')
      .invoke('attr', 'data-zoom')
      .should('equal', '4')

  });
});
