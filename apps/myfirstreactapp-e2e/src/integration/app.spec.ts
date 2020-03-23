import { getGreeting } from '../support/app.po';

describe('myfirstreactapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    cy.get('[data-cy="page-title"]').contains('Welcome to myfirstreactapp!');
  });
});
