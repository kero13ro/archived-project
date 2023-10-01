import type { gameType } from '@/typings/game'
import { useStorage } from '@vueuse/core'

// import { gameList } from '@/stores/mock'
// eslint-disable-next-line prettier/prettier
const codeList =['storm-of-seth','black-jack','vampire-hunter','ninjacat','fu-lu-so','crazy-alice','rockband','redhoodie','piratetreasure','bubble-gum','houyi','queenofdragon','fruitplanet','laman','sexyfox','boxing','hua-tuo','winterhunter','jinlian','vikings','fortune-dragon','sushi','diviner','sky-island','primitive','maya-god','frog-prince','tengu-festival','zhong-yi-canteen','the-city-of-gold','cowboy','kung-fu-champion','bartender','banker-bull','casino-bull','three-face','pai-gow']

export const useGame = defineStore('gameStore', () => {
  const filteredKey = ref('')

  // const gameList = useStorage<gameType[]>('gameList', [])
  const gameList = ref<gameType[]>([])

  return {
    filteredKey,
    codeList,
    gameList,
    // gameList: gameList.filter((el) => codeList.includes(el.code)),
  }
})
