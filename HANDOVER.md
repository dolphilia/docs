# VitePressモノレポドキュメントサイト - 引き継ぎ資料

## プロジェクト概要

このプロジェクトは、複数のVitePressプロジェクトをモノレポ構造で管理するドキュメントサイトです。技術ドキュメントの翻訳と管理を効率的に行うことを目的としています。

### 主な特徴

- **モノレポ構造**: pnpm workspacesを使用した効率的なプロジェクト管理
- **複数プロジェクト**: 約20のプロジェクトを一つのリポジトリで管理
- **多言語対応**: 日本語と英語のドキュメントを簡単に管理
- **バージョン管理**: ドキュメントの各バージョンを簡単に切り替え
- **横断的な検索**: すべてのプロジェクトを対象とした検索機能

## 現在の実装状況

### 完了した作業

1. **基本設計**
   - モノレポ構造の設計
   - ディレクトリ構造の設計
   - 技術スタックの選定（pnpm, VitePress）

2. **基本ファイルの作成**
   - ルートの設定ファイル（package.json, pnpm-workspace.yaml）
   - メインサイトの基本構造（apps/main-site/）
   - 共有パッケージの基本構造（packages/shared/）

3. **ドキュメントの作成**
   - 実装計画書（docs-plan.md）
   - メインサイトのコンテンツ（ホーム、ガイド、プロジェクト一覧）

4. **共通コンポーネントの作成**
   - バージョンセレクター（VersionSelector.vue）
   - 言語切り替え（LanguageSwitcher.vue）

5. **共通設定の作成**
   - VitePressの共通設定（vitepress-config/index.js）

6. **共通テーマの実装**
   - 共通テーマの作成（packages/shared/theme/index.js）
   - 共通スタイルの作成（packages/shared/theme/styles/index.css）
   - カスタムレイアウトの実装（packages/shared/theme/Layout.vue）
   - 共通コンポーネントの統合
   - 設定ファイルの更新

7. **サンプルプロジェクトの作成**
   - サンプルプロジェクト1の作成（packages/sample-project1/）
   - 基本設定ファイルの作成
   - サンプルドキュメントの作成（日本語・英語）
   - バージョン管理の実装
   - APIドキュメントの作成

### ディレクトリ構造

```
docs/
├── package.json
├── pnpm-workspace.yaml
├── docs-plan.md
├── HANDOVER.md
├── TODO.md
├── .github/
│   └── workflows/
├── apps/
│   └── main-site/
│       ├── package.json
│       ├── .vitepress/
│       │   └── config.js
│       ├── index.md
│       ├── guide/
│       │   ├── index.md
│       │   ├── usage.md
│       │   └── add-project.md
│       └── projects/
│           └── index.md
└── packages/
    └── shared/
        ├── package.json
        ├── components/
        │   ├── VersionSelector.vue
        │   └── LanguageSwitcher.vue
        └── vitepress-config/
            └── index.js
```

## 技術スタック

- **パッケージマネージャー**: pnpm
- **モノレポ管理**: pnpm workspaces
- **ドキュメントフレームワーク**: VitePress
- **検索機能**: VitePressのローカル検索（将来的にAlgolia DocSearchに移行予定）
- **デプロイ**: GitHub Pages（予定）

## 開発環境のセットアップ

1. 依存関係のインストール
   ```bash
   pnpm install
   ```

2. 開発サーバーの起動
   ```bash
   # メインサイトの開発
   pnpm dev
   
   # 特定のプロジェクトの開発
   pnpm --filter <プロジェクト名> dev
   ```

3. ビルド
   ```bash
   pnpm build
   ```

## 注意点

1. 共通コンポーネントは`packages/shared/components/`に配置されています。
2. 共通設定は`packages/shared/vitepress-config/`に配置されています。
3. 各プロジェクトは`packages/<プロジェクト名>/`に配置する予定です。
4. メインサイトは`apps/main-site/`に配置されています。
