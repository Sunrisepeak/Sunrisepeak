import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sunrisepeak",
  description: "sunrisepeak",
  base: "/sunrisepeak",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '开源', link: '/' },
      {
        text: '思考',
        items: [
          { text: '我是谁, 从哪里来, 要到哪里去', link: '/' },
          { text: '自由和约束', link: '/' },
          { text: '道德律己, 法律律他', link: '/' },
        ]
      },
      { text: '书籍', link: '/' },
      {
        text: '热爱生活',
        items: [
          { text: '游戏', link: '/' },
          { text: '看看世界', link: '/' },
        ]
      },
      {
        text: '关于',
        items: [
          { text: '最近动态', link: '/about/recent-activity/intro.md' },
        ]
      }
    ],

    sidebar: {
      '/about/recent-activity' : [
        { text: '最近动态', link: '/about/recent-activity/intro.md' },
        {
          text: '2025',
          items: [
            { text: '2025-10', link: '/about/recent-activity/2025/2025-10.md' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sunrisepeak' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/65858958' },
      { icon: 'youtube', link: 'https://www.youtube.com/@sunrisepeak' },
      { icon: 'x', link: 'https://x.com/sunrisepeak_x' },
      { icon: 'zhihu', link: 'https://www.zhihu.com/people/SPeakShen' },
    ]
  }
})
