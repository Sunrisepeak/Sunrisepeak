import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sunrisepeak",
  description: "sunrisepeak",
  base: "/Sunrisepeak/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '开源',
        items: [
          { text: '主页', link: '/opensource/intro.md' },
          { text: 'xlings | 包管理器', link: '/opensource/xlings.md' },
          { text: 'mcpp | 交互式C++教程', link: '/opensource/mcpp-standard.md' },
          { text: 'dstruct | 数据结构库', link: '/opensource/dstruct.md' },
        ]
      },
      {
        text: '社区',
        items: [
          { text: 'd2learn 社区', link: '/community/d2learn/intro.md' },
          { text: 'd2learn 开源', link: '/community/d2learn/d2learn-opensource.md' },
          { text: 'd2learn 论坛', link: '/community/d2learn/d2learn-forum.md' },
          { text: 'MOGA 让开源再次伟大', link: '/community/moga.md' },
        ]
      },
      {
        text: '思考',
        items: [
          { text: '我是谁, 从哪里来, 要到哪里去', link: '/' },
          { text: '自由和约束', link: '/' },
          { text: '道德律己, 法律律他', link: '/' },
        ]
      },
      {
        text: '游戏',
        items: [
          { text: '艾尔登法环', link: '/games/elden-ring.md' },
        ]
      },
      {
        text: '热爱生活',
        items: [
          { text: '看看书', link: '/' },
          { text: '走走路', link: '/' },
          { text: '做做饭', link: '/' },
        ]
      },
      {
        text: '关于',
        items: [
          { text: '关于我', link: '/about/intro.md' },
          { text: '照片追忆', link: '/about/photo-memory.md' },
          { text: '最近动态', link: '/about/recent-activity/intro.md' },
        ]
      }
    ],

    sidebar: {
      '/about/' : [
        { text: '关于我', link: '/about/intro.md' },
        { text: '照片追忆', link: '/about/photo-memory.md' },
        {
          text: '最近动态',
          collapsed: true,
          items: [
            { text: '简介', link: '/about/recent-activity/intro.md' },
            {
              text: '2025',
              items: [
                { text: '2025-10', link: '/about/recent-activity/2025/2025-10.md' },
              ],
            },
          ]
        }
      ],
      '/opensource/' : [
        { text: '开源主页', link: '/opensource/intro.md' },
        { text: 'xlings | 抽象包管理器', link: '/opensource/xlings.md' },
        { text: 'hanim | 动画引擎', link: '/opensource/hanim.md' },
        { text: 'dstruct | 数据结构库', link: '/opensource/dstruct.md' },
        { text: 'khistory | 按键检测可视化工具', link: '/opensource/khistory.md' },
        { text: 'mcpp | 交互式现代C++教程', link: '/opensource/mcpp-standard.md' },
        { text: 'd2ds | 交互式数据结构教程', link: '/opensource/d2ds.md' },
      ],
      '/community/' : [
        {
          text: '[ d2learn社区 ]',
          items: [
            { text: '简介', link: '/community/d2learn/intro.md' },
            { text: 'd2learn 开源', link: '/community/d2learn/d2learn-opensource.md' },
            { text: 'd2learn 论坛', link: '/community/d2learn/d2learn-forum.md' },
          ]
        },
        { text: 'MOGA 让开源再次伟大', link: '/community/moga.md' },
      ],
      '/games/' : [
        { text: '艾尔登法环', link: '/games/elden-ring.md' },
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
