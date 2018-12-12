describe('page', () => {
  it('cy.hash() - get the current URL hash', () => {
    cy.visit('https://getbootstrap.com/docs/4.1/components/modal/')

    cy.get('body > div > div > main > div:nth-child(20) > button').as('open_modal_btn')
    cy.get('#exampleModalLive > div > div > div.modal-header > button span').as('close_modal_btn')

    cy.get('@open_modal_btn').scrollIntoView().click()
    cy.get('.modal-title').should('be.visible')

    cy.get('@close_modal_btn').click()
    cy.get('.modal-title').should('not.be.visible')

    cy.get('@open_modal_btn').scrollIntoView().click()
    cy.get('.modal-title').should('be.visible')

    cy.get('@close_modal_btn').click()
  })
})
