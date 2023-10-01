<script setup lang="ts">
import { gsap } from 'gsap'
import { useElementVisibility, watchOnce } from '@vueuse/core'

const countdown = () => {
  const items = document.querySelectorAll('#NumberList .number')

  gsap.from(items, {
    textContent: 1,
    duration: 3,
    snap: { textContent: 1 },
  })
}

const root2 = ref(null)
const rootIsVisible = useElementVisibility(root2)

setTimeout(() => {
  watchOnce(rootIsVisible, () => {
    countdown()
  })
}, 600)
</script>
<template>
  <section
    id="NumberList"
    ref="root2"
  >
    <div class="root-container grid w-full grid-cols-2 md:grid-cols-4">
      <div class="card">
        <div class="number">300+</div>
        <label>projects completed</label>
        <div class="border-right"></div>
      </div>
      <div class="card">
        <div class="number">60+</div>
        <label>active clients</label>
        <div class="border-right"></div>
      </div>
      <div class="card">
        <div class="number">98%</div>
        <label>clients happy</label>
        <div class="border-right"></div>
      </div>
      <div class="card">
        <div class="number">200%</div>
        <label>TEAM GROWING</label>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.card {
  @apply relative flex flex-col justify-center gap-[0.25rem];
}
#NumberList {
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #233f89;
  color: #fff;
  overflow: hidden;
  @include max(1024) {
    height: 30vw;
  }
  @include max(768) {
    height: auto;
    .card {
      height: 47vw;
      max-height: 240px;
    }
  }
}
.number {
  text-align: center;
  font-size: 4.375rem;
  font-weight: 700;
  letter-spacing: 0.0875rem;

  @include max(1024) {
    font-size: 44px;
    font-weight: 700;
    letter-spacing: 0.88px;
  }
  @include max(350) {
    font-size: 34px;
  }
}

.number + label {
  color: #fff;
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.0225rem;
  text-transform: uppercase;

  @include max(1024) {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.28px;
  }
}

.border-right {
  width: 1px;
  box-shadow: 1px 0px 0px 0px rgba(255, 255, 255, 0.2);
  height: 400px;
  position: absolute;
  bottom: 0;
  right: 0;

  @include max(768) {
    display: none;
  }
}
</style>
