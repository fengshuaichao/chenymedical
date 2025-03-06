Page({
  data: {
    userId: '7130',
    phone: '15801466758',
    maskedPhone: '158****6758',
    showEmpty: true
  },

  onLoad() {
    // 处理手机号掩码显示
    const phone = this.data.phone
    const maskedPhone = phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
    this.setData({ maskedPhone })
  },

  // 退出登录
  handleLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // TODO: 清除登录状态
          wx.reLaunch({
            url: '/page/login/index'
          })
        }
      }
    })
  },

  // 修改头像昵称
  handleEditAvatar() {
    wx.navigateTo({
      url: '/page/editProfile/index'
    })
  },

  // 绑定已有就诊人
  handleBind() {
    wx.navigateTo({
      url: '/pages/bindPatient/index'
    })
  },

  // 创建新就诊人
  handleCreate() {
    wx.navigateTo({
      url: '/page/customerreg/index'
    })
  }
}) 