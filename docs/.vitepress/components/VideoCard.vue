<template>
  <div
    class="video-card"
    :style="aspectStyle"
    @click="handleClick"
    role="button"
    tabindex="0"
  >
    <img :src="cover" :alt="title" class="video-cover" />
    <div class="overlay">
      <svg
        class="play-icon"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 5v14l11-7L8 5z" />
      </svg>
      <div class="video-title">{{ title }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '视频标题'
  },
  cover: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    required: true
  },
  ratio: {
    type: String,
    default: '16:9' // 支持如 1:1, 4:3, 21:9
  }
})

const aspectStyle = computed(() => {
  const [w, h] = props.ratio.split(':').map(Number)
  const padding = (h / w) * 100
  return {
    position: 'relative',
    width: '100%',
    paddingTop: `${padding}%`,
    cursor: 'pointer'
  }
})

const handleClick = () => {
  window.open(props.link, '_blank', 'noopener')
}
</script>

<style scoped>
.video-card {
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.video-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  color: white;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3rem;
  height: 3rem;
  transform: translate(-50%, -50%);
  opacity: 0.8;
}

.video-title {
  font-size: 0.95rem;
  font-weight: bold;
  margin-top: auto;
}
</style>