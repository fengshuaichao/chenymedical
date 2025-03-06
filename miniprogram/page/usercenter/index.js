import CustomPage from './base/CustomPage';

Page({
  data: {
    isLogin: true,
    userInfo: {
      avatar: 'images/avatar.jpg',
      nickname: '张三',
      memberId: '88888888',
      levelName: '黄金会员'
    },
    benefits: [
      { id: 1, number: '1280', label: '积分' },
      { id: 2, number: '5', label: '优惠券' },
      { id: 3, number: '2', label: '待就诊' },
      { id: 4, number: '8', label: '收藏' }
    ],
    quickAccess: [
      { type: 'appointment', name: '预约就诊', icon: 'images/appointment.png' },
      { type: 'records', name: '健康档案', icon: 'images/records.jpg' },
      { type: 'mall', name: '积分商城', icon: 'images/credits.jpg' },
      { type: 'service', name: '在线客服', icon: 'images/custmerservice.jpeg' }
    ],
    functionGroups: [
      {
        title: '就医服务',
        items: [
          { type: 'appointments', name: '我的预约', icon: '/assets/icons/my-appointments.png' },
          { type: 'records', name: '就诊记录', icon: '/assets/icons/medical-records.png' },
          { type: 'reports', name: '检查报告', icon: '/assets/icons/reports.png' }
        ]
      },
      {
        title: '我的订单',
        items: [
          { type: 'all-orders', name: '全部订单', icon: '/assets/icons/orders.png' },
          { type: 'unpaid', name: '待付款', icon: '/assets/icons/unpaid.png' },
          { type: 'unfinished', name: '待完成', icon: '/assets/icons/unfinished.png' }
        ]
      },
      {
        title: '其他服务',
        items: [
          { type: 'favorites', name: '我的收藏', icon: '/assets/icons/favorites.png' },
          { type: 'address', name: '地址管理', icon: '/assets/icons/address.png' },
          { type: 'settings', name: '设置', icon: '/assets/icons/settings.png' }
        ]
      }
    ]
  },

  onLoad() {
    this.checkLoginStatus();
  },

  checkLoginStatus() {
    // 检查登录状态
  },

  toUserInfo() {
    if (!this.data.isLogin) {
      this.login();
      return;
    }
    wx.navigateTo({
      url: '/page/userinfo/index'
    });
  },

  navigateToBenefit(e) {
    const id = e.currentTarget.dataset.id;
    const urls = {
      1: '/pages/points/index',
      2: '/pages/coupons/index',
      3: '/pages/profile/my-appointments',
      4: '/pages/profile/my-favorites'
    };
    wx.navigateTo({
      url: urls[id]
    });
  },

  handleQuickAccess(e) {
    const type = e.currentTarget.dataset.type;
    const urls = {
      appointment: '/pages/appointment/appointment',
      records: '/pages/profile/health-records',
      mall: '/pages/mall/index',
      service: '/pages/service/service'
    };
    if (urls[type]) {
      wx.navigateTo({
        url: urls[type]
      });
    }
  },

  handleFunction(e) {
    const type = e.currentTarget.dataset.type;
    const urls = {
      appointments: '/pages/profile/my-appointments',
      records: '/pages/profile/health-records',
      reports: '/pages/profile/medical-reports',
      'all-orders': '/pages/profile/my-orders',
      unpaid: '/pages/profile/my-orders?status=unpaid',
      unfinished: '/pages/profile/my-orders?status=unfinished',
      favorites: '/pages/profile/my-favorites',
      address: '/pages/profile/address',
      settings: '/pages/profile/settings'
    };
    if (urls[type]) {
      wx.navigateTo({
        url: urls[type]
      });
    }
  },

  login() {
    // 实现登录逻辑
  },

  logout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            isLogin: false,
            userInfo: {}
          });
          // 清除登录状态
        }
      }
    });
  }
}); 