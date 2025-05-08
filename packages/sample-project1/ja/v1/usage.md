---
title: 使い方
description: サンプルプロジェクト1の使い方
---

# 使い方

<VersionSelector />
<LanguageSwitcher />

## インストール

サンプルプロジェクト1をインストールするには、以下のコマンドを実行します。

```bash
# npmの場合
npm install sample-project1

# yarnの場合
yarn add sample-project1

# pnpmの場合
pnpm add sample-project1
```

## 基本的な使い方

### モジュールのインポート

```javascript
// ESモジュール
import { sampleFunction } from 'sample-project1';

// CommonJS
const { sampleFunction } = require('sample-project1');
```

### 基本的な関数の使用

```javascript
// サンプル関数の使用
const result = sampleFunction('こんにちは');
console.log(result); // 'こんにちは、世界！'
```

## コンポーネントの使用

### Reactでの使用例

```jsx
import { SampleComponent } from 'sample-project1/react';

function App() {
  return (
    <div>
      <SampleComponent text="こんにちは" />
    </div>
  );
}
```

### Vueでの使用例

```vue
<template>
  <div>
    <SampleComponent text="こんにちは" />
  </div>
</template>

<script>
import { SampleComponent } from 'sample-project1/vue';

export default {
  components: {
    SampleComponent
  }
};
</script>
```

## 設定オプション

サンプルプロジェクト1は、以下の設定オプションをサポートしています。

| オプション | 型 | デフォルト値 | 説明 |
| --------- | --- | ----------- | ---- |
| `language` | `string` | `'ja'` | 使用する言語 |
| `debug` | `boolean` | `false` | デバッグモードの有効化 |
| `timeout` | `number` | `1000` | タイムアウト時間（ミリ秒） |

### 設定例

```javascript
import { configure } from 'sample-project1';

configure({
  language: 'ja',
  debug: true,
  timeout: 2000
});
```

## 高度な使い方

より高度な使い方については、[高度な使い方](./advanced.md)のページを参照してください。
