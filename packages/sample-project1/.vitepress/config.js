import { defineConfig } from 'vitepress'
import { baseConfig, createVersionSelector, createLocales } from '../../shared/vitepress-config'
import { resolve } from 'path'

// サンプルプロジェクト1の設定
export default defineConfig({
  ...baseConfig,
  
  title: 'サンプルプロジェクト1',
  description: 'VitePressモノレポドキュメントサイトのサンプルプロジェクト',
  
  themeConfig: {
    ...baseConfig.themeConfig,
    
    // ナビゲーション
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'ガイド', link: '/guide/' },
      { text: 'メインサイト', link: '/' }
    ],
    
    // サイドバー
    sidebar: {
      '/': [
        {
          text: 'ガイド',
          items: [
            { text: '概要', link: '/' },
            { text: '使い方', link: '/usage' },
            { text: '高度な使い方', link: '/advanced' }
          ]
        },
        {
          text: 'API',
          items: [
            { text: 'API概要', link: '/api/' },
            { text: '関数リファレンス', link: '/api/functions' }
          ]
        }
      ]
    },
    
    // バージョン
    versions: [
      {
        text: 'v1',
        link: '/v1/'
      }
    ],
    
    // フッター
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025'
    }
  },
  
  // 多言語設定
  locales: createLocales({
    title: {
      ja: 'サンプルプロジェクト1',
      en: 'Sample Project 1'
    },
    description: {
      ja: 'VitePressモノレポドキュメントサイトのサンプルプロジェクト',
      en: 'Sample project for VitePress monorepo documentation site'
    }
  }),
  
  // テーマのパスを設定
  vite: {
    ...baseConfig.vite,
    resolve: {
      alias: [
        {
          find: /^.*\/VPTheme\.vue$/,
          replacement: resolve(__dirname, '../../shared/theme/index.js')
        }
      ]
    }
  }
})
