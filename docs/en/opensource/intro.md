# Open Source Home



<ProjectGallery title="Currently Maintained Open Source Projects" :lists="current_projects" />

[![Star History Chart](https://api.star-history.com/svg?repos=d2learn/xlings,Sunrisepeak/dstruct,Sunrisepeak/Hanim,Sunrisepeak/mcpp-standard,Sunrisepeak/KHistory,d2learn/MOGA,d2learn/d2ds&type=Date)](https://www.star-history.com/#d2learn/xlings&Sunrisepeak/dstruct&Sunrisepeak/Hanim&Sunrisepeak/mcpp-standard&Sunrisepeak/KHistory&d2learn/MOGA&d2learn/d2ds&Date)

<ProjectGallery title="Open Source Projects Contributed To" :lists="pr_projects" />

[![Star History Chart](https://api.star-history.com/svg?repos=d2learn/xlings,Sunrisepeak/mcpp-standard,torvalds/linux,xmake-io/xmake,ocornut/imgui,tboox/tbox,lvgl/lvgl,graphif/project-graph,vuejs/docs&type=Date)](https://www.star-history.com/#d2learn/xlings&Sunrisepeak/mcpp-standard&torvalds/linux&xmake-io/xmake&ocornut/imgui&tboox/tbox&lvgl/lvgl&graphif/project-graph&vuejs/docs&Date)


<script setup>

const pr_projects = [
  {
    name: 'xlings',
    img: 'https://xlings.d2learn.org/imgs/xlings-logo.png',
    url: 'https://xlings.d2learn.org'
  },
  {
    name: 'AOSP',
    img: '../../imgs/aosp.svg',
    url: 'https://cs.android.com/android'
  },
  {
    name: 'mcpp-standard',
    url: 'https://github.com/Sunrisepeak/mcpp-standard'
  },
  {
    name: 'xmake',
    img: '../../imgs/xmake.png',
    url: 'https://xmake.io'
  },
  {
    name: 'ImGUI',
    url: 'https://github.com/ocornut/imgui'
  },
  {
    name: 'tbox',
    img: '../../imgs/tbox.png',
    url: 'https://github.com/tboox/tbox'
  },
  {
    name: 'vuejs-docs',
    img: '../../imgs/vuejs.svg',
    url: 'https://vuejs.org'
  },
  {
    name: 'Linux',
    img: '../../imgs/linux.svg',
    url: 'https://github.com/torvalds/linux'
  },
  {
    name: 'LVGL',
    img: '../../imgs/lvgl.png',
    url: 'https://github.com/lvgl/lvgl'
  },
  {
    name: 'project-graph',
    img: '../../imgs/project-graph.svg',
    url: 'https://github.com/graphif/project-graph'
  },
]

const current_projects = [
    {
    name: 'xlings',
    img: 'https://xlings.d2learn.org/imgs/xlings-logo.png',
    url: 'xlings',
    desc: 'Highly abstract package manager',
  },
  {
    name: 'mcpp-standard',
    url: 'mcpp-standard',
    desc: 'Interactive modern C++ tutorial',
  },
  {
    name: 'MOGA',
    url: '../community/moga',
    desc: 'Make Open Source Great Again',
  },
  {
    name: 'khistory',
    url: 'khistory',
    desc: 'Key detection and visualization tool',
  },
  {
    name: 'dstruct',
    url: 'dstruct',
    desc: 'Data structure library',
  },
  {
    name: 'd2ds',
    img: '../../imgs/d2ds.png',
    url: 'd2ds',
    desc: 'Interactive data structure tutorial',
  },
  {
    name: 'Hanim',
    url: 'hanim',
    desc: 'Animation engine',
  },
]

</script>
