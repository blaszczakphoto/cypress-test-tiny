describe('page', () => {
  it('this should work, but does not', () => {
    cy.visit('https://getbootstrap.com/docs/4.1/components/modal/')

    cy.get("body > div > div > main > div:nth-child(20) > button").as('open_modal_btn')
    cy.get('#exampleModalLive > div > div > div.modal-header > button span').as('close_modal_btn')

    cy.get('@open_modal_btn').scrollIntoView().click()

    cy.get('@close_modal_btn').click()

    cy.get('@open_modal_btn').scrollIntoView().click()
    cy.get('@close_modal_btn').click()
  })

  it('this is workaround', () => {
    cy.visit('https://getbootstrap.com/docs/4.1/components/modal/')

    cy.get("body > div > div > main > div:nth-child(20) > button").as('open_modal_btn')
    cy.get('#exampleModalLive > div > div > div.modal-header > button span').as('close_modal_btn')
    const number_of_wait = 200;

    cy.get('@open_modal_btn').scrollIntoView().click()

    cy.wait(number_of_wait)

    cy.get('@close_modal_btn').click()

    cy.wait(number_of_wait)

    cy.get('@open_modal_btn').scrollIntoView().click()
    cy.get('@close_modal_btn').click()
  })
})
