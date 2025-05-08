<template>
  <div class="version-selector">
    <label for="version-select">{{ $t('version') }}:</label>
    <select id="version-select" v-model="currentVersion" @change="switchVersion">
      <option v-for="version in versions" :key="version.text" :value="version.link">
        {{ version.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'VersionSelector',
  
  data() {
    return {
      currentVersion: this.getCurrentVersionFromPath(),
      versions: this.$site?.themeConfig?.versions || [
        { text: 'v1', link: '/v1/' }
      ]
    }
  },
  
  methods: {
    getCurrentVersionFromPath() {
      const path = this.$route.path
      const match = path.match(/\/(v\d+)\//)
      if (match && match[1]) {
        return `/${match[1]}/`
      }
      return '/v1/' // デフォルトバージョン
    },
    
    switchVersion() {
      const currentPath = this.$route.path
      const currentLang = this.getCurrentLangFromPath()
      const versionRegex = /\/(v\d+)\//
      
      let newPath
      if (versionRegex.test(currentPath)) {
        newPath = currentPath.replace(versionRegex, this.currentVersion)
      } else {
        newPath = `${currentLang}${this.currentVersion}${currentPath.replace(/^\/[^/]*/, '')}`
      }
      
      window.location.href = newPath
    },
    
    getCurrentLangFromPath() {
      const path = this.$route.path
      if (path.startsWith('/en/')) {
        return '/en'
      }
      return ''
    }
  }
}
</script>

<style scoped>
.version-selector {
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
    "version": "バージョン"
  },
  "en-US": {
    "version": "Version"
  }
}
</i18n>
