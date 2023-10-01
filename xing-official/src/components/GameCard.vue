<script setup lang="ts">
import type { gameType } from '@/typings/game'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  game: gameType
  isNew: boolean
}>()

const _useSocket = useSocket()

const imgUrl = computed(() => {
  return `https://play.riversense.tw/egames/${props.game.checksum}/game/images/platform/${_useSocket.locale}/lobby_icon.png`
})

const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en' || locale.value === 'vn')
</script>

<template>
  <div
    class="card"
    :class="{ isEn }"
  >
    <div class="img-wrap">
      <LazyImg
        :src="imgUrl"
        :alt="game.name"
      />
    </div>
    <div class="mask">
      <button
        class="btn"
        @click="_useSocket.handlePlay(game!.code)"
      >
        <div class="z-[1] -translate-y-[1px]">{{ $t('開始遊戲') }}</div>
      </button>
    </div>
    <div
      class="tag"
      v-show="!isNew && game.isHot"
    >
      <img src="/icon/label_icon_red.png" />
      <span>{{ $t('熱門') }}</span>
    </div>
    <div
      class="tag"
      v-show="isNew"
    >
      <img src="/icon/label_icon_blue.png" />
      <span>{{ $t('最新') }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.img-wrap {
  border-radius: 15px;
  overflow: hidden;

  width: 100%;
  height: 100%;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.card {
  cursor: pointer;
  position: relative;

  &:hover .mask {
    opacity: 1;
  }
}

.mask {
  border-radius: 15px;
  transition: 0.3s opacity;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;

  .btn {
    display: flex;
    width: 180px;
    height: 44px;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;

    border-radius: 5px;
    background: linear-gradient(180deg, #ff3f29 0%, #c40000 100%);
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.3);

    // @@todo
    font-family: Noto Sans TC;
    font-size: 22px;
    font-weight: 500;

    @include max(768) {
      width: 120px;
      max-width: 80%;
      height: 40px;
      font-size: 18px;
    }
    transition: all 0.5s;
    &::after {
      display: block;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, #ff9029 0%, #c42f00 100%);
      opacity: 0;
      transition: 0.4s opacity;
    }
  }

  .btn:active,
  .btn:hover {
    &::after {
      opacity: 1;
    }
  }
}

.tag {
  position: absolute;
  top: -8px;
  left: 16px;
  width: 110px;
  > span {
    position: absolute;
    top: 2px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width: 106px;
    left: 0;
  }

  @include max(768) {
    top: -6px;
    width: 82px;
    > span {
      top: 2px;
      font-size: 16px;
      width: 80px;
    }
  }
}

.card.isEn .tag {
  > span {
    top: 4px;
    font-size: 18px;
  }
}
</style>
