---
title: 高度な使い方
description: サンプルプロジェクト1の高度な使い方
---

# 高度な使い方

<VersionSelector />
<LanguageSwitcher />

## プラグインシステム

サンプルプロジェクト1は、プラグインシステムを提供しています。プラグインを使用することで、機能を拡張することができます。

### プラグインの作成

プラグインは、以下のような構造を持つオブジェクトです。

```javascript
const myPlugin = {
  name: 'my-plugin',
  install(app, options) {
    // プラグインの初期化コード
    app.registerFunction('myFunction', (arg) => {
      return `プラグイン関数: ${arg}`;
    });
  }
};
```

### プラグインの登録

```javascript
import { registerPlugin } from 'sample-project1';
import myPlugin from './my-plugin';

registerPlugin(myPlugin, {
  // プラグインのオプション
  debug: true
});
```

## フック

サンプルプロジェクト1は、様々なライフサイクルフックを提供しています。

### 利用可能なフック

| フック名 | 説明 |
| ------- | ---- |
| `beforeInit` | 初期化前に呼び出されます |
| `afterInit` | 初期化後に呼び出されます |
| `beforeProcess` | 処理前に呼び出されます |
| `afterProcess` | 処理後に呼び出されます |

### フックの使用例

```javascript
import { hooks } from 'sample-project1';

hooks.beforeInit.tap('MyPlugin', (context) => {
  console.log('初期化前のフック', context);
});

hooks.afterProcess.tap('MyPlugin', (result, context) => {
  console.log('処理後のフック', result, context);
  return result;
});
```

## 高度な設定

### カスタムローダー

```javascript
import { configure } from 'sample-project1';

configure({
  loaders: [
    {
      test: /\.custom$/,
      use: 'custom-loader'
    }
  ]
});
```

### キャッシュの設定

```javascript
import { configure } from 'sample-project1';

configure({
  cache: {
    enabled: true,
    directory: '.cache',
    ttl: 3600 // 1時間
  }
});
```

## パフォーマンス最適化

### 遅延読み込み

```javascript
// 必要なときだけモジュールを読み込む
const { heavyFunction } = await import('sample-project1/heavy');
const result = heavyFunction();
```

### ワーカースレッド

```javascript
import { createWorker } from 'sample-project1';

const worker = createWorker();
worker.postMessage({ type: 'process', data: largeData });
worker.onmessage = (event) => {
  console.log('処理結果:', event.data);
};
```

## デバッグとトラブルシューティング

### デバッグモード

```javascript
import { configure, debug } from 'sample-project1';

configure({ debug: true });

// デバッグ情報の出力
debug.log('デバッグ情報');
debug.warn('警告');
debug.error('エラー');
```

### パフォーマンスプロファイリング

```javascript
import { profiler } from 'sample-project1';

profiler.start('処理A');
// 何らかの処理
profiler.end('処理A');

// プロファイリング結果の出力
console.log(profiler.getResults());
```

## API

より詳細なAPIリファレンスについては、[API概要](./api/index.md)のページを参照してください。
