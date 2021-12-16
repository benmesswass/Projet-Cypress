/// <reference types="cypress"/>

beforeEach(() => {
    cy.log('I run before every test')
    cy.visit('');
   })

   
describe('Front end testing', () => {
    it('Access the home page', () => {
        cy.get('.dl_translator_page_container').should('be.visible')
        cy.get('.lmt__source_textarea').should((translateInput) => {
        expect(translateInput[0]).to.have.property('autocomplete', 'off')
        })
    })
})


   