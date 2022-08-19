<template lang="pug">
  .container
    h5 目標：
    div 使用
      code this.$dialog()
      | 呼叫彈窗，並可以串連不同按鈕  
      code onOk, onCancel
      | 等回呼函數。

    div 透過類似 jQuery 之閉包封裝作用域，以達到非同步執行不同結果。
    .bg(v-highlight)
      pre
        code(class="javascript") {{code}}


    Button(@click="ShowDailog") 顯示彈窗


</template>

<script>
export default {
  data() {
    return {
      code: `this.$dialog()
  .onOk(() => {
    alert("點擊了確認按鈕");
  })
  .onCancel(() => {
    alert("點擊了取消按鈕");
  });
`
    };
  },
  mounted() {
    setTimeout(() => {
      this.ShowDailog()
    }, 1000);
  },
  methods: {
    ShowDailog() {
      this.$dialog()
        .onOk(() => {
          alert("點擊了確認");
        })
        .onCancel(() => {
          alert("點擊了取消");
        });
    }
  }
};
</script>

<style lang="scss">
.container {
  font-size: 16px;
  /* max-width: 500px; */
}

.bg {
  margin-top: 20px;
  margin-bottom: 20px;
  /* background-color: rgba(238, 238, 238, 0.034); */
  /* padding: 10px; */
}
</style>
