<template lang="pug">
  .container
    .title 使用 this.$dialog() 呼叫彈窗，並可以串連不同按鈕之回乎函數
    div 透過閉包封裝回乎函式，串連 非同步函數呼叫
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
  mounted(){
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
  font-size: 20px;
  max-width: 550px;
}
.bg {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: rgba(238, 238, 238, 0.034);
  padding: 10px;
}
</style>
