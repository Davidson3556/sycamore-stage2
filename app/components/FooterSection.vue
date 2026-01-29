<template>
  <div
    class="disclaimer-fixed fixed bottom-0 left-0 right-0 bg-[#e8ecef] py-8 md:py-10"
    style="z-index: -1"
    ref="disclaimerRef"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <h5
        class="font-['Plus_Jakarta_Sans'] mt-[40px] md:mt-0 font-bold text-base text-[#111] text-sm md:text-[15px] mb-4"
      >
        Disclaimer:
      </h5>
      <p
        class="font-['DM_Sans'] text-sm md:text-[14px] text-[#444] leading-relaxed mb-4"
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary.
      </p>
      <p class="font-['DM_Sans'] text-sm text-[#444] leading-relaxed">
        Making this the first true generator on the Internet. It uses a
        dictionary of over 200 Latin words, combined handful of model sentence
        structures, to generate which looks reasonable. The generated Lorem
        Ipsum is therefore always
      </p>
    </div>
  </div>

  <section
    class="footer-section bg-[#e8ecef] pt-12 relative"
    :style="{ marginBottom: disclaimerHeight + 'px' }"
  >
    <footer
      class="footer-main bg-[#1F2334] mx-6 md:mx-12 rounded-3xl pt-16 pb-12"
    >
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div
          class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12 lg:gap-8 pb-12 border-b border-white/10"
        >
          <div class="col-span-2 md:col-span-4 lg:col-span-2 space-y-6">
            <div class="flex items-center gap-2">
              <img src="/logo.svg" alt="Staco" class="h-10" />
            </div>
            <p
              class="font-['DM_Sans'] text-[16px] text-[#ffffffb2] leading-relaxed max-w-xs"
            >
              Staco is the dedicated platform for performance management that
              helps to grow your startup quickly
            </p>
            <div class="flex items-center gap-3">
              <a
                href="#"
                aria-label="Follow us on Facebook"
                class="group w-10 h-10 rounded-full border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <UIcon
                  name="i-fa6-brands-facebook-f"
                  class="text-white group-hover:text-emerald-500 text-sm transition-colors duration-300"
                />
              </a>
              <a
                href="#"
                aria-label="Follow us on X (Twitter)"
                class="group w-10 h-10 rounded-full border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <UIcon
                  name="i-fa6-brands-x-twitter"
                  class="text-white group-hover:text-emerald-500 text-sm transition-colors duration-300"
                />
              </a>
              <a
                href="#"
                aria-label="Connect with us on LinkedIn"
                class="group w-10 h-10 rounded-full border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <UIcon
                  name="i-fa6-brands-linkedin-in"
                  class="text-white group-hover:text-emerald-500 text-sm transition-colors duration-300"
                />
              </a>
              <a
                href="#"
                aria-label="Follow us on Instagram"
                class="group w-10 h-10 rounded-full border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <UIcon
                  name="i-fa6-brands-instagram"
                  class="text-white group-hover:text-emerald-500 text-sm transition-colors duration-300"
                />
              </a>
              <a
                href="#"
                aria-label="Subscribe to our YouTube channel"
                class="group w-10 h-10 rounded-full border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <UIcon
                  name="i-fa6-brands-youtube"
                  class="text-white group-hover:text-emerald-500 text-sm transition-colors duration-300"
                />
              </a>
            </div>
          </div>

          <div class="space-y-5">
            <h4
              class="font-['Plus_Jakarta_Sans'] font-extrabold text-xs md:text-[15px] text-white uppercase tracking-widest flex items-center gap-1.5"
            >
              Products <span>🔥</span>
            </h4>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >HR Management</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >Invoice System</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >Email Marketing</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >Web Services</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >Digital Marketing</a
                >
              </li>
            </ul>
          </div>

          <div class="space-y-5">
            <h4
              class="font-['Plus_Jakarta_Sans'] font-extrabold text-xs md:text-[15px] text-white uppercase tracking-widest flex items-center gap-1.5"
            >
              Why Choose <span>🌟</span>
            </h4>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >Customers</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >Why Staco ?</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >Book a demo</a
                >
              </li>
            </ul>
          </div>

          <div class="space-y-5">
            <h4
              class="font-['Plus_Jakarta_Sans'] font-extrabold text-xs md:text-[15px] text-white uppercase tracking-widest flex items-center gap-1.5"
            >
              Resources <span>❇️</span>
            </h4>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >Latest Blog</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >Supports</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >Knowledgebase</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >FAQs</a
                >
              </li>
            </ul>
          </div>

          <div class="space-y-5">
            <h4
              class="font-['Plus_Jakarta_Sans'] font-extrabold text-xs md:text-[15px] text-white uppercase tracking-widest flex items-center gap-1.5"
            >
              Company <span>💎</span>
            </h4>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >What we do</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >Contact us</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
                  >Careers</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2]">
            2023 Staco. All rights reserved.
          </p>
          <div class="flex items-center gap-8">
            <a
              href="#"
              class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
              >Terms and conditions</a
            >
            <a
              href="#"
              class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
              >Cookies</a
            >
            <a
              href="#"
              class="font-['DM_Sans'] text-sm md:text-[16px] text-[#ffffffb2] hover:text-white transition-colors"
              >Privacy policy</a
            >
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const disclaimerRef = ref<HTMLElement | null>(null);
const disclaimerHeight = ref(200);

const updateDisclaimerHeight = () => {
  const el = document.querySelector(".disclaimer-fixed");
  if (el) {
    disclaimerHeight.value = el.getBoundingClientRect().height;
  }
};

onMounted(() => {
  setTimeout(() => {
    updateDisclaimerHeight();
  }, 100);
  window.addEventListener("resize", updateDisclaimerHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateDisclaimerHeight);
});
</script>
