const path = require('path')

module.exports = {
  title: 'Beautiful-Vue-Hooks',
  description: '为Vue3开发的一个优美的Hooks集合',
  base: '/beautiful-vue-hooks/',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '文档',
        link: '/quickStart/'
      },
      {
        text: '博客',
        link: 'https://johnsonlee.site'
      },
      {
        text: 'Github',
        link: 'https://github.com/YES-Lee/beautiful-vue-hooks'
      }
    ],
    sidebar: [
      ['/quickStart/', '快速开始'],
      {
        title: '示例',
        collapsable: false,
        children: [
          '/useStorage/',
          '/useLocalStorage/',
          '/useSessionStorage/',
          '/useMouse/',
          '/useMouseState/',
          '/useMouseEvents/',
        ]
      }
    ]
  },
  plugins: [
  ]
}
