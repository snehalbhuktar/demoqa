import * as pages from "../../pages/index";

describe('When user is on Book store page', () => {
    const homePage = new pages.HomePage;
    const bookStorePage = new pages.BookStorePage;

    beforeEach(() => {
        homePage.visitApplication();
        homePage.navigateToBookStoreApplication();
    });

    it('Then user is able to search for books and click on the link for the book', () => {
        bookStorePage.searchByBookName('java');
        cy.get('.action-buttons')
            .find('[href="/books?book=9781449331818"]')
            .click({force: true});
        // Assertion
        // cy.get('.rt-table > .rt-tbody > .rt-tr-group')
        //     .each(($el, index, $list) => {
        //         const txt = $el.text();
        //         expect(txt).to.contain('Java');
        //     });
        cy.get('#title-wrapper > .col-md-9').should('be.visible')
            .should('contain', 'JavaScript');
    });
});