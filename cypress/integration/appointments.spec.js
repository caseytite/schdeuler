describe('Appointments', () => {
  beforeEach(() => {
    cy.visit("/");
  })

  it('goes to the home page', ()=> {})

  it.skip('Should book an interview', () => {
    
    cy.get(':nth-child(2) > .appointment__add > .appointment__add-button')
      .click()
      cy.get('[data-testid="student-name-input"]')
      .type('Casey')
      cy.get(':nth-child(2) > .interviewers__item-image')
      .click()
      cy.get('.button--confirm')
      .click()
      cy.contains(".appointment__card--show", "Casey")
      cy.contains(".appointment__card--show", "Tori Malcolm");
  })

  it.skip('Should Edit an interview', () => {
    cy.get('[alt="Edit"]').
      first()
      .click({force:true})
      cy.get("[alt='Tori Malcolm']")
      .click()
      cy.get('[data-testid="student-name-input"]')
      .clear()
      .type('Jon Cena')
      cy.get('.button--confirm')
      .click()
      cy.contains(".appointment__card--show", "Tori Malcolm");

  })

  it.skip('Should cancel an interview', () => {
    cy.get('[alt="Delete"]').
      first()
      .click({force:true})
      cy.get('.appointment__card > .appointment__actions > :nth-child(2)')
      .click()
      cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist")

  })


})