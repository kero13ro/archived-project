<script setup lang="ts"></script>

<template>
  <div class="card flex flex-col items-center">
    <div class="circle">
      <img src="/icon/career/01.png" />
    </div>
    <div class="card-title">薪資福利</div>
    <div class="info">
      <div>★ 具競爭力的薪資結構及年終獎金</div>
      <div>★ 勞健保不倒扣，公司幫您出</div>
      <div>★ 歡慶節日禮金及各項津貼補助</div>
      <div>★ 彈性上下班</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  max-width: 22.5rem;
}

.circle {
  width: 13.75rem;
  height: 13.75rem;
  background-color: #aee7e4;
  border-radius: 50%;
  padding: 1.83rem;
}

.card-title {
  text-align: center;
  font-size: 1.625rem;
  letter-spacing: 0.0325rem;

  margin-top: 2rem;
  margin-bottom: 1rem;
}

.info {
  font-size: 1.125rem;
  line-height: 180%; /* 2.025rem */
  letter-spacing: 0.0225rem;
}
</style>
