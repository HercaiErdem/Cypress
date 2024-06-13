
/// <references types ="cypress"/>

describe('Koala Resort Hotel', () => {

    it('Log In Test', () => {
        
        cy.visit("https://www.booking.com/index.tr.html")
        cy.get('[data-testid="header-small-sign-in-button"]', {timeout: 1000}).click()
        cy.get('[data-testid="header-small-sign-in-button"]', {timeout: 1000}).click()

        cy.url().should("include", "account")
    });
    
});