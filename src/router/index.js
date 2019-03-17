import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const login = () => Promise.resolve(require('@/views/login'));
const not_found = () => Promise.resolve(require('@/views/404'));
const manage = () => Promise.resolve(require('@/views/manage'));

const customer_info = () => Promise.resolve(require('@/views/customer/customer-info'));
const user_manage = () => Promise.resolve(require('@/views/user/user-manager'));

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
      name: '',
      component: manage,
      // meta: {
      //   login_require: true
      // },
      children: [
        {
          path: '/customer_info',
          name: 'customer_info',
          component: customer_info,
          meta: ['客户管理', '客户信息管理']
        },
        {
          path: '/user_manage',
          name: 'user_manage',
          component: user_manage
        }
      ]
    },
    {
      path: '*',
      name: '404 not found',
      component: not_found
    }
  ]
})
