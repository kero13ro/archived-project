<script setup lang="ts">
import magnifier from '@/assets/img/magnifier.svg?component'

const _useGame = useGame()
</script>

<template>
  <div id="Search">
    <div class="bar">
      <input
        type="text"
        :placeholder="$t('遊戲搜尋')"
        v-model="_useGame.filteredKey"
      />
      <magnifier class="magnifier shrink-0 text-[#5C5C5C]" />
      <!-- <img src="@/assets/img/magnifier.svg?url" /> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
#Search {
  display: flex;
  // width: 1440px;
  height: 100px;
  padding-top: 35px;
  margin-bottom: 12px;
  justify-content: flex-end;

  @include max(768) {
    margin-bottom: 0px;
    padding: 28px 0px 0px 0px;
  }
}

.bar {
  display: flex;
  width: 440px;
  height: 52px;
  padding: 10px 24px;
  align-items: flex-start;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  border-radius: 50px;
  border: 2px solid #5c5c5c;
  // background: #000;

  @include max(768) {
    height: 50px;
    width: 100%;
  }

  input {
    background-color: transparent;
    outline-width: 0;

    width: 100%;
    height: 100%;

    color: #5c5c5c;
    font-size: 20px;

    @include max(768) {
      font-size: 18px;
    }
  }
  ::placeholder {
    color: #5c5c5c;
  }
}

.magnifier {
  @include max(768) {
    transform: scale(0.86);
  }
}
</style>
