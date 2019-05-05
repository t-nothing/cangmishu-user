export default {
  namespaced: true,
  state: {
    button_loading: false,
    shutdown_status: false,
    setWarehouseId: '',
    noneWarehouseId: false,
    warehouseList: '',
  },
  mutations: {
    // 设置选择的warehouseid
    setWarehouseId(state, data) {
      state.setWarehouseId = data;
    },
    // 设置是否含有warehouseid
    ifHaveWarehouse(state, data) {
      state.noneWarehouseId = data;
    },
    // 储存仓库列表
    warehouseLists(state, data) {
      state.warehouseList = data;
    },
    // 按钮动画配置
    loading(state, data) {
      state.button_loading = data;
    },
    // 关闭侧边栏
    closeSideNav(state, data) {
      state.shutdown_status = data;
      localStorage.setItem('sideNavStatus', +data);
    },
    // 读取侧边栏状态
    getSideNavStatus(state) {
      state.shutdown_status = localStorage.getItem('sideNavStatus') || false;
    },
  },
};
