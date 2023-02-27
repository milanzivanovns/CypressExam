/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPOM"
import { addNewBoard } from "../page_objects/addNewBoardPOM";
import { faker } from '@faker-js/faker';

const credetials = {
    email: "vivifytest@gmail.com",
    password: "12345678"
};

let boardTitle = faker.name.jobTitle()

describe("Add new board test", () => {

    beforeEach("Visit app and log in", () => {
        cy.visit("/");
        loginPage.login(credetials.email, credetials.password);
        cy.url().should("not.include", "/login");
        cy.url().should("include","/my-organizations");
    });

    it("Add new board", () => {

    addNewBoard.myOrganization.click().then(() => {
         cy.get(".vs-c-modal--features-button").find(".vs-c-btn").click();
     });

     addNewBoard.newBoard.click();
     addNewBoard.addBoardTitle(boardTitle);
     addNewBoard.nextBtn.click();
     addNewBoard.kanbanType;
    });

});