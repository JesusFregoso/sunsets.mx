<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
</script>

<template>
   <section data-theme="bumblebee" id="nosotros" class="max-w-[75%] mx-auto pt-24"
   >
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-10 xl:gap-12 justify-start items-center">
        <!-- Columna de contenido -->
        <div class="flex flex-col gap-10 items-center lg:items-start inline-flex">
          <div class="flex flex-col gap-8 justify-center items-start w-full">
            <div class="flex flex-col gap-4 justify-start items-center lg:items-start">
              <h6 class="text-gray-400 text-base font-normal leading-relaxed">Nosotros</h6>
              <div class="flex flex-col gap-3 justify-start items-center lg:items-start w-full">
                <h2 class="text-secondary-400 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Un Resumen de Nuestros Logros
                </h2>
                <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Nuestra historia es un testimonio del trabajo conjunto y la perseverancia. Unidos, hemos enfrentado desafíos, celebrado triunfos y construido una narrativa de progreso y éxito.
                </p>
              </div>
            </div>
            <div class="flex flex-col gap-6 justify-center items-start w-full">
              <div class="grid md:grid-cols-2 grid-cols-1 gap-8 justify-start items-center w-full">
                <!-- Tarjeta de estadística 1 -->
                            <div
              class="text-center bg-gray-50 hover:shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6">
                  <div class="flex flex-col gap-2.5">
                    <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">2+ Años</h4>
                    <p class="text-gray-500 text-base font-normal leading-relaxed">
                      Juntos, ayudando a iniciar en el mundo digital
                    </p>
                  </div>
                </div>
                <!-- Tarjeta de estadística 2 -->
                            <div
              class="text-center bg-gray-50 hover:shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6">
                  <div class="flex flex-col gap-2.5">
                    <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">10+ Projects</h4>
                    <p class="text-gray-500 text-base font-normal leading-relaxed">
                      Excelencia alcanzada gracias al éxito
                    </p>
                  </div>
                </div>
              </div>
              <div class="grid md:grid-cols-2 grid-cols-1 gap-8 justify-start items-center w-full">
                <!-- Tarjeta de estadística 3 -->
                            <div
              class="text-center bg-gray-50 hover:shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6">
                  <div class="flex flex-col gap-2.5">
                    <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">10+ Integraciones</h4>
                    <p class="text-gray-500 text-base font-normal leading-relaxed">
                      Nuestra dedicación a la innovación inspira a las nuevas generaciones
                    </p>
                  </div>
                </div>
                <!-- Tarjeta de estadística 4 -->
                            <div
              class="text-center bg-gray-50 hover:shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6">
                  <div class="flex flex-col gap-2.5">
                    <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Clientes Felices</h4>
                    <p class="text-gray-500 text-base font-normal leading-relaxed">
                      Refleja nuestro enfoque en la satisfacción del cliente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Botón "Read More" utilizando el componente button de shadcn -->
          <button class="btn sm:w-fit w-full group px-3.5 py-2 bg-accent-50 hover:bg-accent-300 rounded-lg shadow transition-all duration-700 ease-in-out flex justify-center items-center">
            <span class="px-1.5 text-accent-500 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
              Contactanos
            </span>
            <svg class="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                 xmlns="http://www.w3.org/2000/svg"
                 width="18"
                 height="18"
                 viewBox="0 0 18 18"
                 fill="none">
              <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                    stroke="black"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <!-- Columna de imagen -->
        <div class="flex justify-center items-start lg:justify-start w-full">
          <div class="relative sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200">
            <img class="rounded-3xl object-cover sm:mt-5 sm:ml-5 w-full h-full"
                 src="/equipo.jpg"
                 alt="about Us image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
