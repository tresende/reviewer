// load type definitions from Cypress module
/// <reference types="cypress" />

type FieldsAttributes = {
  label: string
  name: string | number
}

declare namespace Cypress {
  interface Chainable {
    fillInvalidForm(): Chainable<Element>
    fillValidForm(): Chainable<Element>
    exitModalOnEscape(): Chainable<Element>
    exitModalOnOverlayClick(): Chainable<Element>
    openModal(): Chainable<Element>
    openHamburguerMenu(): Chainable<Element>
  }
}
