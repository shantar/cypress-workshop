/// <reference types="cypress" />
// @ts-check
it('loads', () => {

  cy
    .visit('localhost:3000');

  cy
    .log('footer is visible');

  cy
    .get('.new-todo')
    .get('footer');

  cy
    .log('heading is visible');

  cy
    .contains('h1', 'todos');

  cy
    .contains('h1', /^todos$/);

  cy
    .contains('[data-cy=app-title]', 'todos');
    
});
