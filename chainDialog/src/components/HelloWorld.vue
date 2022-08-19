<template lang="pug">
  .container
    h5 目標：
    div 使用
      code this.$dialog()
      | 呼叫彈窗，並可以串連不同按鈕  
      code onOk, onCancel
      | 等回呼函數。
    .bg(v-highlight)
      pre
        code(class="javascript") {{code}}
    ul
      li 透過類似 jQuery 之閉包封裝作用域，以達到非同步執行不同結果。
      li 使用 Vue Render Functions 渲染彈窗，不用要在 data 內控制顯示狀態。


    Button(@click="ShowDailog") 顯示彈窗

    h4 {{resp}}


</template>

<script>
export default {
  data() {
    return {
      resp: "",
      code: `this.$dialog()
  .onOk(() => { ... })
  .onCancel(() => { ... });
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
      this.resp = ""
      this.$dialog()
        .onOk(() => {
          this.resp = "點擊了確認"
        })
        .onCancel(() => {
          this.resp = "點擊了取消"
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
