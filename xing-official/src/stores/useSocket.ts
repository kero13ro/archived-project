import { useStorage } from '@vueuse/core'

// @ts-ignore
import io from 'socket.io-client'
import { socketOpts, socketUrl } from '@/typings/socket'

export const useSocket = defineStore('socketStore', () => {
  const urlParams = new URLSearchParams(window.location.search)
  const locale = urlParams.get('l') || import.meta.env.VITE_DEFAULT_LOCALE || 'zh-tw'

  // 優先使用 local storage 的 token，
  const token = useStorage('_t', urlParams.get('t'))
  const tryLocalToken = ref(false)
  const isTokenError = ref(false)

  const ins = io(socketUrl, socketOpts)

  const _useAuth = useAuth()
  const _useGame = useGame()

  // 每三分鐘重新撈取 token
  let timer = 0
  const refreshInit = () => {
    clearTimeout(timer)
    timer = window.setTimeout(handleInit, 3 * 1000 * 60)
  }

  const handleInit = () => {
    ins.emit(
      'lobbyInitial',
      {
        token: token.value,
        clientType: 'web',
      },
      (res: any) => {
        console.log('lobbyInitial: res', res)
        if (res.status === 400) {
          // 若 local storage 的 token 過期，再取用 url 的 token，重新撈取
          token.value = urlParams.get('t')
          if (!tryLocalToken.value && token.value) {
            tryLocalToken.value = true
            handleInit()
            return
          }
          isTokenError.value = true
        }
        if (!res.content) return
        isTokenError.value = false
        token.value = res.token
        _useGame.gameList.push(...res.content.games)
        _useAuth.user = res.content.user

        refreshInit()
      }
    )
  }

  const handlePlay = async (code: string) => {
    console.log(token.value, 'handlePlay')
    ins.emit(
      'lobbyPlay',
      {
        token: token.value,
        clientType: 'web',
        code,
      },
      (res: any) => {
        if (res.status === 400) {
          isTokenError.value = true
          return
        }
        window.open(res.redirectUrl, '_blank')
        token.value = res.token
      }
    )
  }

  ins.on('connect', handleInit)
  ins.on('connect_error', (err: any) => console.log('connect_error', err))
  ins.on('disconnect', (res: any) => console.log('disconnect', res))
  ins.on('event', (res: any) => console.log('event', res))

  ins.on('reconnect', () => console.log('reconnect'))
  ins.on('connect_timeout', () => console.log('connect_timeout'))
  ins.on('error', () => console.log('error'))
  ins.on('warning', () => console.log('warning'))

  const _io = ref()
  _io.value = ins

  return {
    _io,
    handleInit,
    handlePlay,
    isTokenError,
    locale,
  }
})
