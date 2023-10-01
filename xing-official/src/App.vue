<script setup lang="ts">
import { useRoute } from 'vue-router'

import { useScroll } from '@vueuse/core'
import { useWindowSize, watchDebounced } from '@vueuse/core'

const { y } = useScroll(window)
const { width } = useWindowSize()
const isLoading = ref(true)

const pageLoad = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 700)
}

onMounted(() => {
  pageLoad()
})

// const loadedPage = ref([''])

// const _useRoute = useRoute()
// watch(
//   () => _useRoute.path,
//   () => {
//     if (loadedPage.value.includes(_useRoute.path)) return
//     loadedPage.value.push(_useRoute.path)
//     pageLoad()
//   }
// )

watchDebounced(
  width,
  () => {
    if (width.value > 1920) {
      scaleREM(1900)
      return
    }
    if (width.value > 1024 && width.value < 1440) {
      scaleREM(1440)
      return
    }

    scaleREM(1)
  },
  { debounce: 100, maxWait: 300, immediate: true }
)

const scaleREM = (base: number) => {
  // console.log('scaleREM: ', base)
  if (base === 1) {
    document.documentElement.style.fontSize = '16px'
    return
  }
  document.documentElement.style.fontSize = (width.value / base) * 16 + 'px'
}
</script>

<template>
  <div id="root">
    <Header />

    <RouterView />

    <Footer></Footer>

    <Transition name="fade2">
      <GoTop v-show="y > 50" />
    </Transition>

    <Transition name="fadeXL">
      <div
        class="mask bg-white"
        v-if="isLoading"
      >
        <IconLoading />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
#root {
  overflow: hidden;
}
.mask {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fadeXL-enter-active,
.fadeXL-leave-active {
  transition: opacity 0.6s;
}

.fadeXL-enter-from,
.fadeXL-leave-to {
  opacity: 0;
}
</style>
