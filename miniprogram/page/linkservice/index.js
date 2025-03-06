// pages/linkservice/index.js
Page({
  data: {
    contactInfo: {
      phone: '021-12345678',
      address: '湖北省武汉市江汉区泛海国际SOHO城8栋2楼',
      latitude: 30.59941511696292,
      longitude: 114.2453670501709
    },
    markers: [{
      id: 1,
      latitude: 30.59941511696292,
      longitude: 114.2453670501709,
      name: '武汉尚小镜内镜诊疗中心',
      callout: {
        content: '武汉尚小镜内镜诊疗中心',
        padding: 10,
        borderRadius: 5,
        display: 'ALWAYS'
      }
    }],
    businessHours: [
      { day: '周一至周五', time: '09:00-21:00' },
      { day: '周六至周日', time: '09:00-18:00' },
      { day: '节假日', time: '09:00-18:00' }
    ]
  },

  makePhoneCall(e) {
    const phone = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: phone
    });
  },

  openLocation() {
    const { latitude, longitude, address } = this.data.contactInfo;
    wx.openLocation({
      latitude,
      longitude,
      name: '康沈口腔医院',
      address,
      scale: 18
    });
  }
});