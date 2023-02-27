class LoginPage {

    get loginPageHeading() {
        return cy.get("h1");
    }

    get emailInput() {
        return cy.get(".el-input").eq(0);
    }

    get passwordInput() {
        return cy.get(".el-input").eq(1);
    }

    get loginBtn() {
       return cy.get(".vs-u-text--left").eq(0);
    }


    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginBtn.click();
    }
    
}

export const loginPage = new LoginPage();