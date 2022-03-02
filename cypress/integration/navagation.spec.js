describe("Navigation", () => {

  beforeEach(() => {
    cy.visit("/");
  })

  it("should visit root", () => {});

  it('should navigate to Tuesday', () => {
    //1  by element/class
        // cy.get('ul > :nth-child(2)').click()
        // .should('have.class', 'day-list__item--selected')

    //2 by element/text/class
        cy.contains("li", "Tuesday")
        .click()
        .should('have.class', 'day-list__item--selected')

    //3 by element using alias/class
        // cy.get("li").contains("li", "Tuesday").as('Tuesday')
        // cy.get('@Tuesday').click().should('have.class', 'day-list__item--selected')

    //4 by element/text/css style
        // cy.contains("li", "Tuesday").click()
        // .should("have.css", "background-color", "rgb(242, 242, 242)");
  
  }) 


});