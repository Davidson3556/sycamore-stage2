<template>
  <section id="benefits" class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
      <div class="text-center mb-16">
        <span
          class="text-[#44c486] font-['DM_Sans'] font-bold text-sm md:text-[18px] tracking-widest uppercase mb-4 block"
        >
          Benefits
        </span>
        <h2
          class="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#111] leading-tight"
        >
          Most useful features<br />
          You must need
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 md:gap-8 lg:gap-16 items-start">
        <div
          class="relative min-h-[400px] md:min-h-[500px] lg:min-h-[550px] overflow-hidden"
        >
          <div
            v-for="(feature, index) in features"
            :key="feature.id"
            class="absolute inset-0 transition-all duration-500 ease-out"
            :class="
              activeIndex === index
                ? 'opacity-100 translate-x-0'
                : index < activeIndex
                  ? 'opacity-0 -translate-x-8'
                  : 'opacity-0 translate-x-8'
            "
          >
            <img
              :src="feature.image"
              :alt="feature.title"
              class="w-full h-full object-contain"
            />
          </div>
        </div>

        <div class="space-y-0">
          <div
            v-for="(feature, index) in features"
            :key="feature.id"
            class="border-b border-gray-200"
          >
            <button
              @click="setActiveIndex(index)"
              class="w-full py-6 flex items-center justify-between text-left group"
            >
              <h3
                class="font-['Plus_Jakarta_Sans'] font-semibold text-lg md:text-[18px] transition-colors duration-300"
                :class="
                  activeIndex === index
                    ? 'text-[#111]'
                    : 'text-[#111] group-hover:text-[#111]'
                "
              >
                {{ feature.title }}
              </h3>
              <span
                class="w-8 h-8 flex items-center justify-center transition-all duration-300"
              >
                <UIcon
                  :name="
                    activeIndex === index ? 'i-lucide-minus' : 'i-lucide-plus'
                  "
                  class="w-5 h-5"
                  :class="
                    activeIndex === index ? 'text-[#44c486]' : 'text-[#111]'
                  "
                />
              </span>
            </button>

            <div
              class="overflow-hidden transition-all duration-500 ease-out"
              :class="activeIndex === index ? 'max-h-40 pb-6' : 'max-h-0'"
            >
              <p
                class="font-['DM_Sans'] text-base md:text-[16px] text-[#444] leading-7"
              >
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const activeIndex = ref(0);

const features = [
  {
    id: 1,
    title: "Financial advisor program",
    description:
      "We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.",
    image: "/feature1.png",
  },
  {
    id: 2,
    title: "Business growth",
    description:
      "We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.",
    image: "/feature4.png",
  },
  {
    id: 3,
    title: "Marketing plan",
    description:
      "We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.",
    image: "/feature2.png",
  },
  {
    id: 4,
    title: "Ethical finance guide",
    description:
      "We use as filler text for layouts, non-readability is of great before importance but because those who do not know how to pursue pleasure rationally encounter consequences.",
    image: "/feature3.png",
  },
];

let autoTransitionInterval: ReturnType<typeof setInterval> | null = null;

const startAutoTransition = () => {
  autoTransitionInterval = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % features.length;
  }, 3000);
};

const resetAutoTransition = () => {
  if (autoTransitionInterval) {
    clearInterval(autoTransitionInterval);
  }
  startAutoTransition();
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "ArrowRight") {
    activeIndex.value = (activeIndex.value + 1) % features.length;
    resetAutoTransition();
  } else if (event.key === "ArrowLeft") {
    activeIndex.value =
      (activeIndex.value - 1 + features.length) % features.length;
    resetAutoTransition();
  }
};

onMounted(() => {
  startAutoTransition();
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  if (autoTransitionInterval) {
    clearInterval(autoTransitionInterval);
  }
  window.removeEventListener("keydown", handleKeydown);
});

const setActiveIndex = (index: number) => {
  activeIndex.value = index;
  resetAutoTransition();
};
</script>
