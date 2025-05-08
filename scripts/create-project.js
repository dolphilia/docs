#!/usr/bin/env node

/**
 * プロジェクト作成スクリプト
 * 
 * 使い方:
 * node scripts/create-project.js <プロジェクト名> [オプション]
 * 
 * オプション:
 * --title <タイトル>       プロジェクトのタイトル（日本語）
 * --title-en <タイトル>    プロジェクトのタイトル（英語）
 * --desc <説明>           プロジェクトの説明（日本語）
 * --desc-en <説明>        プロジェクトの説明（英語）
 * --help                  ヘルプを表示
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

// コマンドライン引数の解析
const args = process.argv.slice(2);
let projectName = '';
let options = {
  title: '',
  titleEn: '',
  description: '',
  descriptionEn: ''
};

// ヘルプの表示
function showHelp() {
  console.log(`
プロジェクト作成スクリプト

使い方:
  node scripts/create-project.js <プロジェクト名> [オプション]

オプション:
  --title <タイトル>       プロジェクトのタイトル（日本語）
  --title-en <タイトル>    プロジェクトのタイトル（英語）
  --desc <説明>           プロジェクトの説明（日本語）
  --desc-en <説明>        プロジェクトの説明（英語）
  --help                  ヘルプを表示
  `);
  process.exit(0);
}

// コマンドライン引数の解析
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  
  if (arg === '--help') {
    showHelp();
  } else if (arg === '--title') {
    options.title = args[++i] || '';
  } else if (arg === '--title-en') {
    options.titleEn = args[++i] || '';
  } else if (arg === '--desc') {
    options.description = args[++i] || '';
  } else if (arg === '--desc-en') {
    options.descriptionEn = args[++i] || '';
  } else if (!projectName && !arg.startsWith('--')) {
    projectName = arg;
  }
}

// 対話型インターフェースの作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// プロジェクト名の入力
async function promptForProjectName() {
  return new Promise((resolve) => {
    if (projectName) {
      resolve(projectName);
      return;
    }
    
    rl.question('プロジェクト名を入力してください: ', (answer) => {
      resolve(answer);
    });
  });
}

// タイトルの入力
async function promptForTitle() {
  return new Promise((resolve) => {
    if (options.title) {
      resolve(options.title);
      return;
    }
    
    rl.question('プロジェクトのタイトル（日本語）を入力してください: ', (answer) => {
      resolve(answer);
    });
  });
}

// 英語タイトルの入力
async function promptForTitleEn() {
  return new Promise((resolve) => {
    if (options.titleEn) {
      resolve(options.titleEn);
      return;
    }
    
    rl.question('プロジェクトのタイトル（英語）を入力してください: ', (answer) => {
      resolve(answer);
    });
  });
}

// 説明の入力
async function promptForDescription() {
  return new Promise((resolve) => {
    if (options.description) {
      resolve(options.description);
      return;
    }
    
    rl.question('プロジェクトの説明（日本語）を入力してください: ', (answer) => {
      resolve(answer);
    });
  });
}

// 英語説明の入力
async function promptForDescriptionEn() {
  return new Promise((resolve) => {
    if (options.descriptionEn) {
      resolve(options.descriptionEn);
      return;
    }
    
    rl.question('プロジェクトの説明（英語）を入力してください: ', (answer) => {
      resolve(answer);
    });
  });
}

// テンプレートファイルの読み込み
function loadTemplate(templateName) {
  const templatePath = path.join(__dirname, 'templates', templateName);
  return fs.readFileSync(templatePath, 'utf8');
}

// テンプレートの置換
function replaceTemplate(template, replacements) {
  let result = template;
  
  for (const [key, value] of Object.entries(replacements)) {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, value);
  }
  
  return result;
}

// ディレクトリの作成
function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`ディレクトリを作成しました: ${dirPath}`);
  }
}

// ファイルの作成
function createFile(filePath, content) {
  fs.writeFileSync(filePath, content);
  console.log(`ファイルを作成しました: ${filePath}`);
}

// プロジェクトの作成
async function createProject() {
  try {
    // 必要な情報の入力
    projectName = await promptForProjectName();
    options.title = await promptForTitle();
    options.titleEn = await promptForTitleEn();
    options.description = await promptForDescription();
    options.descriptionEn = await promptForDescriptionEn();
    
    // 入力値の検証
    if (!projectName) {
      console.error('エラー: プロジェクト名は必須です。');
      process.exit(1);
    }
    
    // プロジェクトディレクトリのパス
    const projectDir = path.join(process.cwd(), 'packages', projectName);
    
    // プロジェクトディレクトリが既に存在するかチェック
    if (fs.existsSync(projectDir)) {
      console.error(`エラー: プロジェクト "${projectName}" は既に存在します。`);
      process.exit(1);
    }
    
    // 置換用のオブジェクト
    const replacements = {
      projectName,
      projectTitle: options.title || projectName,
      projectTitleEn: options.titleEn || projectName,
      projectDescription: options.description || `${options.title || projectName}のドキュメント`,
      projectDescriptionEn: options.descriptionEn || `Documentation for ${options.titleEn || projectName}`
    };
    
    // ディレクトリ構造の作成
    createDirectory(projectDir);
    createDirectory(path.join(projectDir, '.vitepress'));
    createDirectory(path.join(projectDir, 'ja', 'v1'));
    createDirectory(path.join(projectDir, 'ja', 'v1', 'api'));
    createDirectory(path.join(projectDir, 'en', 'v1'));
    createDirectory(path.join(projectDir, 'en', 'v1', 'api'));
    
    // package.jsonの作成
    const packageJsonTemplate = loadTemplate('package.json.template');
    const packageJsonContent = replaceTemplate(packageJsonTemplate, replacements);
    createFile(path.join(projectDir, 'package.json'), packageJsonContent);
    
    // VitePress設定ファイルの作成
    const configTemplate = loadTemplate('config.js.template');
    const configContent = replaceTemplate(configTemplate, replacements);
    createFile(path.join(projectDir, '.vitepress', 'config.js'), configContent);
    
    // 日本語ドキュメントの作成
    const indexJaTemplate = loadTemplate('index.ja.md.template');
    const indexJaContent = replaceTemplate(indexJaTemplate, replacements);
    createFile(path.join(projectDir, 'ja', 'v1', 'index.md'), indexJaContent);
    
    const usageJaTemplate = loadTemplate('usage.ja.md.template');
    const usageJaContent = replaceTemplate(usageJaTemplate, replacements);
    createFile(path.join(projectDir, 'ja', 'v1', 'usage.md'), usageJaContent);
    
    const advancedJaTemplate = loadTemplate('advanced.ja.md.template');
    const advancedJaContent = replaceTemplate(advancedJaTemplate, replacements);
    createFile(path.join(projectDir, 'ja', 'v1', 'advanced.md'), advancedJaContent);
    
    const apiIndexJaTemplate = loadTemplate('api-index.ja.md.template');
    const apiIndexJaContent = replaceTemplate(apiIndexJaTemplate, replacements);
    createFile(path.join(projectDir, 'ja', 'v1', 'api', 'index.md'), apiIndexJaContent);
    
    const apiFunctionsJaTemplate = loadTemplate('api-functions.ja.md.template');
    const apiFunctionsJaContent = replaceTemplate(apiFunctionsJaTemplate, replacements);
    createFile(path.join(projectDir, 'ja', 'v1', 'api', 'functions.md'), apiFunctionsJaContent);
    
    // 英語ドキュメントの作成
    const indexEnTemplate = loadTemplate('index.en.md.template');
    const indexEnContent = replaceTemplate(indexEnTemplate, replacements);
    createFile(path.join(projectDir, 'en', 'v1', 'index.md'), indexEnContent);
    
    const usageEnTemplate = loadTemplate('usage.en.md.template');
    const usageEnContent = replaceTemplate(usageEnTemplate, replacements);
    createFile(path.join(projectDir, 'en', 'v1', 'usage.md'), usageEnContent);
    
    const advancedEnTemplate = loadTemplate('advanced.en.md.template');
    const advancedEnContent = replaceTemplate(advancedEnTemplate, replacements);
    createFile(path.join(projectDir, 'en', 'v1', 'advanced.md'), advancedEnContent);
    
    const apiIndexEnTemplate = loadTemplate('api-index.en.md.template');
    const apiIndexEnContent = replaceTemplate(apiIndexEnTemplate, replacements);
    createFile(path.join(projectDir, 'en', 'v1', 'api', 'index.md'), apiIndexEnContent);
    
    const apiFunctionsEnTemplate = loadTemplate('api-functions.en.md.template');
    const apiFunctionsEnContent = replaceTemplate(apiFunctionsEnTemplate, replacements);
    createFile(path.join(projectDir, 'en', 'v1', 'api', 'functions.md'), apiFunctionsEnContent);
    
    // メインサイトのプロジェクト一覧に追加
    console.log('メインサイトのプロジェクト一覧を更新します...');
    
    // 完了メッセージ
    console.log(`
プロジェクト "${projectName}" が正常に作成されました！

以下のコマンドで開発サーバーを起動できます：
  pnpm --filter ${projectName} dev

プロジェクトのビルド：
  pnpm --filter ${projectName} build
    `);
    
  } catch (error) {
    console.error('エラーが発生しました:', error);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// スクリプトの実行
createProject();
