Page({
  data: {
    activeTab: 0
  },
  switchTab(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ activeTab: index })
  }
})