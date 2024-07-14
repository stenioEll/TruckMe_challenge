import { mount } from '@cypress/vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

describe('HeaderComponent', () => {
  it('deve exibir o logo corretamente', () => {
    mount(HeaderComponent);
    cy.get('nav').should('exist');
    cy.get('.logo').should('exist');
    cy.get('.navbar').should('exist');
  });

  it('deve abrir e fechar o menu ao clicar no botão hamburger', () => {
    mount(HeaderComponent);
    cy.get('.hamburger').click({ force: true });
    cy.wait(500);
    cy.get('.navbar').should('have.class', 'show');

    cy.get('.hamburger').click({ force: true });
    cy.wait(500);
    cy.get('.navbar').should('not.have.class', 'show');
  });

  it('deve rolar suavemente para a seção correta ao clicar no link', () => {
    mount(HeaderComponent);
    cy.get('.hamburger').click({ force: true });
    cy.wait(500);
    cy.get('.navbar').should('have.class', 'show');
    cy.get('a[href="#about"]').click({ force: true });

    cy.url().should('include', '#about');
  });
});
