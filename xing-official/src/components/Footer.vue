<script setup lang="ts">
import { useRouter } from 'vue-router'

const _useRouter = useRouter()

const footerXL = computed(() => {
  return Boolean(_useRouter.currentRoute.value.meta.xl)
})
</script>

<template>
  <div
    id="Footer"
    :class="{ footerXL }"
  >
    <template v-if="footerXL">
      <img
        src="/img/footer_bg_01.jpg"
        class="hidden w-screen min-w-[1200px] max-w-none md:block"
      />
      <img
        src="/img/v2/m_footer_bg_01.png"
        class="max-w-none md:hidden"
      />
      <img
        src="/img/footer_pic.png"
        class="chart"
        v-animate="{ x: 40, delay: 0.5 }"
      />
    </template>
    <img
      v-else
      src="/img/footer_bg_02.jpg"
      class="bg-sm w-[120rem]"
    />

    <div class="root-container absolute bottom-0 flex w-full items-end justify-between">
      <div class="flex flex-col gap-[1.25rem]">
        <img
          src="/icon/logo_white.svg"
          class="w-[270px] md:w-[300px] lg:w-[21.75rem]"
        />
        <div>
          APP系統開發與跨平台系統管理
          <br />
          以創造多元休閒娛樂產品與服務為核心
        </div>

        <div class="copyright">COPYRIGHT © 2023 XING HAN All Rights Reserved.</div>
      </div>

      <address class="flex w-full flex-col gap-[10px] md:w-[20rem] md:gap-[1.125rem] lg:w-[25.625rem]">
        <a
          class="flex items-center gap-[10px] md:gap-[0.625rem]"
          href="tel:0422517325"
        >
          <IconPhone class="w-[36px] lg:h-[2.5rem] lg:w-[2.5rem]" />
          04-22517325
        </a>
        <a
          class="flex items-center gap-[10px] md:gap-[0.625rem]"
          href="mailto:service@xinghan.one"
        >
          <IconEmail class="w-[36px] lg:h-[2.5rem] lg:w-[2.5rem]" />
          <div>service@xinghan.one</div>
        </a>

        <a
          class="flex items-start gap-[10px] md:gap-[0.625rem]"
          href="https://maps.app.goo.gl/riUZjqwRbDhzM7QKA"
          target="_blank"
        >
          <IconGeo class="w-[36px] lg:h-[2.5rem] lg:w-[2.5rem]" />
          <div>
            台中市西屯區市政北二路282號
            <br />
            (NTC國家商貿中心)
          </div>
        </a>
      </address>
    </div>
  </div>
</template>

<style scoped lang="scss">
#Footer {
  position: relative;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.125rem;
  line-height: 180%; /* 2.025rem */
  letter-spacing: 0.0225rem;
  font-weight: normal;
  // font-weight: bold;

  @include min-max(769, 1023) {
    font-size: 16px;
    letter-spacing: 0.32px;
  }

  @include max(768) {
    font-size: 16px;
    letter-spacing: 0.32px;
  }
}

address {
  font-style: normal;
}

.copyright {
  font-size: 0.9375rem;
  line-height: 160%; /* 24px */
  letter-spacing: 0.3px;

  @include max(768) {
    font-size: 14px;
    letter-spacing: 0.28px;
  }
}

.root-container {
  padding-bottom: 6.77vw;
  @include min(1900) {
    padding-bottom: 8.2rem;
  }
  @include max(380) {
    padding-right: 20px;
    padding-left: 20px;
    address {
      gap: 8px;
    }
  }
  @include max(767) {
    align-items: start;
    flex-direction: column-reverse;
    gap: 70px;
    padding-bottom: 90px;
    max-width: 400px;
  }
  @include min-max(768, 1023) {
    padding-bottom: 40px;
  }
}

.chart {
  @include min(1024) {
    @apply absolute bottom-[23rem] right-[6.25rem] w-[45vw];
  }
  @include min-max(768, 1023) {
    position: absolute;
    right: 10vw;
    max-width: 370px;
    top: 150px;
  }
  @include max(767) {
    position: absolute;
    top: 0;
    max-width: 370px;
    width: 90vw;
    top: 60px;
  }
}

.bg-sm {
  @include max(1024) {
    max-width: none;
    position: relative;
    height: 500px;
    left: 0;
  }
  @include max(767) {
    left: 87%;
    min-height: 730px;
  }
}
</style>
