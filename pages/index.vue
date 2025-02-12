<script setup lang="ts">
import { ChevronsDown, ChevronDown, ChevronUp } from "lucide-vue-next";
let fabButton = ref('servicios')
let backtoTop = ref(false)
onMounted(() => {
  const servicios = window.document.getElementById('servicios')
  const crecimiento = window.document.getElementById('crecimiento') 
  const testimonios = window.document.getElementById('testimonios') 
  const equipo = window.document.getElementById('equipo') 
  const contacto = window.document.getElementById('contacto')
  window.addEventListener("scrollend", (event) => {
    if (window.scrollY >= servicios.offsetTop && window.scrollY < crecimiento.offsetTop) {
      fabButton.value = 'crecimiento'
      return
    }
    if (window.scrollY >= servicios.offsetTop && window.scrollY <  testimonios.offsetTop) {
      fabButton.value = 'testimonios'
      return
    }
    if (window.scrollY >= testimonios.offsetTop && window.scrollY <  equipo.offsetTop) {
      fabButton.value = 'equipo'
      return
    }
    if (window.scrollY >= equipo.offsetTop && window.scrollY <  contacto.offsetTop - 200) {
      console.log(window.scrollY)
      console.log(contacto.offsetTop)
      fabButton.value = 'contacto'
      return
    }
    if (window.scrollY >= contacto.offsetTop - 200) {
      backtoTop.value = true
      return
    } else {
      backtoTop.value = false
    }
    fabButton.value = 'servicios'
  });
})
useHead({
  htmlAttrs: {
    class: 'scroll-smooth',
  },
});
</script> 

<template>
  <div class="bg-white scroll-smooth">
    <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden" id="sunset">
        <Navbar />
      <div
        class="relative z-30 p-5 text-2xl text-white"
      >
      <div
              class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold"
            >
            <h1>
              <span
                  class="text-transparent bg-gradient-to-r from-[#FFFFFF] to-orange-500 bg-clip-text"
                  >SUNSET          </span>
              </h1>
              <h1>
                Donde  la 
                <span
                  class="text-transparent bg-gradient-to-r from-[#D247BF] to-orange-500 bg-clip-text"
                  >Innovación
                </span>
                Conoce el horizonte
              </h1>
            </div>
      </div>
      <video
        autoplay
        loop
        muted
        class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="/clients/retrowave-sunset.960x540.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div class="absolute z-10 w-auto min-w-full bottom-0">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
          </defs>
          <g class="moving-waves">
            <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(0,0,0,0.25)"></use>
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(0,0,0,0.20)"></use>
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(0,0,0,0.15)"></use>
            <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(0,0,0,0.10)"></use>
            <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(0,0,0,0.5)"></use>
            <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(0,0,0,1)"></use>
          </g>
        </svg>
      </div>
      <div class="absolute z-30 bottom-0 animate-bounce"> 
        <a class="text-sm font-bold text-white " variant="outline" size="icon" href="#nosotros">
    
          <ChevronsDown class="w-6 h-6 pb-0" />
        </a>
      </div>
    </header>
      <Hero />
        <div class="btn grid grid-cols-2 bottom-0 animate-bounce btn fixed bottom-3 right-1 z-5">
          <a class="text-transparent bg-gradient-to-r from-[#D247BF] to-orange-500 bg-clip-text" :href="'#'+ fabButton" v-show="!backtoTop">
            {{ fabButton }}
          </a>
          <a class="text-transparent bg-gradient-to-r from-[#D247BF] to-orange-500 bg-clip-text" href="#sunset" v-show="backtoTop">
            Regresar al Inicio
          </a>
          <div class="text-black">
            <ChevronDown v-show="!backtoTop"/>
            <ChevronUp v-show="backtoTop"/>
          </div>
      </div>
      <Clients />
      <Features />
      <Services />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
  </div>
</template>
<style scoped>
.waves {
    width: 100%;
    height: 16vh;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 150px
}

.waves.waves-sm {
    height: 50px;
    min-height: 50px
}

.waves.no-animation .moving-waves>use {
    animation: none
}

.wave-rotate {
    transform: rotate(180deg)
}

.moving-waves>use {
    animation: f 40s cubic-bezier(.55,.5,.45,.5) infinite
}

.moving-waves>use:first-child {
    animation-delay: -2s;
    animation-duration: 11s
}

.moving-waves>use:nth-child(2) {
    animation-delay: -4s;
    animation-duration: 13s
}

.moving-waves>use:nth-child(3) {
    animation-delay: -3s;
    animation-duration: 15s
}

.moving-waves>use:nth-child(4) {
    animation-delay: -4s;
    animation-duration: 20s
}

.moving-waves>use:nth-child(5) {
    animation-delay: -4s;
    animation-duration: 25s
}

.moving-waves>use:nth-child(6) {
    animation-delay: -3s;
    animation-duration: 30s
}
@keyframes f {
    0% {
        transform: translate3d(-90px,0,0)
    }

    to {
        transform: translate3d(85px,0,0)
    }
}
</style>