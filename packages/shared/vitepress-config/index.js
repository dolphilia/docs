/**
 * VitePressプロジェクトの共通設定
 * 各プロジェクトはこの設定を継承して、プロジェクト固有の設定を追加できます
 */

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import { resolve } from 'path'

// 共通設定
export const baseConfig = {
  // 基本設定
  lang: 'ja-JP',
  lastUpdated: true,
  cleanUrls: true,
  
  // テーマ設定
  themeConfig: {
    // ロゴ
    logo: '/logo.png',
    
    // ナビゲーション
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'メインサイト', link: 'https://docs.example.com/' }
    ],
    
    // フッター
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025'
    },
    
    // 検索設定
    search: {
      provider: 'local'
    },
    
    // 多言語設定
    locales: {
      root: {
        label: '日本語',
        lang: 'ja-JP'
      },
      en: {
        label: 'English',
        lang: 'en-US',
        link: '/en/'
      }
    },
    
    // 編集リンク
    editLink: {
      pattern: 'https://github.com/your-username/docs/edit/main/:path',
      text: 'GitHubでこのページを編集'
    },
    
    // ソーシャルリンク
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/docs' }
    ],
    
    // バージョン
    versions: [
      {
        text: 'v1',
        link: '/v1/'
      }
    ]
  },
  
  // 多言語設定
  locales: {
    root: {
      label: '日本語',
      lang: 'ja-JP'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/'
    }
  },
  
  // Markdown設定
  markdown: {
    lineNumbers: true
  },
  
  // Viteの設定
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPTheme\.vue$/,
          replacement: fileURLToPath(
            new URL('../theme/index.js', import.meta.url)
          )
        }
      ]
    }
  }
};

/**
 * バージョンセレクターの設定を生成する関数
 * @param {Array} versions バージョンの配列
 * @returns {Object} バージョンセレクターの設定
 */
export function createVersionSelector(versions) {
  return {
    versions: versions.map(version => ({
      text: version,
      link: `/${version}/`
    }))
  };
}

/**
 * 多言語設定を生成する関数
 * @param {Object} options タイトルと説明のオブジェクト
 * @returns {Object} 多言語設定
 */
export function createLocales(options) {
  return {
    root: {
      label: '日本語',
      lang: 'ja-JP',
      title: options.title.ja,
      description: options.description.ja
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: options.title.en,
      description: options.description.en
    }
  };
}
