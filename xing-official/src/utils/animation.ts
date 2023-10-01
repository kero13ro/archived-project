import gsap from 'gsap'

const initParallax = (block: string, viewStart = 'center') => {
  document.querySelectorAll(`[data-depth]`).forEach((el) => {
    const dep = Number(el.dataset.depth)
    // console.log(dep)

    gsap.fromTo(
      el,
      { y: dep * -0.5 },
      {
        y: dep * 0.5,
        scrollTrigger: {
          trigger: block,
          start: `top ${viewStart}`,
          end: 'bottom top',
          scrub: true,
        },
      }
    )
  })
}

export { initParallax }
