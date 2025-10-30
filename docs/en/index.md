---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SPeak | Yanfeng"
  text: "Sunrisepeak"
  tagline: Observer, Explorer and Developer -> Look up at the stars, keep feet on the ground
  image:
    src: '../imgs/sunrisepeak.png'
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
    - theme: sponsor
      text: d2learn Community
      link: https://d2learn.org
    - theme: brand
      text: About Me ->
      link: /en/about/intro.md

features:
  - title: Who Am I
    details: Software Engineer, xlings author, d2learn community developer, open source enthusiast, technical blogger. Sometimes abstract, sometimes serious, look up at the stars, keep feet on the ground
  - title: Where Do I Come From
    details: Graduated in 2020, joined Xiaomi through campus recruitment, participated in MIUI and HyperOS operating system development; Since 2023, focused on exploring and researching open source ecosystem and sustainable development, subsequently created d2learn community, xlings package manager, mcpp tutorial and other projects...
  - title: Where Am I Going
    details: Do something interesting. Technology, knowledge, idea sharing and exchange; Explore how to sustainably develop/operate an open source project and create social value
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
    img: '../imgs/aosp.svg',
    url: 'https://cs.android.com/android'
  },
  {
    name: 'mcpp-standard',
    url: 'https://github.com/Sunrisepeak/mcpp-standard'
  },
  {
    name: 'xmake',
    img: '../imgs/xmake.png',
    url: 'https://xmake.io'
  },
  {
    name: 'ImGUI',
    url: 'https://github.com/ocornut/imgui'
  },
  {
    name: 'tbox',
    img: '../imgs/tbox.png',
    url: 'https://github.com/tboox/tbox'
  },
  {
    name: 'vuejs-docs',
    img: '../imgs/vuejs.svg',
    url: 'https://vuejs.org'
  },
  {
    name: 'Linux',
    img: '../imgs/linux.svg',
    url: 'https://github.com/torvalds/linux'
  },
  {
    name: 'LVGL',
    img: '../imgs/lvgl.png',
    url: 'https://github.com/lvgl/lvgl'
  },
  {
    name: 'project-graph',
    img: '../imgs/project-graph.svg',
    url: 'https://github.com/graphif/project-graph'
  },
]

const current_projects = [
  {
    name: 'xlings',
    img: 'https://xlings.d2learn.org/imgs/xlings-logo.png',
    url: 'opensource/xlings',
    desc: 'Highly abstract package manager',
  },
  {
    name: 'd2learn Forum',
    url: 'https://forum.d2learn.org',
    img: '../imgs/d2learn.png',
    desc: 'Open source enthusiast forum',
  },
  {
    name: 'mcpp-standard',
    url: 'opensource/mcpp-standard',
    desc: 'Interactive modern C++ tutorial',
  },
  {
    name: 'MOGA',
    url: 'community/moga',
    desc: 'Make Open Source Great Again',
  },
  {
    name: '...',
    url: 'opensource/intro',
    desc: 'More',
  },
]


const activities = [
  {
    title: 'Added `DDraceNetwork`, `Black Myth: Wukong` - 2025/10/19',
    url: 'about/recent-activity/2025/2025-10',
  },
  {
    title: '📣 MSCP -> mcpp Contributor Cultivation Program <- 2025/10/23',
    url: 'https://moga.d2learn.org/activity/mscp/intro.html',
  },
]

</script>

<RecentActivity :items="activities" />
<ProjectGallery title="Currently Maintained Projects" :lists="current_projects" />
<ProjectGallery title="Open Source Projects Contributed To" :lists="pr_projects" />
