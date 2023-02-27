/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPOM"

const credetials = {
    email: "vivifytest@gmail.com",
    password: "12345678"
};

describe("Login page test", () => {

    it("Valid Login", () => {
        cy.visit("/");
        cy.url().should("include","/login");
        loginPage.loginPageHeading.should("be.visible");
        loginPage.loginPageHeading.should("have.text", "Log in with your existing account")
        loginPage.loginBtn.should("be.visible");
        loginPage.login(credetials.email, credetials.password);
    });
});