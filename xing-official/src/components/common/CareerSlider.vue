<script setup lang="ts">
import Splide from '@splidejs/splide'
const arr = [
  { label: '小提琴社團活動', img: '/archived-project/xing-official/dist/img/welfare_p01.jpg' },
  { label: '羽毛球休閒活動', img: '/archived-project/xing-official/dist/img/welfare_p02.jpg' },
  { label: '電影欣賞', img: '/archived-project/xing-official/dist/img/welfare_p03.jpg' },
  { label: '不定期員工聚餐', img: '/archived-project/xing-official/dist/img/welfare_p04.jpg' },
  { label: '健康檢查補助', img: '/archived-project/xing-official/dist/img/welfare_p05健康檢查補助.jpg' },
  { label: '豐富的教育課程', img: '/archived-project/xing-official/dist/img/welfare_p06豐富的教育課程.jpg' },
]

onMounted(() => {
  new Splide('#splide-banners2', {
    autoplay: true,
    rewind: true,
    perPage: 4,
    perMove: 1,
    pagination: false,
    interval: 5000,
    width: '100%',
    height: '100%',
    gap: '1.25rem',
    breakpoints: {
      1024: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      550: {
        perPage: 1,
        padding: { right: '60px', left: '30px' },
      },
    },
  }).mount()
})
</script>

<template>
  <section class="root-container">
    <div
      id="splide-banners2"
      class="splide"
    >
      <div class="title-dash relative mb-[24px] md:mb-[2.3rem]">
        <span v-animate="{ y: 40, delay: 0.3 }">健康快樂是星翰的企業之道</span>
        <div class="splide__arrows">
          <IconArrowRight class="splide__arrow--prev scale-x-100 cursor-pointer" />
          <IconArrowRight class="splide__arrow--next cursor-pointer" />
        </div>
      </div>

      <div class="splide__track">
        <ul class="splide__list">
          <li
            class="splide__slide"
            v-for="(el, index) in arr"
            :key="el.label"
          >
            <div class="card">
              <img :src="el.img" />
              <div class="info">{{ el.label }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  padding: 0.625rem 0rem;
  align-items: flex-start;
  gap: 1.25rem;
}
.card {
  border-radius: 1.25rem;
  overflow: hidden;
  // width: 21.25rem;
  // border: 1px solid black;

  display: flex;
  flex-direction: column;
  position: relative;

  img {
    transition: all 0.6s;
  }

  &:hover {
    > img {
      scale: 1.2;
    }
  }
}
.info {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.25rem 1.25rem 0.43rem;
  background: rgba(35, 63, 137, 0.75);
  color: #fff;
  font-family: Noto Sans TC;
  font-size: 1rem;
  line-height: 180%; /* 1.8rem */
  letter-spacing: 0.02rem;
}
.splide__arrows {
  position: absolute;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: flex-end;
  right: 0;
  top: 0;

  @include max(768) {
    top: -6px;
  }
  @include max(400) {
    // right: -40px;
    gap: 4px;
    transform: translateX(20px);
  }
}

.root-container {
  margin-bottom: 10.75rem;
  @include max(1024) {
    margin-bottom: 90px;
  }
  @include max(550) {
    margin-bottom: 40px;
    padding-right: 0;
    padding-left: 0;

    .title-dash {
      margin-left: 1.88rem;
    }

    .splide__arrows {
      right: 30px;
    }

    :deep(svg) {
      width: 30px;
    }
  }
}
</style>
