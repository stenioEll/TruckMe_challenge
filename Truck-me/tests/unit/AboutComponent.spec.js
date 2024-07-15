import { mount } from '@cypress/vue'
import AboutComponent from '@/components/AboutComponent.vue'

describe('AboutComponent', () => {
  it('deve exibir o título e subtítulo corretamente', () => {
    mount(AboutComponent)

    cy.get('.title h1').should(
      'contain.text',
      'Na Truck Me, somos especialistas em fretes.'
    )

    cy.get('.subtitle').should(
      'contain.text',
      'Uma startup que oferece soluções inovadoras para conectar embarcadores e transportadores de maneira eficiente e transparente de forma 100% digital.'
    )
  })

  it('deve abrir e fechar o conteúdo adicional ao clicar no botão "Leia Mais"', () => {
    mount(AboutComponent)

    cy.get('#conteudo').should('not.have.class', 'conteudo-visivel')

    cy.get('.btn-dark.btn-outline-dark').click()

    cy.get('#conteudo').should('have.class', 'conteudo-visivel')

    cy.get('.btn-dark.btn-outline-dark').click()

    cy.get('#conteudo').should('not.have.class', 'conteudo-visivel')
  })
})
