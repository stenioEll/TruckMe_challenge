<script setup>
//import { RouterLink, RouterView } from 'vue-router'

import HeaderComponent from './components/HeaderComponent.vue'
import BannerComponent from './components/BannerComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import ServicesTablesComponent from './components/ServicesTableComponent.vue'
import ContactFormComponent from './components/ContactFormComponent.vue'
import GalleryComponent from './components/GalleryComponent.vue'
</script>

<template>
  <HeaderComponent/>
  <section id="home">
    <BannerComponent/>
  </section>
  <section id="about">
    <AboutComponent/>
  </section>
  <section id="services">
    <ServicesTablesComponent/>
  </section>
  <section id="contact">
    <ContactFormComponent/>
  </section>
  <GalleryComponent/>
</template>

<style scoped>

</style>
