<script setup lang="ts">

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe",
    userName: "Product Manager",
    comment:
      "Wow Vue + Shadcn-Vue is awesome!. This template lets me change colors, fonts and images to match my brand identity. ",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sophia Collins",
    userName: "Cybersecurity Analyst",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Adam Johnson",
    userName: "Chief Technology Officer",
    comment:
      "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ethan Parker",
    userName: "Data Scientist",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ava Mitchell",
    userName: "IT Project Manager",
    comment:
      "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud incididunt consectetur adipiscing elit.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Isabella Reed",
    userName: "DevOps Engineer",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4.9,
  },
];
</script>

<template>
  <section
    id="testimonios"
    class="max-w-[75%] mx-auto pt-24"
  >
  <div class="mt-32">
        <div class="mb-16 text-center">
          <h2 class="md:text-4xl text-3xl font-extrabold">Lo que nuestros clientes opinan</h2>
        </div>
        <div class="grid md:grid-cols-3 md:py-16 gap-8 max-w-7xl max-md:max-w-lg mx-auto relative">
          <div
            class="bg-blue-100 lg:max-w-[70%] max-w-[80%] h-full w-full inset-0 mx-auto rounded-3xl absolute max-md:hidden">
          </div>
          <div class="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
            <div>
              <img src="https://readymadeui.com/profile_2.webp" class="w-12 h-12 rounded-full" />
              <h4 class="whitespace-nowrap font-semibold mt-2">Jesse Tirado</h4>
              <p class="mt-1 text-xs">Gerente de Marketing en oceanica</p>
            </div>
            <div class="mt-4">
              <p>The service was amazing. I never had to wait that long for my food.
                The staff was friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
          </div>
          <div class="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
            <div>
              <img src="https://readymadeui.com/profile_3.webp" class="w-12 h-12 rounded-full" />
              <h4 class="whitespace-nowrap font-semibold mt-2">Efren Villarreal Coronel</h4>
              <p class="mt-1 text-xs">Gerente Tecnologia e Innovacion Quezaltic</p>
            </div>
            <div class="mt-4">
              <p>The service was amazing. I never had to wait that long for my food.
                The staff was friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
          </div>
          <div class="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
            <div>
              <img src="https://readymadeui.com/profile_4.webp" class="w-12 h-12 rounded-full" />
              <h4 class="whitespace-nowrap font-semibold mt-2">Simon Konecki</h4>
              <p class="mt-1 text-xs">Founder of Labar</p>
            </div>
            <div class="mt-4">
              <p>The service was amazing. I never had to wait that long for my food.
                The staff was friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>
