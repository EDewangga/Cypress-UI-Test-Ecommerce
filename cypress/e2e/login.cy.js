/// <Reference types='cypress' />

describe('Login Test', () => {

  beforeEach(() => {
    // cy.intercept('GET','https://www.saucedemo.com/').as('getAccount')
    cy.visit('https://www.saucedemo.com/')
    // cy.wait('@getAccount').then((interception) => {
    // })
  })

  it('Login Without Data', () => {
    cy.contains('[data-test=login-button]').should('exist')
    cy.contains('[data-test=login-button]').click()

    cy.contains('[data-test=error]').should('exist')
  })

  it('Login Invalid Data', () => {
    cy.contains('[data-test=login-button]').should('exist')
    cy.get('[data-test=username]').should('standard_user')
    cy.get('[data-test=password]').should('secret_sauce')
    cy.contains('[data-test=login-button]').click()

    cy.contains('[data-test=error]').should('exist')
  })

  it('Login Valid', () => {
    cy.contains('[data-test=login-button]').should('exist')

    cy.get('[data-test=username]').should('standard_user')
    cy.get('[data-test=password]').should('secret_sauce')
    cy.contains('[data-test=login-button]').click()
  })

  
})