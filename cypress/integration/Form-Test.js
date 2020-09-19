describe('Quotes app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const pizzaName = () => cy.get('input[name=pizzaName]')
    const peperoni = () => cy.get('input[name=peperoni]')
    const sausage = () => cy.get('input[name=sausage]')
    const special = () => cy.get('input[name=special]')
    const submitBtn = () => cy.get('button[id=submitBtn')

    it('test of test', () => {
        expect(1+2).to.equal(3)
    })

    it('mvp text input test', () => {
        pizzaName().type('Sample Name')
    })

    it('mvp multiple toppins test', () => {
        peperoni().click()
        sausage().click()
        peperoni().click()
        sausage().click()
    })

    it('mvp for submit test', () => {
        pizzaName().type('the best pizza in da world')
        peperoni().click()
        sausage().click()
        special().type('make it snappy')
        submitBtn().click()

    })

})
