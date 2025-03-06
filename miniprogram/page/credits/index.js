Page({
  data: {
    userPoints: 1280,
    showRulesPopup: false,
    pointsRules: [
      {
        id: 1,
        title: '签到规则',
        description: '每日签到可获得10积分，连续签到7天额外奖励30积分'
      },
      {
        id: 2,
        title: '消费规则',
        description: '每消费1元可获得1积分'
      },
      {
        id: 3,
        title: '积分有效期',
        description: '积分有效期为一年，请及时使用'
      }
    ],
    currentTab: 0, // 当前选中标签
    featuredGoods: [
      {
        hospital: "上海康沈医院·口腔",
        name: "钥匙扣",
        desc: "卡通钥匙扣1个",
        points: 288,
        url:"cloud://cloud1-5g69zddl94c4f680.636c-cloud1-5g69zddl94c4f680-1345686157/swiper2.png"
      },
      {
        hospital: "上海康沈医院·口腔",
        name: "钥匙扣",
        desc: "卡通钥匙扣1个",
        points: 288,
        url:"cloud://cloud1-5g69zddl94c4f680.636c-cloud1-5g69zddl94c4f680-1345686157/swiper2.png"
      },
      {
        hospital: "上海康沈医院·口腔",
        name: "钥匙扣",
        desc: "卡通钥匙扣1个",
        points: 288,
        url:"cloud://cloud1-5g69zddl94c4f680.636c-cloud1-5g69zddl94c4f680-1345686157/swiper2.png"
      },
      // 其他精选商品数据...
    ],
    exchangeableGoods: [
      {
        hospital: "上海康沈医院·口腔",
        name: "护理牙线",
        desc: "护理牙线1盒",
        points: 388
      },
      // 其他可兑换商品数据...
    ]
  },

  // 切换商品分类
  switchTab(e) {
    const tabIndex = parseInt(e.currentTarget.dataset.tab)
    this.setData({
      currentTab: tabIndex
    })
  },

  showRules() {
    this.setData({
      showRulesPopup: true
    });
  },

  hideRules() {
    this.setData({
      showRulesPopup: false
    });
  },

  completeTask(e) {
    const taskId = e.currentTarget.dataset.id;
    const tasks = this.data.dailyTasks.map(task => {
      if (task.id === taskId && !task.completed) {
        // 完成任务逻辑
        wx.showToast({
          title: '获得' + task.points + '积分',
          icon: 'success'
        });
        return { ...task, completed: true };
      }
      return task;
    });
    this.setData({
      dailyTasks: tasks
    });
  },

  navigateToRecommend() {
    wx.navigateTo({
      url: '/pages/recommend/index'
    });
  },

  navigateToExchange() {//点击积分页面明细
    wx.navigateTo({
      url: '/page/mypoints/index'
    });
  }
});