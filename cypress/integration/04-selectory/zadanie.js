/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

beforeEach(() => {

  cy
    .visit('/');

});

it('selects element input field', () => {

  // pomocou devtools
  cy
    .get('...');

  // cez id
  cy
    .get('...');

  // cez classu
  cy
    .get('...');

  // pomocou testing library
  cy
    .findByPlaceholderText('...');

  // pomocou traverzovania
  cy
    .get('header');
  // akým commandom sa vieme dostať od headeru k input fieldu?
    
});

it('selects heading', () => {

  // cez data-cy atribút
  cy
    .get('...');

  // cez text
  cy
    .contains('...');

  // cez regulárny výraz (regex)
  cy
    .contains('...');
  
});