<template>
  <div class="min-h-screen">
    <MotionNav />

    <main class="relative z-10 bg-white">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <FoundationCTA />
      <StatsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <BlogSection />
    </main>

    <FooterSection />
    <ScrollProgress />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>
