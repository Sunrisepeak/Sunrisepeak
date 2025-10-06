<script setup>
defineProps({
  title: {
    type: String,
    default: 'Projects'
  },
  lists: {
    type: Array,
    default: () => []
  },
  placeholderColor: {
    type: String,
    default: '#f3f4f6'
  }
})
</script>

<template>
  <div class="project-gallery">
    <h1 class="title">{{ title }}</h1>
    <div class="grid">
      <a
        v-for="(item, index) in lists"
        :key="index"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        class="grid-item"
      >
        <div
          class="image-area"
          :style="{ backgroundColor: !item.img ? placeholderColor : '' }"
        >
          <template v-if="item.img">
            <img :src="item.img" alt="project image" />
          </template>
          <template v-else>
            <div class="placeholder">
              {{ item.name || 'Project' }}
            </div>
          </template>

          <!-- 悬浮显示项目描述 -->
          <div
            v-if="item.desc"
            class="overlay"
          >
            {{ item.desc }}
          </div>
        </div>

        <!-- 仅有图片时显示标题 -->
        <div
          class="caption"
          v-if="item.img"
        >
          {{ item.name || 'Unnamed Project' }}
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.project-gallery {
  margin: 2rem 0;
  text-align: center;
  padding: 0 1rem;
}

.title {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 150px));
  justify-content: center;
  gap: 1.25rem;
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s ease;
  position: relative;
}

.grid-item:hover {
  transform: scale(1.05);
}

/* 图片区域为正方形 */
.image-area {
  width: 90%;
  aspect-ratio: 1 / 1;
  border-radius: 3rem;
  overflow: hidden;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* 图片样式 */
.image-area img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
  transition: box-shadow 0.3s ease;
  padding: 1rem;
}

/* 无图片时显示项目名 */
.placeholder {
  width: 100%;
  height: 100%;
  color: #1e3a8a;
  font-weight: 700;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
}

/* 项目名称在图片下方，只有有图时显示 */
.caption {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #333;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  text-align: center;
  line-height: 1.2;
}

.grid-item:hover .caption {
  opacity: 1;
}

/* 悬浮层：显示项目描述 */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  border-radius: 1rem;
}

/* 悬浮时显示 */
.grid-item:hover .overlay {
  opacity: 1;
  pointer-events: auto;
}

/* 移除链接默认下划线 */
.grid-item {
  text-decoration: none;
}

/* 暗色模式支持 */
:deep(html.dark) .placeholder {
  background-color: #2d2d2d !important;
  color: #e0f2fe;
}

:deep(html.dark) .caption {
  color: #e5e7eb;
}
</style>