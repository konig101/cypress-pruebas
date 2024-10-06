describe('set pruebas automation', () => {
  it('tc 01 login', () => {
    cy.visit('https://practice.automationtesting.in/');
    cy.url().should('eq', 'https://practice.automationtesting.in/');
    cy.get('#menu-icon').should('be.visible');
    cy.get('#menu-icon').click();
    cy.get('#menu-item-50 > a').click();
    cy.get('.u-column1 > h2').should("contain.text","Login");
    cy.get('.u-column2 > h2').should("contain.text","Register");
    cy.get('#reg_email').type("sawrty956@gmail.com");
    cy.get('#reg_password').type("sawerty");
    cy.get('.woocommerce-password-strength').should("contain.text","Weak - Please enter a stronger password.");
    cy.get('#reg_password').type("sawerty917");
    cy.get('.woocommerce-password-strength').should("contain.text","Medium");
    cy.get('#reg_password').type("@sawerty917");
    cy.get('.woocommerce-password-strength').should("contain.text","Strong");
    cy.get('#username').type("sawrty956@gmail.com");
    cy.get('.woocomerce-FormRow > .woocommerce-Button').should("have.css","color","rgb(255, 255, 255)");
    cy.get('#password').type("sawerty917");
    cy.get(':nth-child(3) > .woocommerce-Button').click();
    cy.get('.woocommerce-error > li').should("contain.text","Error: The password you entered for the username sawrty956@gmail.com is incorrect. Lost your password?");
  })
})