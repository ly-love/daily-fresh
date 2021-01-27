<template>
  <div>
    <div class="flex">
      <el-button size="mini" icon="el-icon-s-fold" @click="handleCollapse"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleCollapse() {
      this.$store.commit('user/changeCollapse');
    },
  },
};
</script>
