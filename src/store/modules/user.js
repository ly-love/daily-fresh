export default {
  namespaced: true,
  state: {
    isCollapse: false, // 折叠菜单展开关闭状态
  },
  mutations: {
    changeCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
};
