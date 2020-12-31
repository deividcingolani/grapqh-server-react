const { booksQuery } = require('../../QueriesGraph')
describe('REST API Test with Cypress', function () {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:4000', booksQuery).as('graphQL')
  })

  it('API Test-Validate Headers', () => {
    cy.get('@graphQL')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8')
  })

  it('API Test-Validate Status Code', () => {
    cy.get('@graphQL').its('status').should('equal', 200)
  })

  it('API Test-Validate Name Value', () => {
    cy.get('@graphQL')
      .its('body')
      .should('deep.equal', {
        data: {
          books: [{ title: 'The Awakening' }, { title: 'City of Glass' }],
        },
      })
  })
})
