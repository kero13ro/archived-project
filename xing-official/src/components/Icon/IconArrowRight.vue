<script setup></script>

<template>
  <div class="root">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle
        cx="20"
        cy="20"
        r="20"
        fill="white"
      />
      <circle
        cx="20"
        cy="20"
        r="19"
        stroke="#4D63F5"
        stroke-opacity="0.5"
        stroke-width="2"
      />
      <path
        d="M19.5222 12.9825L17.7853 14.7148L21.8628 18.774L13.2397 18.774L13.2397 21.223L21.8628 21.223L17.7853 25.2853L19.5222 27.0176L26.5731 19.9985L19.5222 12.9825Z"
        fill="#4D63F5"
        fill-opacity="0.5"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      class="absolute top-0"
    >
      <circle
        cx="20"
        cy="20"
        r="20"
        fill="#4D63F5"
      />
      <path
        d="M19.5222 12.9824L17.7853 14.7147L21.8628 18.7739H13.2397V21.2229H21.8628L17.7853 25.2852L19.5222 27.0175L26.5731 19.9984L19.5222 12.9824Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.absolute {
  opacity: 0;
  transition: 0.4s;
}
.root:hover {
  .absolute {
    opacity: 1;
  }
}
</style>
