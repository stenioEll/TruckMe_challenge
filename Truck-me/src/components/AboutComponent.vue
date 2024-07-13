<template>
    <div class="container">
      <div class="left-side">
        <div class="left-text">
          <div class="title">
            <img src="../assets/logo.png" alt="caminhao" class="title-img">
            <h1>Na Truck Me, somos especialistas<br/> em fretes.</h1>
          </div>
          <h2 class="subtitle">
            Uma startup que oferece soluções inovadoras para conectar embarcadores e transportadores de maneira eficiente e transparente de forma 100% digital. Nosso objetivo é simplificar o processo de frete, garantindo qualidade e conformidade com todas as obrigações da transportadora tradicional.
          </h2>
          <div class="buttons">
            <button class="btn-dark" @click="showContent = !showContent">
              Demonstração
            </button>
            <button class="btn-dark btn-outline-dark" @click="toggleContent">
              Leia Mais
            </button>
          </div>
          <div id="conteudo" :class="{'conteudo-oculto': !showContent, 'conteudo-visivel': showContent}">
            <ul>
              <li>Oferecemos soluções inovadoras para conectar embarcadores e transportadores de maneira eficiente e transparente através do aplicativo.</li>
              <li>Nosso objetivo é simplificar o processo de frete, garantindo qualidade e conformidade com todas as obrigações da transportadora tradicional.</li>
              <li>Com nosso aplicativo dedicado aos transportadores, divulgamos as melhores ofertas de cargas de maneira direta, sem intermediação, comissionamento ou taxas adicionais.</li>
              <li>Cuidamos de toda a burocracia, permitindo que você foque no que realmente importa: transportar.</li>
              <li>Simplificamos o gerenciamento de fretes, assegurando que suas cargas estejam nas melhores mãos.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right-side">
        <img src="../assets/caminhao.png" alt="caminhao" class="truck-img">
      </div>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue';

  const showContent = ref(false);

  const toggleContent = () => {
    showContent.value = !showContent.value;
  }
  </script>

  <style scoped>
  .btn-dark {
    display: inline-block;
    padding: 10px 20px;
    margin: 5px;
    background-color: #171717;
    color: #FFFFFF;
    text-decoration: none;
    border:none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    font-size: 0.9em;
    cursor:pointer;
}

.btn-dark:hover {
    background-color: #B31A1B;
}

.btn-outline-dark {
    margin-left: 10px;
    background-color: transparent;
    border: 2px solid #B31A1B;
}

.btn-outline-dark:hover {
    background-color:#B31A1B;
    border-color: #B31A1B;
}
.container {
    display: flex;
    height: 100vh;
    width: 100vw;
}

.left-side {
    flex: 1;
    background-color: #e01b1b;
    display: flex;
    justify-content: center;
    align-items: center;
}


.right-side {
    flex: 1;
    background-color: #e01b1b;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.left-text {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: justify;
    max-width: 600px;
    margin: auto;
    font-family: 'Roboto', sans-serif;
    color: white;

}

.left-text h1 {
    margin: 0;
    font-size: 2em;
    white-space: nowrap;

}
.left-text h2 {
    margin-top: 10px;
    font-size: 1em;
    font-weight: normal;
    white-space: normal;
}

.left-text h1 {
    margin: 0;
    text-align: center;
    text-align: left;
}

.left-text ul {
    list-style: none;
    padding: 0;
}

.left-text ul li {
    margin: 20px 0;
    padding-left: 20px;
    position: relative;
}

.left-text ul li::before {
    content: "•";
    color: black;
    font-size: 1.5em;
    position: absolute;
    left: 0;
    top: 0;
    line-height: 1em;
}
.title {
    display: flex;
    align-items: center;
    gap: 10px;
}
.subtitle h2 {
    font-weight: 500;
}

.title-img {
    width: auto;
    height: 80px;
    margin-right: 10px;
}

.truck-img {
    width: 700px;
    height: auto;
}
  </style>
