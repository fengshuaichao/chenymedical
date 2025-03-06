

Page({
  data: {
    isFavorite: false,
    cartCount: 2,
    serviceInfo: {
      images: [
        'images/innermirror.jpg',
        'images/innermirror_1.jpg',
        'images/innermirror_2.jpg'
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
    }
  },

});