<script setup>
import { withBase } from 'vitepress'
</script>

# プロジェクト一覧

このページでは、このドキュメントサイトで管理されているプロジェクトの一覧を紹介します。各プロジェクトは、独自のドキュメントを持ち、多言語対応とバージョン管理が行われています。

## プロジェクトの追加方法

新しいプロジェクトを追加する方法については、[プロジェクトの追加]({{ withBase('/guide/add-project') }})ガイドを参照してください。

## プロジェクト一覧

以下は、このドキュメントサイトで管理されているプロジェクトの一覧です。

### サンプルプロジェクト1

このプロジェクトは、VitePressモノレポドキュメントサイトのサンプルプロジェクトです。複数のVitePressプロジェクトをモノレポ構造で管理する方法を示すために作成されました。

- [日本語ドキュメント]({{ withBase('/sample-project1/ja/v1/') }})
- [English Documentation]({{ withBase('/sample-project1/en/v1/') }})

### サンプルプロジェクト2

サンプルプロジェクト2の説明文をここに記載します。このプロジェクトは、多言語対応とバージョン管理のサンプルとして作成されました。

- [日本語ドキュメント]({{ withBase('/sample-project2/ja/v1/') }})
- [English Documentation]({{ withBase('/sample-project2/en/v1/') }})

## プロジェクトの管理

各プロジェクトは、`packages/`ディレクトリ内に独立したVitePressプロジェクトとして管理されています。共通の設定やコンポーネントは、`packages/shared/`ディレクトリに格納されています。

### ディレクトリ構造

```
packages/
├── shared/
│   ├── theme/
│   ├── components/
│   └── utils/
├── project1/
│   ├── package.json
│   ├── .vitepress/
│   │   ├── config.js
│   │   └── theme/
│   ├── en/
│   │   ├── v1/
│   │   └── v2/
│   └── ja/
│       ├── v1/
│       └── v2/
└── project2/
    └── ...
```

## プロジェクトの開発

特定のプロジェクトの開発サーバーを起動するには、以下のコマンドを実行します。

```bash
pnpm --filter <プロジェクト名> dev
```

## プロジェクトのビルド

特定のプロジェクトをビルドするには、以下のコマンドを実行します。

```bash
pnpm --filter <プロジェクト名> build
```

すべてのプロジェクトをビルドするには、以下のコマンドを実行します。

```bash
pnpm build
```
