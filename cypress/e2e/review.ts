/// <reference path="../support/index.d.ts" />

describe('Review', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it("shouldn't add review with invalid form", () => {
    cy.fillInvalidForm()

    cy.findByRole('modal').within(() => {
      cy.findByRole('button', { name: /Envie sua avaliação/i }).should('be.disabled')
    })
  })

  it('should close modal when escape is pressed', () => {
    cy.exitModalOnEscape()
  })

  it('should fill form and close modal', () => {
    cy.fillValidForm()
    cy.findByRole('loading').should('exist')
    cy.wait(1000)
    cy.findByRole('loading').should('not.exist')
  })

  it('should close modal and reopen with clean form', () => {
    cy.fillInvalidForm()
    cy.exitModalOnEscape()
    cy.openModal()
    cy.findByRole('modal').should('exist')
    cy.findByRole('textbox').should('have.text', '1234')
  })

  it('should open responsive menu when click in hamburguer icon', () => {
    cy.viewport('iphone-6')
    cy.exitModalOnOverlayClick()
    cy.openHamburguerMenu()
    cy.findByText('Oi, Thiago').should('exist')
  })
})
