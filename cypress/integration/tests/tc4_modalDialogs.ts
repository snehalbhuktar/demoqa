import * as pages from "../../pages/index";

describe('When user is on Modal Dialogs page', () => {
    const homePage = new pages.HomePage;
    const alertsWindowsPage = new pages.AlertsWindowsPage;
    const modalDialogPage = new pages.ModalDialogsPage

    beforeEach(() => {
        homePage.visitApplication();
        homePage.navigateToAlertsWindowsPage();
        alertsWindowsPage.goToModalDialogs();
    });

    it('Then user is able to open and close small modal', () => {
        modalDialogPage.selectSmallModal();
        // Assertion 
        cy.get('#example-modal-sizes-title-sm').should('be.visible')
            .should('contain', 'Small Modal');
        // Close modal
        modalDialogPage.closeSmallModal();
    });

    it('Then user is able to open and close Large modal', () => {
        modalDialogPage.selectLargeModal();
        // Assertion
        cy.get('#example-modal-sizes-title-lg').should('be.visible')
            .should('contain', 'Large Modal');
        // Close modal
        modalDialogPage.closeLageModal();
    });
});