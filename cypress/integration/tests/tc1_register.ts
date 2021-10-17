import * as pages from "../../pages/index";

describe('When user is on Register page of Book Store Application', () => {

    const homePage = new pages.HomePage;
    const bookStorePage = new pages.BookStorePage;
    const loginPage = new pages.LoginPage;
    const registerPage = new pages.RegisterPage;

    beforeEach( () => {
        homePage.visitApplication();
        homePage.navigateToBookStoreApplication();
    });

    it('Then user gets error to verify reCaptcha when trying to register through automation', () => {
        bookStorePage.nvaigateToLoginPage();
        loginPage.navigateToRegisterPage();
        registerPage.registerNewUser('test', 'user', 'test_user', 'password');
        // Assertion
        cy.get('#name').should('be.visible')
            .should('contain', 'Please verify reCaptcha to register!');
    });

    it('Then user is able to navigate to Login Page', () => {
        bookStorePage.nvaigateToLoginPage();
        loginPage.navigateToRegisterPage();
        registerPage.navigateBackToLoginPage()
        // Assertion
        cy.url().should('contain', 'login');
    });
})