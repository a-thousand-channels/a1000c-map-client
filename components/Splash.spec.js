import { mount } from '@cypress/vue'
import Splash from './Splash.vue'

describe('Splash', () => {

  it('displays splash page ', () => {
    mount(Splash)
    cy.get('h2').contains('Welcome')
  })
})
