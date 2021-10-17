export default class LoginPage{
    private usernameInputBox = '#userName';
    private passwordInputBos = '#password';
    private loginButton = '#login';
    private newUserButton = '#newUser';

    loginToBookStoreApplication(username: string, password: string): void{
        cy.get(this.usernameInputBox).type(username);
        cy.get(this.passwordInputBos).type(password);
        cy.get(this.loginButton).click();
    }

    navigateToRegisterPage(): void{
        cy.get(this.newUserButton).click();
    }
}