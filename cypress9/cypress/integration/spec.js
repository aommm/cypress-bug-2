/// <reference types="cypress" />
describe('baseUrl', () => {
  it('should equal google.com', () => {
    cy.wrap(cy.config('baseUrl')).should('equal', 'http://google.com')
  })
})
