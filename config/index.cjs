/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  USE_PASSAGE: 'wechat-test',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb0029575f4615aa2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c22bc0d40bbbe952471ea1c8efa08ec3',

  PROVINCE: '浙江',
  CITY: '台州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '睡不饱宝公主',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oG0pV6DGdFFc0SzM4CJSgYEkBHE4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '1DClwNzbPxooMqPwdwbHKPL6WfeS0aflFBVq9U-hlqs',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-14',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1997', date: '05-14',
        },
        //纪念日
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '12-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      //customizedDateList: [
        // 在一起的日子
        //{ keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      //],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '79nE6C33C8WUiUBHeTyxyu6q4EugQcpLLA179F77B9M',

  CALLBACK_USERS: [
    {
      name: '主人',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oG0pV6DGdFFc0SzM4CJSgYEkBHE4',
    }
  ],

}

module.exports = USER_CONFIG

