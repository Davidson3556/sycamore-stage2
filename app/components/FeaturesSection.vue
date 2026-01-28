<template>
  <section id="features" class="py-16 md:py-24">
    <div class="container-custom">
      <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
        <UCard
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: 100 },
          }"
          class="group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          :ui="{
            body: 'p-8',
            root: 'rounded-2xl bg-[#ECEFF1] ring-0 shadow-none',
          }"
        >
          <div
            class="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
          >
            <img src="/technology.svg" alt="Technology" class="w-10 h-10" />
          </div>
          <h3
            class="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#000000] mb-4"
          >
            Used advanced technologies
          </h3>
          <p class="font-['DM_Sans'] text-base text-[#444] leading-7 mb-6">
            I must explain to you how all this mistaken. Idea of main denouncing
            pleasure and praising pain was born
          </p>
          <UButton
            variant="link"
            color="neutral"
            class="w-full flex items-center justify-between font-['DM_Sans'] font-medium text-base text-[#000000] group-hover:text-[#44c486] hover:text-[#44c486] hover:bg-transparent duration-300 p-0"
          >
            <span>Learn more</span>
            <span
              class="relative w-9 h-9 bg-[#0000001a] rounded-full flex items-center justify-center group-hover:bg-[#44c486] transition-all duration-300"
            >
              <UIcon
                name="i-lucide-arrow-right"
                class="w-4 h-4 absolute transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:translate-x-1"
              />
              <UIcon
                name="i-lucide-arrow-up-right"
                class="w-4 h-4 absolute transition-all duration-300 opacity-0 text-white group-hover:opacity-100"
              />
            </span>
          </UButton>
        </UCard>

        <UCard
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: 200 },
          }"
          class="group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          :ui="{
            body: 'p-8',
            root: 'rounded-2xl bg-[#ECEFF1] ring-0 shadow-none',
          }"
        >
          <div
            class="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
          >
            <img src="/typography.svg" alt="Typography" class="w-10 h-10" />
          </div>
          <h3
            class="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#000000] mb-4"
          >
            Clean design & Typography
          </h3>
          <p class="font-['DM_Sans'] text-base text-[#444] leading-7 mb-6">
            I must explain to you how all this mistaken. Idea of main denouncing
            pleasure and praising pain was born
          </p>
          <UButton
            variant="link"
            color="neutral"
            class="w-full flex items-center justify-between font-['DM_Sans'] font-medium text-base text-[#000000] group-hover:text-[#44c486] hover:text-[#44c486] hover:bg-transparent transition-colors duration-300 p-0"
          >
            <span>Learn more</span>
            <span
              class="relative w-9 h-9 bg-[#0000001a] rounded-full flex items-center justify-center group-hover:bg-[#44c486] transition-all duration-300"
            >
              <UIcon
                name="i-lucide-arrow-right"
                class="w-4 h-4 absolute transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:translate-x-1"
              />
              <UIcon
                name="i-lucide-arrow-up-right"
                class="w-4 h-4 absolute transition-all duration-300 opacity-0 text-white group-hover:opacity-100"
              />
            </span>
          </UButton>
        </UCard>

        <UCard
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: 300 },
          }"
          class="group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          :ui="{
            body: 'p-8',
            root: 'rounded-2xl bg-[#ECEFF1] ring-0 shadow-none',
          }"
        >
          <div class="w-18 h-18 flex items-center justify-center mb-6">
            <img src="/customer.svg" alt="Customer Support" class="w-10 h-10" />
          </div>
          <h3
            class="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#000000] mb-4"
          >
            Best customer support
          </h3>
          <p class="font-['DM_Sans'] text-base text-[#444] leading-7 mb-6">
            I must explain to you how all this mistaken. Idea of main denouncing
            pleasure and praising pain was born
          </p>
          <UButton
            variant="link"
            color="neutral"
            class="w-full flex items-center justify-between font-['DM_Sans'] font-medium text-base text-[#000000] group-hover:text-[#44c486] hover:text-[#44c486] hover:bg-transparent transition-colors duration-300 p-0"
          >
            <span>Learn more</span>
            <span
              class="relative w-9 h-9 bg-[#0000001a] rounded-full flex items-center justify-center group-hover:bg-[#44c486] transition-all duration-300"
            >
              <UIcon
                name="i-lucide-arrow-right"
                class="w-4 h-4 absolute transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:translate-x-1"
              />
              <UIcon
                name="i-lucide-arrow-up-right"
                class="w-4 h-4 absolute transition-all duration-300 opacity-0 text-white group-hover:opacity-100"
              />
            </span>
          </UButton>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
