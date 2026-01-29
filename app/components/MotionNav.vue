<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 px-4">
    <nav
      class="relative h-16 flex items-center justify-between rounded-full p-2"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        class="absolute inset-0 rounded-full bg-gradient-to-b from-neutral-600 to-neutral-900"
        aria-hidden="true"
      ></div>

      <div
        class="absolute inset-[3px] rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]"
        aria-hidden="true"
      ></div>

      <div
        v-motion
        :initial="{ x: 0 }"
        :animate="{
          x: indicatorPosition,
          width: indicatorWidth,
          transition: {
            type: 'spring',
            stiffness: 400,
            damping: 30,
          },
        }"
        class="absolute h-10 md:h-12 rounded-full bg-gradient-to-b from-[#E8E8E8] via-[#C0C0C0] to-[#A0A0A0]"
        :style="{
          top: '50%',
          transform: 'translateY(-50%)',
          left: '8px',
        }"
      ></div>

      <div class="hidden md:flex relative z-10 items-center pl-4 pr-2">
        <img src="/logo.svg" alt="Staco - Home" class="h-8 w-auto" />
      </div>

      <button
        v-for="(tab, index) in tabs"
        :key="tab.id"
        :ref="(el) => setTabRef(el, index)"
        class="relative px-3 md:px-7 py-2 md:py-3 rounded-full flex justify-center items-center gap-1 md:gap-2 transition-colors z-10 cursor-pointer"
        :class="{ 'pointer-events-none': activeTab === tab.id }"
        @click="setActiveTab(tab.id, index)"
        :aria-current="activeTab === tab.id ? 'page' : undefined"
      >
        <span
          class="text-center text-xs md:text-base font-medium font-sans leading-tight transition-all duration-300 whitespace-nowrap"
          :class="
            activeTab === tab.id
              ? 'text-[#fff] font-semibold'
              : 'text-neutral-400 hover:text-neutral-100'
          "
        >
          {{ tab.label }}
        </span>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

interface Tab {
  id: string;
  label: string;
  href: string;
}

const tabs: Tab[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "features", label: "Features", href: "#features" },
  { id: "benefits", label: "Benefits", href: "#benefits" },
  { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  { id: "blog", label: "Blog", href: "#blog" },
];

const activeTab = ref("home");
const indicatorPosition = ref(0);
const indicatorWidth = ref(100);
const tabRefs = ref<(HTMLElement | null)[]>([]);

const setTabRef = (el: any, index: number) => {
  if (el) {
    tabRefs.value[index] = el as HTMLElement;
  }
};

const updateIndicator = (index: number) => {
  nextTick(() => {
    const tab = tabRefs.value[index];
    if (tab) {
      const tabRect = tab.getBoundingClientRect();
      const navRect = tab.parentElement?.getBoundingClientRect();

      if (navRect) {
        indicatorPosition.value = tab.offsetLeft - 8;
        indicatorWidth.value = tabRect.width;
      }
    }
  });
};

const setActiveTab = (tabId: string, index: number) => {
  activeTab.value = tabId;
  updateIndicator(index);

  const section = document.getElementById(tabId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  setTimeout(() => {
    updateIndicator(0);
  }, 100);

  window.addEventListener("resize", () => {
    const currentIndex = tabs.findIndex((t) => t.id === activeTab.value);
    if (currentIndex >= 0) {
      updateIndicator(currentIndex);
    }
  });
});
</script>

<style scoped>
nav {
  max-width: calc(100vw - 2rem);
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
nav::-webkit-scrollbar {
  display: none;
}
</style>
