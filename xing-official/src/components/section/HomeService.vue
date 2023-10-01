<script setup lang="ts">
import { initParallax } from '@/utils/animation'

onMounted(() => {
  initParallax('#Career')
})

const bgMouse = ref()
const mouseRoot = ref()
useMouseAnimate(mouseRoot, bgMouse)
</script>

<template>
  <section
    class="root-container root-container-sm relative flex flex-col items-center py-[5rem] lg:pb-[12.44rem] lg:pt-[8.75rem]"
    ref="mouseRoot"
  >
    <div
      class="title pb-[0.5rem] text-center"
      v-animate="{ y: 40, delay: 0.5 }"
    >
      Our Service
    </div>
    <div
      class="subtitle pb-[1.88rem] text-center md:pb-[3.125rem]"
      v-animate="{ y: 40, delay: 0.8 }"
    >
      提供高品質的服務，一點都不馬虎的專業！
    </div>

    <HomeCardList class="mb-[2.5rem] md:mb-[4.7rem]" />
    <RouterLink
      to="/service"
      class="btn-primary w-[27.5rem] justify-center bg-primary py-[0.875rem] text-white hover:bg-[#293FD4]"
      v-animate="{ y: 40, delay: 1.3 }"
    >
      What We Do !
    </RouterLink>

    <img
      src="/img/home_service_bg.jpg"
      ref="bgMouse"
      class="absolute bottom-[-130px] left-1/2 z-[-1] hidden w-[120vw] max-w-none -translate-x-1/2 lg:block lg:w-[2000px]"
    />
  </section>

  <section
    class="relative flex max-h-[500px] items-start justify-center overflow-hidden bg-[#233F89] text-center text-white lg:max-h-[40.625rem]"
    id="Career"
  >
    <img
      src="/img/scroll-1.jpg"
      class="bg hidden md:block"
      data-depth="60"
    />
    <img
      src="/img/scroll-1.jpg"
      class="bg md:hidden"
      data-depth="40"
    />
    <div class="careerScroll root-container flex flex-col items-center justify-center gap-[0.5rem]">
      <div
        class="title md:pb-[0.5rem]"
        v-animate="{ y: 40, delay: 0.5 }"
      >
        Career
      </div>
      <div
        class="subtitle md:pb-[3.125rem]"
        v-animate="{ y: 40, delay: 0.8 }"
      >
        加入星翰，實現無限可能！
      </div>
      <div
        class="context max-w-[50rem] pb-[1.88rem] md:pb-[2.5rem]"
        v-animate="{ y: 40, delay: 1.1 }"
      >
        我們凝聚了一支高度熱情、專業的高階技術與營運團隊，團隊充滿活力，年輕而有活力，工作於一個開放、包容的環境中，擁有多元化的思維。
      </div>

      <RouterLink
        to="/career"
        class="btn-primary w-[27.5rem] justify-center bg-secondary py-[0.875rem] text-accent hover:bg-[#00FFA8]"
        v-animate="{ y: 40, delay: 1.3 }"
      >
        Ready to Join Us ?
      </RouterLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.root-container-sm {
  @include min(420) {
    white-space: nowrap;
    padding-right: 2.8rem;
    padding-left: 2.8rem;
  }
}
.bg {
  position: absolute;
  @apply opacity-20;
  max-width: none;
  width: 100vw;
  min-width: 1200px;
  top: -8rem;
}

.careerScroll {
  padding-top: 8.7rem;
  padding-bottom: 10.7rem;
  @include max(768) {
    padding-top: 90px;
    padding-bottom: 90px;
  }
}
</style>
