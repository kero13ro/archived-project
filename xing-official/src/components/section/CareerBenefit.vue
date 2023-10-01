<script setup lang="ts">
const bgMouse = ref()
const mouseRoot = ref()
useMouseAnimate(mouseRoot, bgMouse)
</script>

<template>
  <section
    ref="mouseRoot"
    class="relative overflow-hidden"
  >
    <div class="b1 root-container relative z-[1] text-center">
      <div
        class="title-green"
        v-animate="{ y: 40, delay: 0.3 }"
      >
        福利項目
      </div>
      <div
        class="subtitle"
        v-animate="{ y: 40, delay: 0.7 }"
      >
        歡迎加入我們，盡情發揮個人潛能、挑戰自我極限！
      </div>
    </div>

    <img
      src="/img/career_bg_02.jpg"
      class="absolute left-1/2 top-0 hidden w-[110vw] max-w-none -translate-x-1/2 lg:block"
      ref="bgMouse"
    />
    <div class="b2 root-container relative mb-[80px] flex justify-center gap-[50px] md:mb-[8.75rem] lg:gap-[8rem]">
      <div
        class="card flex flex-col items-center"
        v-animate="{ x: -40, delay: 0.3 }"
      >
        <div class="circle">
          <img
            src="/icon/career/01.png"
            class="w-[13.75rem]"
          />
        </div>
        <div class="card-title">薪資福利</div>
        <div class="info">
          <div>★ 具競爭力的薪資結構及年終獎金</div>
          <div>★ 勞健保不倒扣，公司幫您出</div>
          <div>★ 歡慶節日禮金及各項津貼補助</div>
          <div>★ 彈性上下班</div>
        </div>
      </div>
      <div
        class="card flex flex-col items-center"
        v-animate="{ y: 40, delay: 0.7 }"
      >
        <div class="circle">
          <img
            src="/icon/career/02.png"
            class="w-[13.75rem]"
          />
        </div>
        <div class="card-title">學習發展</div>
        <div class="info">
          <div>★ 讓身心休憩的年度特休假</div>
          <div>★ 員工進修補助</div>
          <div>★ 多元的訓練需求配套方案</div>
          <div>★ 目標導向的外訓補助、證照考取</div>
        </div>
      </div>
      <div
        class="card flex flex-col items-center"
        v-animate="{ x: 40, delay: 1.1 }"
      >
        <div class="circle">
          <img
            src="/icon/career/03.png"
            class="w-[13.75rem]"
          />
        </div>
        <div class="card-title">休閒娛樂</div>
        <div class="info">
          <div>★ 不定期各式聚餐活動</div>
          <div>★ 平日員工上班時間免費體育活動</div>
          <div>★ 下班時間員工免費社團課程</div>
          <div>★ 年度健康檢查全額補助</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.b1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8.75rem 0rem 3.125rem 0rem;
  gap: 0.5rem;
}

.card {
  max-width: 22.5rem;
}

.circle {
  width: 13.75rem;
  height: 13.75rem;
  background-color: #aee7e4;
  border-radius: 50%;
  padding: 1.83rem;

  @include min-max(768, 1023) {
    width: 11rem;
    height: 11rem;
  }
}

.card-title {
  text-align: center;
  font-size: 1.625rem;
  letter-spacing: 0.0325rem;

  margin-top: 2rem;
  margin-bottom: 1rem;

  @include max(1024) {
    margin-top: 1rem;
    margin-bottom: 0.5rem;

    font-size: 1.25rem;
    letter-spacing: 0.025rem;
  }
}

.info {
  font-size: 1.125rem;
  line-height: 180%; /* 2.025rem */
  letter-spacing: 0.0225rem;
  text-indent: -20px;
  padding-left: 20px;

  @include max(1024) {
    font-size: 1rem;
    letter-spacing: 0.02rem;
  }
}

@include max(768) {
  .b1 {
    padding: 80px 30px 40px 30px;
    gap: 8px;
  }
  .b2 {
    flex-direction: column;
    align-items: center;
  }
}
</style>
