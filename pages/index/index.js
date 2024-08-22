// index.js
var helloData = {
    name: 'Weixin'
}
Page({
    data: helloData,
    changeName: function (e) {
        // sent data change to view
        this.setData({
            name: 'MINA'
        })
    }
})
