# TruckMe_challenge
TruckMe - Vue.js Project
## Sobre ##
Este projeto é um site desenvolvido em Vue.js para a empresa TruckMe de gerenciamento de fretes 100% digital, o site é composto por vários componentes, incluindo um cabeçalho, banner, seção "Sobre", tabela de serviços, formulário de contato e galeria de imagens. Este README documenta as decisões de design e implementações que foram feitas durante o desenvolvimento.

# Decisões de Design
1. Estrutura do Projeto: O projeto foi dividido em componentes Vue.js para facilitar a manutenção e a escalabilidade, seus componentes principais incluem:

- [x] HeaderComponent: Responsável pelo menu de navegação.
- [x] BannerComponent: Contém o banner principal.
- [x] AboutComponent: Seção "Sobre".
- [x] ServicesTableComponent: Tabela de serviços.
- [x] ContactFormComponent: Formulário de contato.
- [x] GalleryComponent: Galeria de imagens.

# 2. HeaderComponent

- Fazendo um estudo do site da truckMe, utilizei como base para entender a marca, sua tipografia e paleta de cores, tendo em vista isso o Header ficou em um design similar para os usuários que já utilizavam não acharem tão diferente, com as opções de menu mais a direita e a logo mais a esquerda, também criei uma lista vermelha para deixar o hover mais sofisticado ao passar o mouse e refletir ainda mais a cor da marca.

- Para melhorar a navegação do usuário, o cabeçalho foi fixado no topo da página usando CSS, com position: fixed. Isso permite que o usuário tenha acesso constante ao menu de navegação sem precisar rolar para cima.

- O menu de navegação foi projetado para ser responsivo, em telas menores (até 750px de largura), o menu se transforma em um menu tipo "hambúrguer" que pode ser aberto e fechado pelo usuário. O menu hamburguer teve a mesma alteração nas opcões, antes o fundo branco ficava na metade da tela, optei por deixar todo branco quando for abrir o menu para priorizar o design.

# 3. BannerComponent

- No banner optei por colocar uma imagem diferente do site oficial e adicionei uma camada de sobreposição com um overlay com cor preta e opacidade de 0.5 para escurecer a imagem de fundo e destacar o texto.

- O texto de Boas-vindas foi posicionado de forma absoluta para ficar centralizado sobre a imagem de fundo e utilizei z-index para ficar acima da sobreposição da imagem, a cor branca para um contraste claro com a imagem de fundo e uma variação do branco no texto embaixo para dar a impressão de título principal e o assunto embaixo.

- Apesar de não solicitado no BannerComponent, no site antigo observei que havia um botão e decidi replicá-lo da minha maneira e com um botão saiba mais também para ter mais conteúdo no banner. O botão principal que buscamos que e chame mais atenção do usuário é o de 'demonstração' por isso a decisão de ser um botão com cor cheia(solid buttons) enquanto o 'saiba mais' decidi que fosse um botão do tipo outliner, os quais são menos chamativos, mas ainda são claramente identificáveis como botões, feito de forma mais minimalista.

- Esse novos botões podem lhe levar diretamente para a parte de contato para agendar a demonstração ou para seção sobre, para entender mais o que a TruckMe faz.

# 4. AboutComponent

- No layout e estrutura, dividi em duas colunas onde o lado esquerdo contém as informações textuais e botões de chamada para ação e o direito Exibe uma imagem reaproveitada do site da empresa. O Design responsivo, permitiu que em telas menores o lado direito não aparecesse, também empilha as seções verticalmente, usando display flex porém com flex-direction em column, garantindo uma experiência de usuário contínua em dispositivos móveis.

- No título do lado esquerdo adicionei uma parte da logo da empresa para reforçar a marca.

- Dois estilos de botões são usados para criar uma distinção visual, e um foi solicitado pelo desafio, o do "Saiba mais", o Botão Sólido ("Demonstração") Utiliza um fundo sólido escuro para atrair atenção e encorajar a interação do usuário e o contornado("Leia Mais"): Utiliza um fundo transparente com uma borda vermelha para fornecer uma ação secundária que é visualmente conectada, mas menos dominante, similar ao que foi feito no BannerComponent, com efeitos de hover também e o cursor pointer ativo para o usuário perceber que é clicável.

- O botão "Leia Mais" revela informações adicionais sobre os serviços da empresa quando clicado. O conteúdo é oculto inicialmente e se torna visível após a interação, mantendo a interface limpa e focada. Após uma transição suave o conteúdo expande a lista com uma transição suave para proporcionar uma experiência de usuário sem interrupções, isso foi feito usando Javascript combinado com Vue JS.

# 5. ServicesTableComponent

- A tabela foi o componente mais simples, coloquei 3 colunas com nome dos serviços que pensei, descrição e o preço, em telas menores aparece uma barra de rolagem para melhor experiência do usuário no smartphone, e o header da tablema tem a cor da marca.

# 6. ContactFormComponent

- Seu layout foi dividido ao meio como aboutcomponent, onde lado esquerdo ficou uma imagem e no direito o formulário, optei por fazer um formulário em um card com cor parecida com a do fundo, para dar a impressão de 'glassmorphism', adicionei borda arredondada de cor vermelha ao redor, coloquei os inputs e labels um abaixo do outro pois eram poucos campos e pensei na validação, finalizei com botão de enviar, no lado direito a imagem de email em tablet foi escolhida para fazer alusão ao envio de mensagem com tons vermelhos.

- Validei os campos do formulário, onde nome tem que ter no mínimo dois caracteres se não aparece uma mensagem de erro abaixo, email usa uma expressão regular para validar o formato do e-mail. Se o e-mail não corresponder ao padrão, exibe uma mensagem de erro e mensagem que verifica se todos os campos obrigatórios (nome, e-mail e mensagem) estão preenchidos, exibe uma mensagem de erro se algum campo estiver vazio.

- Em telas menores a div com imagem não fica visivel para melhor aproveitamento do usuário.

# 7. GalleryComponent

- Na galeria de fotos fiz o slide com bordas suavemente arredondadas para não ficar totalmente quadrado, adicionei 4 imagens testes, criei os botões com fundo preto transpararente e escolhi também criar uma camada na parte inferior, transparente com tom de vermelho, com texto branco descrevendo alguns serviços da TruckMe, a idéia que futuramente ali descreva feedbacks de clientes que usam o serviço da empresa.
