/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPOM"
import { addOrganization } from "../page_objects/addOrganizationPOM";
import { faker } from '@faker-js/faker';

const credetials = {
    email: "vivifytest@gmail.com",
    password: "12345678"
};

let organizationName = faker.company.name()

describe("Add organization test", () => {

    beforeEach("Visit app and log in", () => {
        cy.visit("/");
        loginPage.login(credetials.email, credetials.password);
        cy.url().should("not.include", "/login");
        cy.url().should("include","/my-organizations");
    });

    it("Adding organization", () => {
       addOrganization.addNewOrganizationCard.click();
       addOrganization.addNewOrganization(organizationName);
       addOrganization.organizationNameInput.should("have.value",organizationName);
       addOrganization.nextBtn.click();
       addOrganization.createBtn.click().then(() => {
        cy.get(".vs-c-modal--features-button").find(".vs-c-btn").click();
       });
    });
});