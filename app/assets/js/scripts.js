/* global hljs, $ */

// initialize highlight.js for JavaScript code highlighting
hljs.initHighlightingOnLoad()

$(() => {

  // begin: Handle our route listeners -------------

  $('.network-post').on('click', (e) => {
    e.preventDefault()
    postComment(e)
  })

  // begin: Handle our route logic -------------
  let root = 'https://jsonplaceholder.typicode.com'

  function postComment () {
    $.ajax({
      url: `${root}/comments?param=foo%bar`,
      method: 'POST',
      data: {
        name: 'Using POST in cy.route()',
        email: 'hello@cypress.io',
        body: 'You can change the method used for cy.route() to be GET, POST, PUT, PATCH, or DELETE',
      },
    }).then(() => {
      $('.network-post-comment').text('POST successful!')
    })
  }

  // end -----------------------------------------

})
