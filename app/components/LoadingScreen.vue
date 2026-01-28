<template>
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-[100] bg-[#1F2334] flex items-center justify-center"
    >
      <div class="flex flex-col items-center gap-8">
        <div class="relative">
          <img src="/logo.svg" alt="Staco" class="h-16" />
          <div
            class="absolute inset-0 blur-xl bg-emerald-500/30 animate-pulse"
          ></div>
        </div>

        <div class="flex items-center gap-2">
          <span class="dot w-3 h-3 bg-emerald-400 rounded-full"></span>
          <span
            class="dot w-3 h-3 bg-emerald-400 rounded-full animation-delay-150"
          ></span>
          <span
            class="dot w-3 h-3 bg-emerald-400 rounded-full animation-delay-300"
          ></span>
        </div>

        <p class="font-['DM_Sans'] text-sm text-slate-400 tracking-wider">
          Loading...
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.dot {
  animation: bounce 0.6s infinite alternate;
}

.animation-delay-150 {
  animation-delay: 0.15s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-12px);
    opacity: 1;
  }
}
</style>
