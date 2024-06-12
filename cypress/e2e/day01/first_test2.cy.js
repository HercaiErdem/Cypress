/// <references types ="cypress" />

describe('My First Test', function() { // narrow funtion yerine uzun hali de kullanılabilir, bu test class'ında bunu gördük.
    

    it('Url Test', function() {

        cy.visit("https://www.google.com") 

       cy.url().should("include", "google")
       
        
    });

     it('Title Test', function() {
        cy.visit("https://www.google.com")
        cy.title().should("include", "Google")

        cy.title().should("include", "Goo") 
        cy.title().should("include", "le")
        cy.title().should("eq", "Google") 
     });
});
