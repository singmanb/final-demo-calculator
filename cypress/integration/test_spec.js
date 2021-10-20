// example from the docs
// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

// my actual first test - does the page load
describe('The main page loads', () => {
  it('successfully loads', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
  }) 
})


// testing basic operations
describe('Basic Calculator Operations', () => {
  it('checks 7 + 2 equals 9', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html')

    // Act
    // cy.get("[data-cy=seven]").click();
    cy.get(".button.number-7").click();
    cy.get(".button.operator.addition").click();
    cy.get(".button.number-2").click();
    cy.get(".button.operator.equal").click();

    // Assert
    cy.get(".display").should("have.text", "9");
  })
})