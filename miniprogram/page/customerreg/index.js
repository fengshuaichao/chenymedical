Page({
  data: {
    name: '',
    clinic: '武汉尚小镜内镜诊疗中心',
    phoneType: '本人',
    phone: '',
    birthday: '2000-01-01',
    genderList: ['男', '女', '保密'],
    gender: '男',
    selectedGender: '男',
    showDatePicker: false,
    showClinicPicker: false,
    showGenderPicker: false,
    years: [],
    months: [],
    days: [],
    dateValue: [50, 0, 0], // 默认选中1990年1月1日
    clinicList: ['武汉尚小镜内镜诊疗中心', '武汉尚小镜内镜诊疗中心总部', '武汉尚小镜内镜诊疗中心分室'],
    selectedClinic: '武汉尚小镜内镜诊疗中心'
  },

  onLoad() {
    this.initDatePicker(),
    // 设置默认生日
    this.setData({
      birthday: '2000-01-01'
    })
  },

  // 初始化日期选择器数据
  initDatePicker() {
    const date = new Date()
    const years = []
    const months = []
    const days = []

    for (let i = 1950; i <= date.getFullYear(); i++) {
      years.push(i)
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i)
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i)
    }

    this.setData({
      years,
      months,
      days
    })
  },

  // 显示日期选择器
  showDatePicker() {
    this.setData({
      showDatePicker: true
    })
  },

  // 关闭日期选择器
  closeDatePicker() {
    this.setData({
      showDatePicker: false
    })
  },

  // 日期选择改变
  onDateChange(e) {
    this.setData({
      dateValue: e.detail.value
    })
  },

  // 确认日期选择
  confirmDate() {
    const {years, months, days, dateValue} = this.data
    const birthday = `${years[dateValue[0]]}-${String(months[dateValue[1]]).padStart(2, '0')}-${String(days[dateValue[2]]).padStart(2, '0')}`
    this.setData({
      birthday,
      showDatePicker: false
    })
  },

  // 显示门诊选择器
  showClinicPicker() {
    this.setData({
      showClinicPicker: true
    })
  },

  // 关闭门诊选择器
  closeClinicPicker() {
    this.setData({
      showClinicPicker: false
    })
  },

  // 选择门诊
  selectClinicItem(e) {
    const clinic = e.currentTarget.dataset.clinic
    this.setData({
      selectedClinic: clinic
    })
  },

  // 确认门诊选择
  confirmClinic() {
    this.setData({
      clinic: this.data.selectedClinic,
      showClinicPicker: false
    })
  },

  // 选择门诊
  selectClinic() {
    wx.showActionSheet({
      itemList: ['武汉尚小镜内镜诊疗中心'],
      success: (res) => {
        if(res.tapIndex === 0) {
          this.setData({
            clinic: '武汉尚小镜内镜诊疗中心'
          })
        }
      }
    })
  },

  // 选择手机号类型
  selectPhoneType() {
    wx.showActionSheet({
      itemList: ['本人', '家属'],
      success: (res) => {
        this.setData({
          phoneType: res.tapIndex === 0 ? '本人' : '家属'
        })
      }
    })
  },

  // 选择生日
  onBirthdayChange(e) {
    this.setData({
      birthday: e.detail.value
    })
  },

  // 选择性别
  onGenderChange(e) {
    this.setData({
      genderIndex: e.detail.value
    })
  },

  // 显示性别选择器
  showGenderPicker() {
    this.setData({
      showGenderPicker: true
    })
  },

  // 关闭性别选择器
  closeGenderPicker() {
    this.setData({
      showGenderPicker: false
    })
  },

  // 选择性别
  selectGenderItem(e) {
    const gender = e.currentTarget.dataset.gender
    this.setData({
      selectedGender: gender
    })
  },

  // 确认性别选择
  confirmGender() {
    this.setData({
      gender: this.data.selectedGender,
      showGenderPicker: false
    })
  },


  // 提交表单
  submitForm() {
    const {name, phone, clinic, phoneType} = this.data
    
    if(!name.trim()) {
      return wx.showToast({
        title: '请输入姓名',
        icon: 'none'
      })
    }
    
    if(!phone || !/^1\d{10}$/.test(phone)) {
      return wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      })
    }

    // TODO: 调用提交接口
    wx.showLoading({
      title: '提交中...'
    })

    setTimeout(() => {
      wx.hideLoading()
      wx.showToast({
        title: '提交成功',
        success: () => {
          wx.navigateBack()
        }
      })
    }, 1500)
  }
});