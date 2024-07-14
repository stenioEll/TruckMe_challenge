<template>
    <div class="gallery">
      <div class="gallery-text">
        <h1>Galeria de Fotos</h1>
        <div class="linha-preta"></div>
      </div>
      <div class="carousel">
        <button class="carousel-button prev" @click="prevImage">Anterior</button>
        <div class="carousel-images">
          <div class="carousel-item" v-for="(image, index) in images" :key="index">
            <img :src="image.src" :alt="image.alt" class="carousel-image">
            <div class="carousel-caption">{{ image.caption }}</div>
          </div>
        </div>
        <button class="carousel-button next" @click="nextImage">Próximo</button>
      </div>
    </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import caminhão1 from '../assets/caminhao1.jpg';
  import caminhão2 from '../assets/caminhao2.jpg';
  import caminhão3 from '../assets/caminhao3.jpg';
  import caminhão4 from '../assets/caminhao.png';

  const currentIndex = ref(0);
  const images = ref([
    {
      src: caminhão1,
      alt: "Imagem 1",
      caption: "Oferecemos um serviço de frete rápido e seguro, conectando você aos melhores transportadores disponíveis"
    },
    {
      src: caminhão2,
      alt: "Imagem 2",
      caption: "Desde pequenas entregas até cargas pesadas, temos a rede de transportadores certa para você, com preços competitivos e sem complicações."
    },
    {
      src: caminhão3,
      alt: "Imagem 3",
      caption: "Nosso aplicativo proporciona soluções de frete personalizadas para atender às suas necessidades específicas."
    },
    {
      src: caminhão4,
      alt: "Imagem 4",
      caption: "Simplifique o gerenciamento de seus fretes com nosso aplicativo intuitivo."
    }
  ]);

  const totalImages = images.value.length;

  const updateCarousel = () => {
    const offset = -currentIndex.value * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
  };

  const prevImage = () => {
    currentIndex.value = (currentIndex.value > 0) ? currentIndex.value - 1 : totalImages - 1;
    updateCarousel();
  };

  const nextImage = () => {
    currentIndex.value = (currentIndex.value < totalImages - 1) ? currentIndex.value + 1 : 0;
    updateCarousel();
  };

  onMounted(() => {
    updateCarousel();
  });
</script>

<style scoped>
.gallery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #B31A1B
}

.gallery-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffffff;
    padding-top: 50px;
}

.linha-preta {
    width: 100px;
    height: 4px;
    background-color: #171717;
    margin: 10px auto;
}


.carousel {
    position: relative;
    width: 80%;
    max-width: 600px;
    margin: auto;
    overflow: hidden;
    height: 400px;
    border-radius: 5px;
}

.carousel-images {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%;
}

.carousel-item {
    position: relative;
    min-width: 100%;
    height: 100%;
}

.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-caption {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0px;
    height: 80px;
    width: 100%;
    color: white;
    background-color: rgba(179, 26, 27, 0.7);
    padding: 10px;
    border-radius: 5px;
    text-align:center;

}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1000;
}

.prev {
    left: 0;
}

.next {
    right: 0;
}
</style>