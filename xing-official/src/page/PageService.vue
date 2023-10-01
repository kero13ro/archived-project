<script setup lang="ts">
const bgMouse = ref()
const mouseRoot = ref()
useMouseAnimate(mouseRoot, bgMouse)
</script>

<template>
  <div>
    <Landing
      path="/img/banner_pic_03.png"
      title="Our Service"
      subtitle="服務項目"
    />

    <section
      class="relative overflow-hidden pt-[80px] md:pt-[7.37rem]"
      ref="mouseRoot"
    >
      <img
        src="/img/service_bg_01.jpg"
        class="absolute bottom-[-40px] left-1/2 hidden w-[110vw] max-w-none -translate-x-1/2 lg:block"
        ref="bgMouse"
      />
      <div class="root-container flex flex-col items-center justify-center overflow-hidden">
        <div
          class="title-green"
          v-animate="{ y: 40, delay: 0.4 }"
        >
          星翰團隊
        </div>
        <div
          class="subtitle mb-8 text-center sm:mb-[3.13rem]"
          v-animate="{ y: 40, delay: 0.7 }"
        >
          提供高品質的服務，一點都不馬虎的專業！
        </div>
        <div class="HomeCardList grid pb-[100px] sm:grid-cols-2 sm:pb-[11.6rem]">
          <div class="card">
            <div
              class="wrap"
              v-animate="{ x: -40, delay: 0.7 }"
            >
              <img
                src="@/assets/img/service/s1.svg?url"
                class="md:mb-[1.7rem] md:h-[20rem]"
              />
              <div class="relative">
                <div class="oval"></div>
                <h3 class="relative">APP製作</h3>
                <p class="relative">技術團隊針對專案需求擬定開發平台及部署最佳環境，並嚴謹的執行每項細節，提供完善後續維運服務。</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div
              class="wrap"
              v-animate="{ x: 40, delay: 1.1 }"
            >
              <img
                src="@/assets/img/service/s2.svg?url"
                class="md:mb-[1.7rem] md:h-[20rem]"
              />
              <div class="relative">
                <div class="oval"></div>
                <h3 class="relative">遊戲串接</h3>
                <p class="relative">依照您的需求我們能提供您的遊戲串接於不同的平台上。支援平台包含 iOS, Android, Windows, MAC OS。</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div
              class="wrap"
              v-animate="{ x: -40, delay: 0.7 }"
            >
              <img
                src="@/assets/img/service/s3.svg?url"
                class="md:mb-[1.7rem] md:h-[20rem]"
              />
              <div class="relative">
                <div class="oval"></div>
                <h3 class="relative">軟體開發</h3>
                <p class="relative">
                  提供高品質、客製化的軟體開發及系統整合服務，提供多樣性的解決方案，創造最佳的使用者體驗及跨平台的開發服務。
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div
              class="wrap"
              v-animate="{ x: 40, delay: 1.1 }"
            >
              <img
                src="@/assets/img/service/s4.svg?url"
                class="md:mb-[1.7rem] md:h-[20rem]"
              />
              <div class="relative">
                <div class="oval"></div>
                <h3 class="relative">客戶服務</h3>
                <p class="relative">我們秉持「客戶至上，服務第一」的經營理念，用心聆聽並聚焦客戶需求，提供專業支援，即時解決問題。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="game-section">
      <div class="root-container">
        <div
          class="title-green text-center"
          v-animate="{ y: 40, delay: 0.3 }"
        >
          多人遊戲
        </div>
        <div
          class="subtitle mb-[3.13rem] text-center"
          v-animate="{ y: 40, delay: 0.7 }"
        >
          創造出即時營運架構，同時萬人在線不卡卡！
        </div>

        <div class="row">
          <img
            src="/img/01.png"
            class="left-img w-1/2 max-w-[40vw] flex-grow xl:w-[40.5625rem]"
            v-animate="{ x: -60, delay: 0.3 }"
          />
          <div
            class="box"
            v-animate="{ x: 60, delay: 0.7 }"
          >
            <div class="title-green">泡泡糖</div>
            <div class="en-title">BUBBLE GUM</div>
            <p>
              在這個小朋友的王國裡，誰敢與他們爭奪地盤！用泡泡糖打造你的王國，和小朋友們一起展開熱鬧的對決！快來體驗泡泡糖的神奇力量，只要被黏上就別想脫困。每個小朋友都有自己的技能，有的跑得快，有的吹泡泡技術超群，有的更會炸裂出驚人的威力！在這裡，你還能發現各種好吃的零食，增強自己的力量，為了奪得地盤的掌控權，讓我們一起玩出無窮樂趣吧！
            </p>

            <div
              class="btn-primary justify-center bg-secondary py-[0.875rem] text-accent hover:bg-[#00FFA8]"
              v-animate="{ y: 40, delay: 1.3 }"
            >
              Play Now !
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.HomeCardList {
  gap: 5.62rem 7.5rem;
}
.card {
  width: 31.25rem;
  transition: 0.4s transform;
  .wrap {
    border-radius: 1.25rem;
    background: #aee7e4;
    box-shadow: 0px 18px 18px 0px rgba(35, 63, 137, 0.13);

    position: relative;
    overflow: hidden;
    justify-content: space-between;

    // padding-bottom: 3.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
  }

  &:hover {
    transform: translateY(-6%);
  }
  h3 {
    font-size: 1.625rem;
    line-height: 180%; /* 2.925rem */
    letter-spacing: 0.0325rem;
    margin-bottom: 0.8rem;
  }
  p {
    font-size: 1.125rem;
    line-height: 180%; /* 2.025rem */
    letter-spacing: 0.0225rem;
    padding: 0 3.5rem 3.7rem 3.5rem;
  }
  @include max(1440) {
    .wrap {
      box-shadow: 0px 10px 10px 0px rgba(35, 63, 137, 0.13);
    }
  }

  @include max(1024) {
    max-width: 320px;
    h3 {
      font-size: 20px;
      letter-spacing: 0.4px;
    }
    p {
      font-size: 16px;
      letter-spacing: 0.32px;
      padding: 0 30px 40px 30px;
    }
  }
  @include max(400) {
    max-width: 80vw;
    p {
      font-size: 15px;
      padding: 0 20px 30px 20px;
    }
  }
}

.oval {
  width: 54.5rem;
  height: 34.4375rem;
  border-radius: 33.375rem / 15.3125rem;
  background: #fff;
  position: absolute;

  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  @include max(768) {
    top: -20px;
    border-radius: 33.375rem / 20.3125rem;
  }
}

.game-section {
  padding-top: 8.6rem;
  padding-bottom: 6.7rem;
  margin-bottom: 9.38rem;

  background-image: url('/img/game-bg.png');
  background-size: cover;
  .title-green {
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: #fff;
    margin-bottom: 3rem;
  }

  .box {
    width: 37.5rem;
    padding: 3.125rem calc(1.875rem + 1.25rem) calc(3.125rem + 1.13rem);
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;

    border-radius: 1.25rem;
    border: 1px solid rgba(62, 62, 62, 0.1);
    background: #fff;
    box-shadow: 0px 16px 48px 0px rgba(0, 0, 0, 0.12);
  }

  .en-title {
    margin-bottom: 1.75rem;
    font-size: 1.875rem;
    line-height: 180%; /* 3.375rem */
    letter-spacing: 0.0375rem;
  }

  p {
    margin-bottom: 1.75rem;
    font-size: 1.125rem;
    line-height: 180%; /* 2.025rem */
    letter-spacing: 0.0225rem;
  }
}

.btn-primary {
  width: 100% !important;
}

.row {
  @apply flex items-start gap-[3.5rem];
}

@include max(1024) {
  .HomeCardList {
    gap: 40px 50px;
  }
  .card {
    width: 100%;
  }

  .game-section {
    .en-title {
      margin-bottom: 20px;
      font-size: 20px;
      letter-spacing: 0.4px;
    }
    .box {
      width: 50%;
      padding: 2.125rem calc(1.875rem) calc(3.125rem);
    }

    .left-img {
      width: 40%;
    }

    p {
      font-size: 1rem;
      letter-spacing: 0.02rem;
      margin-bottom: 20px;
    }
  }
}

@include max(768) {
  .game-section {
    padding-top: 80px;
    margin-bottom: 110px;
    margin-bottom: 0;
    .subtitle {
      margin-bottom: 40px;
    }
  }

  .row {
    flex-direction: column;
    gap: 0;
  }

  .game-section {
    .box {
      width: 100%;
      padding: 30px;
    }

    .left-img {
      width: 87vw;
      max-width: 500px;
    }
  }
}
</style>
