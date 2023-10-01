<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { useRoute } from 'vue-router'

const isOpen = ref(false)

const _useRoute = useRoute()
watch(
  () => _useRoute.fullPath,
  () => (isOpen.value = false)
)

const { y } = useScroll(window)
const isFloating = computed(() => y.value > 600)

const scrollToFooter = () => {
  isOpen.value = false
  const Footer = document.getElementById('Footer')
  Footer?.scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<template>
  <div id="header">
    <div class="root-flex header-desktop root-container relative z-10 hidden h-[6.25rem] w-screen items-center gap-4 lg:flex">
      <RouterLink
        to="/"
        class="mr-auto"
      >
        <img
          src="/icon/logo.svg"
          class="w-[17.125rem]"
        />
      </RouterLink>
      <RouterLink
        to="/"
        class="btn"
      >
        HOME
      </RouterLink>
      <RouterLink
        to="/about"
        class="btn"
      >
        關於星翰
      </RouterLink>
      <RouterLink
        to="/service"
        class="btn"
      >
        服務項目
      </RouterLink>
      <RouterLink
        to="/career"
        class="btn"
      >
        成為星翰人
      </RouterLink>
      <div
        class="btn cursor-pointer"
        @click="scrollToFooter"
      >
        聯絡我們
      </div>
    </div>

    <Transition name="bar">
      <div
        v-show="isFloating"
        class="floating-bar z-10 w-screen"
      >
        <div class="root-flex header-desktop root-container relative z-10 hidden h-[6.25rem] w-screen items-center gap-4 lg:flex">
          <RouterLink
            to="/"
            class="mr-auto"
          >
            <img
              src="/icon/logo.svg"
              class="w-[17.125rem]"
            />
          </RouterLink>
          <RouterLink
            to="/"
            class="btn"
          >
            HOME
          </RouterLink>
          <RouterLink
            to="/about"
            class="btn"
          >
            關於星翰
          </RouterLink>
          <RouterLink
            to="/service"
            class="btn"
          >
            服務項目
          </RouterLink>
          <RouterLink
            to="/career"
            class="btn"
          >
            成為星翰人
          </RouterLink>
          <div
            class="btn cursor-pointer"
            @click="scrollToFooter"
          >
            聯絡我們
          </div>
        </div>
      </div>
    </Transition>

    <div class="root-container header-mobile fixed z-10 flex h-[5rem] w-screen items-center gap-4 lg:hidden">
      <RouterLink
        to="/"
        class="mr-auto"
      >
        <IconLogoUni />
      </RouterLink>
      <Hamburger v-model="isOpen" />
    </div>

    <transition name="fade">
      <div
        class="panel fixed inset-0 top-[5rem] z-[9] flex flex-col items-center gap-[0.9375rem] bg-white pt-20"
        v-if="isOpen"
      >
        <RouterLink
          to="/"
          class="btn"
        >
          HOME
        </RouterLink>
        <RouterLink
          to="/about"
          class="btn"
        >
          關於星翰
        </RouterLink>
        <RouterLink
          to="/service"
          class="btn"
        >
          服務項目
        </RouterLink>
        <RouterLink
          to="/career"
          class="btn"
        >
          成為星翰人
        </RouterLink>
        <div
          class="btn cursor-pointer"
          @click="scrollToFooter"
        >
          聯絡我們
        </div>
      </div>
    </transition>

    <!-- <div
      v-show="isFloating"
      class="h-[5rem] lg:h-[7.5rem]"
    ></div> -->
    <div class="h-[5rem] lg:hidden lg:h-[7.5rem]"></div>
  </div>
</template>

<style scoped lang="scss">
#header {
  // position: fixed;
  display: flex;
  justify-content: center;
}

.header-desktop {
  .btn {
    padding: 0.3125rem 1.25rem;
    padding-top: calc(0.3125rem + 1px);
    border-radius: 3.125rem;
    color: #233f89;
    transition: all 0.3s;

    &.router-link-active {
      @apply bg-primary;
      color: #fff;
    }
    &:hover {
      @apply bg-primaryDark;
      color: #fff;
    }
  }
}

.header-mobile {
  background: linear-gradient(180deg, #fff 50%, #e2ffff 100%);
  box-shadow: 0px 18px 18px 0px rgba(117, 227, 224, 0.6);
}
.panel {
  // display: none;
  .btn {
    display: flex;
    width: 15rem;
    height: 3.125rem;
    padding: 0.375rem 1rem;
    justify-content: center;
    align-items: center;

    border-radius: 3.125rem;
    color: #233f89;
    font-size: 1.25rem;
    letter-spacing: 0.025rem;
    transition: all 0.3s;

    &.router-link-active {
      @apply bg-primary;
      color: #fff;
    }
    &:hover {
      @apply bg-primaryDark;
      color: #fff;
    }
  }
}

.floating-bar {
  position: fixed;
  top: 0;
  transition: all 0.5s;
  background: linear-gradient(180deg, #fff 50%, #e2ffff 100%);
  box-shadow: 0px 18px 18px 0px rgba(35, 63, 137, 0.13);
}

.bar-enter-from,
.bar-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
