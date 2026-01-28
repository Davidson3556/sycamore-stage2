<template>
  <section
    id="home"
    class="relative min-h-[600px] md:min-h-[500px] lg:min-h-screen flex items-center overflow-hidden bg-[#1F2334]"
  >
    <div
      class="absolute inset-0 pointer-events-none hidden md:block"
      aria-hidden="true"
    >
      <img
        v-motion
        :initial="{ opacity: 0, scale: 0.5, rotate: -20 }"
        :visible="{
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { duration: 600, delay: 400 },
        }"
        src="/heroleaf.svg"
        alt=""
        class="absolute top-28 left-[12%] w-10 h-12"
      />
      <img
        v-motion
        :initial="{ opacity: 0, scale: 0.5, rotate: 20 }"
        :visible="{
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { duration: 600, delay: 500 },
        }"
        src="/heroleaf.svg"
        alt=""
        class="absolute top-36 right-[36%] w-8 h-10 rotate-[20deg]"
      />
      <img
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :visible="{
          opacity: 1,
          scale: 1,
          transition: { duration: 600, delay: 700 },
        }"
        src="/heroleaf-dark.svg"
        alt=""
        class="absolute top-[45%] right-[48%] w-7 h-9 -rotate-[20deg]"
      />
    </div>

    <div
      class="max-w-7xl mx-auto px-6 md:px-8 relative z-10 pt-36 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20"
    >
      <div class="grid md:grid-cols-2 gap-8 md:gap-8 lg:gap-16 items-center">
        <div class="space-y-8">
          <h1
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 200 },
            }"
            class="font-['Plus_Jakarta_Sans'] font-bold text-4xl md:text-[36px] lg:text-[60px] leading-tight text-white"
          >
            Financial Security<br />
            Made
            <span class="relative inline-block min-w-[280px]">
              <span
                v-for="(word, index) in rotatingWords"
                :key="word"
                class="absolute left-0 text-[#B2EDA1] inline-block transition-all duration-500 ease-out"
                :class="
                  currentWordIndex === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                "
              >
                {{ word }}
                <span
                  class="absolute bottom-0 left-0 w-full h-1 bg-[#B2EDA1] origin-left transition-transform duration-400 ease-out delay-100"
                  :class="
                    currentWordIndex === index ? 'scale-x-100' : 'scale-x-0'
                  "
                ></span>
              </span>
              <span class="invisible">{{ rotatingWords[0] }}</span>
            </span>
          </h1>

          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 400 },
            }"
            class="font-['DM_Sans'] font-medium text-lg leading-9 text-white max-w-md"
          >
            Staco is the dedicated platform for human management that helps to
            grow your startup business quickly
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 600 },
            }"
            class="flex flex-row items-start md:items-center gap-4"
          >
            <UButton
              size="xl"
              color="primary"
              class="bg-[#44C486] hover:bg-[#B2EDA1] hover:text-[#111111] text-white px-6 py-3 md:px-5 md:py-2.5 lg:px-8 lg:py-4 rounded-full font-['DM_Sans'] font-semibold text-sm md:text-sm lg:text-base transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Start For Free
            </UButton>
            <button
              class="group flex items-center gap-3 text-white px-2 py-2 font-['DM_Sans'] font-medium text-base transition-colors duration-300"
            >
              <span>Let's talk</span>
              <span
                class="w-8 h-8 rounded-full border-2 bg-[#444444] border-[#444444] group-hover:border-[#44C486] group-hover:bg-[#44C486] flex items-center justify-center transition-all duration-300"
              >
                <UIcon
                  name="i-lucide-chevron-right"
                  class="w-5 h-5 text-white group-hover:text-white group-hover:-rotate-45 transition-all duration-300"
                />
              </span>
            </button>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9, x: 50 }"
          :visible="{
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 800, delay: 400 },
          }"
          class="relative lg:ml-8"
        >
          <img
            src="/heroline1.svg"
            alt=""
            class="absolute z-20 pointer-events-none h-[150px] md:h-[200px] lg:h-[250px] -left-10 md:-left-14 -top-[120px] md:-top-[160px] lg:-top-[200px] hidden md:block"
            aria-hidden="true"
          />

          <div
            class="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-10"
          >
            <video
              ref="videoRef"
              class="w-full h-[200px] md:h-[280px] lg:h-auto object-cover block"
              autoplay
              muted
              loop
              playsinline
            >
              <source src="/Staco - Finance.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <button
              @click="toggleVideo"
              class="absolute bottom-3 right-3 md:bottom-6 md:right-6 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 z-20"
              :aria-label="isPlaying ? 'Pause video' : 'Play video'"
            >
              <UIcon
                v-if="isPlaying"
                name="i-ph-pause-fill"
                class="w-4 h-4 md:w-5 md:h-5 text-[#44C486]"
              />
              <UIcon
                v-else
                name="i-ph-play-fill"
                class="w-4 h-4 md:w-5 md:h-5 text-[#44C486]"
              />
            </button>
          </div>

          <img
            src="/heroline2.svg"
            alt=""
            class="absolute z-0 pointer-events-none h-[300px] md:h-[380px] lg:h-[455px] -left-12 md:-left-16 lg:-left-20 top-[5px] hidden md:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const rotatingWords = ["Easier", "Accountable", "Unbeatable"];
const currentWordIndex = ref(0);
let rotationInterval: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  rotationInterval = setInterval(() => {
    currentWordIndex.value =
      (currentWordIndex.value + 1) % rotatingWords.length;
  }, 4000);
});

onUnmounted(() => {
  if (rotationInterval) {
    clearInterval(rotationInterval);
  }
});

const videoRef = ref<HTMLVideoElement | null>(null);
const isPlaying = ref(true);

const toggleVideo = () => {
  if (videoRef.value) {
    if (isPlaying.value) {
      videoRef.value.pause();
    } else {
      videoRef.value.play();
    }
    isPlaying.value = !isPlaying.value;
  }
};
</script>
