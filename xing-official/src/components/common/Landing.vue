<script setup lang="ts">
defineProps<{
  path: string
  title: string
  subtitle: string
}>()
</script>

<template>
  <section class="relative flex items-center justify-center">
    <!-- 使用背景圖片 自動推擠 -->
    <div class="root-container absolute top-0 flex h-full w-full items-center justify-between pt-[4.25rem]">
      <div class="pl-0 md:pl-[8.75vw] lg:pl-[10.5rem]">
        <div
          class="title md:mb-[-15px]"
          v-animate="{ y: 30, delay: 0.5 }"
        >
          {{ title }}
        </div>
        <div
          class="subtitle subtitle-xl"
          v-animate="{ y: 40, delay: 0.8 }"
        >
          {{ subtitle }}
        </div>
      </div>
      <img
        :src="path"
        v-animate="{ x: 40, delay: 0.5 }"
        class="man mr-0 w-[49.375rem] lg:max-w-[48vw] xl:mr-[-6.87rem]"
      />
    </div>
    <img
      src="/img/about_banner_bg.jpg"
      class="hidden w-[120rem] md:block lg:mt-[-6.25rem]"
    />
    <img
      src="/img/m_banner_bg.jpg"
      class="bg-mobile md:hidden"
    />
  </section>
</template>

<style scoped lang="scss">
.title {
  font-size: 3.6rem;
}
.subtitle-xl {
  font-size: 2.625rem;
  letter-spacing: 0.0525rem;
}

.root-container {
  padding-top: 0;
}

.bg-mobile {
  width: 768px;
  max-width: none;
  max-width: 180vw;
  max-height: 550px;
}
@include min-max(768, 1023) {
  .man {
    width: 50vw;
  }
}

@include max(767) {
  .subtitle-xl {
    font-size: 34px;
  }
  .root-container {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    gap: 26px;
  }
  .man {
    width: 80vw;
    max-width: 450px;
  }
}
@include max(480) {
  .man {
    width: 100%;
  }
  .subtitle-xl {
    font-size: 26px;
  }
  .title {
    font-size: 40px;
  }

  .root-container {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>
