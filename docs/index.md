---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SPeak | 言峰"
  text: "Sunrisepeak"
  tagline: 观察者、探索者和开发者 -> 仰望星空, 脚踏实地
  actions:
    - theme: alt
      text: Github
      link: https://github.com/Sunrisepeak
    - theme: alt
      text: Bilibili
      link: https://space.bilibili.com/65858958
    - theme: alt
      text: Youtube
      link: https://www.youtube.com/@sunrisepeak
    - theme: brand
      text: 最近动态 ->
      link: /about/recent-activity/intro.md

features:
  - title: 我是谁
    details: 软件工程师、xlings作者、开源爱好者、技术博主。时而抽象, 时而正经
  - title: 从哪来
    details: 2020年毕业, 通过校招加入小米, 参与MIUI和HyperOS操作系统开发工作; 2023年起专注于开源生态与可持续发展的探索和研究, 随后创建了d2learn社区、xlings包管理器、mcpp教程等项目...
  - title: 要到哪去
    details: 做点有意思的事情。技术、知识、想法分享交流; 探索如何可持续的开发/运营一个开源项目并产生社会价值
---

<script setup>

const pr_projects = [
  {
    name: 'xlings',
    img: 'https://xlings.d2learn.org/imgs/xlings-logo.png',
    url: 'https://xlings.d2learn.org'
  },
  {
    name: 'AOSP',
    img: 'imgs/aosp.svg',
    url: 'https://cs.android.com/android'
  },
  {
    name: 'mcpp-standard',
    url: 'https://github.com/Sunrisepeak/mcpp-standard'
  },
  {
    name: 'xmake',
    img: 'imgs/xmake.png',
    url: 'https://xmake.io'
  },
  {
    name: 'ImGUI',
    url: 'https://github.com/ocornut/imgui'
  },
  {
    name: 'tbox',
    img: 'imgs/tbox.png',
    url: 'https://github.com/tboox/tbox'
  },
  {
    name: 'vuejs-docs',
    img: 'imgs/vuejs.svg',
    url: 'https://vuejs.org'
  },
  {
    name: 'Linux',
    img: 'imgs/linux.svg',
    url: 'https://github.com/torvalds/linux'
  },
  {
    name: 'LVGL',
    img: 'imgs/lvgl.png',
    url: 'https://github.com/lvgl/lvgl'
  },
  {
    name: 'project-graph',
    img: 'imgs/project-graph.svg',
    url: 'https://github.com/ant-design/ant-design'
  },
]

const current_projects = [
  {
    name: 'xlings',
    img: 'https://xlings.d2learn.org/imgs/xlings-logo.png',
    url: 'https://xlings.d2learn.org',
    desc: '高度抽象的包管理器',
  },
  {
    name: 'd2learn论坛',
    url: 'https://forum.d2learn.org',
    img: 'imgs/d2learn.png',
    desc: '开源爱好者论坛',
  },
  {
    name: 'mcpp-standard',
    url: 'https://github.com/Sunrisepeak/mcpp-standard',
    desc: '交互式现代C++教程',
  },
  {
    name: 'dstruct',
    url: 'https://github.com/Sunrisepeak/dstruct',
    desc: '数据结构库',
  },
  {
    name: 'd2ds',
    img: 'imgs/d2ds.png',
    url: 'https://d2learn.github.io/MOGA',
    desc: '交互式数据结构教程',
  },
  {
    name: 'MOGA',
    url: 'https://d2learn.github.io/MOGA',
    desc: '让开源再次伟大',
  },
]


const activities = [
  {
    title: '🎉 搭建个人主页(初步) - 2025/10/07🎉',
    url: 'https://github.com/d2learn/xim-pkgindex',
  },
]

</script>

<RecentActivity :items="activities" />
<ProjectGallery title="当前维护的项目" :lists="current_projects" />
<ProjectGallery title="PR过的开源项目" :lists="pr_projects" />