export default class AlertsWindowsPage{
     private modalDialogsLocator = 'Modal Dialogs';

     goToModalDialogs(): void{
         cy.contains(this.modalDialogsLocator).click();
     }
}