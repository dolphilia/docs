<template>
  <Layout>
    <template #doc-before>
      <div class="vp-doc-header-container">
        <VersionSelector v-if="showVersionSelector" />
        <LanguageSwitcher />
      </div>
    </template>
  </Layout>
</template>

<script>
import DefaultTheme from 'vitepress/theme'
import { useData, computed } from 'vitepress'

const { Layout } = DefaultTheme

export default {
  components: {
    Layout
  },
  
  setup() {
    const { frontmatter, page } = useData()
    
    // バージョンセレクターを表示するかどうかを判断
    const showVersionSelector = computed(() => {
      // フロントマターでの明示的な指定があればそれに従う
      if (frontmatter.value.showVersionSelector !== undefined) {
        return frontmatter.value.showVersionSelector
      }
      
      // プロジェクトページの場合は表示する
      if (page.value.relativePath.startsWith('projects/')) {
        return true
      }
      
      // デフォルトでは表示しない
      return false
    })
    
    return {
      showVersionSelector
    }
  }
}
</script>

<style scoped>
/* スタイルは共通CSSファイルに定義済み */
</style>
