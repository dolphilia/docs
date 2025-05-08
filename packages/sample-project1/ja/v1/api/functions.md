---
title: 関数リファレンス
description: サンプルプロジェクト1の関数リファレンス
---

# 関数リファレンス

<VersionSelector />
<LanguageSwitcher />

このページでは、サンプルプロジェクト1の関数の詳細なリファレンスを提供します。

## コアモジュール

### core.init(options)

ライブラリを初期化します。

**パラメータ:**

- `options` (Object): 初期化オプション
  - `debug` (boolean, optional): デバッグモードを有効にするかどうか。デフォルトは `false`
  - `timeout` (number, optional): タイムアウト時間（ミリ秒）。デフォルトは `1000`
  - `language` (string, optional): 使用する言語。デフォルトは `'ja'`

**戻り値:**

- (Object): 初期化されたインスタンス

**例:**

```javascript
import { core } from 'sample-project1';

const instance = core.init({
  debug: true,
  timeout: 2000,
  language: 'ja'
});
```

### core.process(data)

データを処理します。

**パラメータ:**

- `data` (any): 処理するデータ

**戻り値:**

- (Promise): 処理結果を含むPromise

**例:**

```javascript
import { core } from 'sample-project1';

core.init();
core.process({ name: 'サンプル' })
  .then(result => {
    console.log('処理結果:', result);
  })
  .catch(error => {
    console.error('エラー:', error);
  });
```

### core.terminate()

ライブラリを終了します。

**パラメータ:** なし

**戻り値:**

- (boolean): 終了が成功したかどうか

**例:**

```javascript
import { core } from 'sample-project1';

core.init();
// 何らかの処理
const success = core.terminate();
console.log('終了成功:', success);
```

## ユーティリティモジュール

### utils.format(data, type)

データを指定された形式にフォーマットします。

**パラメータ:**

- `data` (any): フォーマットするデータ
- `type` (string): フォーマットタイプ（'json', 'xml', 'csv', 'yaml'のいずれか）

**戻り値:**

- (string): フォーマットされたデータ

**例:**

```javascript
import { utils } from 'sample-project1';

const data = { name: 'サンプル', value: 123 };
const formatted = utils.format(data, 'json');
console.log(formatted); // '{"name":"サンプル","value":123}'
```

### utils.validate(data, schema)

データをスキーマに対して検証します。

**パラメータ:**

- `data` (any): 検証するデータ
- `schema` (Object): 検証スキーマ

**戻り値:**

- (Object): 検証結果
  - `valid` (boolean): 検証が成功したかどうか
  - `errors` (Array): エラーのリスト（検証が失敗した場合）

**例:**

```javascript
import { utils } from 'sample-project1';

const data = { name: 'サンプル', age: 30 };
const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number', minimum: 0 }
  },
  required: ['name', 'age']
};

const result = utils.validate(data, schema);
console.log('検証成功:', result.valid); // true
```

### utils.merge(obj1, obj2)

2つのオブジェクトをマージします。

**パラメータ:**

- `obj1` (Object): ベースオブジェクト
- `obj2` (Object): マージするオブジェクト

**戻り値:**

- (Object): マージされたオブジェクト

**例:**

```javascript
import { utils } from 'sample-project1';

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = utils.merge(obj1, obj2);
console.log(merged); // { a: 1, b: 3, c: 4 }
```

## プラグインAPI

### registerPlugin(plugin, options)

プラグインを登録します。

**パラメータ:**

- `plugin` (Object): プラグインオブジェクト
  - `name` (string): プラグイン名
  - `install` (Function): インストール関数
- `options` (Object, optional): プラグインオプション

**戻り値:**

- (boolean): 登録が成功したかどうか

**例:**

```javascript
import { registerPlugin } from 'sample-project1';

const myPlugin = {
  name: 'my-plugin',
  install(app, options) {
    // プラグインの初期化コード
  }
};

const success = registerPlugin(myPlugin, { debug: true });
console.log('プラグイン登録成功:', success);
```

### getPlugin(name)

名前でプラグインを取得します。

**パラメータ:**

- `name` (string): プラグイン名

**戻り値:**

- (Object|null): プラグインオブジェクト、または存在しない場合は `null`

**例:**

```javascript
import { getPlugin } from 'sample-project1';

const plugin = getPlugin('my-plugin');
if (plugin) {
  console.log('プラグイン:', plugin.name);
}
```

### removePlugin(name)

プラグインを削除します。

**パラメータ:**

- `name` (string): プラグイン名

**戻り値:**

- (boolean): 削除が成功したかどうか

**例:**

```javascript
import { removePlugin } from 'sample-project1';

const success = removePlugin('my-plugin');
console.log('プラグイン削除成功:', success);
```

## 設定API

### configure(options)

ライブラリの設定を行います。

**パラメータ:**

- `options` (Object): 設定オプション
  - `debug` (boolean, optional): デバッグモードを有効にするかどうか
  - `timeout` (number, optional): タイムアウト時間（ミリ秒）
  - `language` (string, optional): 使用する言語
  - `cache` (Object, optional): キャッシュ設定
    - `enabled` (boolean): キャッシュを有効にするかどうか
    - `directory` (string): キャッシュディレクトリ
    - `ttl` (number): キャッシュのTTL（秒）
  - `loaders` (Array, optional): カスタムローダーの設定

**戻り値:**

- (Object): 現在の設定

**例:**

```javascript
import { configure } from 'sample-project1';

const config = configure({
  debug: true,
  timeout: 2000,
  language: 'ja',
  cache: {
    enabled: true,
    directory: '.cache',
    ttl: 3600
  }
});

console.log('現在の設定:', config);
```

### getConfig()

現在の設定を取得します。

**パラメータ:** なし

**戻り値:**

- (Object): 現在の設定

**例:**

```javascript
import { getConfig } from 'sample-project1';

const config = getConfig();
console.log('現在の設定:', config);
```

### resetConfig()

設定をデフォルト値にリセットします。

**パラメータ:** なし

**戻り値:**

- (Object): リセットされた設定

**例:**

```javascript
import { resetConfig } from 'sample-project1';

const config = resetConfig();
console.log('リセットされた設定:', config);
