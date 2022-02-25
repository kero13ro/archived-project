import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.directive("transFrom", {
  bind(el, binding) {
    el.style.opacity = 0;

    // 偵測 element 是否在畫面內。https://reurl.cc/Q7k1OZ

    const observer = new IntersectionObserver(onIntersection, {
      root: null, // 觀察範圍 viewport。預設為瀏覽器
      rootMargin: "-20px", // 偵測範圍內縮
      threshold: 0.5 // 目標可見度為 50% 時就觸發
    });

    const moveXAnimation = {
      transform: ["translate(0px)", binding.value],
      opacity: [1, 0]
    };

    // 進入畫面時觸發的 fn
    function onIntersection(entries) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          el.style.opacity = 1;
          entry.target.animate(moveXAnimation, {
            easing: "ease-in",
            direction: "reverse",
            duration: 2000
            // ps. 瀏覽器不支援 animate id, composite, pseudoElement 部分參數
          });
          // 執行動畫後，解除偵測
          observer.unobserve(entry.target);
        }
      });
    }

    observer.observe(el);
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
