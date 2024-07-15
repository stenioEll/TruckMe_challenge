<template>
  <header>
    <nav>
      <a href="/" class="logo">
        <img src="@/assets/logo_truck_me.png" alt="logo Truck Me" />
      </a>
      <button class="hamburger" @click="toggleMenu"></button>
      <ul class="navbar" :class="{ show: menuOpen }">
        <li><a href="#home" @click="scrollToSection('home')">Home</a></li>
        <li><a href="#about" @click="scrollToSection('about')">Sobre</a></li>
        <li>
          <a href="#services" @click="scrollToSection('services')">Serviços</a>
        </li>
        <li>
          <a href="#contact" @click="scrollToSection('contact')">Contato</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
const scrollToSection = (sectionId) => {
  closeMenu() // Fecha o menu em dispositivos móveis
  const element = document.getElementById(sectionId)
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
header {
  background: #ffffff;
  padding-inline: 16px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

nav {
  max-width: 1280px;
  height: 70px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.logo img {
  width: 150px;
  height: auto;
}

.navbar {
  display: flex;
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar a {
  font-size: 15px;
  color: #000000;
  padding-block: 16px;
}

.hamburger {
  display: none;
  border: none;
  background: none;
  border-top: 3px solid #000000;
  cursor: pointer;
}

.hamburger::after,
.hamburger::before {
  content: ' ';
  display: block;
  width: 30px;
  height: 3px;
  background: #000000;
  margin-top: 5px;
  position: relative;
  transition: 0.3s;
}

@media (max-width: 750px) {
  .hamburger {
    display: block;
    z-index: 1;
  }
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    transition: 1s ease-out;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 0;
    display: none;
  }
  .navbar.show {
    display: flex;
  }
}

.navbar li {
  position: relative;
  margin-right: 20px;
}

.navbar li a {
  display: block;
  padding: 10px;
  transition: color 0.3s ease;
}

.navbar li::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: #fa4800;
  transition: width 0.3s ease;
}

.navbar li:hover::after {
  width: 100%;
}

.navbar li a:hover {
  color: #fa4800;
}
</style>
