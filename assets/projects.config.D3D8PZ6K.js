const projects = [
  {
    id: "sample-docs",
    name: "Sample Docs",
    description: {
      en: "Sample documentation for the docs-astro project",
      ja: "docs-astroプロジェクトのサンプルドキュメント"
    },
    path: "/docs/sample-docs",
    icon: "document",
    tags: ["sample", "documentation"],
    isNew: true
  }
  // 将来的に他のプロジェクトを追加する場合はここに追加
];
const topPageConfig = {
  // プロジェクト一覧
  projects,
  // GitHub Pagesのベースパス
  baseUrl: "",
  // サポートされている言語
  supportedLangs: ["en", "ja"],
  // デフォルト言語
  defaultLang: "en",
  // ヒーローセクションのタイトル
  heroTitle: {
    en: "Documentation Hub",
    ja: "ドキュメントハブ"
  },
  // ヒーローセクションの説明
  heroDescription: {
    en: "Find all the documentation you need in one place",
    ja: "必要なすべてのドキュメントを一箇所で見つけることができます"
  }
};

export { topPageConfig as t };
