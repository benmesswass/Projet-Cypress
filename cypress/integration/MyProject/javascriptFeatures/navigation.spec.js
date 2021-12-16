/// <reference types="cypress"/>

beforeEach(() => {
    cy.log('I run before every test')
   })


describe('Front end testing', () => {
    it('Access the press page', () => {
        cy.visit('https://www.deepl.com/press');
        cy.get('.dl_cookieBanner--buttonAll').click();
        cy.get('#dl_menu_translator_simplified > div > span').click();
        cy.log("hdfkdhfkhsdkfhksdhfksdh------------------> "+cy.url());
        cy.url().should('equal','https://www.deepl.com/translator')
        })
});