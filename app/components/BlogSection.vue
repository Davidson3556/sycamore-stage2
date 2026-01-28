<template>
  <section id="blog" class="py-16 md:py-24 bg-[#e8ecef]">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
      <div class="mb-12">
        <span
          class="text-[#44C486] font-['DM_Sans'] font-bold text-sm md:text-[18px] tracking-widest uppercase"
        >
          Blog Post
        </span>
        <h2
          class="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl md:text-4xl lg:text-[48px] text-[#111] mt-3"
        >
          Latest Articles
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: 100 },
          }"
          class="flex flex-col justify-between min-h-[320px] hover:shadow-lg transition-shadow duration-300"
          :ui="{
            body: 'p-6 md:p-8 flex flex-col justify-between h-full',
            root: 'rounded-3xl bg-white border-none ring-0',
          }"
        >
          <div>
            <span
              class="text-[#44C486] font-['DM_Sans'] font-bold text-xs md:text-[15px] tracking-widest uppercase"
            >
              Investments
            </span>
            <h3
              class="font-['Plus_Jakarta_Sans'] font-bold text-xl md:text-2xl text-[#444] mt-3 leading-tight"
            >
              We always try to discover success startup business
            </h3>
            <p
              class="font-['DM_Sans'] text-[14px] md:text-[16px] text-[#444] mt-4 leading-relaxed"
            >
              Because those who do not know how to pursue pleasure rationally
              encounter consequences that are extremely painful nor again is
              there anyone.
            </p>
          </div>
          <div class="flex items-center justify-between mt-6">
            <div class="flex items-center gap-3">
              <UAvatar src="/blogimage1.png" alt="Adon Neo" size="md" />
              <span class="font-['DM_Sans'] font-medium text-sm text-[#111]"
                >Adon Neo</span
              >
            </div>
            <span class="font-['DM_Sans'] text-sm text-[#999]"
              >22 Mar, 2023</span
            >
          </div>
        </UCard>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: 200 },
          }"
          class="rounded-3xl p-6 md:p-8 flex flex-col justify-end min-h-[320px] hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
          style="
            background-image: url(&quot;/blog1.png&quot;);
            background-size: cover;
            background-position: center;
          "
        >
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          ></div>

          <div class="relative z-10">
            <span
              class="text-[#fff] font-['DM_Sans'] font-bold text-xs md:text-[15px] tracking-widest uppercase"
            >
              Integration
            </span>
            <h3
              class="font-['Plus_Jakarta_Sans'] font-extrabold text-xl md:text-2xl lg:text-[24px] text-white mt-3 leading-tight"
            >
              Seamless integration with Salesforce & HubSpot
            </h3>
          </div>
          <div class="flex items-center justify-between mt-6 relative z-10">
            <div class="flex items-center gap-3">
              <UAvatar src="/blogimage2.png" alt="Henray Nion" size="md" />
              <span class="font-['DM_Sans'] font-medium text-sm text-white"
                >Henray Nion</span
              >
            </div>
            <span
              class="font-['DM_Sans'] text-sm md:text-[16px] text-[#fff] font-medium"
              >30 Apr, 2023</span
            >
          </div>
        </div>

        <UCard
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: 300 },
          }"
          class="flex flex-col justify-between min-h-[320px] hover:shadow-lg transition-shadow duration-300"
          :ui="{
            body: 'p-6 md:p-8 flex flex-col justify-between h-full',
            root: 'rounded-3xl border-none ring-0',
          }"
          style="background-color: #b2eda1"
        >
          <div>
            <span
              class="text-[#111] font-['DM_Sans'] font-bold text-xs md:text-[15px] tracking-widest uppercase"
            >
              Integration
            </span>
            <h3
              class="font-['Plus_Jakarta_Sans'] font-extrabold text-xl md:text-2xl lg:text-[30px] text-[#111] mt-3 leading-tight"
            >
              Convenient way to find financial advisors in your business area
            </h3>
          </div>
          <div class="flex items-center justify-between mt-6">
            <div class="flex items-center gap-3">
              <UAvatar src="/blogimage3.png" alt="Mordana Loreo" size="md" />
              <span class="font-['DM_Sans'] font-medium text-sm text-[#111111]"
                >Mordana Loreo</span
              >
            </div>
            <span class="font-['DM_Sans'] text-sm md:text-[16px] text-[#999]"
              >8 Aug, 2023</span
            >
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
