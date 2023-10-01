<script setup lang="ts">
const _useGame = useGame()

// const newGameList = JSON.parse(import.meta.env.VITE_GAME_NEW)

const filteredBySearch = computed(() => {
  if (!_useGame.filteredKey) return _useGame.gameList
  return _useGame.gameList.filter((el) => el.name.includes(_useGame.filteredKey))
})
</script>

<template>
  <div id="gameList">
    <GameCard
      v-for="el in filteredBySearch"
      :key="el.code"
      :game="el"
      :isNew="el.isNew"
    />
  </div>
</template>

<style scoped lang="scss">
#gameList {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  color: #fff;

  > .card:first-child {
    grid-column: span 2;
    grid-row: span 2;

    :deep(.btn) {
      width: 260px;
      border-radius: 6px;
      font-size: 30px;
      height: auto;
      padding: 10px 0;

      @include max(768) {
        padding: 6px 0;
        width: 180px;
        font-size: 24px;
      }
    }
  }

  @include max(1240) {
    grid-template-columns: repeat(4, 1fr);
  }
  @include max(1000) {
    grid-template-columns: repeat(3, 1fr);
  }
  @include max(768) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
