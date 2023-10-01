export const useAuth = defineStore('authStore', () => {
  const user = ref({
    uid: undefined,
    name: undefined,
    balance: {
      currency: 'TWD',
      amount: '',
    },
    avatar: undefined,
    avatarUrl: 'https://play.riversense.tw/avatars/13.png',
  })

  return {
    user,
  }
})
