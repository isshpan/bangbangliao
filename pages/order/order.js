Page({
  data: {
    imgUrls: [
      '/image/食堂信息1.png',
      '/image/食堂信息2.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  navigateToDelivery: function() {
    wx.navigateTo({
      url: './delivery/index'
    });
      
  }
})