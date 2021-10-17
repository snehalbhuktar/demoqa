export default class ProfilePage{
    private logoutButton = '#submit';

    logout(): void{
        cy.get(this.logoutButton).click();
    }
}