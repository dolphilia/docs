import { defineConfig } from 'vitepress'
import { baseConfig } from '../../../packages/shared/vitepress-config'
import { resolve } from 'path'

// メインサイト固有の設定
export default defineConfig({
  ...baseConfig,
  
  title: 'ドキュメントサイト',
  description: '複数のVitePressプロジェクトを管理するモノレポドキュメントサイト',
  
  themeConfig: {
    ...baseConfig.themeConfig,
    
    logo: '/logo.png',
    
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'プロジェクト', link: '/projects/' },
      { text: 'ガイド', link: '/guide/' }
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: 'ガイド',
          items: [
            { text: '概要', link: '/guide/' },
            { text: '使い方', link: '/guide/usage' },
            { text: 'プロジェクトの追加', link: '/guide/add-project' }
          ]
        }
      ],
      '/projects/': [
        {
          text: 'プロジェクト',
          items: [
            { text: '概要', link: '/projects/' }
            // プロジェクトが追加されたら、ここに追加されます
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/docs' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025'
    },
    
    search: {
      provider: 'local'
      // Algoliaを使用する場合は以下のように設定します
      /*
      provider: 'algolia',
      options: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_API_KEY',
        indexName: 'YOUR_INDEX_NAME'
      }
      */
    }
  },
  
  // 多言語設定
  locales: {
    root: {
      label: '日本語',
      lang: 'ja-JP',
      title: 'ドキュメントサイト',
      description: '複数のVitePressプロジェクトを管理するモノレポドキュメントサイト'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Documentation Site',
      description: 'Monorepo documentation site managing multiple VitePress projects'
    }
  },
  
  // テーマのパスを設定
  vite: {
    ...baseConfig.vite,
    resolve: {
      alias: [
        {
          find: /^.*\/VPTheme\.vue$/,
          replacement: resolve(__dirname, '../../../packages/shared/theme/index.js')
        }
      ]
    }
  }
})
