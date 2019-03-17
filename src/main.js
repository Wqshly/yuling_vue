// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},  //vue 1.0 写法
});

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App),  //vue 2.0 写法
//   // es 6语法，表示Vue实例选项对象的render方法作为一个函数，接受传入的参数h函数，返回h(App)的函数调用结果。
//   // 官方文档如下:
//   // render: function (createElement) {
//   //   return createElement(
//   //     'h' + this.level,   // 标签名称
//   //     this.$slots.default // 子元素数组
//   //   )
//   // },
// });

