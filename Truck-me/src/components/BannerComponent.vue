<template>
  <div class="banner">
    <img src="@/assets/banner.jpg" alt="banner" />
    <div class="texto-boas-vindas">
      <h1>Bem-vindo ao Truck Me <br /></h1>
      <h2>Uma solução inteligente em frete</h2>
      <div class="buttons">
        <a href="#contact" class="btn">Demonstração</a>
        <a href="#about" class="btn btn-outline">Saiba Mais</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent'
}
</script>

<style scoped>
.banner {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: 0.7;
}

.texto-boas-vindas {
  position: absolute;
  color: #ffffff;
  text-align: center;
  font-size: 2em;
  z-index: 2;
}

.texto-boas-vindas h2 {
  font-size: 0.7em;
  color: #fff8ff;
}

.buttons {
  margin-top: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  background-color: #fa4800;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 0.7em;
}

.btn:hover {
  background-color: #d63a00;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid #fa4800;
}

.btn-outline:hover {
  background-color: #d63a00;
  border-color: #d63a00;
}
</style>
