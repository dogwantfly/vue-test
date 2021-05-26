<template>
  <div>
    <h1>新增頁面</h1>
    <div class="row">
      <div class="col-4">
        <div class="list-group">
          <router-link to="/newpage/a" href="#" class="list-group-item list-group-item-action">
            A
          </router-link>
          <router-link to="/newpage/b" href="#" class="list-group-item list-group-item-action">
            B
          </router-link>
          <router-link to="/newpage/namedview/a2b" class="list-group-item list-group-item-action">
            命名視圖 a2b
          </router-link>
          <router-link to="/newpage/namedview/b2c" class="list-group-item list-group-item-action">
            命名視圖 b2c
          </router-link>
          <router-link to="/newpage/dynamicrouter/fea8be3e64777240" class="list-group-item list-group-item-action">
            動態路由 $route
          </router-link>
          <router-link to="/newpage/dynamicrouterbyprops/fea8be3e64777240" class="list-group-item list-group-item-action">
            動態路由 props
          </router-link>
          <router-link to="/newpage/routerNavigation" class="list-group-item list-group-item-action">
            路由導覽
          </router-link>
        </div>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style scoped>
  @font-face {
    font-family: burnfont;
    src: local("burnfont"),
      url(burnfont-1.1-italic.otf);
    font-weight: bold;
  }

</style>
