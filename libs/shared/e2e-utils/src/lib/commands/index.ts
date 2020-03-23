/// <reference types="Cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * finds an element with a data-cy attribute
     * See: https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements
     */
    getEl<E extends Node = HTMLElement>(
      identifier: string
    ): Chainable<JQuery<E>>;
  }
}

Cypress.Commands.add(
  'getEl',
  { prevSubject: 'optional' },
  (subject: Cypress.Chainable, identifier: string) => {
    if (subject) {
      return subject.find(`[data-cy="${identifier}"]`);
    } else {
      return cy.get(`[data-cy="${identifier}"]`);
    }
  }
);
