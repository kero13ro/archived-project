<script setup lang="ts">
const bgMouse = ref()
const mouseRoot = ref()
useMouseAnimate(mouseRoot, bgMouse)

const bgMouse2 = ref()
const mouseRoot2 = ref()
useMouseAnimate(mouseRoot2, bgMouse2)
</script>

<template>
  <div id="PageAbout">
    <Landing
      path="/img/banner_pic_02.png"
      title="About Us"
      subtitle="關於星翰"
      class="relative z-[1]"
    />

    <section
      class="relative pt-[80px] md:pt-[7.37rem]"
      ref="mouseRoot"
    >
      <img
        src="/img/about_bg_01.jpg"
        class="absolute bottom-0 left-1/2 hidden w-[110vw] max-w-none -translate-x-1/2 lg:block"
        ref="bgMouse"
      />
      <!-- 與 figma 圖片對不上 -->
      <div class="root-container block-brand relative mb-[7rem] grid grid-cols-2 items-center">
        <div class="flex w-full flex-col items-end">
          <img
            src="/img/about/b1.png"
            class="twin1 mb-[1.7rem] ml-[6.12rem] w-[30rem] self-start"
            v-animate="{ x: -40, delay: 0.2 }"
          />
          <img
            src="/img/about/b2.png"
            class="twin2 w-[25rem]"
            v-animate="{ x: -40, delay: 0.8 }"
          />
        </div>
        <div class="paragraph flex flex-col gap-[0.5rem] text-center md:pl-[5rem] md:text-left">
          <div
            class="title-green"
            v-animate="{ x: 40, delay: 0.8 }"
          >
            品牌故事
          </div>
          <div
            class="subtitle"
            v-animate="{ x: 40, delay: 1.1 }"
          >
            掌握核心技術，總是站在最前方！
          </div>
          <div
            class="context"
            v-animate="{ x: 40, delay: 1.4 }"
          >
            星翰的故事源自於對科技的深厚熱情與信仰。 我們是一群充滿活力和無限創意的技術和創意人才，我們立志在科技領域開創嶄新的時代。
            <br class="hidden md:block" />
            我們專注於軟體開發、系統管理和娛樂產業，秉承創新和高品質的承諾。
            <br class="hidden md:block" />
            我們深信，挑戰傳統是創造新未來的關鍵，我們不斷追求技術卓越，勇敢面對未知。 加入我們，與我們一同開創科技世界的新紀元。
          </div>
        </div>
      </div>

      <Slider />

      <div class="pb-[106px] md:pb-[9.38rem]"></div>
    </section>

    <NumberList />

    <section
      class="relative pb-[56px] pt-[80px] md:pt-[8.75rem] lg:pb-[12.12rem]"
      ref="mouseRoot2"
    >
      <div class="root-container text-center">
        <img
          src="/img/about_bg_02.jpg"
          ref="bgMouse2"
          class="absolute bottom-0 left-[-5vw] z-[-1] hidden w-[110vw] max-w-none lg:block"
        />

        <div
          class="title-green mb-[0.5rem]"
          v-animate="{ y: 40, delay: 0.3 }"
        >
          星翰價值
        </div>
        <div
          class="subtitle mb-[36px] md:mb-[3.125rem]"
          v-animate="{ y: 40, delay: 0.7 }"
        >
          大步跳躍向前，探索自己的極限！
        </div>

        <div class="circle-card-list">
          <div
            class="circle-card"
            v-animate="{ x: -40, delay: 0.4 }"
          >
            <div class="img-wrap aspect-square">
              <img
                src="/img/about_pic_03.jpg"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="circle-title">飛躍成長</div>
            <div class="context">
              飛躍成長 挑戰極限 提升自我 處在這個高速成長又充滿機會的產業中，我們掌握自有的核心技術，使公司得以在最短時間內快速茁壯。
            </div>
          </div>
          <div
            class="circle-card"
            v-animate="{ y: 40, delay: 0.7 }"
          >
            <div class="img-wrap aspect-square">
              <img
                src="/img/about_pic_04.jpg"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="circle-title">挑戰極限</div>
            <div class="context">我們擁抱變化，勇於接受挑戰，面對競爭能全力以赴；享受冒險、創新、驚喜、挫折、失敗、學習與成長。</div>
          </div>
          <div
            class="circle-card"
            v-animate="{ x: 40, delay: 1.1 }"
          >
            <div class="img-wrap aspect-square">
              <img
                src="/img/about_pic_05.jpg"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="circle-title">提升自我</div>
            <div class="context">我們自認是遊戲開發領域的佼佼者，而「人才」是我們的核心財富，我們高度重視每位夥伴的專業技能和品格特質</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.b1 {
  width: 30rem;
  height: 18.75rem;
  background-image: url('/img/about_pic_01.jpg');
  background-size: 42.8rem;
  background-position: -6rem;
}

.circle-card-list {
  gap: 5.7rem;
  @apply grid grid-cols-1 md:grid-cols-3;

  @include max(768) {
    gap: 50px;
    .context {
      max-width: 400px;
    }
  }
}

.circle-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-wrap {
    // width: 22.5rem;
    max-width: 22.5rem;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1.5rem;
    @include max(1024) {
      margin-bottom: 1rem;
      max-width: 300px;
      // width: 62vw;
      width: 100%;
    }

    @include max(768) {
      max-width: 260px;
    }
  }
  flex-shrink: 1;
  .circle-title {
    margin-bottom: 1.1rem;
    color: #233f89;
    text-align: center;
    font-family: Noto Sans TC;
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 180%; /* 2.925rem */
    letter-spacing: 0.0325rem;

    @include max(1024) {
      font-size: 20px;
      letter-spacing: 0.4px;
      margin-bottom: 0.5rem;
    }
  }
}
.block-brand {
  // @include min-max(769, 1023) {

  // }
  @include max(1023) {
    .paragraph {
      padding-left: 30px;
      flex-grow: 2;
    }
  }
  @include max(767) {
    .paragraph {
      padding-left: 0;
    }
    display: flex;
    flex-direction: column-reverse;
    gap: 40px;
  }
}

.twin1 {
  @include max(1024) {
    width: 84%;
    margin-left: 0;
    margin-right: auto;
  }
}
.twin2 {
  @include max(1024) {
    width: 76%;
    // margin-left: 0;
  }
}
</style>
