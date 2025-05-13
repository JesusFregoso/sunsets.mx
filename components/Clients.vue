<script setup lang="ts">
import {
  Crown,
  Vegan,
  Ghost,
  Puzzle,
  Squirrel,
  Cookie,
  Drama,
} from "lucide-vue-next";

interface clientsProps {
  img: string;
  name: string;
}

const clients: clientsProps[] = [
  {
    img: "/clients/trazolab.png",
    name: "Trazolab",
  },
  {
    img: "/clients/ceropapel.png",
    name: "Ceropapel",
  },
  {
    img: "/clients/dmenu.png",
    name: "DMENU",
  },
  {
    img: "/clients/brekky.png",
    name: "brekky",
  },
  {
    img: "/clients/foden.png",
    name: "Foden",
  },
  {
    img: "/clients/grupopetroil.png",
    name: "Grupo Petroil",
  },
];

const iconMap: Record<
  string,
  | typeof Crown
  | typeof Vegan
  | typeof Ghost
  | typeof Puzzle
  | typeof Squirrel
  | typeof Cookie
  | typeof Drama
> = {
  crown: Crown,
  vegan: Vegan,
  ghost: Ghost,
  puzzle: Puzzle,
  squirrel: Squirrel,
  cookie: Cookie,
  drama: Drama,
};
</script>

<template>
  <section
    id="clients"
    class="max-w-[75%] mx-auto pt-24"
  >
    <h2 class="text-lg md:text-xl text-center mb-6">Nuestros Clientes</h2>

    <div class="mx-auto">
      <ClientOnly>
        <Marquee
            class="gap-[3rem]"
            :pauseOnHover="true"
            :fade="true"
            innerClassName="gap-[3rem]"
            >
            <div
            v-for="{ img, name } in clients"
            :key="name"
            >
            <div class="flex items-center text-xl md:text-2xl font-medium">
              <img
              :src="img"
              height="100" width="200"  class="pl-5"/>
            </div>
          </div>
        </Marquee>
    </ClientOnly>
    </div>
  </section>
</template>
