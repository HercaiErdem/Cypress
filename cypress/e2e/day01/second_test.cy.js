///  <references types='cypress' />

context('My Second Test', () => {
    // decribe yerine context de kullanilabilir.

    beforeEach("Her testten once calisacak" , () => {
       // cy.visit("https://www.google.com")
       cy.visit("/") // cypress.config.cy.js file'inin icine baseUrl tanimladigimiz icin artık url yazmak zorunda degiliz tek / bize url demek oluyor.
        
    });

    it('Url Test', () => {
        cy.url().should("include", "google")
        cy.url().should("eq", "https://www.google.com/")
        
    });

    it('Title Test', () => {
        cy.title().should("include", "Google")
        cy.title().should("equal", "Google")
        
    });

    it('Search Test', () => {
        // cy.get('#APjFqb').type("Cypress.io{enter}")
        cy.get("textarea[class='gLFyf']").type("Cypress.io{enter}")

        // get() : locate aliyoruz
        // type() : entin gonderiyoruz
        // {enter} : ENTER tusuna bas
        
        
    });

    it('', () => {
        
    });

    
});