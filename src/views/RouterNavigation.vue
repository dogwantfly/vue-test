<template>
  <button type="button" @click="getRoute">getRoute</button>
  <button type="button" @click="push">push</button>
  <button type="button" @click="replace">replace</button>
  <button type="button" @click="go">go</button>
  <hr>
  <button type="button" @click="addRoute">新增路由</button>
</template>
<script>
export default {
  methods: {
    // 切換頁面 有 push 和 replace
    // 包含歷史紀錄
    push () {
      this.$router.push({ name: 'About' })
    },
    // 不會產生歷史紀錄，直接取代
    replace () {
      this.$router.replace({ name: 'About' })
    },
    // 操作歷史紀錄，回上頁（負值）或至下頁（正整數）
    go () {
      this.$router.go(-2)
    },
    // 取用常用參數
    getRoute () {
      // 取得路由的屬性
      // https://next.router.vuejs.org/zh/api/#routelocationnormalized
      // 例如: this.$route.fullpath
      // console.log(this.$route)
      // 呼叫路由的方法
      // https://next.router.vuejs.org/zh/api/#router-%E6%96%B9%E6%B3%95
      console.log(this.$router)
    },
    addRoute () {
      this.$router.addRoute({
        path: '/newAbout',
        name: 'newAbout',
        component: () => import('./About.vue')
      })
    }
  }
}
</script>
