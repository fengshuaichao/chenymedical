Page({
  data: {
    searchKeyword: '',
    currentCategory: 1,
    cartCount: 0,
    loading: false,
    noMore: false,
  },

  onLoad() {
    this.loadCartCount();
  },

  loadCartCount() {
    // 从缓存或服务器获取购物车数量
    this.setData({
      cartCount: 2
    });
  },

  onSearchInput(e) {
    this.setData({
      searchKeyword: e.detail.value
    });
    this.searchGoods();
  },

  searchGoods() {
    // 实现搜索逻辑
    console.log('搜索关键词：', this.data.searchKeyword);
  },

  switchCategory(e) {
    const categoryId = e.currentTarget.dataset.id;
    this.setData({
      currentCategory: categoryId
    });
    this.loadGoodsList(categoryId);
  },

  loadGoodsList(categoryId) {
    // 根据分类加载商品列表
    console.log('加载分类：', categoryId);
  },

  loadMore() {
    if (this.data.loading || this.data.noMore) return;
    
    this.setData({ loading: true });
    // 模拟加载更多
    setTimeout(() => {
      this.setData({
        loading: false,
        noMore: true
      });
    }, 1000);
  },

  onRefresh() {
    // 下拉刷新
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 1000);
  },

  navigateToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/service-detail/index?id=${id}`
    });
  },

  navigateToCart() {
    wx.switchTab({
      url: '/pages/cart/index'
    });
  },

  toProductDetail() {
    wx.navigateTo({
      url: '/page/exchangegoods/index',
    })
  }
}); 