<script setup>
import { withBase } from 'vitepress'
</script>

# プロジェクトの追加

このガイドでは、新しいプロジェクトをモノレポに追加する方法を説明します。

## 新しいプロジェクトの作成

### 自動スクリプトを使用する方法

プロジェクト作成スクリプトを使用すると、簡単に新しいプロジェクトを追加できます。

```bash
pnpm create-project <プロジェクト名>
```

このコマンドは、必要なファイルとディレクトリ構造を自動的に作成します。

### 手動で作成する方法

1. `packages/`ディレクトリに新しいプロジェクトのディレクトリを作成します。

```bash
mkdir -p packages/<プロジェクト名>
```

2. プロジェクトの`package.json`ファイルを作成します。

```json
{
  "name": "<プロジェクト名>",
  "version": "1.0.0",
  "description": "<プロジェクトの説明>",
  "private": true,
  "scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
  },
  "devDependencies": {
    "vitepress": "^1.0.0-rc.40"
  }
}
```

3. VitePressの設定ファイルを作成します。

```bash
mkdir -p packages/<プロジェクト名>/.vitepress
```

4. `.vitepress/config.js`ファイルを作成します。

```javascript
import { baseConfig } from '../../shared/vitepress-config';

export default {
  ...baseConfig,
  title: '<プロジェクト名>',
  description: '<プロジェクトの説明>',
  
  // プロジェクト固有の設定
  themeConfig: {
    ...baseConfig.themeConfig,
    
    // サイドバーの設定
    sidebar: {
      '/': [
        {
          text: 'ガイド',
          items: [
            { text: '概要', link: '/' },
            { text: '使い方', link: '/usage' }
          ]
        }
      ]
    }
  }
};
```

5. 言語とバージョンのディレクトリ構造を作成します。

```bash
mkdir -p packages/<プロジェクト名>/ja/v1
mkdir -p packages/<プロジェクト名>/en/v1
```

6. 各言語の初期ドキュメントを作成します。

```bash
echo "# <プロジェクト名>" > packages/<プロジェクト名>/ja/v1/index.md
echo "# <Project Name>" > packages/<プロジェクト名>/en/v1/index.md
```

## メインサイトへの統合

新しいプロジェクトをメインサイトのナビゲーションに追加するには、以下の手順に従います。

1. `apps/main-site/.vitepress/config.js`ファイルを編集して、サイドバーにプロジェクトを追加します。

```javascript
sidebar: {
  '/projects/': [
    {
      text: 'プロジェクト',
      items: [
        { text: '概要', link: '/projects/' },
        { text: '<プロジェクト名>', link: '/projects/<プロジェクト名>/' }
      ]
    }
  ]
}
```

2. `apps/main-site/projects/<プロジェクト名>.md`ファイルを作成して、プロジェクトの説明ページを追加します。

```markdown
# <プロジェクト名>

<プロジェクトの説明>

## ドキュメント

- [日本語ドキュメント]({{ withBase('/<プロジェクト名>/ja/v1/') }})
- [English Documentation]({{ withBase('/<プロジェクト名>/en/v1/') }})
```

## プロジェクトの開発

新しいプロジェクトの開発サーバーを起動するには、以下のコマンドを実行します。

```bash
pnpm --filter <プロジェクト名> dev
```

## プロジェクトのビルド

新しいプロジェクトをビルドするには、以下のコマンドを実行します。

```bash
pnpm --filter <プロジェクト名> build
```

## 注意事項

- プロジェクト名は、小文字とハイフンのみを使用することをお勧めします。
- 各プロジェクトは、独自の`.vitepress/config.js`ファイルを持ちますが、共通設定を継承することができます。
- 新しいプロジェクトを追加した後は、メインサイトのナビゲーションを更新することを忘れないでください。
