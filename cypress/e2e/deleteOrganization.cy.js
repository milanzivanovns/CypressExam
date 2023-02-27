/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPOM";
import { addOrganization } from "../page_objects/addOrganizationPOM";
import { deleteOrganization } from "../page_objects/deleteOrganizationPOM";

const credetials = {
    email: "vivifytest@gmail.com",
    password: "12345678"
};

describe("Delete organization test", () => {

    beforeEach("Visit app and log in", () => {
        cy.visit("/");
        loginPage.login(credetials.email, credetials.password);
        cy.url().should("not.include", "/login");
        cy.url().should("include","/my-organizations");
    });

    it("Delete organization", () => {

    deleteOrganization.myOrganization.click().then(() => {
         cy.get(".vs-c-modal--features-button").find(".vs-c-btn").click();
     });

     deleteOrganization.configurationBtn.click();
     deleteOrganization.deleteBtn.click().then(() => {
        deleteOrganization.fillPassword(credetials.password);
        deleteOrganization.saveBtn.click();
     });

    });

});

