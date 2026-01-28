<template>
  <section ref="sectionRef" class="py-8 md:py-12 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
      <div
        class="bg-[#004D42] rounded-3xl px-8 md:px-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 relative overflow-hidden"
      >
        <div class="py-12 md:py-16 space-y-6 relative z-10">
          <h2
            class="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl md:text-4xl lg:text-[48px] text-white leading-tight"
          >
            We are building<br />
            financial<br />
            foundations
          </h2>
          <UButton
            size="lg"
            class="group bg-[#B2EDA1] hover:bg-[#44c486] text-[#111] hover:text-white px-6 py-3 rounded-full font-['DM_Sans'] font-semibold text-base transition-all duration-300 hover:-translate-y-0.5"
          >
            <span class="mr-2">Let's Talk</span>
            <div class="relative w-5 h-5 flex items-center justify-center">
              <UIcon
                name="i-lucide-arrow-right"
                class="w-5 h-5 absolute transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:translate-x-1"
              />
              <UIcon
                name="i-lucide-arrow-up-right"
                class="w-5 h-5 absolute transition-all duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
          </UButton>
        </div>

        <div
          class="w-full md:w-auto flex-shrink-0 relative z-10 transition-transform duration-300 ease-out"
          :style="{ transform: `translateY(${parallaxY}px)` }"
        >
          <img
            src="/foundation.svg"
            alt="Financial growth arrows"
            class="w-full md:w-[320px] lg:w-[450px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const sectionRef = ref<HTMLElement | null>(null);
const parallaxY = ref(0);

const handleScroll = () => {
  if (!sectionRef.value) return;

  const rect = sectionRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    const distanceCenter = rect.top + rect.height / 2 - windowHeight / 2;
    parallaxY.value = distanceCenter * -0.1;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
