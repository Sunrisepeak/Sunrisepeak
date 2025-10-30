<template>
  <div v-if="showRedirectMessage" class="language-redirect">
    <div class="redirect-container">
      <div class="spinner"></div>
      <h3>{{ redirectMessage }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useData } from 'vitepress'

const router = useRouter()
const { lang } = useData()

const showRedirectMessage = ref(false)
const redirectMessage = ref('Detecting language preference...')

// Define supported languages
const chineseLanguages = ['zh', 'zh-CN', 'zh-TW', 'zh-HK', 'zh-SG', 'zh-MO']

// Check if language is Chinese
const isChineseLanguage = (language: string) => {
  return chineseLanguages.includes(language) || language.startsWith('zh-')
}

// Get browser language
const getBrowserLanguage = () => {
  return navigator.language || navigator.userLanguage || 'en'
}

// Check if we've redirected within the last 7 days
const hasRedirectedRecently = () => {
  const lastRedirect = localStorage.getItem('language-redirect-timestamp')
  if (!lastRedirect) return false

  const lastRedirectTime = parseInt(lastRedirect, 10)
  const currentTime = Date.now()
  const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds

  return (currentTime - lastRedirectTime) < sevenDaysInMs
}

// Check if we need to redirect
const shouldRedirect = (currentLang: string, targetLang: string) => {
  // Don't redirect if already on the correct language
  if (currentLang === targetLang) return false

  // Don't redirect if user explicitly visited a specific language page
  const urlParams = new URLSearchParams(window.location.search)
  const langParam = urlParams.get('lang')
  if (langParam) return false

  // Don't redirect if this is not the root page
  const currentPath = window.location.pathname
  const basePath = '/Sunrisepeak/'
  const enBasePath = '/Sunrisepeak/en/'

  // Only redirect from root paths
  if (currentPath !== basePath && currentPath !== enBasePath && currentPath !== '/') {
    return false
  }

  // Don't redirect if we've already redirected in this session
  const hasRedirected = sessionStorage.getItem('language-redirected')
  if (hasRedirected) return false

  // Don't redirect if we've redirected within the last 7 days
  if (hasRedirectedRecently()) return false

  return true
}

// Perform redirect
const performRedirect = (targetLang: string) => {
  const targetPath = targetLang === 'zh-CN' ? '/Sunrisepeak/' : '/Sunrisepeak/en/'

  // Set session flag to prevent duplicate redirects in current session
  sessionStorage.setItem('language-redirected', 'true')

  // Set timestamp in localStorage to track 7-day limit
  localStorage.setItem('language-redirect-timestamp', Date.now().toString())

  // Show redirect message
  showRedirectMessage.value = true
  redirectMessage.value = `Redirecting to ${targetLang === 'zh-CN' ? 'Chinese' : 'English'} version...`

  // Small delay to show the message
  setTimeout(() => {
    window.location.replace(targetPath)
  }, 500)
}

onMounted(() => {
  // Only run on client side
  if (typeof window === 'undefined') return

  // Clear session redirect flag on page load (in case user manually navigates)
  // This allows redirects when user explicitly visits root pages
  const currentPath = window.location.pathname
  const basePath = '/Sunrisepeak/'
  const enBasePath = '/Sunrisepeak/en/'

  // Only clear session flag if we're on a root page
  if (currentPath === basePath || currentPath === enBasePath || currentPath === '/') {
    sessionStorage.removeItem('language-redirected')
  }

  const browserLang = getBrowserLanguage()
  const currentLang = lang.value

  // Check for URL parameter override first
  const urlParams = new URLSearchParams(window.location.search)
  const langParam = urlParams.get('lang')

  if (langParam === 'zh' || langParam === 'cn') {
    if (shouldRedirect(currentLang, 'zh-CN')) {
      performRedirect('zh-CN')
    }
    return
  } else if (langParam === 'en') {
    if (shouldRedirect(currentLang, 'en-US')) {
      performRedirect('en-US')
    }
    return
  }

  // Check for stored language preference
  const storedLang = localStorage.getItem('preferred-language')
  if (storedLang) {
    if (storedLang === 'zh-CN' && shouldRedirect(currentLang, 'zh-CN')) {
      performRedirect('zh-CN')
      return
    } else if (storedLang === 'en-US' && shouldRedirect(currentLang, 'en-US')) {
      performRedirect('en-US')
      return
    }
  }

  // Automatic redirect based on browser language
  const targetLang = isChineseLanguage(browserLang) ? 'zh-CN' : 'en-US'

  if (shouldRedirect(currentLang, targetLang)) {
    performRedirect(targetLang)
  }
})
</script>

<style scoped>
.language-redirect {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.redirect-container {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.spinner {
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #667eea;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

h3 {
  margin: 0;
  color: #333;
  font-size: 1.2rem;
}
</style>
