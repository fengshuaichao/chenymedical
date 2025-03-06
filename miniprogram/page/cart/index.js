// page/cart/index.js
Page({
  data: {
    cartItems: [
      {
        id: 1,
        name: '超声波洁牙',
        specification: '标准洁牙服务',
        price: 299,
        quantity: 1,
        image: './images/innermirror.jpg',
        selected: true
      },
      {
        id: 2,
        name: '牙齿美白',
        specification: '冷光美白',
        price: 1980,
        quantity: 1,
        image: './images/innermirror.jpg',
        selected: true
      }
    ],
    recommendItems: [
      {
        id: 3,
        name: '儿童窝沟封闭',
        price: 180,
        image: './images/innermirror.jpg'
      },
      {
        id: 4,
        name: '牙齿修复',
        price: 800,
        image: './images/innermirror.jpg'
      }
    ],
    allSelected: true,
    totalPrice: 2279,
    discount: 100,
    selectedCount: 2
  },

  toggleSelect(e) {
    const id = e.currentTarget.dataset.id;
    const items = this.data.cartItems.map(item => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    this.setData({ cartItems: items });
    this.updateTotalPrice();
    this.updateSelectAll();
  },

  toggleSelectAll() {
    const allSelected = !this.data.allSelected;
    const items = this.data.cartItems.map(item => ({
      ...item,
      selected: allSelected
    }));
    this.setData({
      allSelected,
      cartItems: items
    });
    this.updateTotalPrice();
  },

  increaseQuantity(e) {
    const id = e.currentTarget.dataset.id;
    const items = this.data.cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    this.setData({ cartItems: items });
    this.updateTotalPrice();
  },

  decreaseQuantity(e) {
    const id = e.currentTarget.dataset.id;
    const items = this.data.cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    this.setData({ cartItems: items });
    this.updateTotalPrice();
  },

  updateQuantity(e) {
    const id = e.currentTarget.dataset.id;
    const quantity = parseInt(e.detail.value) || 1;
    const items = this.data.cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    this.setData({ cartItems: items });
    this.updateTotalPrice();
  },

  deleteItem(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '提示',
      content: '确定要删除该商品吗？',
      success: (res) => {
        if (res.confirm) {
          const items = this.data.cartItems.filter(item => item.id !== id);
          this.setData({ cartItems: items });
          this.updateTotalPrice();
          this.updateSelectAll();
        }
      }
    });
  },

  updateTotalPrice() {
    const total = this.data.cartItems.reduce((sum, item) => {
      if (item.selected) {
        return sum + item.price * item.quantity;
      }
      return sum;
    }, 0);
    const selectedCount = this.data.cartItems.filter(item => item.selected).length;
    this.setData({
      totalPrice: total,
      selectedCount
    });
  },

  updateSelectAll() {
    const allSelected = this.data.cartItems.length > 0 && 
      this.data.cartItems.every(item => item.selected);
    this.setData({ allSelected });
  },

  navigateToService() {
    wx.switchTab({
      url: '/pages/service/service'
    });
  },

  addToCart(e) {
    const id = e.currentTarget.dataset.id;
    // 添加到购物车的逻辑
    wx.showToast({
      title: '添加成功',
      icon: 'success'
    });
  },

  queryProductDetail(e) {
    wx.navigateTo({
      url: '/page/productdetail/index',
    })
  },

  checkout() {
    if (this.data.selectedCount === 0) {
      wx.showToast({
        title: '请选择商品',
        icon: 'none'
      });
      return;
    }
    // 结算逻辑
    // wx.navigateTo({
    //   url: '/pages/checkout/index'
    // });
    wx.requestPayment({
      timeStamp: '1717749500', // 时间戳（秒级）
      nonceStr: '5K8264ILTKCH16CQ25', // 随机字符串
      package: 'prepay_id=wx251438...', // 预支付交易会话标识
      signType: 'RSA', // 签名类型
      paySign: 'oR9d8Puh9iZs+...', // 签名
      success(res) {
        console.log('支付成功', res)
      },
      fail(err) {
        console.error('支付失败', err)
      }
    })

  }
}); 