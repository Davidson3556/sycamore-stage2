<template>
  <section id="testimonials" class="py-16 md:py-24 bg-[#e8ecef]">
    <div class="max-w-6xl mx-auto px-6 md:px-8">
      <div class="bg-white rounded-3xl p-6 md:p-12 shadow-sm">
        <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="relative h-[350px] md:h-[450px]">
            <img
              v-for="(testimonial, index) in testimonials"
              :key="testimonial.id"
              :src="testimonial.image"
              :alt="testimonial.name"
              class="absolute md:left-[-50px] left-[-20px] inset-0 w-full h-full object-contain object-left transition-all duration-500"
              :class="
                activeIndex === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              "
            />
          </div>

          <div class="relative">
            <div
              class="w-14 h-14 bg-[#44C486] rounded-full rounded-br-none flex items-center justify-center mb-6 shadow-sm"
            >
              <div
                class="w-10 h-10 bg-white rounded-full flex items-center justify-center"
              >
                <span class="text-[#1F2334] font-bold text-xl leading-none"
                  >66</span
                >
              </div>
            </div>

            <div class="relative min-h-[120px] mb-6">
              <p
                v-for="(testimonial, index) in testimonials"
                :key="testimonial.id + '-text'"
                class="font-['DM_Sans'] text-base md:text-lg text-[#111] leading-7 absolute top-0 left-0 transition-all duration-500"
                :class="
                  activeIndex === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                "
              >
                {{ testimonial.quote }}
              </p>
            </div>

            <div class="relative min-h-[50px]">
              <div
                v-for="(testimonial, index) in testimonials"
                :key="testimonial.id + '-author'"
                class="absolute top-0 left-0 transition-all duration-500"
                :class="
                  activeIndex === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                "
              >
                <h4
                  class="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#111] mt-6"
                >
                  {{ testimonial.name }}
                </h4>
                <p class="font-['DM_Sans'] text-sm text-[#111]">
                  {{ testimonial.title }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 h-1 bg-[#ECEFF1] rounded-full overflow-hidden">
          <div
            class="h-full bg-[#44C486] rounded-full transition-all"
            :style="{ width: progressPercent + '%' }"
          ></div>
        </div>

        <div
          class="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          <img
            src="/jquery.png"
            alt="jQuery"
            class="h-4 md:h-6 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
          <img
            src="/github.png"
            alt="GitHub"
            class="h-4 md:h-6 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
          <img
            src="/portis.png"
            alt="Portis"
            class="h-4 md:h-6 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
          <img
            src="/envato.png"
            alt="Envato"
            class="h-4 md:h-6 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
          <img
            src="/daomak.png"
            alt="Daomak"
            class="h-4 md:h-6 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const testimonials = [
  {
    id: 1,
    image: "/trusted1.PNG",
    quote:
      "I must explain to you how all this mistaken. Idea of denouncing pleasure and praising pain was born and I will give you a complete account. 😊",
    name: "Roe Smith",
    title: "Director, Growth Marketing",
  },
  {
    id: 2,
    image: "/trusted2.PNG",
    quote:
      "We use as filler text for layouts, non-readability is of great importance but because those who do not know how to pleasure rationally encounter consequences that are...",
    name: "Aurthoe De,",
    title: "CEO - Dorid Co",
  },
  {
    id: 3,
    image: "/trusted3.PNG",
    quote:
      "Making this the first true 😊 generator on the Internet. It uses a dictionary of over words, combined with a handful of model sentence structures, to generate 👏👏",
    name: "Dennis Lail",
    title: "Marketer",
  },
  {
    id: 4,
    image: "/trusted4.PNG",
    quote:
      "Very denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, combined with a handfulso blinde...",
    name: "Peter Leo,",
    title: "CTO - Criston",
  },
  {
    id: 5,
    image: "/trusted5.PNG",
    quote:
      "Making this the first true 😊 generator on the Internet. It uses a dictionary of over words, combined with a handful of model sentence structures, to generate 👏👏",
    name: "Dennis Lail",
    title: "Marketer",
  },
];

const activeIndex = ref(0);
const progress = ref(0);
let animationFrame: number | null = null;
let lastTime: number = 0;

const TRANSITION_TIME = 4000;
const STEP_COUNT = testimonials.length;

const progressPercent = computed(() => {
  const baseProgress = (activeIndex.value / STEP_COUNT) * 100;
  const stepProgress = (progress.value / 100) * (100 / STEP_COUNT);
  return baseProgress + stepProgress;
});

const animate = (currentTime: number) => {
  if (!lastTime) lastTime = currentTime;
  const deltaTime = currentTime - lastTime;

  progress.value += (deltaTime / TRANSITION_TIME) * 100;

  if (progress.value >= 100) {
    progress.value = 0;
    activeIndex.value = (activeIndex.value + 1) % testimonials.length;
  }

  lastTime = currentTime;
  animationFrame = requestAnimationFrame(animate);
};

onMounted(() => {
  animationFrame = requestAnimationFrame(animate);
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});
</script>
