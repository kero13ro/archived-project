<script setup lang="ts"></script>

<template>
  <section id="HomeBanner">
    <div
      class="root-container flex flex-col items-center gap-[3.75rem] overflow-hidden py-[3.5rem] md:flex-row md:gap-[3.125rem] md:pb-[4rem] md:pt-0"
    >
      <div class="grid max-w-[44rem] gap-[0.75rem] md:gap-4">
        <div
          class="title xl"
          v-animate="{ y: 40, delay: 0.5 }"
        >
          Success in Asia, Step Up to Reach the Top
        </div>

        <div
          class="context"
          v-animate="{ y: 40, delay: 0.8 }"
        >
          星翰起源於台灣，佈局全球，專注於軟體開發和系統整合服務。我們擁有專業的研發和設計團隊，致力於不斷創新，追求最佳品質。
        </div>

        <RouterLink
          to="/about"
          class="btn-secondary bg-primary text-white"
          v-animate="{ y: 40, delay: 1.1 }"
        >
          <div class="cir flex items-center justify-center rounded-full bg-secondary">
            <ArrowRight class="translate-y-[1px]" />
          </div>
          <span class="translate-y-[1px]">認識我們</span>
        </RouterLink>
      </div>

      <img
        src="/img/banner_pic_01.png"
        class="w-[23.125rem] sm:w-[64vw] md:hidden md:w-[23.125rem]"
        v-animate="{ y: 40, delay: 1.3 }"
      />
      <div class="-mr-[7.1vw] hidden pl-[3.125rem] pt-[11rem] md:block">
        <img
          v-animate="{ x: 40, delay: 1.1 }"
          src="/img/banner_pic_01.png"
          class="w-[50.625rem]"
        />
      </div>
    </div>

    <img
      src="/img/v2/home_banner_bg.png"
      class="bg-desktop absolute left-0 right-0 top-[-120px] z-[-1] hidden w-screen max-w-none md:block"
    />
    <img
      src="/img/v2/m_home_bg_01.png"
      class="bg-mobile absolute left-1/2 top-[-90px] z-[-1] max-w-none -translate-x-1/2 md:hidden"
    />
  </section>
</template>

<style scoped lang="scss">
#HomeBanner {
  position: relative;
}
.bg-mobile {
  // @include min-max(500, 768) {
  //   top: -30vw;
  // }
}
.bg-desktop {
  @include min-max(768, 1024) {
    top: 14vw;
  }
}
</style>
