<script setup lang="ts">
import Splide from '@splidejs/splide'
const arr = [
  { label: '地處於台中七期市政核心', img: '/img/about/s1.png' },
  { label: '國際頂級商辦大樓', img: '/img/about/s2.png' },
  { label: '寬敞明亮的辦公空間', img: '/img/about/s3.png' },
  { label: '多功能會議室', img: '/img/about/s4.png' },
  { label: '遠眺市容', img: '/img/about/s5.png' },
  { label: '星翰空間', img: '/img/about/s6.png' },
  { label: '辦公室入口', img: '/img/about/s7.png' },
]

onMounted(() => {
  new Splide('#splide-banners', {
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
      id="splide-banners"
      class="splide"
    >
      <div class="title-dash relative mb-[24px] md:mb-[2.3rem]">
        <span v-animate="{ y: 40, delay: 0.4 }">優質的辦公環境</span>
        <div class="splide__arrows">
          <IconArrowRight class="splide__arrow--prev scale-x-100 cursor-pointer" />
          <IconArrowRight class="splide__arrow--next cursor-pointer" />
        </div>
      </div>

      <div class="splide__track">
        <ul class="splide__list">
          <li
            v-for="el in arr"
            :key="el.label"
            class="splide__slide"
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
}

.root-container {
  @include max(550) {
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
