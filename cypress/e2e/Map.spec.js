describe('Map', () => {

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

    // Assert there a one or more markers (l-circle-marker as SVG)
    cy.get('.leaflet-marker-pane').should('not.be.empty');
    cy.get('.leaflet-marker-pane svg').should('have.length.greaterThan', 0);
  });

  it('should render tooltips', () => {

    // Assert there are one or more tooltips, which are visible without interaction
    cy.get('.leaflet-tooltip-pane').should('not.be.empty');
    cy.get('.leaflet-tooltip-pane div').should('have.length.greaterThan', 0);
    cy.get('.leaflet-tooltip-pane div').first().should('be.visible');
  });

  it('should render and open a popup', () => {

    // Assert there are one or more tooltips, which are visible without interaction
    cy.get('.modal').first().should('exist');
    cy.get('.modal').first().should('not.be.empty');
    cy.get('.modal').first().should('not.be.visible');
    cy.get('.leaflet-marker-pane svg g path').first().trigger('click');
    cy.get('.modal').first().should('be.visible');

  });

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
