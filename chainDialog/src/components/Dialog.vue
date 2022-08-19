<template lang="pug">
  #dialog
    h5 Title
    .row
      Button(@click="$emit('ok')") OK
      Button(@click="$emit('cancel')") Cancel


</template>

<script>
export default {};
</script>

<style lang="scss">
#dialog {
  background-color: #eee;
  position: fixed;
  top: 55vh;
  left: 50vw;
  transform: translate(-50%, -50%);

  border: 1px solid #ddd;
  padding: 10px 20px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  width: 300px;
  font-weight: bold;

  .row {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    button {
      margin-left: 10px;
    }
  }
}
</style>
