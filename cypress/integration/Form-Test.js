describe('Quotes app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const pizzaName = () => cy.get('input[name=pizzaName]')

    it('test of test', () => {
        expect(1+2).to.equal(3)
    })

})
