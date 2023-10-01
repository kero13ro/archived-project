import { DisplayModeType, type Game } from '@/typings/game'

export const openGameTrail = ({ code, displayMode }: Game, lang: string) => {
  // if (lang !== 'zh-tw') {
  //   if (code === 'richman') lang = 'jp'
  //   if (code === 'badugi') lang = 'kr'
  // }
  const [width, height] = displayMode === DisplayModeType.landscape ? [776, 437] : [414, 736]
  const gameCode = code === 'storm-of-seth' ? 'egyptian-mythology' : code

  const brand = import.meta.env.VITE_DEMO_BRAND || 'rgs' // 使用 ATG 會報錯
  const baseUrl = import.meta.env.VITE_GAME_URL
  const playUrl = `${baseUrl}/trail/${gameCode}?lang=${lang}&brand=${brand}&t=${new Date().getTime()}`

  window.open(playUrl, '_blank', `location=no,width=${width},height=${height},scrollbars=no,status=no`)
}
