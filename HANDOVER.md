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

8. **プロジェクト作成スクリプトの実装**
   - プロジェクト作成スクリプト（scripts/create-project.js）の作成
   - テンプレートファイルの作成（scripts/templates/）
   - コマンドラインインターフェースの実装
   - 対話型入力機能の実装

9. **GitHub Actionsの設定**
   - デプロイワークフローの作成（.github/workflows/deploy.yml）
   - ビルドとデプロイの自動化
   - プルリクエスト時の自動ビルド確認

### ディレクトリ構造

```
docs/
├── package.json
├── pnpm-workspace.yaml
├── docs-plan.md
├── HANDOVER.md
├── TODO.md
├── scripts/
│   ├── create-project.js
│   └── templates/
│       ├── package.json.template
│       ├── config.js.template
│       ├── index.ja.md.template
│       ├── index.en.md.template
│       ├── usage.ja.md.template
│       ├── usage.en.md.template
│       ├── advanced.ja.md.template
│       ├── advanced.en.md.template
│       ├── api-index.ja.md.template
│       ├── api-index.en.md.template
│       ├── api-functions.ja.md.template
│       └── api-functions.en.md.template
├── .github/
│   └── workflows/
│       └── deploy.yml
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
    ├── shared/
    │   ├── package.json
    │   ├── components/
    │   │   ├── VersionSelector.vue
    │   │   └── LanguageSwitcher.vue
    │   ├── theme/
    │   │   ├── index.js
    │   │   ├── Layout.vue
    │   │   └── styles/
    │   │       └── index.css
    │   └── vitepress-config/
    │       └── index.js
    └── sample-project1/
        ├── package.json
        ├── .vitepress/
        │   └── config.js
        ├── ja/
        │   └── v1/
        │       ├── index.md
        │       ├── usage.md
        │       ├── advanced.md
        │       └── api/
        │           ├── index.md
        │           └── functions.md
        └── en/
            └── v1/
                ├── index.md
                ├── usage.md
                ├── advanced.md
                └── api/
                    ├── index.md
                    └── functions.md
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

4. 新しいプロジェクトの作成
   ```bash
   # 対話型インターフェースでプロジェクトを作成
   pnpm create-project
   
   # コマンドライン引数でプロジェクトを作成
   pnpm create-project <プロジェクト名> --title "プロジェクトタイトル" --title-en "Project Title" --desc "プロジェクトの説明" --desc-en "Project Description"
   ```

## デプロイ

1. **GitHub Pagesへのデプロイ**
   - mainブランチへのプッシュ時に自動的にGitHub Actionsが実行され、GitHub Pagesにデプロイされます
   - GitHub Actionsのワークフローは`.github/workflows/deploy.yml`に定義されています
   - デプロイの進行状況はGitHubリポジトリの「Actions」タブで確認できます

2. **手動デプロイ**
   - GitHub Actionsのワークフローを手動で実行することもできます
   - GitHubリポジトリの「Actions」タブから「Deploy VitePress Site」ワークフローを選択し、「Run workflow」ボタンをクリックします

3. **プルリクエスト時のビルド確認**
   - プルリクエスト時にはビルドのみが実行され、デプロイは行われません
   - これにより、プルリクエストがマージされる前にビルドが正常に完了することを確認できます

## 注意点

1. 共通コンポーネントは`packages/shared/components/`に配置されています。
2. 共通設定は`packages/shared/vitepress-config/`に配置されています。
3. 各プロジェクトは`packages/<プロジェクト名>/`に配置する予定です。
4. メインサイトは`apps/main-site/`に配置されています。
5. プロジェクト作成スクリプトは`scripts/create-project.js`に実装されています。
6. テンプレートファイルは`scripts/templates/`に配置されています。
7. GitHub Actionsの設定は`.github/workflows/deploy.yml`に定義されています。
8. GitHub Pagesへのデプロイ時にはベースパス（`/docs/`）が設定されています。

## 最近の更新

### 2025/5/9
- GitHub Pagesデプロイ用のベースパス設定を追加
- VersionSelectorとLanguageSwitcherコンポーネントをベースパスに対応するよう修正
