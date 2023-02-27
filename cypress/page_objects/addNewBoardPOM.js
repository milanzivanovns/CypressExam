class AddNewBoard {

    get myOrganization() {
        return cy.get(".vb-content").find(".vs-c-list").eq(1).find(".vs-c-list__btn").eq(0);
     };

     get newBoard() {
        return cy.get(".vs-c-organization-boards__item--add-new");
     }

     get addBoardModal() {
      return cy.get(".vs-c-modal")
     }

     get boardTitleInput() {
        return this.addBoardModal.find("input").last();
     }

     addBoardTitle(boardTitle) {
        this.boardTitleInput.type(boardTitle);
     }

     get nextBtn() {
      return this.addBoardModal.find("button").last();
     }

};

export const addNewBoard = new AddNewBoard();