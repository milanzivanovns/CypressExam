class AddOrganization {

    get addNewOrganizationCard() {
        return cy.get(".vs-c-my-organization").eq(0);
    }

    get organizationNameInput() {
        return cy.get("input");
    }

    get nextBtn() {
        return cy.get("button[name='next_btn']");
    }

    get createBtn() {
        return cy.get("button[name='next_btn']");
    }

    addNewOrganization(name) {
        this.organizationNameInput.type(name);
    }
}

export const addOrganization = new AddOrganization();