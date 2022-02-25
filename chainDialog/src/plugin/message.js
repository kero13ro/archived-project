import Vue from "vue";
import DailogComp from "@/components/Dialog.vue";

function openDialog() {
  return function () {
    const okFns = [];
    const cancelFns = [];
    const API = {
      onOk(fn) {
        okFns.push(fn);
        return API;
      },
      onCancel(fn) {
        cancelFns.push(fn);
        return API;
      }
    };
    render(okFns, cancelFns);
    return API;
  }();
}

function render(okFns, cancelFns) {
  const node = document.createElement("div");
  document.body.appendChild(node);
  let vm = new Vue({
    el: node,
    name: "GlobalDialog",
    render(h) {
      return h(DailogComp, {
        ref: "dialog",
        attrs: {
          id: "dialog"
        },
        on: {
          ok: () => {
            okFns.forEach(fn => fn());
            vm.$destroy();
            vm.$el.remove();
            vm = null;
          },
          cancel: () => {
            cancelFns.forEach(fn => fn());
            vm.$destroy();
            vm.$el.remove();
            vm = null;
          }
        }
      });
    }
  });
}

Vue.prototype.$dialog = openDialog;
