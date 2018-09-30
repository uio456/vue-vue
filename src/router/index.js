import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Message from '@/components/Message'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello_world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    }
  ]
})