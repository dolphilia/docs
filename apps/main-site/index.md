---
layout: home

hero:
  name: ドキュメントサイト
  text: 複数のVitePressプロジェクトを管理するモノレポ
  tagline: 技術ドキュメントの翻訳と管理のためのプラットフォーム
  image:
    src: /logo.png
    alt: ドキュメントサイトロゴ
  actions:
    - theme: brand
      text: はじめる
      link: /docs/guide/
    - theme: alt
      text: プロジェクト一覧
      link: /docs/projects/

features:
  - icon: 📚
    title: 複数プロジェクト管理
    details: 約20のプロジェクトを一つのリポジトリで効率的に管理します。
  - icon: 🔍
    title: 横断的な検索
    details: すべてのプロジェクトを対象とした強力な検索機能を提供します。
  - icon: 🌐
    title: 多言語対応
    details: 日本語と英語のドキュメントを簡単に管理できます。
  - icon: 🔄
    title: バージョン管理
    details: ドキュメントの各バージョンを簡単に切り替えられます。
---

<script setup>
import { withBase } from 'vitepress'
</script>

## モノレポドキュメントサイトへようこそ

このサイトは、複数のVitePressプロジェクトをモノレポ構造で管理するためのプラットフォームです。技術ドキュメントの翻訳と管理を効率的に行うことができます。

### 主な特徴

- **モノレポ構造**: pnpm workspacesを使用した効率的なプロジェクト管理
- **共通コンポーネント**: すべてのプロジェクトで再利用可能なコンポーネント
- **多言語対応**: 日本語と英語のドキュメントを簡単に管理
- **バージョン管理**: ドキュメントの各バージョンを簡単に切り替え
- **横断的な検索**: すべてのプロジェクトを対象とした検索機能

### 使い方

1. <a :href="withBase('/guide/')">ガイド</a>を参照して、基本的な使い方を学びます。
2. <a :href="withBase('/projects/')">プロジェクト一覧</a>から、各プロジェクトのドキュメントにアクセスできます。
