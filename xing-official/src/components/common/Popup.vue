<script setup lang="ts">
const _usePopup = $p()
</script>

<template>
  <div
    id="popup"
    @click="_usePopup.closePopup"
  >
    <div class="flex flex-grow flex-col">
      <div class="text-xl text-white">{{ _usePopup.title }}</div>
      <div
        class="text-[#B9B9B9]"
        v-show="_usePopup.content"
      >
        {{ _usePopup.content }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#popup {
  z-index: 10;
  position: fixed;
  top: 40px;
  right: 40px;
  width: 400px;
  // width: 500px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 15px;
  border: 4px solid #5b5b5b;
  background: #292929;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.3);

  @include max(768) {
    width: 80vw;
    top: 10vw;
    right: 10vw;
  }
}
</style>
