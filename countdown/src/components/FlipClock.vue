<template lang="pug">
#Countdown
  .content
    p Final<br>Countdown
    #FlipClock.flip
      .group(v-for="(name, i) in heading" :key="i")
        .group-heading {{ name }}
        .rotor
          .leaf(:class="{'flipped': animate[i*2]}")
            .leaf-rear: span {{ flipTop[i*2] }}
            .leaf-front: span {{ flipBot[i*2] }}
          .top: span {{ flipTop[i*2] }}
          .bottom: span {{ flipBot[i*2] }}
        .rotor
          .leaf(:class="{'flipped': animate[i*2 + 1]}")
            .leaf-rear: span {{ flipTop[i*2 + 1] }}
            .leaf-front: span {{ flipBot[i*2 + 1] }}
          .top: span {{ flipTop[i*2 + 1] }}
          .bottom: span {{ flipBot[i*2 + 1] }}
</template>
<script>
export default {
  name: "FlipClock",
  props: {
    openTime: {
      type: Number,
      default: () => new Date().getTime() / 1000 + 10000
    },
    serveTime: {
      type: Number,
      default: () => new Date().getTime() / 1000
    }
  },
  data() {
    return {
      heading: ["HOURS", "MINUTES", "SECONDS"],
      // 葉片正反面、上下背景，各位數共四片
      flipTop: Array(6).fill(0),
      flipBot: Array(6).fill(0),
      preClock: Array(6).fill(0), // 紀錄前一秒，每秒比對是否有變化
      animate: Array(6).fill(false), // 是否在翻頁
      currentTime: this.serveTime
    };
  },
  created() {
    const diff = this.openTime - this.currentTime;
    const digitArr = this.GetDigitArr(diff);

    digitArr.forEach((str, index) => {
      this.flipTop[index] = str;
      this.flipBot[index] = str;
      this.preClock[index] = str;
    });
    this.Init();
  },
  // created() {
  //   const diff = this.openTime - this.currentTime;
  //   const digitArr = this.GetDigitArr(diff);

  //   digitArr.forEach((str, index) => {
  //     this.flipTop[index] = str;
  //     this.flipBot[index] = str;
  //     this.preClock[index] = str;
  //   });
  // },
  beforeDestroy() {
    clearInterval(this.ClockId);
  },
  methods: {
    Init() {
      this.UpdateClockValues();
      this.ClockId = setInterval(() => {
        this.UpdateClockValues();
        // if (parseInt(this.currentTime) % 300 === 0) {
        //   console.log("this.ApiGetConfigVersion();");
        // }
      }, 1000);
    },
    UpdateClockValues() {
      const diff = this.openTime - this.currentTime;

      if (diff <= 0) {
        clearInterval(this.ClockId);
        this.$emit("on-end");
        return;
      }
      this.currentTime++;
      const digitArr = this.GetDigitArr(diff);

      this.preClock.forEach((str, i) => {
        if (this.preClock[i] !== digitArr[i]) {
          this.preClock[i] = digitArr[i];
          this.Flip(i, digitArr);
        }
      });
    },
    GetDigitArr(diff) {
      const clock = [0, 0, 0];
      clock[0] = Math.floor(diff / 3600);
      diff -= clock[0] * 3600;
      clock[1] = Math.floor(diff / 60);
      diff -= clock[1] * 60;
      clock[2] = Math.floor(diff);

      const digitArr = clock.map(num => {
        if (num > 99) return String(num).slice(0, 2); // 若超過 99 小時

        return String(num).padStart(2, 0);
      });
      return digitArr.join("").split("");
    },
    Flip(i, digitArr) {
      this.animate.splice(i, 1, true);
      this.flipTop[i] = digitArr[i];

      setTimeout(() => {
        this.animate.splice(i, 1, false);
        this.flipBot[i] = digitArr[i];
      }, 500);
    }
  }
};
</script>

<style lang="scss">
#FlipClock {
  width: 100%;
  height: 70px;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  justify-content: space-between;

  .top,
  .bottom,
  .leaf-front,
  .leaf-rear {
    border: 1px solid #3e3a39;
  }

  /* Rotor tops */
  .rotor,
  .top,
  .leaf-front {
    background-color: #efefef;
  }

  /* Rotor bottoms */
  .bottom,
  .leaf-rear {
    background-color: #fff;
  }

  .group {
    position: relative;
    width: 60px;
    display: flex;
    align-items: center;
    padding-top: 20px;
    &:after {
      content: "";
      position: absolute;
      width: 4px;
      height: 10px;
      background-color: #fff;
      border: 1px solid #3e3a39;
      top: calc(50% + 5px);
      right: calc(50% - 2px);
    }
  }

  .group-heading {
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%) scale(0.8);
    display: block;
    height: 20px;
    color: #3e3a39;
    font-weight: 800;
  }

  .rotor {
    position: relative;
    width: 30px;
    height: 50px;
    text-align: center;
    perspective: 200px;
    font-size: 33px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    &:last-child {
      margin-right: 0;
    }
  }

  .top,
  .bottom {
    overflow: hidden;
    position: absolute;
    width: 30px;
    height: 25px;
  }

  .top {
    line-height: 50px;
  }

  .bottom {
    bottom: 0;
    line-height: 0px;
  }

  .leaf {
    z-index: 1;
    position: absolute;
    width: 30px;
    height: 50px;
    transform-style: preserve-3d;
    transition: transform 0s;

    &.flipped {
      transform: rotateX(-180deg);
      right: 0px;
      transition: all 0.5s ease-in-out;
    }
  }

  .leaf-front,
  .leaf-rear {
    overflow: hidden;
    position: absolute;
    width: 30px;
    height: 25px;
    margin: 0;
    transform: rotateX(0deg);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  .leaf-front {
    line-height: 50px;
  }

  .leaf-rear {
    line-height: 0px;
    transform: rotateX(-180deg);
  }
  span {
    transform: translateY(-2px);
    display: inline-block;
  }
}

#Countdown {
  color: #3e3a39;
  position: relative;
  display: grid;
  grid-template-columns: 50px 200px auto;
  grid-template-rows: 50px 200px 70px auto;
}

.content {
  grid-column: 2;
  grid-row: 2;
  font-family: "Noto Serif TC", serif;
  transform: scale(2);
  transform-origin: 0 0;
  > p {
    font-size: 20px;
    margin-bottom: 14px;
    font-weight: 900;
  }
}
</style>
