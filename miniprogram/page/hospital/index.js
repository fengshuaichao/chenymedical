import CustomPage from './base/CustomPage'

CustomPage({  
  onShareAppMessage() {
    return {
      title: '尚小镜',
      path: 'page/hospital/index'
    }
  },
  data: {
    searchKeyword: '',
    gridList: [
      { icon: 'images/icon_intro.png', name: '预约' },
      { icon: 'images/icon_intro.png', name: '挂号' },
      { icon: 'images/icon_intro.png', name: '咨询' },
      { icon: 'images/icon_intro.png', name: '回访' },
      { icon: 'images/icon_intro.png', name: '推荐' },
    ],

    banners: [
      { id: 1, imageUrl: 'images/home_common.jpg' },
      { id: 2, imageUrl: 'images/home_common.jpg' },
      { id: 3, imageUrl: 'images/home_common.jpg' }
    ],
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
        id: 'hospitaled',
        name: '医院简介',
        open: false,
        father: 'hospital', // 父文件夹
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
        id: 'hospital',
        name: '医院简介',
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
})
