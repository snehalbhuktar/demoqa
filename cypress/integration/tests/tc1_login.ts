import * as pages from "../../pages/index";

describe('When user is on Book store login page', () => {
    const homePage = new pages.HomePage;
    const bookStorePage = new pages.BookStorePage;
    const loginPage = new pages.LoginPage;
    const profilePage = new pages.ProfilePage

    beforeEach(() => {
        homePage.visitApplication();
        homePage.navigateToBookStoreApplication();
    });

    it('Then user is able to login with valid credentials and logout successfully', () => {
        bookStorePage.nvaigateToLoginPage()
        loginPage.loginToBookStoreApplication('test_user', 'P@ssword11');
        // Assertions for successful login
        cy.get('#userName-value').should('be.visible')
            .should('contain', 'test_user');
        // Logout from application
        profilePage.logout();
        // Assertion - user navigates to Login page 
        cy.url().should('contain', 'login');
        
    })

    it('Then user is not able to login with invalid password', () => {
        bookStorePage.nvaigateToLoginPage()
        loginPage.loginToBookStoreApplication('test_user', '123');
        // Assertions for login failed
        cy.get('#name').should('be.visible')
            .should('contain', 'Invalid username or password!');
    })
})