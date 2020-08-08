const path = require('path')

module.exports = {
  title: 'Beautiful-Vue-Hooks',
  description: 'A collection of beautiful (and hopefully useful) React hooks to speed-up your components and hooks development',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '文档',
        link: '/quickStart/'
      }
    ],
    sidebar: [
      ['/quickStart/', '快速开始'],
      {
        title: '示例',
        collapsable: false,
        children: [
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
