<template>
  <button
    @click="scrollToTop"
    class="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-50 transition-all duration-300 hover:shadow-xl"
    :class="
      scrollProgress > 0
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-4 pointer-events-none'
    "
  >
    <svg class="absolute inset-0 w-12 h-12 -rotate-90" viewBox="0 0 48 48">
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke="#E5E7EB"
        stroke-width="2"
      />
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke="#10B981"
        stroke-width="2"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="
          circumference - (scrollProgress / 100) * circumference
        "
        class="transition-all duration-150"
      />
    </svg>
    <UIcon
      name="i-lucide-arrow-up"
      class="w-5 h-5 text-emerald-500 relative z-10"
    />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const scrollProgress = ref(0);
const circumference = 2 * Math.PI * 22;

const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollProgress);
});
</script>
