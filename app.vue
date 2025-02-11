<script setup lang="ts">
import { ChevronsDown, ChevronDown } from "lucide-vue-next";
let fabButton = ref('features')
onMounted(() => {
  const servicios = window.document.getElementById('servicios')
  const crecimiento = window.document.getElementById('crecimiento') 
  const clientes = window.document.getElementById('clientes') 
  window.addEventListener("scrollend", (event) => {
    console.log(window.scrollY)
    console.log(servicios.offsetTop)
    console.log(crecimiento.offsetTop)
    if (window.scrollY >= servicios.offsetTop && window.scrollY < crecimiento.offsetTop) {
      fabButton.value = 'crecimiento'
      return
    }
    if (window.scrollY >= servicios.offsetTop && window.scrollY <  crecimiento.offsetTop) {
      fabButton.value = 'crecimiento'
      return
    }
    fabButton.value = 'features'
  });
})
</script> 

<template>
  <div class="bg-white">
    <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
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
      <div class="absolute z-30 bottom-0 animate-bounce"> 
        <a class="text-sm font-bold text-white " variant="outline" size="icon" href="#nosotros">
    
          <ChevronsDown class="w-6 h-6 pb-0" />
        </a>
      </div>
    </header>
      <Hero />
        <div class="btn grid grid-cols-2 bottom-0 animate-bounce btn fixed bottom-3 right-1 z-5">
          <a class="text-transparent bg-gradient-to-r from-[#D247BF] to-orange-500 bg-clip-text" :href="'#'+ fabButton">
            {{ fabButton }}
          </a>
          <div class="text-black">
            <ChevronDown />
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
