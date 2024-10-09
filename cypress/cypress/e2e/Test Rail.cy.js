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
  it('tc 02 review', () => {
    cy.visit('https://practice.automationtesting.in/');
    cy.get('#menu-icon').click();
    cy.get('#menu-item-40 > a').click();
    cy.get('.post-169 > .woocommerce-LoopProduct-link > h3').click();
    cy.get('.product_title').should("contain.text","Android Quick Start Guide");
    cy.get('.attachment-shop_single').should('be.visible');
    cy.get('[itemprop="description"] > .page > .layoutArea > .column').should("contain.text","Android 4.4 (KitKat®) is the latest version of the world’s favorite operating system for mobile phones and tablets.\nThis guide introduces the Android 4.4 software available on Nex- us and Google Play edition mobile devices. It doesn’t describe hardware details such as SIM card instructions, battery informa- tion, specs, and so on.");
    cy.get('.reviews_tab > a').click();
    cy.get('.star-4').click();
    cy.get('#comment').type("the best book ever 9/10");
    cy.get('#author').type("kevin");
    cy.get('#email').type("sawrty956@gmail.com");
    cy.get('#submit').should("have.css","color","rgb(255, 255, 255)");
    cy.get('#submit').should('be.visible');
  })
  it('tc 03 purchasing process', () => {
    cy.visit('https://practice.automationtesting.in/');
    cy.get('#menu-icon').click();
    cy.get('#menu-item-40 > a').click();
    cy.get('.post-170 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click();
    cy.get('.single_add_to_cart_button').click();
    cy.get('.woocommerce-message').should("contain.text","View Basket “Functional Programming in JS” has been added to your basket.");
    cy.get('.woocommerce-message > .button').click();
    cy.get('#coupon_code').type("12345");
    cy.get('.coupon > .button').click();
    cy.get('.woocommerce-error').should("contain.text","Coupon ","12345"," does not exist!");
    cy.get('.quantity > .input-text').type("2");
    cy.get('[name="update_cart"]').click();
    cy.get('.woocommerce-message').should("contain.text","Basket updated.");
    cy.get('strong > .woocommerce-Price-amount').should("contain.text","₹3,060.00");
    cy.get('.checkout-button').click();
    cy.get('#billing_first_name').type("kevin");
    cy.get('#billing_last_name').type("aguilar");
    cy.get('#billing_email').type("sawrty956@gmail.com");
    cy.get('#billing_phone').type("12345678");
    cy.get('#select2-chosen-1').click();
    cy.get('#s2id_autogen1_search').type("colombia");
    cy.get('.select2-match').click();
    cy.get('#billing_address_1').type("mi calle");
    cy.get('#billing_city').type("mi ciudad");
    cy.get('#billing_state').type("mi pais");
    cy.get('#billing_postcode').type("051051"); 
    cy.get('#place_order').click();
    cy.get('.woocommerce-thankyou-order-received').should("contain.text","Thank you. Your order has been received.");
  })
})