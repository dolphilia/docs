---
title: API概要
description: サンプルプロジェクト1のAPI概要
---

# API概要

<VersionSelector />
<LanguageSwitcher />

このページでは、サンプルプロジェクト1のAPIの概要を説明します。

## コアAPI

サンプルプロジェクト1のコアAPIは、以下のモジュールで構成されています。

### コアモジュール

```javascript
import { core } from 'sample-project1';
```

コアモジュールは、基本的な機能を提供します。

| 関数 | 説明 |
| ---- | ---- |
| `core.init(options)` | ライブラリを初期化します |
| `core.process(data)` | データを処理します |
| `core.terminate()` | ライブラリを終了します |

### ユーティリティモジュール

```javascript
import { utils } from 'sample-project1';
```

ユーティリティモジュールは、便利なヘルパー関数を提供します。

| 関数 | 説明 |
| ---- | ---- |
| `utils.format(data, type)` | データを指定された形式にフォーマットします |
| `utils.validate(data, schema)` | データをスキーマに対して検証します |
| `utils.merge(obj1, obj2)` | 2つのオブジェクトをマージします |

## コンポーネントAPI

サンプルプロジェクト1は、様々なUIフレームワーク用のコンポーネントを提供しています。

### Reactコンポーネント

```javascript
import { Button, Card, Modal } from 'sample-project1/react';
```

| コンポーネント | 説明 |
| ------------ | ---- |
| `<Button>` | ボタンコンポーネント |
| `<Card>` | カードコンポーネント |
| `<Modal>` | モーダルコンポーネント |

### Vueコンポーネント

```javascript
import { Button, Card, Modal } from 'sample-project1/vue';
```

| コンポーネント | 説明 |
| ------------ | ---- |
| `<Button>` | ボタンコンポーネント |
| `<Card>` | カードコンポーネント |
| `<Modal>` | モーダルコンポーネント |

## プラグインAPI

サンプルプロジェクト1は、プラグインシステムを提供しています。

```javascript
import { registerPlugin } from 'sample-project1';
```

| 関数 | 説明 |
| ---- | ---- |
| `registerPlugin(plugin, options)` | プラグインを登録します |
| `getPlugin(name)` | 名前でプラグインを取得します |
| `removePlugin(name)` | プラグインを削除します |

## フックAPI

サンプルプロジェクト1は、様々なライフサイクルフックを提供しています。

```javascript
import { hooks } from 'sample-project1';
```

| フック | 説明 |
| ----- | ---- |
| `hooks.beforeInit` | 初期化前に呼び出されます |
| `hooks.afterInit` | 初期化後に呼び出されます |
| `hooks.beforeProcess` | 処理前に呼び出されます |
| `hooks.afterProcess` | 処理後に呼び出されます |

## 設定API

サンプルプロジェクト1は、様々な設定オプションを提供しています。

```javascript
import { configure } from 'sample-project1';
```

| 関数 | 説明 |
| ---- | ---- |
| `configure(options)` | ライブラリの設定を行います |
| `getConfig()` | 現在の設定を取得します |
| `resetConfig()` | 設定をデフォルト値にリセットします |

## 詳細なAPI

より詳細なAPIリファレンスについては、[関数リファレンス](./functions.md)のページを参照してください。
