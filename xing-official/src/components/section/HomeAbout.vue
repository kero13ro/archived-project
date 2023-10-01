<script setup></script>

<template>
  <section id="HomeAbout">
    <!-- <div class="root-container flex flex-col items-center justify-center gap-12 pb-[7.8rem] md:flex-row-reverse md:gap-20 md:pb-[16.25rem]"> -->
    <div class="root-container flex flex-col items-center justify-center gap-12 md:flex-row-reverse md:gap-20">
      <div class="flex max-w-[40rem] flex-col justify-center gap-2 pt-[6.25rem] text-center md:px-0 md:pt-20 md:text-left">
        <div
          class="title text-white"
          v-animate="{ x: 40, delay: 0.5 }"
        >
          About Us
        </div>
        <div
          class="subtitle text-white"
          v-animate="{ x: 40, delay: 0.8 }"
        >
          掌握關鍵技術，永遠領先潮流！
        </div>
        <div
          class="context text-white"
          v-animate="{ x: 40, delay: 1.1 }"
        >
          我們提供卓越的軟體解決方案和個人化的科技服務，持續收集並研究市場信息，拓展業務並開發全新的服務領域，致力於加强技術研發和新產品的合作開發，以實現產品多元化和專業多元化的經營目標。
        </div>
      </div>
      <!-- <HomeAboutTri /> -->
      <img
        src="/img/tri.png"
        v-animate="{ x: -40, delay: 1.1 }"
        class="tri-desktop mb-0 hidden md:mb-[12.25rem] md:mt-[18.56rem] md:block xl:mb-[16.25rem]"
      />

      <img
        src="/img/tri-mobile.png"
        v-animate="{ y: 50, delay: 1.4 }"
        class="w-[74.4vw] max-w-[340px] pb-[8rem] sm:pb-[10rem] md:hidden"
      />
    </div>
    <img
      src="/img/v2/home_about_bg.png"
      class="bg-desktop absolute bottom-0 left-0 right-0 z-[-1] hidden w-screen max-w-none md:block"
    />
    <img
      src="/img/v2/m_home_bg_02.png"
      class="bg-mobile absolute bottom-0 left-1/2 z-[-1] max-w-none -translate-x-1/2 md:hidden"
    />
  </section>
</template>

<style lang="scss" scoped>
#HomeAbout {
  position: relative;
  .title {
  }
}

.bg-desktop {
}

.bg-mobile {
  @include max(400) {
    max-height: 1100px;
  }
}

.tri-desktop {
  width: clamp(100px, 42.5rem, 40vw);
  @include max(1500) {
    margin-top: 10vw;
  }
}

.root-container {
  @include max(1100) {
    margin-bottom: 0;
  }
  // @include max(900) {
  //   padding-bottom: 130px;
  // }
}
</style>
