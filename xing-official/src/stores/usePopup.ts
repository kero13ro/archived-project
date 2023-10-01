export const $p = defineStore('usePopup', () => {
  let timer = 0
  const isOpen = ref(false)
  const title = ref('title')
  const content = ref('content')

  const openPopup = (params: any) => {
    if (typeof params === 'string') {
      title.value = params
    } else {
      if (params.title) title.value = params.title
      if (params.content) content.value = params.content
    }

    refreshCount(params.duration || 4000)
    isOpen.value = true
  }

  const closePopup = () => {
    isOpen.value = false
  }

  const refreshCount = (duration: number) => {
    clearTimeout(timer)
    timer = window.setTimeout(() => {
      isOpen.value = false
    }, duration)
  }

  return { isOpen, closePopup, openPopup, title, content }
})
