<template>
  <section
    ref="statsRef"
    class="py-16 md:py-24 bg-white relative overflow-hidden border-t-[#ECEFF1] border"
  >
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <img
        src="/vector-map.svg"
        alt=""
        class="w-full h-full object-cover opacity-100"
        aria-hidden="true"
      />
    </div>

    <div class="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
      <div class="grid md:grid-cols-3 gap-12 md:gap-12 text-center">
        <div
          v-for="(stat, index) in stats"
          :key="stat.id"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: stat.delay },
          }"
          class="space-y-2"
        >
          <h3
            class="font-['Plus_Jakarta_Sans'] font-bold text-4xl md:text-5xl text-[#004D42]"
          >
            {{ displayedValues[index] }}{{ stat.suffix }}
          </h3>
          <p class="font-['DM_Sans'] font-medium text-base text-[#004D42]">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const statsRef = ref<HTMLElement | null>(null);
const sectionVisible = ref(false);

const stats = [
  { id: 1, target: 200, suffix: "", label: "Countries Worldwide", delay: 100 },
  { id: 2, target: 156, suffix: "K", label: "Registered User", delay: 200 },
  {
    id: 3,
    target: 23,
    suffix: "K",
    label: "Small & Big Companies",
    delay: 300,
  },
];

const displayedValues = ref(stats.map(() => 0));

const animateValues = () => {
  stats.forEach((stat, index) => {
    const duration = 1500;
    const start = 0;
    const end = stat.target;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      displayedValues.value[index] = Math.floor(
        easeProgress * (end - start) + start,
      );

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        displayedValues.value[index] = end;
      }
    };

    setTimeout(() => {
      window.requestAnimationFrame(step);
    }, stat.delay);
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry && entry.isIntersecting && !sectionVisible.value) {
        sectionVisible.value = true;
        animateValues();
      }
    },
    { threshold: 0.2 },
  );

  if (statsRef.value) {
    observer.observe(statsRef.value);
  }
});
</script>
