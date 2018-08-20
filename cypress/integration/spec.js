describe('Network requests', () => {
  it('cy.route() - route responses to matching requests', () => {
    // https://on.cypress.io/route

    cy.visit('http://localhost:8080/commands/network-requests')
    cy.server()

    // Listen to POST to comments
    cy.route('POST', '/comments?param=foo%bar').as('postComment')

    // we have code that posts a comment when
    // the button is clicked in scripts.js
    cy.get('.network-post').click()
    cy.wait('@postComment')

    // get the route
    cy.get('@postComment').should((xhr) => {
      expect(xhr.requestBody).to.include('email')
      expect(xhr.requestHeaders).to.have.property('Content-Type')
      expect(xhr.responseBody).to.have.property('name', 'Using POST in cy.route()')
    })
  })
})
