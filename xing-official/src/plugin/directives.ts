// @ts-nocheck
import gsap from 'gsap'

export const animate = {
  mounted(el, binding) {
    const params = binding.value

    const trigAnimate = (ta) => {
      gsap.fromTo(
        ta,
        {
          opacity: 0,
          ease: 'none',
          ...params,
        },
        {
          opacity: 1,
          ...params,
          x: 0,
          y: 0,
          duration: 0.8,
        }
      )

      observer.unobserve(ta)
    }

    function onIntersection(entries, opts) {
      entries.forEach((entry) => {
        // 進入判定點後
        if (entry.intersectionRatio > 0) {
          // 依據延遲，執行動畫
          // const delay = binding.value[2] || 0

          // setTimeout(() => {}, delay)
          // el.style.opacity = 1
          trigAnimate(entry.target)
          // 執行動畫後，解除偵測
          // observer.unobserve(entry.target)
          // 關閉觀察器
          // observer.disconnect()
        }

        // 離開判定點時復原
        // if (entry.intersectionRatio <= 0) {
        //   entry.target.style.opacity = 0;
        // }
      })
    }

    const observer = new IntersectionObserver(onIntersection, {
      root: null, // 觀察範圍 viewport。預設為瀏覽器
      // rootMargin: '-100px', // 偵測範圍內縮
      threshold: 0.2, // 目標可見度為 % 時就觸發
    })

    el.style.opacity = 0
    setTimeout(() => {
      observer.observe(el)
    }, 200)
    // observer.observe(el)
    // el.style.opacity = 0
  },
}
