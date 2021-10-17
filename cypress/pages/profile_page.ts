export default class ProfilePage{
    private logoutButton = '#submit';
    private loginLink = '[href="/login"]';
    private registerLink = '[href="/register"]';

    logout(): void{
        cy.get(this.logoutButton).click();
    }  

    navigateToLoginPage(): void{
        cy.get(this.loginLink).click();
    }

    navigateToRegisterPage(): void{
        cy.get(this.registerLink).click();
    }
}