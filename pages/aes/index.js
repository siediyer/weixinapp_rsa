const app = getApp()
const CryptoJS = require('../utils/aes_util.js')

Page({
  data: {

  },
  onShow(){
    //aes 加密
    console.log('123456--aes 加密',CryptoJS.AesEncrypt('123456'))
    // 5A09AE89579945B7AB80A9DC08F66FAA
    //aes 解密
    console.log('123456--aes 解密',CryptoJS.AesDecrypt('5A09AE89579945B7AB80A9DC08F66FAA'))
    // 123456
    //base64 加密
    console.log('123456--base64 加密',CryptoJS.Base64Encode('123456'))
    //MTIzNDU2
    //base64 解密
    console.log('123456--base64 解密',CryptoJS.Base64Decode('MTIzNDU2'))
    //123456
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
