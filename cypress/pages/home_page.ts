export default class HomePage{

    private url = 'https://demoqa.com/';
    private bookStoreApplicationLocator = 'Book Store Application';
    private alertsOptionLocator = 'Alerts, Frame & Windows';

    visitApplication(): void{
        cy.visit(this.url);
    }

    navigateToBookStoreApplication(): void{
        cy.contains(this.bookStoreApplicationLocator).click();
    }

    navigateToAlertsWindowsPage(): void{
        cy.contains(this.alertsOptionLocator).click()
    }
}