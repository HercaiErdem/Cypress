/// <references types ="cypress"/>

describe('My First Test', () => {
    // testi tanimliyoruz yani testin ismini veriyoruz.
    //describe ve it komutu Mocha library'den geliyor.

    it('Url Test', () => {

        cy.visit("https://www.google.com") // test edilecek url git dedik.
       // visit("URL")

       cy.url().should("include", "google")
       // should assert islemi icin kullanılıyor
       // .should("include", "google") : url google icerir mi dogrula demek.
        
    });

     it('Title Test', () => {
        cy.visit("https://www.google.com")
        cy.title().should("include", "Google")

        cy.title().should("include", "Goo") // include oldugu için title!ın hepsini yazmamıza gerek yok.
        cy.title().should("include", "le")
        cy.title().should("eq", "Google") //eq kullanıldıgı için title ile yazılan başlığın bire bir aynı olması gerekmektedir.
        
     });
});
