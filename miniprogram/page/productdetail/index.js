import CustomPage from './base/CustomPage'

Page({
  data: {
    isFavorite: false,
    cartCount: 2,
    serviceInfo: {
      images: [
        'images/innermirror.jpg',
        'images/innermirror.jpg',
        'images/innermirror.jpg'
      ],
      name: '超声波洁牙',
      price: 299,
      originalPrice: 599,
      soldCount: 2380,
      description: '采用进口超声波洁牙设备，全面清除牙结石、色斑、软垢等',
      tags: ['无痛治疗', '全程消毒', '专业医师', '品质保证'],
      specifications: [
        { id: 1, name: '标准洁牙', price: 299, selected: true },
        { id: 2, name: '深度洁牙', price: 399, selected: false }
      ],
      doctors: [
        {
          id: 1,
          name: '张医生',
          title: '主任医师',
          avatar: 'images/doctor.jpg'
        },
        {
          id: 2,
          name: '李医生',
          title: '副主任医师',
          avatar: 'images/doctor.jpg'
        }
      ],
      detailContent: '<div>详细的服务介绍内容...</div>',
      rating: 4.9,
      reviewCount: 2380,
      reviews: [
        {
          id: 1,
          userName: '张**',
          userAvatar: 'images/doctor.jpg',
          rating: 5,
          content: '医生很专业，服务很好，一点都不疼',
          time: '2024-03-10'
        },
        {
          id: 2,
          userName: '李**',
          userAvatar: 'images/doctor.jpg',
          rating: 5,
          content: '效果很好，以后还会再来',
          time: '2024-03-09'
        }
      ]
    }
  },

  toggleFavorite() {
    this.setData({
      isFavorite: !this.data.isFavorite
    });
    wx.showToast({
      title: this.data.isFavorite ? '收藏成功' : '取消收藏',
      icon: 'success'
    });
  },

  selectSpec(e) {
    const id = e.currentTarget.dataset.id;
    const specifications = this.data.serviceInfo.specifications.map(spec => ({
      ...spec,
      selected: spec.id === id
    }));
    this.setData({
      'serviceInfo.specifications': specifications
    });
  },

  navigateToDoctor(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/doctors/detail?id=${id}`
    });
  },

  contactService() {
    wx.showToast({
      title: '正在接入客服...',
      icon: 'loading'
    });
  },

  navigateToCart() {
    wx.switchTab({
      url: '/pages/cart/index'
    });
  },

  addToCart() {
    wx.showToast({
      title: '添加成功',
      icon: 'success'
    });
    this.setData({
      cartCount: this.data.cartCount + 1
    });
  },

  buyNow() {
    wx.navigateTo({
      url: '/pages/checkout/index'
    });
  }
}); 