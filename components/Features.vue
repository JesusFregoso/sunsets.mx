<script setup lang="ts">
import { ShieldCheck, Headphones, Globe, MessageSquare, TrendingUp, Maximize, BarChart, GaugeCircle, Computer } from 'lucide-vue-next'


interface FeaturesProps {
  icon: Component;
  title: string;
  description: string;
  href: string;
}
const featureList: FeaturesProps[] = [
{
    icon: GaugeCircle,
    title: 'Personalización',
    description: 'Desarrollo Personalizado para satisfacer tus necesidades.',
    href: '/servicios/desarrollo-a-la-medida'
  },
{
    icon: ShieldCheck,
    title: 'Seguridad',
    description: 'Tus datos están protegidos por las últimas medidas de seguridad.',
    href: '/servicios/seguridad'
  },
  {
    icon: Headphones,
    title: 'Soporte',
    description: 'Atención al cliente 24/7 para todas tus consultas.',
    href: '/servicios/soporte'
  },
  {
    icon: Globe,
    title: 'Alcance Nacional e Internacional',
    description: 'Expande tu alcance a toda la república.',
    href: '/servicios/alcance'
  },
  {
    icon: MessageSquare,
    title: 'Comunicación',
    description: 'Comunicación fluida para tu equipo.',
    href: '/servicios/comunicacion'
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Tracking',
    description:
      'Optimiza el seguimiento y análisis del comportamiento de tus clientes.',
    href: '/servicios/analytics-tracking'
  },
  {
    icon: Maximize,
    title: 'Escalabilidad',
    description:
      'Escala fácilmente tus recursos para satisfacer las crecientes demandas.',
    href: '/servicios/escalabilidad'
  },
  {
    icon: Computer,
    title: 'Integración',
    description: 'Integra sin problemas tus herramientas, datos y sistemas existentes.',
    href: '/servicios/integracion'
  },
  {
    icon: BarChart,
    title: 'Ciencia de Datos',
    description:
      'Transforma tus datos en información accionable.',
    href: '/servicios/ciencia-de-datos'
  }
]
</script>

<template>
  <section
    id="servicios"
class="max-w-[75%] mx-auto pt-24"
  >

  <div class="mt-28 bg-gray-50 px-4 sm:px-10 py-12">
        <div class="max-w-7xl mx-auto">
          <div class="md:text-center max-w-2xl mx-auto">
            <h2 class="md:text-4xl text-3xl font-bold mb-6 text-secondary-400">Transforma tu Negocio</h2>
            <p>Desde soluciones avanzadas en analytics y tracking, integraciones con aplicaciones legacy de terceros, ciencia de datos y desarrollo especializado, hasta migraciones a la nube, operaciones y estrategias digitales para equipos de alto rendimiento, contamos con la experiencia necesaria para impulsar la transformación digital de tu empresa.</p>
          </div>
          <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-14">
            <article
              v-for="(feature, index) in featureList"
              class="hover:animate-background rounded-xl bg-gradient-to-r from-siren-100 via-accent-100 to-primary-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-xs hover:[animation-duration:_4s]  align-middle"
              :key="index"
            >
            <div class="rounded-[10px] bg-white sm:p-6 h-full align-between">
              <!-- Icono del artículo -->
              <component :is="feature.icon" class="w-8 h-8 text-siren mb-4" />

              <!-- Título y descripción -->
              <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
              <p class="text-gray-600">{{ feature.description }}</p>

              <!-- Enlace -->
              <a
                :href="feature.href"
                class="text-siren font-semibold inline-block mt-4 hover:underline"
              >
                Leer mas
              </a>
            </div>
            </article>
          </div>
        </div>
      </div>
  </section>
</template>

<style lang="less" scoped></style>
