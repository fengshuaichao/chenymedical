import CustomPage from './base/CustomPage'

CustomPage({  

  onShareAppMessage() {
    return {
      title: '尚小镜',
      path: 'page/home/index'
    }
  },
  data: {
    searchKeyword: '',
    phone: '15801466758',
    showCallModal: false,
    phoneNumbers: [
      { label: '刀客', number: '021-12345678' },
      { label: '旭东', number: '021-87654321' },
      { label: '齐亮', number: '021-11112222' }
    ],
    latitude: 30.59941511696292,  // 替换为实际纬度
    longitude: 114.2453670501709,  // 替换为实际经度
    markers: [{
      id: 1,
      latitude: 30.59941511696292,  // 替换为实际纬度
      longitude: 114.2453670501709,  // 替换为实际经度
      name: '武汉尚小镜内镜诊疗中心',
      callout: {
        content: '武汉尚小镜内镜诊疗中心',
        padding: 10,
        borderRadius: 5,
        display: 'ALWAYS'
      }
    }],
    address: '湖北省武汉市江汉区泛海国际SOHO城8栋2楼',  // 替换为实际地址
    currentIndex: 0,
    currentTab: 'intro',
    doctors: [
      {
        id: 1,
        name: '张三',
        title: '主任医师',
        department: '口腔正畸科',
        avatar: 'images/doctor.jpg',
        tags: ['正畸专家', '微笑设计'],
        specialty: '从事口腔正畸临床工作20余年，擅长各类复杂正畸案例',
        introduction: '张三医生，主任医师，教授，博士生导师。从事口腔正畸临床工作20余年，在口腔正畸领域具有丰富的临床经验...',
        cases: [
          {
            id: 1,
            title: '成年人牙齿拥挤矫正案例',
            description: '患者25岁，主诉牙齿不齐影响美观，经过18个月的治疗，效果显著',
            image: '/assets/images/cases/case1.jpg'
          }
        ]
      },
      {
        id: 2,
        name: '张岳',
        title: '主任医师',
        department: '口腔正畸科',
        avatar: 'images/doctor_2.jpg',
        tags: ['正畸专家', '微笑设计'],
        specialty: '从事口腔正畸临床工作20余年，擅长各类复杂正畸案例',
        introduction: '张三医生，主任医师，教授，博士生导师。从事口腔正畸临床工作20余年，在口腔正畸领域具有丰富的临床经验...',
        cases: [
          {
            id: 1,
            title: '成年人牙齿拥挤矫正案例',
            description: '患者25岁，主诉牙齿不齐影响美观，经过18个月的治疗，效果显著',
            image: '/assets/images/cases/case1.jpg'
          }
        ]
      },
      {
        id: 3,
        name: '吴铭',
        title: '主任医师',
        department: '口腔正畸科',
        avatar: 'images/doctor_3.jpg',
        tags: ['正畸专家', '微笑设计'],
        specialty: '从事口腔正畸临床工作20余年，擅长各类复杂正畸案例',
        introduction: '张三医生，主任医师，教授，博士生导师。从事口腔正畸临床工作20余年，在口腔正畸领域具有丰富的临床经验...',
        cases: [
          {
            id: 1,
            title: '成年人牙齿拥挤矫正案例',
            description: '患者25岁，主诉牙齿不齐影响美观，经过18个月的治疗，效果显著',
            image: '/assets/images/cases/case1.jpg'
          }
        ]
      },
      {
        id: 4,
        name: '赵信',
        title: '主任医师',
        department: '口腔正畸科',
        avatar: 'images/doctor_4.jpg',
        tags: ['正畸专家', '微笑设计'],
        specialty: '从事口腔正畸临床工作20余年，擅长各类复杂正畸案例',
        introduction: '张三医生，主任医师，教授，博士生导师。从事口腔正畸临床工作20余年，在口腔正畸领域具有丰富的临床经验...',
        cases: [
          {
            id: 1,
            title: '成年人牙齿拥挤矫正案例',
            description: '患者25岁，主诉牙齿不齐影响美观，经过18个月的治疗，效果显著',
            image: '/assets/images/cases/case1.jpg'
          }
        ]
      },
      {
        id: 5,
        name: '李亮',
        title: '主任医师',
        department: '口腔正畸科',
        avatar: 'images/doctor_5.jpg',
        tags: ['正畸专家', '微笑设计'],
        specialty: '从事口腔正畸临床工作20余年，擅长各类复杂正畸案例',
        introduction: '张三医生，主任医师，教授，博士生导师。从事口腔正畸临床工作20余年，在口腔正畸领域具有丰富的临床经验...',
        cases: [
          {
            id: 1,
            title: '成年人牙齿拥挤矫正案例',
            description: '患者25岁，主诉牙齿不齐影响美观，经过18个月的治疗，效果显著',
            image: '/assets/images/cases/case1.jpg'
          }
        ]
      }
    ],

    gridList: [
      { icon: 'images/icon_intro.png', name: '预约' },
      { icon: 'images/icon_intro.png', name: '挂号' },
      { icon: 'images/icon_intro.png', name: '咨询' },
      { icon: 'images/icon_intro.png', name: '回访' },
      { icon: 'images/icon_intro.png', name: '推荐' },
    ],

    banners: [],
    images: [
      'path/to/image1.jpg',
      'path/to/image2.jpg',
      'path/to/image3.jpg',
      'path/to/image2.jpg',
      'path/to/image2.jpg',
      'path/to/image2.jpg',
      'path/to/image2.jpg',
      'path/to/image2.jpg',
      'path/to/image2.jpg',
      'path/to/image2.jpg',
      'path/to/image2.jpg',
      // ...  
    ],
    //默认高亮
    activeIndex: 0,
    itemLefts: [],
    itemScales: [],
    touchStartX: 0,
    list: [
      {
        id: 'form',
        name: '表单',
        open: false,
        father: 'form', // 父文件夹
        pages: ['cell', 'slideview', 'form', 'uploader']
      },
      {
        id: 'widget',
        name: '基础组件',
        open: false,
        father: 'base', // 父文件夹
        pages: [
          'article',
          'icons',
          'badge',
          'flex',
          'footer',
          'gallery',
          'grid',
          'loadmore',
          'loading',
          'panel',
          'preview'
        ]
      },
      {
        id: 'feedback',
        name: '操作反馈',
        open: false,
        father: 'operate', // 父文件夹
        pages: ['dialog', 'msg', 'half-screen-dialog', 'actionsheet', 'toptips']
      },
      {
        id: 'nav',
        name: '导航相关',
        open: false,
        father: 'navigation', // 父文件夹
        pages: ['navigation', 'tabbar']
      },
      {
        id: 'search',
        name: '搜索相关',
        open: false,
        father: 'search', // 父文件夹
        pages: ['searchbar']
      },
      {
        id: 'home',
        name: '尚小镜',
        open: false,
        father: 'home', // 父文件夹
        pages: ['emoji', 'video-swiper', 'index-list', 'recycle-view', 'sticky', 'tabs', 'vtabs', 'barrage', 'select-text', 'wxml-to-canvas']
      },
      {
        id: 'adaptive',
        name: '多端适配（需在PC端体验）',
        open: false,
        pages: [
          {zh: '左右伸缩', url: 'adapt/telescopic/telescopic'},
          {zh: '换行排列', url: 'adapt/linebreak/linebreak'},
          {zh: '侧边导航栏', url: 'adapt/sidenavigation/sidenavigation'},
          {zh: '分页展现', url: 'adapt/pagination/pagination'},
          {zh: '自由布局', url: 'adapt/freelayout/freelayout'},
          {zh: '分层展现', url: 'adapt/layeredpresentation/layeredpresentation'},
          {zh: '横向拓展', url: 'adapt/horizontalexpansion/horizontalexpansion'}
        ]
      }
    ],
    extendedList: [
      {
        id: 'home',
        name: '尚小镜',
        open: false,
        pages: ['emoji', 'video-swiper', 'index-list', 'recycle-view', 'sticky', 'tabs', 'vtabs', 'barrage', 'select-text', 'wxml-to-canvas']
      }
    ],

    // 监听
    activeClick(e) {
      let index = e.currentTarget.dataset.tag;
      this.setData({
        current: index
      })
    },

    
  },

  handleSwiperChange(e) {
    const { current } = e.detail;
    this.setData({
      currentIndex: current
    });
  },

  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab
    });
  },

  consultDoctor(e) {
    const doctorId = e.currentTarget.dataset.id;
    // 实现在线咨询逻辑
  },

  makeAppointment(e) {
    const doctorId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/appointment/index?doctorId=${doctorId}`
    });
  },

  // 拨打电话事件
  phoneOn() {
    wx.makePhoneCall({
      phoneNumber: this.data.phone,
      success: function() {
        console.log("拨打电话成功！")
      },
      fail: function() {
        console.log("拨打电话失败")
      }
    })
  },

  showCallModal() {
    this.setData({
      showCallModal: true
    });
  },

  hideCallModal() {
    this.setData({
      showCallModal: false
    });
  },

  makePhoneCall(e) {
    const phoneNumber = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber,
      success: () => {
        this.hideCallModal();
      }
    });
  },


  // 打开导航
  openLocation() {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name: '尚小镜',
      address: this.data.address,
      scale: 16
    });
  },

  // 点击地图
  handleMapTap() {
    this.openLocation();
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    // const extendedList = this.data.extendedList.map((item) => ({...item, open: false}))
    this.setData({
      list,
      // extendedList,

    })
  },
  kindExtenedListToggle(e) {
    const id = e.currentTarget.id
    const extendedList = this.data.extendedList
    for (let i = 0, len = extendedList.length; i < len; ++i) {
      if (extendedList[i].id === id) {
        extendedList[i].open = !extendedList[i].open
      } else {
        extendedList[i].open = false
      }
    }
    const list = this.data.list.map((item) => ({...item, open: false}))
    this.setData({
      extendedList,
      list,
    })
  },
  themeToggle() {
    const App = getApp()

    if (App.themeChanged) {
      if (App.globalData.theme === 'light') {
        App.themeChanged('dark')
      } else {
        App.themeChanged('light')
      }
    }
  },
  onSearchInput(e) {
    const keyword = e.detail.value;
    this.setData({
      searchKeyword: keyword
    });
    this.filterServices(keyword);
  },

  onSearch() {
    this.filterServices(this.data.searchKeyword);
  },

  clearSearch() {
    this.setData({
      searchKeyword: '',
      services: this.data.originalServices
    });
  },

  toCompanyDetail() {
    wx.navigateTo({
      url: '/page/company/index',
    })
  },

  toRecommend() {
    wx.navigateTo({
      url: '/page/recommend/index',
    })
  },

  toMembersprofile() {
    wx.navigateTo({
      url: '/page/membersprofile/index',
    })
  },

  toCredits() {
    wx.switchTab({
      url: '/page/credits/index',
    })
  },

  toLinkservice() {
    wx.navigateTo({
      url: '/page/linkservice/index',
    })
  },

  toTeam() {
    wx.navigateTo({
      url: '/page/team/index',
    })
  },

  toDoctor() {
    wx.navigateTo({
      url: '/page/doctor/index',
    })
  },

  onLoad() {
    const { init } = require('./../../wxCloudClientSDK.umd.js')
    // 指定云开发环境 ID
    wx.cloud.init({
      env: "cloud1-9gel6ndh8e555155", // 当前的云开发环境 ID
    });
    const client = init(wx.cloud);
    const data=client.models.swiper_info.get({}); //查询轮播图表
    console.log('数据:', data);
    this.setData({
      banners:data //赋值给轮播图展示
    });
   },

});



