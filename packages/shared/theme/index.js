/**
 * VitePressプロジェクトの共通テーマ
 * 各プロジェクトはこのテーマを使用して、共通のレイアウトとコンポーネントを利用できます
 */

import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import VersionSelector from '../components/VersionSelector.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import './styles/index.css'

export default {
  // VitePressのデフォルトテーマを拡張
  extends: DefaultTheme,
  
  // カスタムレイアウトの設定
  Layout,
  
  // グローバルコンポーネントの登録
  enhanceApp({ app }) {
    app.component('VersionSelector', VersionSelector)
    app.component('LanguageSwitcher', LanguageSwitcher)
  }
}
