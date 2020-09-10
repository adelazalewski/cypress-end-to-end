describe("Testing our form", () => {
    beforeEach(() => {
        cy.visit("/")
    })
    //we are filling out the name and making sure it has a correct value
    it("fills out form inputs", () => {
        //fill out name
        cy.get('[for="name"] > input').type("Ben").should("have.value", "Ben")
        const motivation = "bc i want to meet new people and be of help"
        //fill out email
        cy.get('[for="email"] > input').type("paliuadela@yahoo.com").should("have.value", "paliuadela@yahoo.com")
        //fill out motivation textarea
        cy.get('[data-cy=motivation]').type(motivation).should("have.value", motivation)
        //fill out position
        cy.get('#positions').select("Tabling").should('have.value', "Tabling")
        //check for checked terms
        cy.get(".terms > input").check().should('be.checked')
        //is button desabled
        cy.get('[data-cy=sumbit-button]').should('be.not.disabled')
        cy.get('[data-cy=sumbit-button]').should('be.disabled')
        //delete email value
        cy.get('[for="email"] > input').clear()
        //check the err message si disabled
        cy.get('[data-cy="email-message-error"]').contains('Must include email address.')
    })
})