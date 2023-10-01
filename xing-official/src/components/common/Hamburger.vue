<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()
</script>

<template>
  <div
    class="hamburger"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <div
      class="wrap"
      :class="{ active: modelValue }"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hamburger {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.hamburger .wrap {
  user-select: none;

  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    width: 1.5rem;
    height: 2px;
    @apply bg-primary;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  &.active {
    span {
      &:nth-last-child(1) {
        transform: translate(0, -8px) rotate(-45deg);
      }
      &:nth-last-child(2) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }
      &:nth-last-child(3) {
        transform: translate(0px, 8px) rotate(45deg);
      }
    }
  }
}
</style>
