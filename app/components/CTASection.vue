<template>
  <section
    id="services"
    class="section-padding relative overflow-hidden"
    style="background: var(--gradient-dark)"
  >
    <!-- Background decorations -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        class="glow-orb glow-orb-primary w-96 h-96 -bottom-40 -right-40 opacity-30"
      ></div>
      <div
        class="glow-orb glow-orb-accent w-80 h-80 -top-40 -left-40 opacity-20"
      ></div>

      <!-- Grid pattern -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="h-full w-full"
          style="
            background-image:
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.1) 1px,
                transparent 1px
              );
            background-size: 60px 60px;
          "
        ></div>
      </div>
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Section header -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <span
            class="inline-block px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-4"
          >
            Get Started Today
          </span>
          <h2 class="heading-2 text-white mb-4">
            Ready to Transform Your
            <span class="gradient-text">Financial Journey?</span>
          </h2>
          <p class="body-large text-slate-400 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied users and take the first step towards
            smarter financial management. No credit card required.
          </p>
        </div>

        <!-- Email signup form -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20, scale: 0.95 }"
          :visible="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 600, delay: 200 },
          }"
          class="relative max-w-xl mx-auto mb-8"
        >
          <form @submit.prevent="handleSubmit" class="relative">
            <div
              class="flex flex-col sm:flex-row gap-4 p-2 rounded-2xl glass-dark"
            >
              <div class="flex-1 relative">
                <input
                  v-model="email"
                  type="email"
                  placeholder="Enter your email address"
                  class="w-full px-6 py-4 bg-transparent text-white placeholder-slate-400 focus:outline-none text-base"
                  required
                />
              </div>
              <button
                type="submit"
                class="btn-primary whitespace-nowrap"
                :class="{ 'opacity-75 cursor-not-allowed': isSubmitting }"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Start Free Trial</span>
                <span v-else class="flex items-center gap-2">
                  <svg
                    class="animate-spin w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Processing...
                </span>
              </button>
            </div>
          </form>

          <!-- Success message -->
          <Transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="showSuccess"
              class="absolute -bottom-12 left-0 right-0 text-center text-emerald-400 text-sm font-medium"
            >
              ✓ Welcome aboard! Check your email to get started.
            </div>
          </Transition>
        </div>

        <!-- Trust indicators -->
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :visible="{ opacity: 1, transition: { duration: 600, delay: 400 } }"
          class="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm text-slate-400"
        >
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-emerald-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>14-day free trial</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-emerald-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-emerald-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const isSubmitting = ref(false);
const showSuccess = ref(false);

const handleSubmit = async () => {
  if (!email.value) return;

  isSubmitting.value = true;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  isSubmitting.value = false;
  showSuccess.value = true;
  email.value = "";

  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false;
  }, 5000);
};
</script>
