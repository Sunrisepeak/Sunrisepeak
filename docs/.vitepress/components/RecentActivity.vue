<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  interval: {
    type: Number,
    default: 3000
  }
})

const index = ref(0)
let timer = null

// 一组内置浅色背景
const backgrounds = [
  'rgba(232, 245, 233, 0.6)', // light green
  'rgba(227, 242, 253, 0.6)', // light blue
  'rgba(255, 249, 196, 0.6)', // light yellow
  'rgba(241, 248, 233, 0.6)', // mint
  'rgba(248, 237, 255, 0.6)'  // light purple
]

const currentItem = computed(() => props.items[index.value])
const currentBg = computed(() => backgrounds[index.value % backgrounds.length])

onMounted(() => {
  if (props.items.length > 1) {
    timer = setInterval(() => {
      index.value = (index.value + 1) % props.items.length
    }, props.interval)
  }
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="recent-activity">
    <transition name="fade" mode="out-in">
      <a
        class="activity-item"
        :key="index"
        :href="currentItem.url"
        target="_blank"
        rel="noopener noreferrer"
        :style="{ background: currentBg }"
      >
        <span class="activity-text">{{ currentItem.title }}</span>
      </a>
    </transition>
  </div>
</template>

<style scoped>
.recent-activity {
  position: relative;
  overflow: hidden;
  height: 60px;
  margin: 1rem 0;
  border-radius: 8px;
}

.activity-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: background 0.5s ease;
}

.activity-text {
  padding: 0 1rem;
}

/* 动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>