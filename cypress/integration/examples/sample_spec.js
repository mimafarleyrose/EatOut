import '@testing-library/cypress/add-commands'

describe('App', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/');
    })
    it('When user clicks on lets go renders loading message', async () => {
        cy.get('input:first')
            .type('pizza')
        cy.get('input:last')
            .type('london')

         cy.contains('Let\'s Go').click()

        cy.contains('looking for restaurants...');
    })
    it('When user hits enter key and inputs have text loading message is rendered', async () => {
        cy.get('input:first')
            .type('pizza')
        cy.get('input:last')
            .type('london')
            .type('{enter}')


        cy.contains('looking for restaurants...');
    })

    it('When user searches nothing an error message is rendered', async () => {
        cy.get('input:first')
            .type('p')
        cy.get('input:last')
            .type('l')

        cy.contains('Let\'s Go').click()

        cy.contains('Oops! not enough information here, please add some more');
    })

    it('When user searches nothing an error message is rendered, then on valid search results are rendered', async () => {
        cy.get('input:first')
            .type('p')
        cy.get('input:last')
            .type('l')

        cy.contains('Let\'s Go').click()

        cy.contains('Oops! not enough information here, please add some more')

        cy.get('input:first')
            .type('izza')
        cy.get('input:last')
            .type('ondon')
            .type('{enter}')



        cy.contains('looking for restaurants...');
        await cy.contains('Here\'s what we found for "pizza" in london');

    })

})