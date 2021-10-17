export default class HomePage{

    private url = 'https://demoqa.com/';
    private bookStoreApplicationLocator = 'Book Store Application';

    visitApplication(): void{
        cy.visit(this.url);
    }

    navigateToBookStoreApplication(): void{
        cy.contains(this.bookStoreApplicationLocator).click();
    }
}