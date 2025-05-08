/**
 * 各プロジェクトのビルド結果をメインサイトのビルド結果にコピーするスクリプト
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESモジュールで__dirnameを使用するための設定
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ルートディレクトリのパス
const rootDir = path.resolve(__dirname, '..');

// メインサイトのビルド結果のパス
const mainSiteDist = path.join(rootDir, 'apps', 'main-site', '.vitepress', 'dist');

// packagesディレクトリのパス
const packagesDir = path.join(rootDir, 'packages');

/**
 * ディレクトリが存在するかどうかを確認し、存在しない場合は作成する
 * @param {string} dir - 作成するディレクトリのパス
 */
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * ディレクトリを再帰的にコピーする
 * @param {string} src - コピー元のディレクトリパス
 * @param {string} dest - コピー先のディレクトリパス
 */
function copyDirectory(src, dest) {
  // コピー先のディレクトリが存在しない場合は作成
  ensureDirectoryExists(dest);
  
  // コピー元のディレクトリ内のファイルとディレクトリを取得
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  // 各エントリに対して処理
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      // ディレクトリの場合は再帰的にコピー
      copyDirectory(srcPath, destPath);
    } else {
      // ファイルの場合はコピー
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * メイン処理
 */
function main() {
  console.log('各プロジェクトのビルド結果をメインサイトのビルド結果にコピーします...');
  
  // packagesディレクトリ内のプロジェクトを取得
  const projects = fs.readdirSync(packagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => name !== 'shared'); // sharedディレクトリは除外
  
  // 各プロジェクトのビルド結果をメインサイトのビルド結果にコピー
  for (const project of projects) {
    const projectDist = path.join(packagesDir, project, '.vitepress', 'dist');
    const projectDestDir = path.join(mainSiteDist, project);
    
    // プロジェクトのビルド結果が存在する場合のみコピー
    if (fs.existsSync(projectDist)) {
      console.log(`${project}のビルド結果をコピーしています...`);
      
      // プロジェクトのビルド結果をメインサイトのビルド結果にコピー
      copyDirectory(projectDist, projectDestDir);
      
      console.log(`${project}のビルド結果をコピーしました。`);
    } else {
      console.log(`${project}のビルド結果が見つかりません。スキップします。`);
    }
  }
  
  console.log('すべてのプロジェクトのビルド結果をコピーしました。');
}

// スクリプトの実行
main();
