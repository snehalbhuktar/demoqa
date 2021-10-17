export default class ModalDialogsPage{
    private smallModalButton = '#showSmallModal';
    private closeSmallModalButton = '#closeSmallModal';
    private largeModalButton = '#showLargeModal';
    private closeLargeModalButton = '#closeLargeModal';

    selectSmallModal(): void{
        cy.get(this.smallModalButton).click();
    }

    closeSmallModal(): void{
        cy.get(this.closeSmallModalButton).click();
    }

    selectLargeModal(): void{
        cy.get(this.largeModalButton).click();
    }

    closeLageModal(): void{
        cy.get(this.closeLargeModalButton).click();
    }
}