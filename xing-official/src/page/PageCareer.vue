<script setup lang="ts">
const bgMouse = ref()
const mouseRoot = ref()
useMouseAnimate(mouseRoot, bgMouse)
</script>

<template>
  <div>
    <Landing
      path="/img/banner_pic_04.png"
      title="Career"
      subtitle="成為星翰人"
    />

    <div class="hidden lg:pb-8"></div>

    <section
      class="s1 relative flex justify-center overflow-hidden pb-[5.62rem] pt-[80px] text-center md:pt-[7.37rem] md:text-left lg:pb-[11.87rem]"
      ref="mouseRoot"
    >
      <img
        src="/img/career_bg_01.jpg"
        class="absolute bottom-[-30px] left-1/2 hidden w-[110vw] max-w-none -translate-x-1/2 lg:block"
        ref="bgMouse"
      />
      <div class="relative max-w-[90.95rem]">
        <div class="root-container flex flex-col-reverse items-center md:flex-row">
          <img
            src="/img/career_pic_01.jpg"
            class="ml-auto w-full rounded-[1.4rem] md:w-1/2 lg:w-[41.25rem]"
            v-animate="{ x: -40, delay: 0.3 }"
          />
          <div class="pb-10 md:hidden"></div>

          <div class="box grid gap-2 md:pl-10 lg:pl-20">
            <div
              class="title-green"
              v-animate="{ y: 40, delay: 0.3 }"
            >
              廣納賢才征服夢想舞臺
            </div>
            <div
              class="subtitle"
              v-animate="{ y: 40, delay: 0.7 }"
            >
              在這裡你可以遠望、可以成長！
            </div>
            <div
              class="context"
              v-animate="{ y: 40, delay: 1.1 }"
            >
              站在全球娛樂產業的制高點，我們建立了一個激發無限創意的殿堂。在這裡，你可以看得更遠，充分展現自己的才華。
              工作不應該只是一種消耗，在這裡，絕對不是如此。與業界頂尖的人才共事，我們已經準備好讓你釋放才華，拓展視野。
              你的成長和回報將會超乎你的想像。
            </div>
          </div>
        </div>
      </div>
    </section>

    <CareerScroll />
    <CareerBenefit />
    <CareerSlider />
  </div>
</template>

<style lang="scss" scoped></style>
