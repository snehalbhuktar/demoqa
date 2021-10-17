import * as pages from "../../pages/index";

describe('When user is on Profile page', () => {
    const homePage = new pages.HomePage;
    const bookStorePage = new pages.BookStorePage;
    const loginPage = new pages.LoginPage;
    const profilePage = new pages.ProfilePage

    beforeEach(() => {
        homePage.visitApplication();
        homePage.navigateToBookStoreApplication();
    });

    it('Then user is able to login and navigate to Book store page', () => {
        bookStorePage.navigateToProfilePage();
        profilePage.navigateToLoginPage();
        // Assertion for login page
        cy.url().should('contain', 'login');

        // Login
        loginPage.loginToBookStoreApplication('test_user', 'P@ssword11');

        // Go To Book store
        cy.get('#gotoStore').click()
        // Assertion
        cy.url().should('contain', 'books');
        cy.get('#userName-value').should('be.visible')
            .should('contain', 'test_user'); 
    });

    it('Then user is able to navigate to Register page', () => {
        bookStorePage.navigateToProfilePage();
        profilePage.navigateToRegisterPage();
        // Assertion
        cy.url().should('contain', 'register');
    });
    
});