<script setup lang="ts">
import { initParallax } from '@/utils/animation'

onMounted(() => {
  initParallax('#CareerScroll')
})
</script>

<template>
  <section
    class="relative flex max-h-[31.25rem] items-center justify-center overflow-hidden bg-[#233F89] text-center text-white"
    id="CareerScroll"
  >
    <img
      src="/img/career_pic.jpg"
      class="bg hidden md:block"
      data-depth="60"
    />
    <img
      src="/img/career_pic.jpg"
      class="bg md:hidden"
      data-depth="40"
    />

    <div class="root-container flex max-w-[50rem] flex-col items-center justify-center">
      <div
        class="title pb-[0.5rem] md:pb-[1rem]"
        v-animate="{ y: 40, delay: 0.3 }"
      >
        We are Hiring !
      </div>

      <div
        class="context max-w-[50rem] pb-[1.88rem] md:pb-[2.5rem]"
        v-animate="{ y: 40, delay: 0.7 }"
      >
        我們致力於打造優良的工作環境，讓同仁們維持工作與生活的平衡
        <br />
        歡迎優秀的你加入我們，共同努力與成長！
      </div>

      <a
        href="https://www.1111.com.tw/corp/73601798/"
        target="_blank"
        class="btn-primary w-[27.5rem] justify-center bg-secondary py-[0.875rem] text-accent hover:bg-[#00FFA8]"
        v-animate="{ y: 40, delay: 1.1 }"
      >
        Join Us Now !
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.root-container {
  padding-top: 7.5rem;
  padding-bottom: 8rem;
  z-index: 1;
}
.bg {
  position: absolute;
  @apply opacity-20;
  max-width: none;
  width: 100vw;

  @include max(1024) {
    max-height: 800px;
    width: auto;
  }
  @include max(768) {
    width: auto;
    max-height: 600px;
  }
  @include max(425) {
    width: auto;
    max-height: 420px;
  }
}

@include max(768) {
  .root-container {
    padding-top: 5.62rem;
    padding-bottom: 5.62rem;
  }
}
</style>
