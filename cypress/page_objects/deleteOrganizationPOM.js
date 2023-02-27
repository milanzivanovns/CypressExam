class DeleteOrganization {

    get myOrganization() {
        return cy.get(".vb-content").find(".vs-c-list").eq(1).find(".vs-c-list__btn").eq(0);
     };
 
     get configurationBtn() {
         return cy.get(".vs-l-project__menu").find("ul.vs-c-list").children().last();
     };

     get deleteBtn() {
        return cy.get(".vs-c-btn").eq(-1);
    }

    get passwordInput() {
        return cy.get(".el-input__inner").last();
    } 

    fillPassword(password) {
        this.passwordInput.type(password);
    }

    get saveBtn() {
        return cy.get("button[name='save-btn']");
    }

    // get confirmationModal() {
    //     return cy.get(".vs-c-confirmation-modal");
    // }
}

export const deleteOrganization = new DeleteOrganization();