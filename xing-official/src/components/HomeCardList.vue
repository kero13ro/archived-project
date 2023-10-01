<script setup lang="ts">
// const arr = [
//   { title: 'APP製作', info: '專業應用程式開發', img: '1' },
//   { title: '遊戲串接', info: '跨平台不是問題', img: '2' },
//   { title: '軟體開發', info: '完善的系統整合服務', img: '3' },
//   { title: '客戶服務', info: '尊貴的服務品質', img: '4' },
// ]
</script>

<template>
  <div class="HomeCardList flex w-full gap-[2.7rem]">
    <div class="card">
      <div
        v-animate="{ x: -40, delay: 0.5 }"
        class="wrap"
      >
        <div class="oval"></div>
        <img
          src="@/assets/img/service/s1.svg?url"
          class="h-[17.5rem]"
        />
        <div class="relative">
          <h3 class="">APP製作</h3>
          <p class="">專業應用程式開發</p>
        </div>
      </div>
    </div>
    <div class="card">
      <div
        v-animate="{ x: -40, delay: 0.8 }"
        class="wrap"
      >
        <div class="oval"></div>
        <img
          src="@/assets/img/service/s2.svg?url"
          class="h-[17.5rem]"
        />
        <div class="relative">
          <h3 class="">遊戲串接</h3>
          <p class="">跨平台不是問題</p>
        </div>
      </div>
    </div>
    <div class="card">
      <div
        v-animate="{ x: 40, delay: 1.1 }"
        class="wrap"
      >
        <div class="oval"></div>
        <img
          src="@/assets/img/service/s3.svg?url"
          class="h-[17.5rem]"
        />
        <div class="relative">
          <h3 class="">軟體開發</h3>
          <p class="">完善的系統整合服務</p>
        </div>
      </div>
    </div>
    <div class="card">
      <div
        v-animate="{ x: 40, delay: 1.4 }"
        class="wrap"
      >
        <div class="oval"></div>
        <img
          src="@/assets/img/service/s4.svg?url"
          class="h-[17.5rem]"
        />
        <div class="relative">
          <h3 class="">客戶服務</h3>
          <p class="">尊貴的服務品質</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 20rem;
  height: 26.25rem;
  transition: 0.4s transform;
  .wrap {
    border-radius: 1.25rem;
    background: #aee7e4;
    box-shadow: 0px 18px 18px 0px rgba(35, 63, 137, 0.13);
    @include max(1440) {
      box-shadow: 0px 10px 10px 0px rgba(35, 63, 137, 0.13);
    }

    position: relative;
    overflow: hidden;
    justify-content: space-between;

    padding-bottom: 3.25rem;
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
  }
  p {
    font-size: 1.125rem;
    line-height: 180%; /* 2.025rem */
    letter-spacing: 0.0225rem;
  }
}

.oval {
  width: 33.375rem;
  height: 15.3125rem;

  border-radius: 33.375rem / 15.3125rem;
  background: #fff;
  position: absolute;
  bottom: -5.44rem;
}

.HomeCardList {
  @include max(1024) {
    max-width: 500px;
    flex-wrap: wrap;
    gap: 1.25rem;
    justify-content: center;

    .card {
      width: calc((100% - 1.25rem) / 2);
      height: 13.125rem;
    }

    .oval {
      width: 23.0625rem;
      height: 10.5625rem;
    }
    img {
      width: 8.125rem;
      height: 8.125rem;
    }
    h3 {
      font-size: 1.125rem;
      line-height: 2rem;
      margin-top: 0.31rem;
    }
    p {
      font-size: 0.875rem;
      line-height: 180%; /* 1.575rem */
      letter-spacing: 0.0175rem;
    }
  }

  @include max(430) {
    gap: 1.5rem 1.25rem;
    p {
      font-size: 12px;
      letter-spacing: 0;
    }
    .oval {
      bottom: -5.74rem;
    }

    .card {
      height: auto;
    }
    .wrap {
      padding-bottom: 16px;
    }
  }
}
</style>
