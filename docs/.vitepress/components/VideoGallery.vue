<template>
  <div class="video-gallery">
    <h2 class="gallery-title">{{ title }}</h2>
    <div
      class="video-grid"
      :style="gridStyle"
    >
      <VideoCard
        v-for="(video, index) in videos"
        :key="index"
        :title="video.title"
        :cover="cleanCover(video.cover)"
        :link="video.link"
        :ratio="video.ratio || defaultRatio"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import VideoCard from './VideoCard.vue'

const props = defineProps({
  title: {
    type: String,
    default: '视频合集'
  },
  videos: {
    type: Array,
    default: () => []
  },
  defaultRatio: {
    type: String,
    default: '16:9'
  },
  perRow: {
    type: Number,
    default: 3 // 默认每行显示 3 个
  }
})

// 清理 cover 尾部 @avif
const cleanCover = (url = '') => {
  return url.split('@')[0]
}

// 动态生成 grid 样式
const gridStyle = computed(() => {
  const count = Math.max(1, props.perRow)
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))`,
    gap: '1.5rem'
  }
})
</script>

<style scoped>
.video-gallery {
  padding: 2rem 1rem;
}

.gallery-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
}
</style>