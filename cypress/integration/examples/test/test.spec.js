describe('My first test', function(){
    
    it('visit app',function(){
        cy.visit('/')
        cy.pause()
        cy.get(":nth-child(1) > td > :nth-child(n) > .content > .description").should("be.visible")
        cy.get(":nth-child(1) > .content > .ui").should("be.visible")
        cy.get(":nth-child(2) > td > :nth-child(n) > .content > .header").should("be.visible")
        // cy.go("back")
        cy.get(":nth-child(n) > .content > .exclamation").should("be.visible")
        // cy.get(":nth-child(n) > .content > .donut > .donut__canvas > .donut__circle").should("be.visible")

        



    })
})