Page({
    data: {
        requestInput: '',
        aliasInput: ''
    },
    clearRequestInput: function (options) {
        this.setData({
            'requestInput': ''
          })
    },
    clearAliasInput: function (params) {
        this.setData({
            'aliasInput': ''
          })
    }
})