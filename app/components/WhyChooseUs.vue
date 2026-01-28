<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="space-y-6">
          <span
            class="font-['DM_Sans'] font-semibold text-[18px] tracking-widest uppercase transition-colors duration-500"
            :class="activeIndex >= 1 ? 'text-[#0095ff]' : 'text-[#44C486]'"
          >
            Why Choose Us
          </span>

          <div class="relative min-h-[120px]">
            <h2
              v-for="(slide, index) in slides"
              :key="slide.id"
              class="font-['Plus_Jakarta_Sans'] font-bold text-3xl md:text-4xl lg:text-[40px] text-[#111] leading-tight absolute top-0 left-0 transition-all duration-500"
              :class="
                activeIndex === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              "
            >
              <span v-html="slide.title"></span>
            </h2>
          </div>

          <p class="font-['DM_Sans'] text-base text-[#444] leading-7 max-w-lg">
            We use as filler text for layouts, non-readability is of great
            importance but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful nor
            again is there anyone.
          </p>

          <div class="relative min-h-[80px]">
            <div
              v-for="(slide, index) in slides"
              :key="slide.id + '-features'"
              class="absolute top-0 left-0 transition-all duration-500"
              :class="
                activeIndex === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              "
            >
              <div class="flex flex-wrap gap-x-8 gap-y-3">
                <div
                  v-for="feature in slide.features.slice(0, 2)"
                  :key="feature"
                  class="flex items-center gap-2"
                >
                  <UIcon
                    name="i-lucide-check"
                    class="w-5 h-5 transition-colors duration-500 text-[#44C486]"
                  />
                  <span class="font-['DM_Sans'] text-sm text-slate-700">{{
                    feature
                  }}</span>
                </div>
              </div>
              <div
                v-if="slide.features[2]"
                class="flex items-center gap-2 mt-3"
              >
                <UIcon
                  name="i-lucide-check"
                  class="w-5 h-5 transition-colors duration-500 text-[#44C486]"
                />
                <span class="font-['DM_Sans'] text-sm text-slate-700">{{
                  slide.features[2]
                }}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex gap-3 justify-center lg:justify-end items-center h-[380px] md:h-[420px]"
        >
          <div
            v-for="(slide, index) in slides"
            :key="slide.id"
            @click="setActive(index)"
            class="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 ease-out"
            :class="
              activeIndex === index
                ? 'w-[200px] md:w-[240px] h-[340px] md:h-[380px] z-10'
                : 'w-[80px] md:w-[100px] h-[280px] md:h-[320px] opacity-40'
            "
          >
            <img
              :src="slide.image"
              :alt="slide.title"
              class="w-full h-full object-cover"
            />
            <div
              v-if="activeIndex === index"
              class="absolute bottom-4 left-4 right-4 h-1 bg-white/30 rounded-full overflow-hidden"
            >
              <div
                class="h-full bg-white rounded-full loading-bar"
                :key="activeIndex"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const slides = [
  {
    id: 1,
    image: "/discover.png",
    title: "Discover business<br />Opportunities",
    features: [
      "Profile Consultation",
      "Asset management",
      "No-risk business idea",
    ],
  },
  {
    id: 2,
    image: "/manage1.png",
    title: "Manage team increase<br />productivity",
    features: ["99% Survey Report", "Trusted by teams", "Self-Service"],
  },
  {
    id: 3,
    image: "/manage2.png",
    title: "Manage team increase<br />productivity",
    features: ["99% Survey Report", "Trusted by teams", "Self-Service"],
  },
];

const activeIndex = ref(0);
let autoInterval: ReturnType<typeof setInterval> | null = null;

const TRANSITION_TIME = 4000;

const startInterval = () => {
  autoInterval = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % slides.length;
  }, TRANSITION_TIME);
};

const setActive = (index: number) => {
  activeIndex.value = index;
  if (autoInterval) clearInterval(autoInterval);
  startInterval();
};

onMounted(() => {
  startInterval();
});

onUnmounted(() => {
  if (autoInterval) clearInterval(autoInterval);
});
</script>

<style scoped>
.loading-bar {
  animation: loadProgress 4s linear forwards;
}

@keyframes loadProgress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
