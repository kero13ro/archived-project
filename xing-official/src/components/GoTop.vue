<script setup lang="ts">
const handleScrollDown = () => {
  window.scrollTo({
    behavior: 'smooth',
    top: 0,
  })
}
</script>

<template>
  <div
    id="goTop"
    class="z-20 flex items-center justify-center"
    @click="handleScrollDown"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
    >
      <circle
        cx="40"
        cy="40"
        r="40"
        fill="#4D63F5"
      />
      <path
        d="M25.7778 40.7683L29.2424 44.2421L37.3607 36.0871L37.3607 53.3333L42.2587 53.3333L42.2587 36.0871L50.3834 44.2421L53.848 40.7683L39.8097 26.6666L25.7778 40.7683Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
#goTop {
  position: fixed;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  right: 50px;
  bottom: 50px;
  cursor: pointer;
  // transition: 0.3s all;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  @include max(1680) {
    width: 65px;
    height: 65px;
  }
  @include max(1024) {
    width: 55px;
    height: 55px;

    right: 32px;
    bottom: 32px;
  }
}
</style>
