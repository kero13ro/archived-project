import { useMouse, watchDebounced } from '@vueuse/core'
import { gsap } from 'gsap'

export function useMouseAnimate(root: any, bgMouse: any) {
  const { x, y } = useMouse()

  const last = ref([0, 0])

  onMounted(() => {
    last.value[1] = root.value.offsetTop
  })

  watchDebounced(
    [x, y],
    (val) => {
      const [lx, ly] = last.value
      const [cx, xy] = val

      gsap.to(bgMouse.value, {
        x: String((lx - cx) / 30),
        y: String((ly - xy) / 40),
        duration: 1,
      })
    },
    { debounce: 1, maxWait: 1 }
  )
}
