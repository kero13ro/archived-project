<script setup lang="ts">
import { useImage } from '@vueuse/core'

const props = defineProps<{
  src: string
  alt: string
}>()

const { isLoading, error } = useImage({ src: props.src }, { delay: 3000 })
</script>

<template>
  <div
    v-if="isLoading"
    class="skeleton aspect-[262/223] w-full"
  ></div>
  <div
    v-else-if="error"
    class="flex aspect-[262/223] w-full flex-col items-center justify-center bg-[#292929]"
  >
    <IconLogoBlack class="max-h-[40%] max-w-[50%]" />
    <span class="px-2 pt-3 text-center text-sm leading-4 tracking-widest opacity-30 md:py-3 md:text-xl">
      {{ alt }}
    </span>
  </div>
  <img
    v-else
    :src="src"
  />
</template>
<style scoped lang="scss"></style>
