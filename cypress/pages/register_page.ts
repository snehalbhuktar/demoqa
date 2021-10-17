export default class RegisterPage{
    private firstNameInputBox = '#firstname';
    private lastNameInputBox = '#lastname';
    private usernameInputBox = '#userName';
    private passwordInputBox = '#password';
    private checkBox = '#recaptcha-anchor';
    private registerButton = '#register';
    private backToLoginButton = '#gotologin';

    registerNewUser(firstName: string, lastName: string, userName: string, password: string): void{
        cy.get(this.firstNameInputBox).type(firstName);
        cy.get(this.lastNameInputBox).type(lastName);
        cy.get(this.usernameInputBox).type(userName);
        cy.get(this.passwordInputBox).type(password);
        cy.get('iframe')
            .first()
            .its('0.contentDocument.body')
            .should('not.be.undefined')
            .and('not.be.empty')
            .then(cy.wrap)
            .find('#recaptcha-anchor')
            // .should('be.visible')
            .click({force: true});
        // cy.get(this.checkBox).click();
        cy.get(this.registerButton).click();
    }

    navigateBackToLoginPage(): void{
        cy.get(this.backToLoginButton).click();
    }
}