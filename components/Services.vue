<script setup lang="ts">

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "Colaboración Mutua",
    title: "Una colaboración mutua que te garantiza acompañamiento constante",
    description:
      "Nos comprometemos a trabajar contigo en cada paso del camino. No te dejamos en ningún momento solo, creando soluciones de la mano que se adaptan a tus necesidades y potencian tu crecimiento.",
    image: "pillares/colaboracion.svg",
  },
  {
    badgeTitle: "Partidarios del Open Source",
    title: "El compromiso con el open source, dándote total transparencia y libertad.",
    description:
      "Creemos en la transparencia y en el poder del conocimiento compartido. Por ello, te entregamos todas las herramientas y códigos necesarios para que puedas avanzar de manera independiente, sin ataduras.",
      image: "pillares/opensource.svg",
  },
  {
    badgeTitle: "Siempre Innovando",
    title: "Una mentalidad de innovación constante para ofrecerte lo último en tecnología.",
    description:
      "La tecnología avanza y nosotros con ella. Constantemente nos mantenemos actualizados en el aprendizaje de nuevas tecnologías para ofrecerte siempre las soluciones más vanguardistas y efectivas.",
      image: "pillares/innovacion.svg",
  },
  {
    badgeTitle: "Aprendizaje en Conjunto",
    title: "Un enfoque de aprendizaje en conjunto que nos permite crecer y avanzar a tu lado.",
    description:
      "Nos encanta enseñar y aprender a tu lado. Estamos aquí para acompañarte en cada paso, resolviendo todas tus dudas 24/7 y asegurándonos de que el camino hacia el éxito sea claro y colaborativo.",
      image: "pillares/aprendizaje.svg",
  },
  {
    badgeTitle: "Optimización de Costos",
    title: "Evitamos modelos que encarecen tu inversión en la nube.",
    description:
      "Evitamos el modelo de \"zero config\" que genera cobros excesivos por la autogestión. Siempre estaremos a tu lado para ayudarte a optimizar recursos y reducir al máximo tu factura cloud.",
      image: "pillares/optimizacion.svg",
  }
];
</script>

<template>
  <section
    id="crecimiento"
    class="max-w-[75%] mx-auto pt-24"
    >
    <div class="text-center mb-8">

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4 text-secondary-400">
      Lo que nos hace diferentes
    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      En Sunset, destacamos por nuestra dedicación a crear soluciones personalizadas y escalables. Nos comprometemos a brindarte las herramientas que necesitas para seguir avanzando, todo mientras cuidamos tu presupuesto.
    </h3>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8 font-bold">Nuestra fortaleza se basa en cinco pilares fundamentales</h3>
    </div>

    <div class="lg:w-[80%] mx-auto relative">
      <div
    v-for="({ badgeTitle, title, description, image }, index) in HowItWorksList"
    :key="title"
    :class="[
      'flex flex-col md:flex-row  lg:flex-row mb-8 items-center relative',
      { 'md:flex-row-reverse lg:flex-row-reverse': index % 2 !== 0 },
    ]"
  >
    <!-- Contenedor de texto -->
    <div class="p-4">
      <div class="pb-4">
        <span
          class="inline-block bg-primary-100 text-primary-600 text-xs font-semibold px-2.5 py-0.5 rounded"
        >
          {{ badgeTitle }}
        </span>
      </div>
      <h2 class="text-xl font-bold mb-2">
        {{ title }}
      </h2>
      <p class="text-gray-500 w-4/5">
        {{ description }}
      </p>
    </div>
    <img :src="image" class="w-[300px]  md:w-[250px] lg:w-[450px] mx-auto -scale-x-100 "/>
      </div>
    </div>
  </section>
</template>
