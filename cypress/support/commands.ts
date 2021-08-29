import '@testing-library/cypress/add-commands'

Cypress.Commands.add('fillInvalidForm', () => {
  const data = {
    text: '1234',
    score: 5
  }
  cy.findByRole('modal').within(() => {
    cy.findByRole('textbox').type(data.text)
    cy.findByRole('checkbox').click()
    cy.get('[aria-label=star]').first().click()
  })
})

Cypress.Commands.add('fillValidForm', () => {
  const data = {
    text: '12345',
    score: 5
  }
  cy.findByRole('modal').within(() => {
    cy.findByRole('textbox').type(data.text)
    cy.get('[aria-label=star]').first().click()
    cy.findByRole('button', { name: /Envie sua avaliação/i }).click()
  })
})

Cypress.Commands.add('exitModalOnEscape', () => {
  cy.get('body').type('{esc}')
})

Cypress.Commands.add('openModal', () => {
  cy.findByRole('button', { name: /avaliar/i }).click()
})

Cypress.Commands.add('exitModalOnOverlayClick', () => {
  cy.findByRole('modal').click()
})

Cypress.Commands.add('openHamburguerMenu', () => {
  cy.get('[data-testid=open-menu]').click()
})
