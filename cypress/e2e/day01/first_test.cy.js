/// <references types ="cypress"/>

describe('My First Test', () => {
    // testi tanimliyoruz yani testin ismini veriyoruz.
    //describe ve it komutu Mocha library'den geliyor.

    it('Url Test', () => {

        cy.visit("https://www.google.com") // test edilecek url git dedik.
       // visit("URL")
         
    });
    
});
