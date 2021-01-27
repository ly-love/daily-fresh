<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <base-menu />
      </el-aside>
      <el-container>
        <el-header>
          <base-bar />
        </el-header>
        <el-main>
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import BaseMenu from './components/BaseMenu.vue';
import BaseBar from './components/BaseBar.vue';

export default {
  name: 'Home',
  components: {
    BaseMenu,
    BaseBar,
  },
  created() {
  },
};
</script>
