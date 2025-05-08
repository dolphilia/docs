<template>
  <div class="language-switcher">
    <label for="language-select">{{ $t('language') }}:</label>
    <select id="language-select" v-model="currentLanguage" @change="switchLanguage">
      <option v-for="locale in locales" :key="locale.lang" :value="locale.link || ''">
        {{ locale.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  
  data() {
    return {
      currentLanguage: this.getCurrentLanguage(),
      locales: this.getLocales()
    }
  },
  
  methods: {
    getLocales() {
      const themeLocales = this.$site?.themeConfig?.locales || {}
      return Object.entries(themeLocales).map(([key, locale]) => ({
        lang: locale.lang,
        label: locale.label,
        link: key === 'root' ? '' : key
      }))
    },
    
    getCurrentLanguage() {
      const path = this.$route.path
      if (path.startsWith('/en/')) {
        return '/en'
      }
      return ''
    },
    
    getBasePath() {
      return this.$site?.base || '/'
    },
    
    switchLanguage() {
      const currentPath = this.$route.path
      const currentVersion = this.getCurrentVersionFromPath()
      const basePath = this.getBasePath()
      
      // 現在の言語パスを削除
      let pathWithoutLang = currentPath
      if (currentPath.startsWith('/en/')) {
        pathWithoutLang = currentPath.substring(3)
      }
      
      // 新しい言語パスを追加
      const newPath = `${this.currentLanguage}${pathWithoutLang}`
      
      window.location.href = basePath + newPath.replace(/^\//, '')
    },
    
    getCurrentVersionFromPath() {
      const path = this.$route.path
      const match = path.match(/\/(v\d+)\//)
      if (match && match[1]) {
        return match[1]
      }
      return 'v1' // デフォルトバージョン
    }
  }
}
</script>

<style scoped>
.language-switcher {
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
  font-size: 0.9rem;
}

label {
  margin-right: 0.5rem;
}

select {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  cursor: pointer;
}

select:focus {
  outline: none;
  border-color: var(--vp-c-brand);
}
</style>

<i18n>
{
  "ja-JP": {
    "language": "言語"
  },
  "en-US": {
    "language": "Language"
  }
}
</i18n>
