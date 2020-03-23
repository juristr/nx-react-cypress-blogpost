describe('greeter component', () => {
  it('should display greeting message', () => {
    cy.visit('/iframe.html?id=shared-greeter--primary&knob-Person Name=Juri');
    cy.getEl('greeting').contains('Hi there, Juri!');
  });

  it('should display the person name properly', () => {
    cy.visit('/iframe.html?id=shared-greeter--primary&knob-Person Name=John');
    cy.getEl('greeting').contains('Hi there, John!');
  });
});
