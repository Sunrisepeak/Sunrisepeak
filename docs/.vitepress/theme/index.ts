// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ProjectGallery from '../components/ProjectGallery.vue'
import RecentActivity from '../components/RecentActivity.vue'
import VideoCard from '../components/VideoCard.vue'
import VideoGallery from '../components/VideoGallery.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('ProjectGallery', ProjectGallery)
    app.component('RecentActivity', RecentActivity)
    app.component('VideoCard', VideoCard)
    app.component('VideoGallery', VideoGallery)

  }
} satisfies Theme
