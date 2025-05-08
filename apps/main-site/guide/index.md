# ガイド

## 概要

このドキュメントサイトは、複数のVitePressプロジェクトをモノレポ構造で管理するためのプラットフォームです。pnpm workspacesを使用して、効率的にプロジェクトを管理しています。

## 特徴

- **モノレポ構造**: 一つのリポジトリで複数のプロジェクトを管理
- **共通コンポーネント**: すべてのプロジェクトで再利用可能なコンポーネント
- **多言語対応**: 日本語と英語のドキュメントを簡単に管理
- **バージョン管理**: ドキュメントの各バージョンを簡単に切り替え
- **横断的な検索**: すべてのプロジェクトを対象とした検索機能

## ディレクトリ構造

```
docs/
├── package.json
├── pnpm-workspace.yaml
├── .github/
│   └── workflows/
│       └── deploy.yml
├── packages/
│   ├── shared/
│   │   ├── theme/
│   │   ├── components/
│   │   └── utils/
│   ├── project1/
│   │   ├── package.json
│   │   ├── .vitepress/
│   │   │   ├── config.js
│   │   │   └── theme/
│   │   ├── en/
│   │   │   ├── v1/
│   │   │   └── v2/
│   │   └── ja/
│   │       ├── v1/
│   │       └── v2/
│   ├── project2/
│   │   └── ...
│   └── ...
└── apps/
    └── main-site/
        ├── package.json
        ├── .vitepress/
        │   └── config.js
        └── index.md
```

## 次のステップ

- [使い方](./usage.md)を確認して、基本的な操作方法を学びましょう。
- [プロジェクトの追加](./add-project.md)方法を確認して、新しいプロジェクトを追加してみましょう。
