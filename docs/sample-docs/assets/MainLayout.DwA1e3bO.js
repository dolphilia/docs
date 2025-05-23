import { a as createAstro, b as createComponent, m as maybeRenderHead, C as addAttribute, D as spreadAttributes, i as renderSlot, u as unescapeHTML, d as renderTemplate, r as renderComponent, J as defineStyleVars, F as Fragment, K as renderScript, h as defineScriptVars, O as renderHead } from './astro/server.5q-sLdO5.js';
/* empty css                                                             */
/* empty css                                                           */
/* empty css                                                           */
/* empty css                                                                       */
/* empty css                                                                     */
/* empty css                                                              */
import './Alert_astro_astro_type_style_index_0_lang.6009b11b.l0sNRNKZ.js';
import './ContentPanel_astro_astro_type_style_index_0_lang.681033bb.l0sNRNKZ.js';
/* empty css                                                                          */
/* empty css                                                                      */
/* empty css                                                                 */
/* empty css                                                               */
import './AnchorHeading_astro_astro_type_style_index_0_lang.b9f2af13.l0sNRNKZ.js';
import './Banner_astro_astro_type_style_index_0_lang.8a6cba30.l0sNRNKZ.js';
import './ContentNotice_astro_astro_type_style_index_0_lang.cd256761.l0sNRNKZ.js';
import './Hero_astro_astro_type_style_index_0_lang.11d5116d.l0sNRNKZ.js';
/* empty css                                                                  */
import './TwoColumnContent_astro_astro_type_style_index_0_lang.64f9b8ce.l0sNRNKZ.js';
import './LinkCard_astro_astro_type_style_index_0_lang.ceda4718.l0sNRNKZ.js';
import './CardGrid_astro_astro_type_style_index_0_lang.c4bdb400.l0sNRNKZ.js';
/* empty css                                                           */
/* empty css                                                              */
/* empty css                                                               */
/* empty css                                                                   */
/* empty css                                                             */
/* empty css                                                                 */
/* empty css                         */
import { d as docsConfig } from './internal.v56pMMOe.js';

const $$Astro$v = createAstro("https://dolphilia.github.io");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    class: additionalClass = "",
    icon,
    iconPlacement = "end",
    href,
    ...rest
  } = Astro2.props;
  const isLink = variant === "link" || variant === "minimal";
  const classes = [
    "btn",
    `btn-${variant}`,
    !isLink && `btn-${size}`,
    additionalClass
  ];
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(classes, "class:list")}${addAttribute(href, "href")}${spreadAttributes(rest)} data-astro-cid-p4y5nqup>${icon && iconPlacement === "start" && renderTemplate`<span class="icon icon-start" aria-hidden="true" data-astro-cid-p4y5nqup>${unescapeHTML(icon)}</span>`}${renderSlot($$result, $$slots["default"])}${icon && iconPlacement === "end" && renderTemplate`<span class="icon icon-end" aria-hidden="true" data-astro-cid-p4y5nqup>${unescapeHTML(icon)}</span>`}</a>` : renderTemplate`<button${addAttribute(classes, "class:list")}${spreadAttributes(rest)} data-astro-cid-p4y5nqup>${icon && iconPlacement === "start" && renderTemplate`<span class="icon icon-start" aria-hidden="true" data-astro-cid-p4y5nqup>${unescapeHTML(icon)}</span>`}${renderSlot($$result, $$slots["default"])}${icon && iconPlacement === "end" && renderTemplate`<span class="icon icon-end" aria-hidden="true" data-astro-cid-p4y5nqup>${unescapeHTML(icon)}</span>`}</button>`}`;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Button.astro", void 0);

const $$Astro$u = createAstro("https://dolphilia.github.io");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    title,
    class: className = "",
    variant = "default",
    href,
    icon,
    ...rest
  } = Astro2.props;
  const classes = [
    "card",
    `card-${variant}`,
    href && "card-interactive",
    className
  ];
  const Tag = href ? "a" : "div";
  const linkProps = href ? { href } : {};
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": classes, ...linkProps, ...rest, "data-astro-cid-6nysbrwk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="card-body" data-astro-cid-6nysbrwk> ${title && renderTemplate`<div class="card-header" data-astro-cid-6nysbrwk> ${icon && renderTemplate`<span class="card-icon" data-astro-cid-6nysbrwk>${unescapeHTML(icon)}</span>`} <h2 class="card-title" data-astro-cid-6nysbrwk>${title}</h2> </div>`} <div class="card-content" data-astro-cid-6nysbrwk> ${renderSlot($$result2, $$slots["default"])} </div> ${Astro2.slots.has("footer") && renderTemplate`<div class="card-footer" data-astro-cid-6nysbrwk> ${renderSlot($$result2, $$slots["footer"])} </div>`} </div> ${href && variant === "link" && renderTemplate`<div class="card-cta" data-astro-cid-6nysbrwk> <span class="card-cta-icon" data-astro-cid-6nysbrwk> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-6nysbrwk> <path d="M5 12h14" data-astro-cid-6nysbrwk></path> <path d="m12 5 7 7-7 7" data-astro-cid-6nysbrwk></path> </svg> </span> </div>`}` })} `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Card.astro", void 0);

const Icons = {
  // シェブロンアイコン（サイドバーの折りたたみ用）
  "chevron": '<path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  // メニューバーアイコン
  "bars": '<path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  // 情報アイコン
  "info": '<path d="M12 11a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Zm.38-3.92a1 1 0 0 0-.76 0 1 1 0 0 0-.33.21 1.15 1.15 0 0 0-.21.33 1 1 0 0 0 .21 1.09c.097.088.209.16.33.21A1 1 0 0 0 13 8a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-.33-.21ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"/>',
  // 設定アイコン
  "setting": '<path d="m21.32 9.55-1.89-.63.89-1.78A1 1 0 0 0 20.13 6L18 3.87a1 1 0 0 0-1.15-.19l-1.78.89-.63-1.89A1 1 0 0 0 13.5 2h-3a1 1 0 0 0-.95.68l-.63 1.89-1.78-.89A1 1 0 0 0 6 3.87L3.87 6a1 1 0 0 0-.19 1.15l.89 1.78-1.89.63a1 1 0 0 0-.68.94v3a1 1 0 0 0 .68.95l1.89.63-.89 1.78A1 1 0 0 0 3.87 18L6 20.13a1 1 0 0 0 1.15.19l1.78-.89.63 1.89a1 1 0 0 0 .95.68h3a1 1 0 0 0 .95-.68l.63-1.89 1.78.89a1 1 0 0 0 1.13-.19L20.13 18a1 1 0 0 0 .19-1.15l-.89-1.78 1.89-.63a1 1 0 0 0 .68-.94v-3a1 1 0 0 0-.68-.95ZM20 12.78l-1.2.4A2 2 0 0 0 17.64 16l.57 1.14-1.1 1.1-1.11-.6a2 2 0 0 0-2.79 1.16l-.4 1.2h-1.59l-.4-1.2A2 2 0 0 0 8 17.64l-1.14.57-1.1-1.1.6-1.11a2 2 0 0 0-1.16-2.82l-1.2-.4v-1.56l1.2-.4A2 2 0 0 0 6.36 8l-.57-1.11 1.1-1.1L8 6.36a2 2 0 0 0 2.82-1.16l.4-1.2h1.56l.4 1.2A2 2 0 0 0 16 6.36l1.14-.57 1.1 1.1-.6 1.11a2 2 0 0 0 1.16 2.79l1.2.4v1.59ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>',
  // 警告アイコン
  "warning": '<path d="M12 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10.67 1.47-8.05-14a3 3 0 0 0-5.24 0l-8 14A3 3 0 0 0 3.94 22h16.12a3 3 0 0 0 2.61-4.53Zm-1.73 2a1 1 0 0 1-.88.51H3.94a1 1 0 0 1-.88-.51 1 1 0 0 1 0-1l8-14a1 1 0 0 1 1.78 0l8.05 14a1 1 0 0 1 .05 1.02v-.02ZM12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z"/>',
  // エラーアイコン
  "error": '<path d="M12 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71ZM20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62Z"/>',
  // チェックアイコン
  "check": '<path d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46-3.13-3.14A1.02 1.02 0 1 0 5.29 13l3.84 3.84a1.001 1.001 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"/>',
  // コードアイコン
  "code": '<path d="m8.64 5.23-5.99 6a.996.996 0 0 0 0 1.41l5.99 6a1.001 1.001 0 0 0 1.42-1.41L4.7 12l5.36-5.23a1.001 1.001 0 1 0-1.42-1.41l.01-.13Zm6.71-.01a1.001 1.001 0 0 0-1.42 1.41L19.3 12l-5.36 5.23a1.001 1.001 0 0 0 1.42 1.41l5.99-6a.996.996 0 0 0 0-1.41l-5.99-6Z"/>',
  // ドキュメントアイコン
  "document": '<path d="M9 10h1a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2Zm0 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9Zm11-3.06a1.3 1.3 0 0 0-.06-.27v-.09c-.05-.1-.11-.2-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.09a.88.88 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94Zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1V5.41ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v9Zm-3-3H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z"/>',
  // 検索アイコン
  "search": '<path d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"/>',
  // 閉じるアイコン
  "close": '<path d="m13.41 12 6.3-6.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1.004 1.004 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l6.29-6.3 6.29 6.3a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12Z"/>',
  // 右矢印アイコン
  "right-arrow": '<path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"/>',
  // 左矢印アイコン
  "left-arrow": '<path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"/>',
  // 下矢印アイコン
  "down-arrow": '<path d="M17.71 11.29a1 1 0 0 0-1.42 0L13 14.59V7a1 1 0 0 0-2 0v7.59l-3.29-3.3a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l5-5a1 1 0 0 0 0-1.42Z"/>',
  // 上矢印アイコン
  "up-arrow": '<path d="m17.71 11.29-5-5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-5 5a1 1 0 0 0 1.42 1.42L11 9.41V17a1 1 0 0 0 2 0V9.41l3.29 3.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"/>',
  // 外部リンクアイコン - Starlightスタイル
  "external-link": '<path d="M19.5 8.25h-4.5a.75.75 0 0 0 0 1.5h2.69L8.91 18.53a.75.75 0 0 0 1.06 1.06L18.75 10.8v2.7a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75Z"/><path d="M8.25 6.75a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 .75.75h10.5a.75.75 0 0 0 0-1.5H9v-9.75a.75.75 0 0 0-.75-.75Z"/>',
  // 編集アイコン
  "edit": '<path d="M19.4 7.34 16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71ZM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7-5.62 5.6Zm8.35-8.36-1.91 1.91-2.7-2.7 1.91-1.91a.93.93 0 0 1 1.3 0l1.4 1.4a.93.93 0 0 1 0 1.3Z"/>',
  // コピーアイコン
  "copy": '<path d="M20 2H10a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM14 18H4V10h10v8Zm6-6h-4v-2a2 2 0 0 0-2-2h-2V4h8v8Z"/>',
  // 成功アイコン
  "success": '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm3.36-11.71a1 1 0 0 0-1.41 0l-3.36 3.37-1.17-1.17a1 1 0 0 0-1.41 1.41l1.87 1.87a1 1 0 0 0 1.41 0l4.07-4.07a1 1 0 0 0 0-1.41Z"/>',
  // ノートアイコン
  "note": '<path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10Z"/><path d="M7 12h10a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Zm0 2h7a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Z"/>',
  // ヒントアイコン
  "tip": '<path d="M12 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm0-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8Z"/>',
  // 重要アイコン
  "important": '<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8Z"/><path d="M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z"/>',
  // 注意アイコン
  "caution": '<path d="M12 7.5a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1Zm0 10a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM21.49 19.67 13 4.48a1.39 1.39 0 0 0-2 0l-8.49 15.19A1.4 1.4 0 0 0 3.52 21h16.96a1.4 1.4 0 0 0 1.01-1.33ZM4.77 19 12 5.93 19.23 19H4.77Z"/>',
  // ダウンロードアイコン
  "download": '<path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16Z"/><path d="M12 16a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1Z"/><path d="M19 20H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z"/>',
  // ライトテーマアイコン
  "light": '<path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-1 11h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2Zm0-18h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2Zm9 9a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2h2ZM6 12H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm11.66-5.66a1 1 0 0 0 0-1.41l-1.42-1.42a1 1 0 1 0-1.41 1.41l1.41 1.42a1 1 0 0 0 1.42 0Zm-12.02 12a1 1 0 0 0-1.41 0l-1.42 1.42a1 1 0 1 0 1.41 1.41l1.42-1.41a1 1 0 0 0 0-1.42Zm12.02 0-1.42 1.42a1 1 0 0 0 1.42 1.41l1.41-1.41a1 1 0 0 0-1.41-1.42Zm-12.02-12 1.42-1.42a1 1 0 0 0-1.42-1.41L4.64 4.93a1 1 0 0 0 1.41 1.41Z"/>',
  // ダークテーマアイコン
  "dark": '<path d="M21.64 13a1 1 0 0 0-1.05-.14 8.049 8.049 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14 9.784 9.784 0 0 0 2.1-.22 8.11 8.11 0 0 1-7.18 4.32v-.04Z"/>'
};

const $$Astro$t = createAstro("https://dolphilia.github.io");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    name,
    size = "1em",
    color,
    label,
    class: className = ""
  } = Astro2.props;
  const a11yAttrs = label ? { "aria-label": label } : { "aria-hidden": "true" };
  const $$definedVars = defineStyleVars([{ "icon-color": color, "icon-size": size }]);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-lo337cvj": true, "style": $$definedVars }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(a11yAttrs)}${addAttribute(`icon ${className}`, "class")} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-lo337cvj${addAttribute($$definedVars, "style")}>${unescapeHTML(Icons[name])}</svg>` })}`;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/icons/Icon.astro", void 0);

const $$Astro$s = createAstro("https://dolphilia.github.io");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Navigation;
  const {
    items,
    siteTitle = "Docs Astro",
    logoUrl,
    socialLinks = [],
    showSearch = false,
    // デフォルトで無効化
    showThemeToggle = true,
    sticky = true,
    changeOnScroll = true,
    class: className = ""
  } = Astro2.props;
  function isCurrentPage(item) {
    return item.isCurrent || false;
  }
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(["header", className, { "header-sticky": sticky, "header-with-scroll": changeOnScroll }], "class:list")} data-astro-cid-dlw3koyp> <div class="header-container" data-astro-cid-dlw3koyp> <div class="header-content" data-astro-cid-dlw3koyp> <div class="site-title-wrapper" data-astro-cid-dlw3koyp> <a href="/" class="site-title" data-astro-cid-dlw3koyp> ${logoUrl && renderTemplate`<img${addAttribute(logoUrl, "src")}${addAttribute(siteTitle, "alt")} class="site-logo" data-astro-cid-dlw3koyp>`} <span data-astro-cid-dlw3koyp>${siteTitle}</span> </a> </div> <nav class="navigation" aria-label="メインナビゲーション" data-astro-cid-dlw3koyp> <div class="nav-items" data-astro-cid-dlw3koyp> ${items.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(["nav-item", { active: isCurrentPage(item) }], "class:list")}${addAttribute(isCurrentPage(item) ? "page" : void 0, "aria-current")} data-astro-cid-dlw3koyp> ${item.icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "data-astro-cid-dlw3koyp": true })}`} <span data-astro-cid-dlw3koyp>${item.title}</span> </a>`)} </div> </nav> <div class="header-actions" data-astro-cid-dlw3koyp>   <div class="header-right" data-astro-cid-dlw3koyp> ${socialLinks.length > 0 && renderTemplate`<div class="social-links" data-astro-cid-dlw3koyp> ${socialLinks.map(({ label, href, icon }) => renderTemplate`<a${addAttribute(href, "href")} rel="me" class="social-link"${addAttribute(label, "aria-label")}${addAttribute(label, "title")} data-astro-cid-dlw3koyp> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-dlw3koyp": true })} </a>`)} </div>`} ${showThemeToggle && renderTemplate`${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-dlw3koyp": true })}`} </div> ${renderComponent($$result, "docs-menu-button", "docs-menu-button", { "data-astro-cid-dlw3koyp": true }, { "default": () => renderTemplate` <button type="button" aria-expanded="false" aria-label="モバイルメニューを切り替え" aria-controls="mobile-menu" class="menu-toggle-button" data-astro-cid-dlw3koyp> ${renderComponent($$result, "Icon", $$Icon, { "name": "bars", "class": "open-icon", "data-astro-cid-dlw3koyp": true })} ${renderComponent($$result, "Icon", $$Icon, { "name": "close", "class": "close-icon", "data-astro-cid-dlw3koyp": true })} </button> ` })} </div> </div> </div> </header> <!-- モバイルメニュー --> <div class="mobile-menu" id="mobile-menu" data-astro-cid-dlw3koyp> <div class="mobile-menu-content" data-astro-cid-dlw3koyp>   <ul class="mobile-nav-items" data-astro-cid-dlw3koyp> ${items.map((item) => renderTemplate`<li data-astro-cid-dlw3koyp> <a${addAttribute(item.href, "href")}${addAttribute(["mobile-nav-item", { active: isCurrentPage(item) }], "class:list")}${addAttribute(isCurrentPage(item) ? "page" : void 0, "aria-current")} data-astro-cid-dlw3koyp> ${item.icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "data-astro-cid-dlw3koyp": true })}`} <span data-astro-cid-dlw3koyp>${item.title}</span> </a> </li>`)} </ul> ${socialLinks.length > 0 && renderTemplate`<div class="mobile-social-links" data-astro-cid-dlw3koyp> ${socialLinks.map(({ label, href, icon }) => renderTemplate`<a${addAttribute(href, "href")} rel="me" class="mobile-social-link"${addAttribute(label, "aria-label")}${addAttribute(label, "title")} data-astro-cid-dlw3koyp> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-dlw3koyp": true })} <span data-astro-cid-dlw3koyp>${label}</span> </a>`)} </div>`} </div> </div>  ${renderScript($$result, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Navigation.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$r = createAstro("https://dolphilia.github.io");
const $$SidebarPersister = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$SidebarPersister;
  const { hash = "sidebar-hash" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "sl-sidebar-state-persist", "sl-sidebar-state-persist", { "data-hash": hash, "data-astro-cid-y2z5y3ll": true }, { "default": () => renderTemplate(_a$3 || (_a$3 = __template$3([` <script aria-hidden="true">
    (() => {
      try {
        if (!matchMedia('(min-width: 50em)').matches) return;
        /** @type {HTMLElement | null} */
        const target = document.querySelector('sl-sidebar-state-persist');
        const state = JSON.parse(sessionStorage.getItem('sidebar-state') || '0');
        if (!target || !state || target.dataset.hash !== state.hash) return;
        window._sidebarScrollRestore = state.scroll;
        customElements.define(
          'sl-sidebar-restore',
          class SidebarRestore extends HTMLElement {
            connectedCallback() {
              try {
                const idx = parseInt(this.dataset.index || '');
                const details = this.closest('details');
                if (details && typeof state.open[idx] === 'boolean') details.open = state.open[idx];
              } catch {}
            }
          }
        );
      } catch {}
    })();
  <\/script> `, ` <script aria-hidden="true">
    (() => {
      const scroller = document.getElementById('sidebar');
      if (!window._sidebarScrollRestore || !scroller) return;
      scroller.scrollTop = window._sidebarScrollRestore;
      delete window._sidebarScrollRestore;
    })();
  <\/script> `])), renderSlot($$result, $$slots["default"])) })} ${renderScript($$result, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/SidebarPersister.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/SidebarPersister.astro", void 0);

const $$Astro$q = createAstro("https://dolphilia.github.io");
const $$SidebarRestorePoint = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$SidebarRestorePoint;
  const currentGroupIndexSymbol = Symbol.for("sidebar-group-index");
  const locals = Astro2.locals;
  const index = locals?.[currentGroupIndexSymbol] || 0;
  if (locals) {
    locals[currentGroupIndexSymbol] = index + 1;
  } else {
    globalThis.sidebarGroupIndex = (globalThis.sidebarGroupIndex || 0) + 1;
  }
  const usedIndex = locals ? index : globalThis.sidebarGroupIndex - 1;
  return renderTemplate`${renderComponent($$result, "sl-sidebar-restore", "sl-sidebar-restore", { "data-index": usedIndex })}`;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/SidebarRestorePoint.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$p = createAstro("https://dolphilia.github.io");
const $$SidebarResizer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$SidebarResizer;
  const {
    minWidth = 200,
    maxWidth = 400,
    initialWidth = 280,
    collapsedWidth = 50,
    storageKey = "sidebar-width"
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ minWidth, maxWidth, initialWidth, collapsedWidth }]);
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div class="sidebar-resizer" aria-hidden="true" data-astro-cid-icgxibxb', '> <div class="resizer-handle" title="\u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u8ABF\u6574" data-astro-cid-icgxibxb', '> <div class="handle-line" data-astro-cid-icgxibxb', '></div> </div> <button class="collapse-button" title="\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u6298\u308A\u305F\u305F\u3080/\u5C55\u958B\u3059\u308B" data-astro-cid-icgxibxb', '> <span class="collapse-icon" data-astro-cid-icgxibxb', "></span> </button> </div>  <script>(function(){", "\ndocument.addEventListener('DOMContentLoaded', () => {\n  const sidebar = document.getElementById('sidebar');\n  const resizer = document.querySelector('.sidebar-resizer');\n  const collapseButton = document.querySelector('.collapse-button');\n  \n  if (!sidebar || !resizer || !collapseButton) return;\n  \n  // \u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u304B\u3089\u5E45\u3068\u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u53D6\u5F97\n  const savedWidth = localStorage.getItem(storageKey);\n  const savedCollapsed = localStorage.getItem(`${storageKey}-collapsed`) === 'true';\n  \n  // \u521D\u671F\u5E45\u3092\u8A2D\u5B9A\n  let sidebarWidth = savedWidth ? parseInt(savedWidth) : initialWidth;\n  \n  // \u521D\u671F\u72B6\u614B\u3092\u8A2D\u5B9A\n  if (savedCollapsed) {\n    sidebar.classList.add('sidebar-collapsed');\n    sidebarWidth = collapsedWidth;\n  }\n  \n  // \u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u8A2D\u5B9A\n  sidebar.style.width = `${sidebarWidth}px`;\n  \n  // \u30EA\u30B5\u30A4\u30BA\u51E6\u7406\n  let isResizing = false;\n  let startX = 0;\n  let startWidth = 0;\n  \n  // \u30EA\u30B5\u30A4\u30BA\u958B\u59CB\n  const startResize = (e) => {\n    isResizing = true;\n    startX = e.clientX || e.touches[0].clientX;\n    startWidth = parseInt(sidebar.offsetWidth);\n    resizer.classList.add('resizing');\n    document.body.style.cursor = 'col-resize';\n    document.body.style.userSelect = 'none';\n    \n    // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u8FFD\u52A0\n    document.addEventListener('mousemove', resize);\n    document.addEventListener('touchmove', resize, { passive: false });\n    document.addEventListener('mouseup', stopResize);\n    document.addEventListener('touchend', stopResize);\n  };\n  \n  // \u30EA\u30B5\u30A4\u30BA\u4E2D\n  const resize = (e) => {\n    if (!isResizing) return;\n    \n    e.preventDefault();\n    \n    const clientX = e.clientX || e.touches[0].clientX;\n    let newWidth = startWidth + (clientX - startX);\n    \n    // \u6700\u5C0F\u5E45\u3068\u6700\u5927\u5E45\u306E\u5236\u9650\n    newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));\n    \n    // \u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u66F4\u65B0\n    sidebar.style.width = `${newWidth}px`;\n    \n    // \u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u89E3\u9664\n    if (sidebar.classList.contains('sidebar-collapsed') && newWidth > collapsedWidth) {\n      sidebar.classList.remove('sidebar-collapsed');\n      localStorage.setItem(`${storageKey}-collapsed`, 'false');\n    }\n  };\n  \n  // \u30EA\u30B5\u30A4\u30BA\u7D42\u4E86\n  const stopResize = () => {\n    if (!isResizing) return;\n    \n    isResizing = false;\n    resizer.classList.remove('resizing');\n    document.body.style.cursor = '';\n    document.body.style.userSelect = '';\n    \n    // \u73FE\u5728\u306E\u5E45\u3092\u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\n    if (!sidebar.classList.contains('sidebar-collapsed')) {\n      localStorage.setItem(storageKey, sidebar.offsetWidth);\n    }\n    \n    // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u524A\u9664\n    document.removeEventListener('mousemove', resize);\n    document.removeEventListener('touchmove', resize);\n    document.removeEventListener('mouseup', stopResize);\n    document.removeEventListener('touchend', stopResize);\n  };\n  \n  // \u6298\u308A\u305F\u305F\u307F/\u5C55\u958B\u30DC\u30BF\u30F3\u306E\u30AF\u30EA\u30C3\u30AF\u30A4\u30D9\u30F3\u30C8\n  const toggleCollapse = () => {\n    const isCollapsed = sidebar.classList.toggle('sidebar-collapsed');\n    \n    if (isCollapsed) {\n      // \u73FE\u5728\u306E\u5E45\u3092\u4E00\u6642\u4FDD\u5B58\n      if (!localStorage.getItem(`${storageKey}-width-before-collapse`)) {\n        localStorage.setItem(`${storageKey}-width-before-collapse`, sidebar.offsetWidth);\n      }\n      \n      // \u6298\u308A\u305F\u305F\u307F\u5E45\u306B\u8A2D\u5B9A\n      sidebar.style.width = `${collapsedWidth}px`;\n    } else {\n      // \u4EE5\u524D\u306E\u5E45\u306B\u623B\u3059\n      const widthBeforeCollapse = localStorage.getItem(`${storageKey}-width-before-collapse`) || initialWidth;\n      sidebar.style.width = `${widthBeforeCollapse}px`;\n      localStorage.removeItem(`${storageKey}-width-before-collapse`);\n    }\n    \n    // \u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\n    localStorage.setItem(`${storageKey}-collapsed`, isCollapsed);\n  };\n  \n  // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u8A2D\u5B9A\n  resizer.addEventListener('mousedown', startResize);\n  resizer.addEventListener('touchstart', startResize, { passive: false });\n  collapseButton.addEventListener('click', toggleCollapse);\n});\n})();<\/script>"], ["", '<div class="sidebar-resizer" aria-hidden="true" data-astro-cid-icgxibxb', '> <div class="resizer-handle" title="\u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u8ABF\u6574" data-astro-cid-icgxibxb', '> <div class="handle-line" data-astro-cid-icgxibxb', '></div> </div> <button class="collapse-button" title="\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u6298\u308A\u305F\u305F\u3080/\u5C55\u958B\u3059\u308B" data-astro-cid-icgxibxb', '> <span class="collapse-icon" data-astro-cid-icgxibxb', "></span> </button> </div>  <script>(function(){", "\ndocument.addEventListener('DOMContentLoaded', () => {\n  const sidebar = document.getElementById('sidebar');\n  const resizer = document.querySelector('.sidebar-resizer');\n  const collapseButton = document.querySelector('.collapse-button');\n  \n  if (!sidebar || !resizer || !collapseButton) return;\n  \n  // \u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u304B\u3089\u5E45\u3068\u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u53D6\u5F97\n  const savedWidth = localStorage.getItem(storageKey);\n  const savedCollapsed = localStorage.getItem(\\`\\${storageKey}-collapsed\\`) === 'true';\n  \n  // \u521D\u671F\u5E45\u3092\u8A2D\u5B9A\n  let sidebarWidth = savedWidth ? parseInt(savedWidth) : initialWidth;\n  \n  // \u521D\u671F\u72B6\u614B\u3092\u8A2D\u5B9A\n  if (savedCollapsed) {\n    sidebar.classList.add('sidebar-collapsed');\n    sidebarWidth = collapsedWidth;\n  }\n  \n  // \u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u8A2D\u5B9A\n  sidebar.style.width = \\`\\${sidebarWidth}px\\`;\n  \n  // \u30EA\u30B5\u30A4\u30BA\u51E6\u7406\n  let isResizing = false;\n  let startX = 0;\n  let startWidth = 0;\n  \n  // \u30EA\u30B5\u30A4\u30BA\u958B\u59CB\n  const startResize = (e) => {\n    isResizing = true;\n    startX = e.clientX || e.touches[0].clientX;\n    startWidth = parseInt(sidebar.offsetWidth);\n    resizer.classList.add('resizing');\n    document.body.style.cursor = 'col-resize';\n    document.body.style.userSelect = 'none';\n    \n    // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u8FFD\u52A0\n    document.addEventListener('mousemove', resize);\n    document.addEventListener('touchmove', resize, { passive: false });\n    document.addEventListener('mouseup', stopResize);\n    document.addEventListener('touchend', stopResize);\n  };\n  \n  // \u30EA\u30B5\u30A4\u30BA\u4E2D\n  const resize = (e) => {\n    if (!isResizing) return;\n    \n    e.preventDefault();\n    \n    const clientX = e.clientX || e.touches[0].clientX;\n    let newWidth = startWidth + (clientX - startX);\n    \n    // \u6700\u5C0F\u5E45\u3068\u6700\u5927\u5E45\u306E\u5236\u9650\n    newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));\n    \n    // \u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u5E45\u3092\u66F4\u65B0\n    sidebar.style.width = \\`\\${newWidth}px\\`;\n    \n    // \u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u89E3\u9664\n    if (sidebar.classList.contains('sidebar-collapsed') && newWidth > collapsedWidth) {\n      sidebar.classList.remove('sidebar-collapsed');\n      localStorage.setItem(\\`\\${storageKey}-collapsed\\`, 'false');\n    }\n  };\n  \n  // \u30EA\u30B5\u30A4\u30BA\u7D42\u4E86\n  const stopResize = () => {\n    if (!isResizing) return;\n    \n    isResizing = false;\n    resizer.classList.remove('resizing');\n    document.body.style.cursor = '';\n    document.body.style.userSelect = '';\n    \n    // \u73FE\u5728\u306E\u5E45\u3092\u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\n    if (!sidebar.classList.contains('sidebar-collapsed')) {\n      localStorage.setItem(storageKey, sidebar.offsetWidth);\n    }\n    \n    // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u524A\u9664\n    document.removeEventListener('mousemove', resize);\n    document.removeEventListener('touchmove', resize);\n    document.removeEventListener('mouseup', stopResize);\n    document.removeEventListener('touchend', stopResize);\n  };\n  \n  // \u6298\u308A\u305F\u305F\u307F/\u5C55\u958B\u30DC\u30BF\u30F3\u306E\u30AF\u30EA\u30C3\u30AF\u30A4\u30D9\u30F3\u30C8\n  const toggleCollapse = () => {\n    const isCollapsed = sidebar.classList.toggle('sidebar-collapsed');\n    \n    if (isCollapsed) {\n      // \u73FE\u5728\u306E\u5E45\u3092\u4E00\u6642\u4FDD\u5B58\n      if (!localStorage.getItem(\\`\\${storageKey}-width-before-collapse\\`)) {\n        localStorage.setItem(\\`\\${storageKey}-width-before-collapse\\`, sidebar.offsetWidth);\n      }\n      \n      // \u6298\u308A\u305F\u305F\u307F\u5E45\u306B\u8A2D\u5B9A\n      sidebar.style.width = \\`\\${collapsedWidth}px\\`;\n    } else {\n      // \u4EE5\u524D\u306E\u5E45\u306B\u623B\u3059\n      const widthBeforeCollapse = localStorage.getItem(\\`\\${storageKey}-width-before-collapse\\`) || initialWidth;\n      sidebar.style.width = \\`\\${widthBeforeCollapse}px\\`;\n      localStorage.removeItem(\\`\\${storageKey}-width-before-collapse\\`);\n    }\n    \n    // \u6298\u308A\u305F\u305F\u307F\u72B6\u614B\u3092\u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\n    localStorage.setItem(\\`\\${storageKey}-collapsed\\`, isCollapsed);\n  };\n  \n  // \u30A4\u30D9\u30F3\u30C8\u30EA\u30B9\u30CA\u30FC\u3092\u8A2D\u5B9A\n  resizer.addEventListener('mousedown', startResize);\n  resizer.addEventListener('touchstart', startResize, { passive: false });\n  collapseButton.addEventListener('click', toggleCollapse);\n});\n})();<\/script>"])), maybeRenderHead(), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), defineScriptVars({ minWidth, maxWidth, initialWidth, collapsedWidth, storageKey }));
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/SidebarResizer.astro", void 0);

const $$Astro$o = createAstro("https://dolphilia.github.io");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { items, title, class: className = "", hash = "sidebar-hash" } = Astro2.props;
  function isCurrentPage(item) {
    return item.isCurrent || false;
  }
  function shouldBeOpen(section) {
    if (!section.items) return false;
    return section.items.some((item) => isCurrentPage(item) || item.items && shouldBeOpen(item));
  }
  function getSidebarHash(items2) {
    return hash || "sidebar-" + Math.random().toString(36).substring(2, 9);
  }
  const sidebarHash = getSidebarHash();
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(["sidebar", className], "class:list")} role="complementary"${addAttribute(title || "\u30B5\u30A4\u30C9\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3", "aria-label")} id="sidebar" style="position: relative;" data-astro-cid-vmt7ehs7> ${renderComponent($$result, "SidebarResizer", $$SidebarResizer, { "data-astro-cid-vmt7ehs7": true })} ${title && renderTemplate`<h3 class="sidebar-title" id="sidebar-title" data-astro-cid-vmt7ehs7> ${title} </h3>`} <nav aria-labelledby="sidebar-title" data-astro-cid-vmt7ehs7> ${renderComponent($$result, "SidebarPersister", $$SidebarPersister, { "hash": sidebarHash, "data-astro-cid-vmt7ehs7": true }, { "default": ($$result2) => renderTemplate` <ul class="top-level" data-astro-cid-vmt7ehs7> ${items.map((section) => renderTemplate`<li data-astro-cid-vmt7ehs7> ${section.href ? renderTemplate`<a${addAttribute(section.href, "href")}${addAttribute(isCurrentPage(section) ? "page" : void 0, "aria-current")}${addAttribute(["large", { active: isCurrentPage(section) }], "class:list")} data-astro-cid-vmt7ehs7> <span data-astro-cid-vmt7ehs7>${section.title}</span> ${section.badge && renderTemplate`<span${addAttribute(["badge", section.badge.variant || "default", section.badge.class], "class:list")} data-astro-cid-vmt7ehs7> ${section.badge.text} </span>`} </a>` : renderTemplate`<details${addAttribute(shouldBeOpen(section), "open")} data-astro-cid-vmt7ehs7> ${renderComponent($$result2, "SidebarRestorePoint", $$SidebarRestorePoint, { "data-astro-cid-vmt7ehs7": true })} <summary data-astro-cid-vmt7ehs7> <div class="group-label" data-astro-cid-vmt7ehs7> <span class="large" data-astro-cid-vmt7ehs7>${section.title}</span> ${section.badge && renderTemplate`<span${addAttribute(["badge", section.badge.variant || "default", section.badge.class], "class:list")} data-astro-cid-vmt7ehs7> ${section.badge.text} </span>`} </div> <span class="caret-container" data-astro-cid-vmt7ehs7> <span class="caret-wrapper" data-astro-cid-vmt7ehs7> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron", "size": "1.25rem", "data-astro-cid-vmt7ehs7": true })} </span> </span> </summary> ${section.items && renderTemplate`<ul data-astro-cid-vmt7ehs7> ${section.items.map((item) => renderTemplate`<li data-astro-cid-vmt7ehs7> ${item.href ? renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(isCurrentPage(item) ? "page" : void 0, "aria-current")}${addAttribute([{ active: isCurrentPage(item) }], "class:list")} data-astro-cid-vmt7ehs7> <span data-astro-cid-vmt7ehs7>${item.title}</span> ${item.badge && renderTemplate`<span${addAttribute(["badge", item.badge.variant || "default", item.badge.class], "class:list")} data-astro-cid-vmt7ehs7> ${item.badge.text} </span>`} </a>` : renderTemplate`<details${addAttribute(shouldBeOpen(item), "open")} data-astro-cid-vmt7ehs7> ${renderComponent($$result2, "SidebarRestorePoint", $$SidebarRestorePoint, { "data-astro-cid-vmt7ehs7": true })} <summary data-astro-cid-vmt7ehs7> <div class="group-label" data-astro-cid-vmt7ehs7> <span data-astro-cid-vmt7ehs7>${item.title}</span> ${item.badge && renderTemplate`<span${addAttribute(["badge", item.badge.variant || "default", item.badge.class], "class:list")} data-astro-cid-vmt7ehs7> ${item.badge.text} </span>`} </div> <span class="caret-container" data-astro-cid-vmt7ehs7> <span class="caret-wrapper" data-astro-cid-vmt7ehs7> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron", "size": "1rem", "data-astro-cid-vmt7ehs7": true })} </span> </span> </summary> ${item.items && renderTemplate`<ul data-astro-cid-vmt7ehs7> ${item.items.map((subItem) => renderTemplate`<li data-astro-cid-vmt7ehs7> <a${addAttribute(subItem.href, "href")}${addAttribute(isCurrentPage(subItem) ? "page" : void 0, "aria-current")}${addAttribute([{ active: isCurrentPage(subItem) }], "class:list")} data-astro-cid-vmt7ehs7> <span data-astro-cid-vmt7ehs7>${subItem.title}</span> ${subItem.badge && renderTemplate`<span${addAttribute(["badge", subItem.badge.variant || "default", subItem.badge.class], "class:list")} data-astro-cid-vmt7ehs7> ${subItem.badge.text} </span>`} </a> </li>`)} </ul>`} </details>`} </li>`)} </ul>`} </details>`} </li>`)} </ul> ` })} </nav> </aside>  ${renderScript($$result, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Sidebar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Sidebar.astro", void 0);

const $$Astro$n = createAstro("https://dolphilia.github.io");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Footer;
  const {
    linkGroups = [],
    copyright = "",
    socialLinks = [],
    showEditLink = false,
    editUrl = "",
    showPagination = false,
    prevPage,
    nextPage,
    sticky = false,
    class: className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(["footer", className, { "footer-sticky": sticky }], "class:list")} data-astro-cid-pc2ewo2e> <div class="footer-container" data-astro-cid-pc2ewo2e> <div class="footer-content" data-astro-cid-pc2ewo2e> ${showPagination && renderTemplate`${renderComponent($$result, "Pagination", $$Pagination, { "prev": prevPage, "next": nextPage, "data-astro-cid-pc2ewo2e": true })}`} ${linkGroups.length > 0 && renderTemplate`<div class="footer-links" data-astro-cid-pc2ewo2e> ${linkGroups.map((group) => renderTemplate`<div class="footer-group" data-astro-cid-pc2ewo2e> <h3 class="group-title" data-astro-cid-pc2ewo2e>${group.title}</h3> <ul class="group-links" data-astro-cid-pc2ewo2e> ${group.links.map((link) => renderTemplate`<li data-astro-cid-pc2ewo2e> <a${addAttribute(link.href, "href")}${addAttribute(link.target, "target")}${addAttribute(link.rel, "rel")} class="footer-link" data-astro-cid-pc2ewo2e> ${link.title} </a> </li>`)} </ul> </div>`)} </div>`} <div class="footer-bottom" data-astro-cid-pc2ewo2e> <div class="footer-meta" data-astro-cid-pc2ewo2e> ${showEditLink && renderTemplate`${renderComponent($$result, "EditLink", $$EditLink, { "url": editUrl, "data-astro-cid-pc2ewo2e": true })}`} ${copyright && renderTemplate`<p class="copyright" data-astro-cid-pc2ewo2e>${copyright}</p>`} </div> ${socialLinks.length > 0 && renderTemplate`<div class="social-links" data-astro-cid-pc2ewo2e> ${socialLinks.map(({ label, href, icon }) => renderTemplate`<a${addAttribute(href, "href")} rel="me" class="social-link"${addAttribute(label, "aria-label")}${addAttribute(label, "title")} data-astro-cid-pc2ewo2e> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-pc2ewo2e": true })} </a>`)} </div>`} </div> </div> </div> </footer> `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Footer.astro", void 0);

const $$Astro$m = createAstro("https://dolphilia.github.io");
const $$Alert = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Alert;
  const {
    title,
    variant = "info",
    class: className = "",
    ...rest
  } = Astro2.props;
  const variantConfig = {
    info: {
      icon: "information",
      label: "\u60C5\u5831"
    },
    success: {
      icon: "approve-check-circle",
      label: "\u6210\u529F"
    },
    warning: {
      icon: "warning",
      label: "\u8B66\u544A"
    },
    error: {
      icon: "error",
      label: "\u30A8\u30E9\u30FC"
    }
  };
  const config = variantConfig[variant];
  const ariaLabel = title || config.label;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["alert", `alert-${variant}`, className], "class:list")} role="alert"${addAttribute(ariaLabel, "aria-label")}${spreadAttributes(rest)} data-astro-cid-pweu5dcq> <div class="alert-icon" data-astro-cid-pweu5dcq> ${variant === "info" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-pweu5dcq> <path d="M12 11a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Zm.38-3.92a1 1 0 0 0-.76 0 1 1 0 0 0-.33.21 1.15 1.15 0 0 0-.21.33 1 1 0 0 0 .21 1.09c.097.088.209.16.33.21A1 1 0 0 0 13 8a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-.33-.21ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z" fill="currentColor" data-astro-cid-pweu5dcq></path> </svg>`} ${variant === "success" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-pweu5dcq> <path d="m14.72 8.79-4.29 4.3-1.65-1.65a1 1 0 1 0-1.41 1.41l2.35 2.36a1 1 0 0 0 1.41 0l5-5a1.002 1.002 0 1 0-1.41-1.42ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z" fill="currentColor" data-astro-cid-pweu5dcq></path> </svg>`} ${variant === "warning" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-pweu5dcq> <path d="M12 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10.67 1.47-8.05-14a3 3 0 0 0-5.24 0l-8 14A3 3 0 0 0 3.94 22h16.12a3 3 0 0 0 2.61-4.53Zm-1.73 2a1 1 0 0 1-.88.51H3.94a1 1 0 0 1-.88-.51 1 1 0 0 1 0-1l8-14a1 1 0 0 1 1.78 0l8.05 14a1 1 0 0 1 .05 1.02v-.02ZM12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z" fill="currentColor" data-astro-cid-pweu5dcq></path> </svg>`} ${variant === "error" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-pweu5dcq> <path d="M12 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71ZM20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62Z" fill="currentColor" data-astro-cid-pweu5dcq></path> </svg>`} </div> <div class="alert-content" data-astro-cid-pweu5dcq> ${title && renderTemplate`<p class="alert-title" data-astro-cid-pweu5dcq>${title}</p>`} <div class="alert-message" data-astro-cid-pweu5dcq> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Alert.astro", void 0);

const $$Astro$l = createAstro("https://dolphilia.github.io");
const $$ContentPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$ContentPanel;
  const {
    maxWidth = "var(--sl-content-width)",
    padding = "1.5rem var(--sl-content-pad-x)",
    withBorder = false,
    class: className = ""
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ maxWidth, padding }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["content-panel", className, { "with-border": withBorder }], "class:list")} data-astro-cid-fjz22j7e${addAttribute($$definedVars, "style")}> <div class="sl-container" data-astro-cid-fjz22j7e${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/ContentPanel.astro", void 0);

const $$Astro$k = createAstro("https://dolphilia.github.io");
const $$TableOfContentsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$TableOfContentsList;
  const { toc, depth = 0, isMobile = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["starlight-toc__list", { "starlight-toc__list--mobile": isMobile }], "class:list")} data-astro-cid-lbjphppl> ${toc.map((heading) => renderTemplate`<li class="starlight-toc__item" data-astro-cid-lbjphppl> <a class="starlight-toc__link"${addAttribute("#" + heading.slug, "href")}${addAttribute(depth, "data-depth")} data-astro-cid-lbjphppl> <span data-astro-cid-lbjphppl>${heading.text}</span> </a> ${heading.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "toc": heading.children, "depth": depth + 1, "isMobile": isMobile, "data-astro-cid-lbjphppl": true })}`} </li>`)} </ul> `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/TableOfContents/TableOfContentsList.astro", void 0);

const $$Astro$j = createAstro("https://dolphilia.github.io");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  function translate(key, locale = "en") {
    const translations = {
      "tableOfContents.onThisPage": {
        en: "On this page",
        ja: "\u3053\u306E\u30DA\u30FC\u30B8\u306E\u5185\u5BB9"
      }
    };
    return translations[key]?.[locale] || key;
  }
  const {
    headings,
    minLevel = 2,
    maxLevel = 3,
    lang = "en",
    isMobile = false
  } = Astro2.props;
  const filteredHeadings = headings.filter(
    (heading) => heading.depth >= minLevel && heading.depth <= maxLevel
  );
  const TOC_TITLE = "tableOfContents.onThisPage";
  return renderTemplate`${filteredHeadings.length > 0 && renderTemplate`${renderComponent($$result, "starlight-toc", "starlight-toc", { "data-min-h": minLevel, "data-max-h": maxLevel, "class:list": { "starlight-toc--mobile": isMobile }, "data-astro-cid-st3hy5cb": true }, { "default": () => renderTemplate`${maybeRenderHead()}<div class="starlight-toc-wrapper" data-astro-cid-st3hy5cb><nav aria-labelledby="starlight-toc-heading" data-astro-cid-st3hy5cb><h2 id="starlight-toc-heading" class="starlight-toc-heading" data-astro-cid-st3hy5cb>${translate(TOC_TITLE, lang)}</h2><div class="starlight-toc-list" data-astro-cid-st3hy5cb>${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": filteredHeadings, "isMobile": isMobile, "data-astro-cid-st3hy5cb": true })}</div></nav></div>` })}`}${renderScript($$result, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/TableOfContents/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/TableOfContents/TableOfContents.astro", void 0);

const $$Astro$i = createAstro("https://dolphilia.github.io");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prev, next, dir = "ltr" } = Astro2.props;
  const isRtl = dir === "rtl";
  const prevText = "\u524D\u306E\u30DA\u30FC\u30B8";
  const nextText = "\u6B21\u306E\u30DA\u30FC\u30B8";
  return renderTemplate`${maybeRenderHead()}<div class="pagination-links"${addAttribute(dir, "dir")} data-astro-cid-7vzfnnpk> ${prev && renderTemplate`<a${addAttribute(prev.url, "href")} rel="prev" data-astro-cid-7vzfnnpk> <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-astro-cid-7vzfnnpk> <path fill="currentColor"${addAttribute(isRtl ? "M13.3 17.3L9.7 13.7c-.4-.4-.4-1 0-1.4l3.6-3.6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L11.4 13l3.3 3.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3z" : "M10.7 17.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L12.6 13 9.3 9.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.6 3.6c.4.4.4 1 0 1.4l-3.6 3.6z", "d")} data-astro-cid-7vzfnnpk></path> </svg> <span data-astro-cid-7vzfnnpk> ${prevText} <br data-astro-cid-7vzfnnpk> <span class="link-title" data-astro-cid-7vzfnnpk>${prev.title}</span> </span> </a>`} ${next && renderTemplate`<a${addAttribute(next.url, "href")} rel="next" data-astro-cid-7vzfnnpk> <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-astro-cid-7vzfnnpk> <path fill="currentColor"${addAttribute(isRtl ? "M10.7 17.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L12.6 13 9.3 9.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.6 3.6c.4.4.4 1 0 1.4l-3.6 3.6z" : "M13.3 17.3L9.7 13.7c-.4-.4-.4-1 0-1.4l3.6-3.6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L11.4 13l3.3 3.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3z", "d")} data-astro-cid-7vzfnnpk></path> </svg> <span data-astro-cid-7vzfnnpk> ${nextText} <br data-astro-cid-7vzfnnpk> <span class="link-title" data-astro-cid-7vzfnnpk>${next.title}</span> </span> </a>`} </div> `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Pagination.astro", void 0);

const $$Astro$h = createAstro("https://dolphilia.github.io");
const $$EditLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$EditLink;
  const {
    url,
    text = "GitHub\u3067\u7DE8\u96C6",
    showIcon = true
  } = Astro2.props;
  return renderTemplate`${url && renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="edit-link" data-astro-cid-p35ocnp2>${showIcon && renderTemplate`<svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" data-astro-cid-p35ocnp2><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" data-astro-cid-p35ocnp2></path></svg>`}${text}</a>`}`;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/EditLink.astro", void 0);

const $$Astro$g = createAstro("https://dolphilia.github.io");
const $$AnchorHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$AnchorHeading;
  const { level, id, class: className } = Astro2.props;
  if (!id) {
    throw new Error("Missing `id` attribute passed to `<AnchorHeading>` component");
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`heading-wrapper level-h${level}`, "class")} data-astro-cid-pile2kwn> ${level === 1 && renderTemplate`<h1${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-pile2kwn>${renderSlot($$result, $$slots["default"])}</h1>`} ${level === 2 && renderTemplate`<h2${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-pile2kwn>${renderSlot($$result, $$slots["default"])}</h2>`} ${level === 3 && renderTemplate`<h3${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-pile2kwn>${renderSlot($$result, $$slots["default"])}</h3>`} ${level === 4 && renderTemplate`<h4${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-pile2kwn>${renderSlot($$result, $$slots["default"])}</h4>`} ${level === 5 && renderTemplate`<h5${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-pile2kwn>${renderSlot($$result, $$slots["default"])}</h5>`} ${level === 6 && renderTemplate`<h6${addAttribute(id, "id")}${addAttribute(className, "class")} data-astro-cid-pile2kwn>${renderSlot($$result, $$slots["default"])}</h6>`} <a class="anchor-link"${addAttribute(`#${id}`, "href")} data-astro-cid-pile2kwn> <span aria-hidden="true" class="anchor-icon" data-astro-cid-pile2kwn> <svg width="16" height="16" viewBox="0 0 24 24" data-astro-cid-pile2kwn> <path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z" data-astro-cid-pile2kwn></path> </svg> </span> <span class="sr-only" data-astro-cid-pile2kwn>このセクションへのリンク</span> </a> </div> `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/AnchorHeading.astro", void 0);

const $$Astro$f = createAstro("https://dolphilia.github.io");
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Banner;
  const { type = "info", dismissible = false } = Astro2.props;
  const bannerClass = `sl-banner sl-banner-${type}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(bannerClass, "class")} role="alert" data-astro-cid-632hraef> <div class="sl-banner-container" data-astro-cid-632hraef> <div class="sl-banner-content" data-astro-cid-632hraef> ${renderSlot($$result, $$slots["default"])} </div> ${dismissible && renderTemplate`<button class="sl-banner-close-button" aria-label="閉じる" data-dismiss-banner data-astro-cid-632hraef> <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-632hraef> <path d="m13.41 12 6.3-6.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1.004 1.004 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l6.29-6.3 6.29 6.3a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12Z" fill="currentColor" data-astro-cid-632hraef></path> </svg> </button>`} </div> </div>  ${renderScript($$result, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Banner.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Banner.astro", void 0);

const $$Astro$e = createAstro("https://dolphilia.github.io");
const $$ContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ContentNotice;
  const { type = "draft" } = Astro2.props;
  const typeConfig = {
    draft: {
      label: "\u4E0B\u66F8\u304D",
      color: "orange"
    },
    deprecated: {
      label: "\u975E\u63A8\u5968",
      color: "red"
    },
    wip: {
      label: "\u4F5C\u696D\u4E2D",
      color: "blue"
    },
    translation: {
      label: "\u7FFB\u8A33\u4E2D",
      color: "purple"
    }
  };
  const config = typeConfig[type];
  return renderTemplate`${maybeRenderHead()}<div class="starlight-aside starlight-aside--notice"${addAttribute(type, "data-type")} data-astro-cid-3dhl3akt> <div class="starlight-aside__title" data-astro-cid-3dhl3akt> <span class="starlight-aside__icon" data-astro-cid-3dhl3akt> ${type === "draft" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-3dhl3akt> <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z" fill="currentColor" data-astro-cid-3dhl3akt></path> </svg>`} ${type === "deprecated" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-3dhl3akt> <path d="M12 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71ZM20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62Z" fill="currentColor" data-astro-cid-3dhl3akt></path> </svg>`} ${type === "wip" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-3dhl3akt> <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" fill="currentColor" data-astro-cid-3dhl3akt></path> </svg>`} ${type === "translation" && renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-3dhl3akt> <path fill-rule="evenodd" d="M8.516 3a.94.94 0 0 0-.941.94v1.15H2.94a.94.94 0 1 0 0 1.882h7.362a7.422 7.422 0 0 1-1.787 3.958 7.42 7.42 0 0 1-1.422-2.425.94.94 0 1 0-1.774.627 9.303 9.303 0 0 0 1.785 3.043 7.422 7.422 0 0 1-4.164 1.278.94.94 0 1 0 0 1.881 9.303 9.303 0 0 0 5.575-1.855 9.303 9.303 0 0 0 4.11 1.74l-.763 1.525a.968.968 0 0 0-.016.034l-1.385 2.77a.94.94 0 1 0 1.683.841l1.133-2.267h5.806l1.134 2.267a.94.94 0 0 0 1.683-.841l-1.385-2.769a.95.95 0 0 0-.018-.036l-3.476-6.951a.94.94 0 0 0-1.682 0l-1.82 3.639a7.423 7.423 0 0 1-3.593-1.256 9.303 9.303 0 0 0 2.27-5.203h1.894a.94.94 0 0 0 0-1.881H9.456V3.94A.94.94 0 0 0 8.516 3Zm6.426 11.794a1.068 1.068 0 0 1-.02.039l-.703 1.407h3.924l-1.962-3.924-1.24 2.478Z" clip-rule="evenodd" fill="currentColor" data-astro-cid-3dhl3akt></path> </svg>`} </span> <span data-astro-cid-3dhl3akt>${config.label}</span> </div> <div class="starlight-aside__content" data-astro-cid-3dhl3akt> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/ContentNotice.astro", void 0);

const $$Astro$d = createAstro("https://dolphilia.github.io");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, tagline, image, actions = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="hero" data-astro-cid-b3uguwr3> ${image && renderTemplate`<div class="hero-image" data-astro-cid-b3uguwr3> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} width="400" height="400" loading="eager" decoding="async" data-astro-cid-b3uguwr3> </div>`} <div class="hero-content" data-astro-cid-b3uguwr3> <div class="hero-text" data-astro-cid-b3uguwr3> <h1 id="page-title" data-astro-cid-b3uguwr3>${unescapeHTML(title)}</h1> ${tagline && renderTemplate`<div class="hero-tagline" data-astro-cid-b3uguwr3>${unescapeHTML(tagline)}</div>`} </div> ${actions.length > 0 && renderTemplate`<div class="hero-actions" data-astro-cid-b3uguwr3> ${actions.map(({ text, link, variant = "primary", icon }) => renderTemplate`<a${addAttribute(link, "href")}${addAttribute(`hero-action hero-action-${variant}`, "class")} data-astro-cid-b3uguwr3> <span data-astro-cid-b3uguwr3>${text}</span> ${icon && renderTemplate`<span class="hero-action-icon" aria-hidden="true" data-astro-cid-b3uguwr3> <span class="icon" data-astro-cid-b3uguwr3>${icon}</span> </span>`} </a>`)} </div>`} </div> </div> `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Hero.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "theme-toggle", "theme-toggle", { "data-astro-cid-36z52cm2": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<button class="theme-toggle" type="button" aria-label="テーマを切り替える" data-astro-cid-36z52cm2> <span class="theme-toggle-icon" data-astro-cid-36z52cm2> <!-- 太陽アイコン（ライトモード用） --> <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-36z52cm2> <circle cx="12" cy="12" r="5" data-astro-cid-36z52cm2></circle> <line x1="12" y1="1" x2="12" y2="3" data-astro-cid-36z52cm2></line> <line x1="12" y1="21" x2="12" y2="23" data-astro-cid-36z52cm2></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-astro-cid-36z52cm2></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-astro-cid-36z52cm2></line> <line x1="1" y1="12" x2="3" y2="12" data-astro-cid-36z52cm2></line> <line x1="21" y1="12" x2="23" y2="12" data-astro-cid-36z52cm2></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-astro-cid-36z52cm2></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-astro-cid-36z52cm2></line> </svg> <!-- 月アイコン（ダークモード用） --> <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-36z52cm2> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-36z52cm2></path> </svg> </span> </button> ` })}  ${renderScript($$result, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/ThemeToggle.astro", void 0);

const $$Astro$c = createAstro("https://dolphilia.github.io");
const $$TwoColumnContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$TwoColumnContent;
  const { leftWidth = "50%", gap = "1rem" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="two-column-content"${addAttribute(`--left-width: ${leftWidth}; --column-gap: ${gap};`, "style")} data-astro-cid-deqvlzc3> <div class="left-column" data-astro-cid-deqvlzc3> ${renderSlot($$result, $$slots["left"])} </div> <div class="right-column" data-astro-cid-deqvlzc3> ${renderSlot($$result, $$slots["right"])} </div> </div> `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/TwoColumnContent.astro", void 0);

const $$Astro$b = createAstro("https://dolphilia.github.io");
const $$LinkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$LinkCard;
  const { title, description, href, icon, class: className, ...rest } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "variant": "link", "href": href, "title": title, "icon": icon, "class:list": ["link-card", className], ...rest, "data-astro-cid-osl6oe6a": true }, { "default": ($$result2) => renderTemplate`${description && renderTemplate`${maybeRenderHead()}<p class="link-card-description" data-astro-cid-osl6oe6a>${description}</p>`}` })} `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/LinkCard.astro", void 0);

const $$Astro$a = createAstro("https://dolphilia.github.io");
const $$CardGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CardGrid;
  const { class: className, stagger = false, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["card-grid", stagger && "stagger", className], "class:list")}${spreadAttributes(attrs)} data-astro-cid-cqnetz4d> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/CardGrid.astro", void 0);

let count = 0;
const getIDs = () => {
  const id = count++;
  return { panelId: "tab-panel-" + id, tabId: "tab-" + id };
};
function processPanels(html) {
  const panels = [];
  const regex = /<docs-tab-item[^>]*?data-label="([^"]*)"[^>]*?(?:data-icon="([^"]*)")?[^>]*?>([\s\S]*?)<\/docs-tab-item>/g;
  const iconRegex = /data-icon="([^"]*)"/;
  let match;
  let isFirst = true;
  let processedHtml = html;
  while ((match = regex.exec(html)) !== null) {
    const fullMatch = match[0];
    const label = match[1];
    let icon = match[2] || void 0;
    const content = match[3];
    if (!icon) {
      const iconMatch = fullMatch.match(iconRegex);
      if (iconMatch && iconMatch[1]) {
        icon = iconMatch[1];
      }
    }
    const ids = getIDs();
    const panel = {
      ...ids,
      label
    };
    if (icon) {
      panel.icon = icon;
    }
    panels.push(panel);
    const hiddenAttr = isFirst ? "" : "hidden";
    const replacement = `<div id="${ids.panelId}" aria-labelledby="${ids.tabId}" role="tabpanel" ${hiddenAttr}>${content}</div>`;
    processedHtml = processedHtml.replace(fullMatch, replacement);
    isFirst = false;
  }
  return {
    panels,
    html: processedHtml
  };
}
function getTabsScript() {
  return `
  document.addEventListener('DOMContentLoaded', () => {
    class DocsTabs extends HTMLElement {
      // 同期キーごとのタブグループを追跡するマップ
      static syncedTabs = new Map();

      constructor() {
        super();
        const tablist = this.querySelector('[role="tablist"]');
        if (!tablist) return;
        
        this.tabs = [...tablist.querySelectorAll('[role="tab"]')];
        this.panels = [...this.querySelectorAll(':scope > [role="tabpanel"]')];
        this.syncKey = this.dataset.syncKey;

        // 同期キーが指定されている場合、同期タブのマップに追加
        if (this.syncKey) {
          const syncedTabs = DocsTabs.syncedTabs.get(this.syncKey) || [];
          syncedTabs.push(this);
          DocsTabs.syncedTabs.set(this.syncKey, syncedTabs);
        }

        // タブにイベントリスナーを追加
        this.tabs.forEach((tab, i) => {
          // クリックイベント
          tab.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTab = tablist.querySelector('[aria-selected="true"]');
            if (e.currentTarget !== currentTab) {
              this.switchTab(e.currentTarget, i);
            }
          });

          // キーボードイベント - Starlightスタイルのキーボードナビゲーション
          tab.addEventListener('keydown', (e) => {
            const index = this.tabs.indexOf(e.currentTarget);
            // ユーザーが押したキーに基づいて新しいタブのインデックスを計算
            const nextIndex =
              e.key === 'ArrowLeft'
                ? index - 1
                : e.key === 'ArrowRight'
                  ? index + 1
                  : e.key === 'Home'
                    ? 0
                    : e.key === 'End'
                      ? this.tabs.length - 1
                      : null;
            if (nextIndex === null) return;
            if (this.tabs[nextIndex]) {
              e.preventDefault();
              this.switchTab(this.tabs[nextIndex], nextIndex);
            }
          });
        });

        // ローカルストレージから同期タブの状態を復元
        if (this.syncKey && typeof localStorage !== 'undefined') {
          const storedLabel = localStorage.getItem('docs-synced-tabs__' + this.syncKey);
          if (storedLabel) {
            const tabIndex = this.tabs.findIndex(tab => tab.textContent.trim() === storedLabel);
            if (tabIndex > 0) { // 最初のタブ以外の場合のみ切り替え
              this.switchTab(this.tabs[tabIndex], tabIndex, false);
            }
          }
        }
      }

      switchTab(newTab, index, shouldSync = true) {
        if (!newTab) return;

        // タブ切り替え前のスクロール位置を保存
        const previousTabsOffset = shouldSync ? this.getBoundingClientRect().top : 0;

        // すべてのタブを非アクティブにし、すべてのパネルを非表示にする
        this.tabs.forEach((tab) => {
          tab.setAttribute('aria-selected', 'false');
          tab.setAttribute('tabindex', '-1');
        });
        this.panels.forEach((oldPanel) => {
          oldPanel.hidden = true;
        });

        // 新しいタブとパネルをアクティブにする
        const newPanel = this.panels[index];
        if (newPanel) newPanel.hidden = false;
        newTab.removeAttribute('tabindex');
        newTab.setAttribute('aria-selected', 'true');
        
        if (shouldSync) {
          newTab.focus();
          this.syncTabs(newTab);
          
          // スクロール位置を調整して、タブ切り替え後も同じ位置に表示されるようにする
          window.scrollTo({
            top: window.scrollY + (this.getBoundingClientRect().top - previousTabsOffset),
            behavior: 'instant'
          });
        }
      }

      // 同期キーを持つすべてのタブグループ間でタブを同期
      syncTabs(newTab) {
        if (!this.syncKey) return;
        const label = newTab.textContent.trim();
        const syncedTabs = DocsTabs.syncedTabs.get(this.syncKey);
        if (!syncedTabs) return;

        // 同じ同期キーを持つ他のタブグループも同期
        for (const receiver of syncedTabs) {
          if (receiver === this) continue;
          const labelIndex = receiver.tabs.findIndex((tab) => tab.textContent.trim() === label);
          if (labelIndex === -1) continue;
          receiver.switchTab(receiver.tabs[labelIndex], labelIndex, false);
        }

        // 選択されたタブをローカルストレージに保存
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('docs-synced-tabs__' + this.syncKey, label);
        }
      }
    }

    // カスタム要素として登録
    customElements.define('docs-tabs', DocsTabs);
    
    // 既存のタブを初期化
    document.querySelectorAll('docs-tabs').forEach(tabs => {
      // すでに初期化されている場合は何もしない
      if (tabs._initialized) return;
      tabs._initialized = true;
    });
  });
  `;
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$9 = createAstro("https://dolphilia.github.io");
const $$Tabs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Tabs;
  const { class: className, syncKey, ...attrs } = Astro2.props;
  const panelHtml = await Astro2.slots.render("default");
  const { html, panels } = processPanels(panelHtml);
  const didRenderTabsScriptSymbol = Symbol.for("docs:did-render-tabs-script");
  const shouldRenderTabsScript = Astro2.locals[didRenderTabsScriptSymbol] !== true;
  if (shouldRenderTabsScript) {
    Astro2.locals[didRenderTabsScriptSymbol] = true;
  }
  return renderTemplate`${shouldRenderTabsScript && renderTemplate(_a$1 || (_a$1 = __template$1(["<script>", "<\/script>"])), unescapeHTML(getTabsScript()))}${renderComponent($$result, "docs-tabs", "docs-tabs", { "class:list": ["tabs", className], "data-sync-key": syncKey, ...attrs, "data-astro-cid-yzcgbnul": true }, { "default": () => renderTemplate` ${panels && renderTemplate`${maybeRenderHead()}<div class="tablist-wrapper not-content" data-astro-cid-yzcgbnul> <ul role="tablist" data-astro-cid-yzcgbnul> ${panels.map(({ icon, label, panelId, tabId }, idx) => renderTemplate`<li role="presentation" class="tab" data-astro-cid-yzcgbnul> <a role="tab"${addAttribute("#" + panelId, "href")}${addAttribute(tabId, "id")}${addAttribute(idx === 0 ? "true" : "false", "aria-selected")}${addAttribute(idx !== 0 ? -1 : 0, "tabindex")} data-astro-cid-yzcgbnul> ${icon && renderTemplate`<span class="tab-icon" data-astro-cid-yzcgbnul>${unescapeHTML(icon)}</span>`} ${label} </a> </li>`)} </ul> </div>`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(html)}` })} ` })} `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Tabs/Tabs.astro", void 0);

const $$Astro$8 = createAstro("https://dolphilia.github.io");
const $$TabItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TabItem;
  const {
    label,
    icon,
    class: className = "",
    ...attrs
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "docs-tab-item", "docs-tab-item", { "data-label": label, "data-icon": icon, "class:list": ["tab-item", className], ...attrs, "data-astro-cid-nqebt4yc": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Tabs/TabItem.astro", void 0);

function getDropdownScript() {
  return `
  document.addEventListener('DOMContentLoaded', function() {
    // すべてのドロップダウンコンポーネントを初期化
    document.querySelectorAll('docs-dropdown').forEach(dropdown => {
      if (dropdown._initialized) return;
      dropdown._initialized = true;
      
      const button = dropdown.querySelector('[data-dropdown-button]');
      const menu = dropdown.querySelector('[data-dropdown-menu]');
      
      if (button && menu) {
        // ボタンクリックでメニューの表示/非表示を切り替え
        button.addEventListener('click', function() {
          const expanded = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', (!expanded).toString());
          menu.classList.toggle('hidden');
        });
        
        // 外部クリックでメニューを閉じる
        document.addEventListener('click', function(event) {
          if (!dropdown.contains(event.target)) {
            button.setAttribute('aria-expanded', 'false');
            menu.classList.add('hidden');
          }
        });
        
        // ESCキーでメニューを閉じる
        document.addEventListener('keydown', function(event) {
          if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
            button.setAttribute('aria-expanded', 'false');
            menu.classList.add('hidden');
          }
        });
      }
    });
  });
  `;
}
function getCustomElementScript() {
  return `
  class DocsDropdown extends HTMLElement {
    constructor() {
      super();
    }
  }
  
  // カスタム要素として登録
  customElements.define('docs-dropdown', DocsDropdown);
  `;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro("https://dolphilia.github.io");
const $$Dropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const {
    label,
    icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>`,
    align = "right",
    width = "14rem",
    class: className = "",
    ...attrs
  } = Astro2.props;
  const didRenderDropdownScriptSymbol = Symbol.for("docs:did-render-dropdown-script");
  const shouldRenderDropdownScript = Astro2.locals[didRenderDropdownScriptSymbol] !== true;
  if (shouldRenderDropdownScript) {
    Astro2.locals[didRenderDropdownScriptSymbol] = true;
  }
  const buttonId = `dropdown-button-${Math.random().toString(36).substring(2, 11)}`;
  const menuId = `dropdown-menu-${Math.random().toString(36).substring(2, 11)}`;
  const $$definedVars = defineStyleVars([{ align, width }]);
  return renderTemplate`${shouldRenderDropdownScript && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["<script>", "<\/script><script>", "<\/script>"])), unescapeHTML(getCustomElementScript()), unescapeHTML(getDropdownScript())) })}`}${renderComponent($$result, "docs-dropdown", "docs-dropdown", { "class:list": ["dropdown", className], ...attrs, "data-astro-cid-4nobkb3x": true, "style": $$definedVars }, { "default": () => renderTemplate`  ${maybeRenderHead()}<div data-astro-cid-4nobkb3x${addAttribute($$definedVars, "style")}> <button type="button" class="dropdown-button"${addAttribute(buttonId, "id")} aria-expanded="false" aria-haspopup="true"${addAttribute(menuId, "aria-controls")} data-dropdown-button data-astro-cid-4nobkb3x${addAttribute($$definedVars, "style")}> <span class="dropdown-label" data-astro-cid-4nobkb3x${addAttribute($$definedVars, "style")}>${label}</span> <span class="dropdown-icon" data-astro-cid-4nobkb3x${addAttribute($$definedVars, "style")}>${unescapeHTML(icon)}</span> </button> </div>  <div class="dropdown-menu hidden"${addAttribute(menuId, "id")} role="menu" aria-orientation="vertical"${addAttribute(buttonId, "aria-labelledby")} tabindex="-1" data-dropdown-menu${addAttribute(align, "data-align")}${addAttribute(`${`width: ${width};`}; ${$$definedVars}`, "style")} data-astro-cid-4nobkb3x> <div class="dropdown-content" role="none" data-astro-cid-4nobkb3x${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> </div> ` })} `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Dropdown/Dropdown.astro", void 0);

const $$Astro$6 = createAstro("https://dolphilia.github.io");
const $$DropdownItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$DropdownItem;
  const {
    label,
    href,
    isActive = false,
    class: className = "",
    ...attrs
  } = Astro2.props;
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    "dropdown-item",
    isActive && "dropdown-item-active",
    className
  ], "class:list")} role="menuitem" tabindex="-1"${addAttribute(isActive ? "page" : void 0, "aria-current")}${spreadAttributes(attrs)} data-astro-cid-j2p7jebd>${renderSlot($$result, $$slots["before-label"])}<span class="dropdown-item-label" data-astro-cid-j2p7jebd>${label}</span>${renderSlot($$result, $$slots["after-label"])}${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button type="button"${addAttribute([
    "dropdown-item",
    isActive && "dropdown-item-active",
    className
  ], "class:list")} role="menuitem" tabindex="-1"${addAttribute(isActive ? "true" : void 0, "aria-current")}${spreadAttributes(attrs)} data-astro-cid-j2p7jebd>${renderSlot($$result, $$slots["before-label"])}<span class="dropdown-item-label" data-astro-cid-j2p7jebd>${label}</span>${renderSlot($$result, $$slots["after-label"])}${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/Users/dolphilia/github/docs-astro-dev/packages/ui/src/components/Dropdown/DropdownItem.astro", void 0);

const $$Astro$5 = createAstro("https://dolphilia.github.io");
const $$VersionSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$VersionSelector;
  const {
    versions,
    currentVersion,
    basePath,
    currentSlug = "",
    // 追加
    className = "",
    showVersionHistory = false
  } = Astro2.props;
  const currentVersionObj = versions.find((v) => v.id === currentVersion) || versions[0];
  const latestVersion = versions.find((v) => v.isLatest) || versions[0];
  const sortedVersions = [...versions].sort((a, b) => {
    if (a.isLatest === true && b.isLatest !== true) return -1;
    if (b.isLatest === true && a.isLatest !== true) return 1;
    const dateA = a.date ? a.date.getTime() : 0;
    const dateB = b.date ? b.date.getTime() : 0;
    return dateB - dateA;
  });
  function getVersionTag(version) {
    if (version.isLatest) {
      return { text: "\u6700\u65B0", type: "latest" };
    }
    if (version.tag) {
      if (version.tag.includes("beta")) {
        return { text: "\u30D9\u30FC\u30BF", type: "beta" };
      } else if (version.tag.includes("alpha")) {
        return { text: "\u30A2\u30EB\u30D5\u30A1", type: "alpha" };
      } else if (version.tag.includes("dev")) {
        return { text: "\u958B\u767A\u7248", type: "dev" };
      } else if (version.tag.includes("stable")) {
        return { text: "\u5B89\u5B9A\u7248", type: "stable" };
      }
    }
    return null;
  }
  function getVersionPath(versionId) {
    let path = `${basePath}/${versionId}`;
    if (currentSlug) {
      path += `/${currentSlug}`;
    }
    if (!path.endsWith("/") && path !== basePath) {
      path += "/";
    }
    return path;
  }
  function getDiffPath() {
    let diffBasePath = basePath;
    if (currentVersion && diffBasePath.includes(`/${currentVersion}`)) {
      diffBasePath = diffBasePath.replace(`/${currentVersion}`, "");
    }
    const slugPart = currentSlug ? `/${currentSlug}` : "";
    return `${diffBasePath}/version-diff${slugPart}`;
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["version-selector", className], "class:list")} data-astro-cid-drfyck4f> ${renderComponent($$result, "Dropdown", $$Dropdown, { "label": currentVersionObj.name, "align": "right", "width": "14rem", "class": "version-dropdown", "data-astro-cid-drfyck4f": true }, { "after-items": ($$result2) => renderTemplate`<div class="version-dropdown-footer" data-astro-cid-drfyck4f> <a${addAttribute(getDiffPath(), "href")} class="version-footer-link" data-astro-cid-drfyck4f> ${renderComponent($$result2, "Icon", $$Icon, { "name": "code", "class": "version-footer-icon", "data-astro-cid-drfyck4f": true })}
バージョン間の差分を表示
</a> </div>`, "before-items": ($$result2) => renderTemplate`<div class="version-dropdown-header" data-astro-cid-drfyck4f> ${renderComponent($$result2, "Icon", $$Icon, { "name": "document", "class": "version-icon", "data-astro-cid-drfyck4f": true })} <span data-astro-cid-drfyck4f>バージョンを選択</span> </div>`, "default": ($$result2) => renderTemplate`  ${sortedVersions.map((version) => {
    const tag = getVersionTag(version);
    return renderTemplate`${renderComponent($$result2, "DropdownItem", $$DropdownItem, { "label": version.name, "href": getVersionPath(version.id), "isActive": version.id === currentVersion, "data-astro-cid-drfyck4f": true }, { "after-label": ($$result3) => renderTemplate`${tag && renderTemplate`<span${addAttribute(`version-badge version-badge-${tag.type}`, "class")} data-astro-cid-drfyck4f> ${tag.text} </span>`}`, "default": ($$result3) => renderTemplate`<div class="version-meta" data-astro-cid-drfyck4f> <div class="version-date" data-astro-cid-drfyck4f> ${version.date && typeof version.date.toLocaleDateString === "function" ? version.date.toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric" }) : "N/A"} </div> ${version.description && renderTemplate`<div class="version-description" data-astro-cid-drfyck4f>${version.description}</div>`} </div> ` })}`;
  })} ` })} <div class="version-info" data-astro-cid-drfyck4f> ${currentVersion !== latestVersion.id && renderTemplate`<div class="version-alert" data-astro-cid-drfyck4f> ${renderComponent($$result, "Icon", $$Icon, { "name": "warning", "class": "version-alert-icon", "data-astro-cid-drfyck4f": true })} <span data-astro-cid-drfyck4f>
これは最新バージョンではありません。
<a${addAttribute(getVersionPath(latestVersion.id), "href")} class="version-alert-link" data-astro-cid-drfyck4f>
最新バージョン（${latestVersion.name}）を表示
</a> </span> </div>`} ${showVersionHistory && renderTemplate`<div class="version-history" data-astro-cid-drfyck4f> <h3 class="version-history-title" data-astro-cid-drfyck4f>バージョン履歴</h3> <ul class="version-history-list" data-astro-cid-drfyck4f> ${sortedVersions.slice(0, 3).map((version) => renderTemplate`<li class="version-history-item" data-astro-cid-drfyck4f> <a${addAttribute(getVersionPath(version.id), "href")}${addAttribute(["version-history-link", { "is-current": version.id === currentVersion }], "class:list")} data-astro-cid-drfyck4f> <span class="version-history-name" data-astro-cid-drfyck4f>${version.name}</span> ${getVersionTag(version) && renderTemplate`<span${addAttribute(`version-badge version-badge-${getVersionTag(version)?.type}`, "class")} data-astro-cid-drfyck4f> ${getVersionTag(version)?.text} </span>`} <span class="version-history-date" data-astro-cid-drfyck4f> ${version.date && typeof version.date.toLocaleDateString === "function" ? version.date.toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric" }) : "N/A"} </span> </a> </li>`)} </ul> ${versions.length > 3 && renderTemplate`<a href="#" class="version-history-more" data-astro-cid-drfyck4f>すべてのバージョンを表示</a>`} </div>`} </div> </div>  ${renderScript($$result, "/Users/dolphilia/github/docs-astro-dev/packages/versioning/src/components/VersionSelector.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dolphilia/github/docs-astro-dev/packages/versioning/src/components/VersionSelector.astro", void 0);

function Diff() {}
Diff.prototype = {
  diff: function diff(oldString, newString) {
    var _options$timeout;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var callback = options.callback;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.options = options;
    var self = this;

    function done(value) {
      if (callback) {
        setTimeout(function () {
          callback(undefined, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    } // Allow subclasses to massage the input prior to running


    oldString = this.castInput(oldString);
    newString = this.castInput(newString);
    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));
    var newLen = newString.length,
        oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;

    if (options.maxEditLength) {
      maxEditLength = Math.min(maxEditLength, options.maxEditLength);
    }

    var maxExecutionTime = (_options$timeout = options.timeout) !== null && _options$timeout !== void 0 ? _options$timeout : Infinity;
    var abortAfterTimestamp = Date.now() + maxExecutionTime;
    var bestPath = [{
      oldPos: -1,
      lastComponent: undefined
    }]; // Seed editLength = 0, i.e. the content starts with the same values

    var newPos = this.extractCommon(bestPath[0], newString, oldString, 0);

    if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
      // Identity per the equality and tokenizer
      return done([{
        value: this.join(newString),
        count: newString.length
      }]);
    } // Once we hit the right edge of the edit graph on some diagonal k, we can
    // definitely reach the end of the edit graph in no more than k edits, so
    // there's no point in considering any moves to diagonal k+1 any more (from
    // which we're guaranteed to need at least k+1 more edits).
    // Similarly, once we've reached the bottom of the edit graph, there's no
    // point considering moves to lower diagonals.
    // We record this fact by setting minDiagonalToConsider and
    // maxDiagonalToConsider to some finite value once we've hit the edge of
    // the edit graph.
    // This optimization is not faithful to the original algorithm presented in
    // Myers's paper, which instead pointlessly extends D-paths off the end of
    // the edit graph - see page 7 of Myers's paper which notes this point
    // explicitly and illustrates it with a diagram. This has major performance
    // implications for some common scenarios. For instance, to compute a diff
    // where the new text simply appends d characters on the end of the
    // original text of length n, the true Myers algorithm will take O(n+d^2)
    // time while this optimization needs only O(n+d) time.


    var minDiagonalToConsider = -Infinity,
        maxDiagonalToConsider = Infinity; // Main worker method. checks all permutations of a given edit length for acceptance.

    function execEditLength() {
      for (var diagonalPath = Math.max(minDiagonalToConsider, -editLength); diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2) {
        var basePath = void 0;
        var removePath = bestPath[diagonalPath - 1],
            addPath = bestPath[diagonalPath + 1];

        if (removePath) {
          // No one else is going to attempt to use this value, clear it
          bestPath[diagonalPath - 1] = undefined;
        }

        var canAdd = false;

        if (addPath) {
          // what newPos will be after we do an insertion:
          var addPathNewPos = addPath.oldPos - diagonalPath;
          canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
        }

        var canRemove = removePath && removePath.oldPos + 1 < oldLen;

        if (!canAdd && !canRemove) {
          // If this path is a terminal then prune
          bestPath[diagonalPath] = undefined;
          continue;
        } // Select the diagonal that we want to branch from. We select the prior
        // path whose position in the old string is the farthest from the origin
        // and does not pass the bounds of the diff graph
        // TODO: Remove the `+ 1` here to make behavior match Myers algorithm
        //       and prefer to order removals before insertions.


        if (!canRemove || canAdd && removePath.oldPos + 1 < addPath.oldPos) {
          basePath = self.addToPath(addPath, true, undefined, 0);
        } else {
          basePath = self.addToPath(removePath, undefined, true, 1);
        }

        newPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

        if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
          // If we have hit the end of both strings, then we are done
          return done(buildValues(self, basePath.lastComponent, newString, oldString, self.useLongestToken));
        } else {
          bestPath[diagonalPath] = basePath;

          if (basePath.oldPos + 1 >= oldLen) {
            maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
          }

          if (newPos + 1 >= newLen) {
            minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
          }
        }
      }

      editLength++;
    } // Performs the length of edit iteration. Is a bit fugly as this has to support the
    // sync and async mode which is never fun. Loops over execEditLength until a value
    // is produced, or until the edit length exceeds options.maxEditLength (if given),
    // in which case it will return undefined.


    if (callback) {
      (function exec() {
        setTimeout(function () {
          if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
            return callback();
          }

          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength && Date.now() <= abortAfterTimestamp) {
        var ret = execEditLength();

        if (ret) {
          return ret;
        }
      }
    }
  },
  addToPath: function addToPath(path, added, removed, oldPosInc) {
    var last = path.lastComponent;

    if (last && last.added === added && last.removed === removed) {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: {
          count: last.count + 1,
          added: added,
          removed: removed,
          previousComponent: last.previousComponent
        }
      };
    } else {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: {
          count: 1,
          added: added,
          removed: removed,
          previousComponent: last
        }
      };
    }
  },
  extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length,
        oldLen = oldString.length,
        oldPos = basePath.oldPos,
        newPos = oldPos - diagonalPath,
        commonCount = 0;

    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }

    if (commonCount) {
      basePath.lastComponent = {
        count: commonCount,
        previousComponent: basePath.lastComponent
      };
    }

    basePath.oldPos = oldPos;
    return newPos;
  },
  equals: function equals(left, right) {
    if (this.options.comparator) {
      return this.options.comparator(left, right);
    } else {
      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  },
  removeEmpty: function removeEmpty(array) {
    var ret = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }

    return ret;
  },
  castInput: function castInput(value) {
    return value;
  },
  tokenize: function tokenize(value) {
    return value.split('');
  },
  join: function join(chars) {
    return chars.join('');
  }
};

function buildValues(diff, lastComponent, newString, oldString, useLongestToken) {
  // First we convert our linked list of components in reverse order to an
  // array in the right order:
  var components = [];
  var nextComponent;

  while (lastComponent) {
    components.push(lastComponent);
    nextComponent = lastComponent.previousComponent;
    delete lastComponent.previousComponent;
    lastComponent = nextComponent;
  }

  components.reverse();
  var componentPos = 0,
      componentLen = components.length,
      newPos = 0,
      oldPos = 0;

  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];

    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function (value, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value.length ? oldValue : value;
        });
        component.value = diff.join(value);
      } else {
        component.value = diff.join(newString.slice(newPos, newPos + component.count));
      }

      newPos += component.count; // Common case

      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
      oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
      // The diffing algorithm is tied to add then remove output and this is the simplest
      // route to get the desired output with minimal overhead.

      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  } // Special case handle for when one terminal is ignored (i.e. whitespace).
  // For this case we merge the terminal into the prior string and drop the change.
  // This is only available for string mode.


  var finalComponent = components[componentLen - 1];

  if (componentLen > 1 && typeof finalComponent.value === 'string' && (finalComponent.added || finalComponent.removed) && diff.equals('', finalComponent.value)) {
    components[componentLen - 2].value += finalComponent.value;
    components.pop();
  }

  return components;
}

//
// Ranges and exceptions:
// Latin-1 Supplement, 0080–00FF
//  - U+00D7  × Multiplication sign
//  - U+00F7  ÷ Division sign
// Latin Extended-A, 0100–017F
// Latin Extended-B, 0180–024F
// IPA Extensions, 0250–02AF
// Spacing Modifier Letters, 02B0–02FF
//  - U+02C7  ˇ &#711;  Caron
//  - U+02D8  ˘ &#728;  Breve
//  - U+02D9  ˙ &#729;  Dot Above
//  - U+02DA  ˚ &#730;  Ring Above
//  - U+02DB  ˛ &#731;  Ogonek
//  - U+02DC  ˜ &#732;  Small Tilde
//  - U+02DD  ˝ &#733;  Double Acute Accent
// Latin Extended Additional, 1E00–1EFF

var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
var reWhitespace = /\S/;
var wordDiff = new Diff();

wordDiff.equals = function (left, right) {
  if (this.options.ignoreCase) {
    left = left.toLowerCase();
    right = right.toLowerCase();
  }

  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
};

wordDiff.tokenize = function (value) {
  // All whitespace symbols except newline group into one token, each newline - in separate token
  var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

  for (var i = 0; i < tokens.length - 1; i++) {
    // If we have an empty string in the next field and we have only word chars before and after, merge
    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
      tokens[i] += tokens[i + 2];
      tokens.splice(i + 1, 2);
      i--;
    }
  }

  return tokens;
};

var lineDiff = new Diff();

lineDiff.tokenize = function (value) {
  if (this.options.stripTrailingCr) {
    // remove one \r before \n to match GNU diff's --strip-trailing-cr behavior
    value = value.replace(/\r\n/g, '\n');
  }

  var retLines = [],
      linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  } // Merge the content and line separators into single tokens


  for (var i = 0; i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];

    if (i % 2 && !this.options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      if (this.options.ignoreWhitespace) {
        line = line.trim();
      }

      retLines.push(line);
    }
  }

  return retLines;
};

function diffLines$1(oldStr, newStr, callback) {
  return lineDiff.diff(oldStr, newStr, callback);
}

var sentenceDiff = new Diff();

sentenceDiff.tokenize = function (value) {
  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
};

var cssDiff = new Diff();

cssDiff.tokenize = function (value) {
  return value.split(/([{}:;,]|\s+)/);
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var objectPrototypeToString = Object.prototype.toString;
var jsonDiff = new Diff(); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

jsonDiff.useLongestToken = true;
jsonDiff.tokenize = lineDiff.tokenize;

jsonDiff.castInput = function (value) {
  var _this$options = this.options,
      undefinedReplacement = _this$options.undefinedReplacement,
      _this$options$stringi = _this$options.stringifyReplacer,
      stringifyReplacer = _this$options$stringi === void 0 ? function (k, v) {
    return typeof v === 'undefined' ? undefinedReplacement : v;
  } : _this$options$stringi;
  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
};

jsonDiff.equals = function (left, right) {
  return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'));
};
// object that is already on the "stack" of items being processed. Accepts an optional replacer

function canonicalize(obj, stack, replacementStack, replacer, key) {
  stack = stack || [];
  replacementStack = replacementStack || [];

  if (replacer) {
    obj = replacer(key, obj);
  }

  var i;

  for (i = 0; i < stack.length; i += 1) {
    if (stack[i] === obj) {
      return replacementStack[i];
    }
  }

  var canonicalizedObj;

  if ('[object Array]' === objectPrototypeToString.call(obj)) {
    stack.push(obj);
    canonicalizedObj = new Array(obj.length);
    replacementStack.push(canonicalizedObj);

    for (i = 0; i < obj.length; i += 1) {
      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
    }

    stack.pop();
    replacementStack.pop();
    return canonicalizedObj;
  }

  if (obj && obj.toJSON) {
    obj = obj.toJSON();
  }

  if (_typeof(obj) === 'object' && obj !== null) {
    stack.push(obj);
    canonicalizedObj = {};
    replacementStack.push(canonicalizedObj);

    var sortedKeys = [],
        _key;

    for (_key in obj) {
      /* istanbul ignore else */
      if (obj.hasOwnProperty(_key)) {
        sortedKeys.push(_key);
      }
    }

    sortedKeys.sort();

    for (i = 0; i < sortedKeys.length; i += 1) {
      _key = sortedKeys[i];
      canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
    }

    stack.pop();
    replacementStack.pop();
  } else {
    canonicalizedObj = obj;
  }

  return canonicalizedObj;
}

var arrayDiff = new Diff();

arrayDiff.tokenize = function (value) {
  return value.slice();
};

arrayDiff.join = arrayDiff.removeEmpty = function (value) {
  return value;
};

function diffLines(oldText, newText, options = {}) {
  const { ignoreWhitespace = false, context = 3 } = options;
  const changes = diffLines$1(oldText, newText, {
    ignoreWhitespace
  });
  let oldLineNumber = 1;
  let newLineNumber = 1;
  const results = [];
  changes.forEach((change) => {
    const lines = change.value.split("\n");
    if (lines[lines.length - 1] === "") {
      lines.pop();
    }
    lines.forEach((line) => {
      const result = {
        value: line,
        lineNumber: {}
      };
      if (change.added) {
        result.type = "added";
        result.lineNumber.new = newLineNumber++;
      } else if (change.removed) {
        result.type = "removed";
        result.lineNumber.old = oldLineNumber++;
      } else {
        result.type = "unchanged";
        result.lineNumber.old = oldLineNumber++;
        result.lineNumber.new = newLineNumber++;
      }
      results.push(result);
    });
  });
  if (context !== void 0 && context >= 0) {
    return limitDiffContext(results, context);
  }
  return results;
}
function limitDiffContext(results, context) {
  if (context === Infinity) {
    return results;
  }
  const limitedResults = [];
  let inChangePart = false;
  let unchangedCount = 0;
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    if (result.type !== "unchanged") {
      if (!inChangePart && i > 0) {
        const startIdx = Math.max(0, i - context);
        for (let j = startIdx; j < i; j++) {
          limitedResults.push(results[j]);
        }
      }
      limitedResults.push(result);
      inChangePart = true;
      unchangedCount = 0;
    } else {
      if (inChangePart) {
        unchangedCount++;
        if (unchangedCount <= context) {
          limitedResults.push(result);
        } else {
          inChangePart = false;
        }
      }
    }
  }
  return limitedResults;
}
function createHtmlDiff(diffResults) {
  let html = "";
  diffResults.forEach((result) => {
    let className = "";
    let linePrefix = "";
    switch (result.type) {
      case "added":
        className = "diff-added";
        linePrefix = "+";
        break;
      case "removed":
        className = "diff-removed";
        linePrefix = "-";
        break;
      case "unchanged":
        className = "diff-unchanged";
        linePrefix = " ";
        break;
    }
    let lineNumberHtml = "";
    if (result.lineNumber) {
      const oldLineNum = result.lineNumber.old || "";
      const newLineNum = result.lineNumber.new || "";
      lineNumberHtml = `<span class="diff-line-number">${oldLineNum}</span><span class="diff-line-number">${newLineNum}</span>`;
    }
    html += `<div class="diff-line ${className}">${lineNumberHtml}<span class="diff-prefix">${linePrefix}</span><span class="diff-content">${escapeHtml(result.value)}</span></div>`;
  });
  return html;
}
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

const $$Astro$4 = createAstro("https://dolphilia.github.io");
const $$VersionDiff = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$VersionDiff;
  const {
    versions,
    oldVersionId,
    newVersionId,
    oldContent,
    newContent,
    title = "\u30D0\u30FC\u30B8\u30E7\u30F3\u9593\u306E\u5DEE\u5206",
    className = ""
  } = Astro2.props;
  const oldVersion = versions.find((v) => v.id === oldVersionId);
  const newVersion = versions.find((v) => v.id === newVersionId);
  const diffResults = diffLines(oldContent, newContent, { context: 3 });
  const diffHtml = createHtmlDiff(diffResults);
  const addedLines = diffResults.filter((r) => r.type === "added").length;
  const removedLines = diffResults.filter((r) => r.type === "removed").length;
  const unchangedLines = diffResults.filter((r) => r.type === "unchanged").length;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`version-diff ${className}`, "class")} data-astro-cid-p3klslxh> ${renderComponent($$result, "Card", $$Card, { "data-astro-cid-p3klslxh": true }, { "content": ($$result2) => renderTemplate`<div data-astro-cid-p3klslxh> <div class="diff-stats" data-astro-cid-p3klslxh> <div class="diff-stat-item diff-stat-removed" data-astro-cid-p3klslxh> ${renderComponent($$result2, "Icon", $$Icon, { "name": "error", "class": "diff-stat-icon", "data-astro-cid-p3klslxh": true })} <span data-astro-cid-p3klslxh>削除: ${removedLines}行</span> </div> <div class="diff-stat-item diff-stat-added" data-astro-cid-p3klslxh> ${renderComponent($$result2, "Icon", $$Icon, { "name": "check", "class": "diff-stat-icon", "data-astro-cid-p3klslxh": true })} <span data-astro-cid-p3klslxh>追加: ${addedLines}行</span> </div> <div class="diff-stat-item diff-stat-unchanged" data-astro-cid-p3klslxh> ${renderComponent($$result2, "Icon", $$Icon, { "name": "check", "class": "diff-stat-icon", "data-astro-cid-p3klslxh": true })} <span data-astro-cid-p3klslxh>変更なし: ${unchangedLines}行</span> </div> </div> <div class="version-diff-controls" data-astro-cid-p3klslxh> <div class="diff-control-group" data-astro-cid-p3klslxh> <label class="diff-control-label" data-astro-cid-p3klslxh> <input type="checkbox" id="toggle-context" class="diff-control-checkbox" checked data-astro-cid-p3klslxh> <span class="diff-control-text" data-astro-cid-p3klslxh>コンテキストを表示</span> </label> <label class="diff-control-label" data-astro-cid-p3klslxh> <input type="checkbox" id="toggle-whitespace" class="diff-control-checkbox" data-astro-cid-p3klslxh> <span class="diff-control-text" data-astro-cid-p3klslxh>空白の変更を無視</span> </label> </div> <div class="diff-version-meta" data-astro-cid-p3klslxh> ${oldVersion?.date && newVersion?.date && renderTemplate`<div class="diff-date-range" data-astro-cid-p3klslxh> ${renderComponent($$result2, "Icon", $$Icon, { "name": "document", "class": "diff-meta-icon", "data-astro-cid-p3klslxh": true })} <span data-astro-cid-p3klslxh> ${oldVersion.date.toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric" })}
から
${newVersion.date.toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric" })}
まで
</span> </div>`} </div> </div> <div class="diff-scroll-container" data-astro-cid-p3klslxh> <div class="diff-container" data-astro-cid-p3klslxh> <div class="diff-header" data-astro-cid-p3klslxh> <div class="diff-header-old" data-astro-cid-p3klslxh>旧</div> <div class="diff-header-new" data-astro-cid-p3klslxh>新</div> <div class="diff-header-code" data-astro-cid-p3klslxh>コード</div> </div> <div id="diff-content" class="diff-content" data-astro-cid-p3klslxh> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(diffHtml)}` })} </div> </div> </div> </div>`, "title": ($$result2) => renderTemplate`<div class="diff-title-container" data-astro-cid-p3klslxh> <h2 class="diff-title" data-astro-cid-p3klslxh> ${renderComponent($$result2, "Icon", $$Icon, { "name": "code", "class": "diff-title-icon", "data-astro-cid-p3klslxh": true })} ${title} </h2> <div class="diff-version-info" data-astro-cid-p3klslxh> <span class="diff-version-old" data-astro-cid-p3klslxh>${oldVersion?.name || oldVersionId}</span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "right-arrow", "class": "diff-arrow-icon", "data-astro-cid-p3klslxh": true })} <span class="diff-version-new" data-astro-cid-p3klslxh>${newVersion?.name || newVersionId}</span> </div> </div>` })} </div>   ${renderScript($$result, "/Users/dolphilia/github/docs-astro-dev/packages/versioning/src/components/VersionDiff.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dolphilia/github/docs-astro-dev/packages/versioning/src/components/VersionDiff.astro", void 0);

const common$1 = {"home":"Home","search":"Search","menu":"Menu","close":"Close","back":"Back","next":"Next","previous":"Previous","loading":"Loading...","error":"Error","success":"Success","warning":"Warning","info":"Information","new":"New","updated":"Updated"};
const navigation$1 = {"docs":"Documentation","api":"API","examples":"Examples","blog":"Blog","community":"Community","github":"GitHub"};
const footer$1 = {"copyright":"© {year} All rights reserved.","terms":"Terms of Service","privacy":"Privacy Policy","contact":"Contact Us"};
const docs$1 = {"onThisPage":"On this page","editThisPage":"Edit this page","lastUpdated":"Last updated on {date}","version":"Version","versions":"Versions","language":"Language","languages":"Languages","toc":"Table of Contents","documentation":"Documentation","guide":"Guide","getting_started":"Getting Started","installation":"Installation","configuration":"Configuration","overview":"Overview","reference":"Reference","latest":"Latest","showLatest":"Show latest version","showDiff":"Show version differences"};
const search$1 = {"placeholder":"Search documentation...","noResults":"No results found for '{query}'","oneResult":"1 result for '{query}'","manyResults":"{count} results for '{query}'","searchResults":"Search Results","searchIn":"Search in","searching":"Searching...","closeSearch":"Close","error":"Search error","label":"Search","ctrlKey":"Ctrl"};
const error$1 = {"notFound":"Page not found","notFoundDescription":"The page you are looking for does not exist or has been moved.","goHome":"Go to Home"};
const projects$1 = {"title":"Projects","description":"Browse all available documentation projects"};
const contribute$1 = {"title":"Contribute","description":"Help us improve the documentation by contributing to the project","button":"Contribute on GitHub"};
const en = {
  common: common$1,
  navigation: navigation$1,
  footer: footer$1,
  docs: docs$1,
  search: search$1,
  error: error$1,
  projects: projects$1,
  contribute: contribute$1,
};

const common = {"home":"ホーム","search":"検索","menu":"メニュー","close":"閉じる","back":"戻る","next":"次へ","previous":"前へ","loading":"読み込み中...","error":"エラー","success":"成功","warning":"警告","info":"情報","new":"新着","updated":"更新済"};
const navigation = {"docs":"ドキュメント","api":"API","examples":"サンプル","blog":"ブログ","community":"コミュニティ","github":"GitHub"};
const footer = {"copyright":"© {year} All rights reserved.","terms":"利用規約","privacy":"プライバシーポリシー","contact":"お問い合わせ"};
const docs = {"onThisPage":"このページの内容","editThisPage":"このページを編集","lastUpdated":"最終更新日: {date}","version":"バージョン","versions":"バージョン一覧","language":"言語","languages":"言語一覧","toc":"目次","documentation":"ドキュメント","guide":"ガイド","getting_started":"はじめに","installation":"インストール","configuration":"設定","overview":"概要","reference":"リファレンス","latest":"最新","showLatest":"最新バージョンを表示","showDiff":"バージョン間の差分を表示"};
const search = {"placeholder":"ドキュメントを検索...","noResults":"'{query}'に一致する結果が見つかりませんでした","oneResult":"'{query}'の検索結果: 1件","manyResults":"'{query}'の検索結果: {count}件","searchResults":"検索結果","searchIn":"検索対象","searching":"検索中...","closeSearch":"閉じる","error":"検索エラー","label":"検索","ctrlKey":"Ctrl"};
const error = {"notFound":"ページが見つかりません","notFoundDescription":"お探しのページは存在しないか、移動された可能性があります。","goHome":"ホームに戻る"};
const projects = {"title":"プロジェクト一覧","description":"利用可能なすべてのドキュメントプロジェクトを閲覧する"};
const contribute = {"title":"貢献する","description":"プロジェクトに貢献して、ドキュメントの改善にご協力ください","button":"GitHubで貢献する"};
const ja = {
  common,
  navigation,
  footer,
  docs,
  search,
  error,
  projects,
  contribute,
};

const locales = {
  en,
  ja
};
const defaultLocale = "en";

function t(key, lang = defaultLocale, params = {}) {
  const segments = key.split(".");
  let translation = locales[lang];
  if (!translation) {
    translation = locales[defaultLocale];
  }
  for (const segment of segments) {
    if (translation && typeof translation === "object" && segment in translation) {
      translation = translation[segment];
    } else {
      if (lang !== defaultLocale) {
        return t(key, defaultLocale, params);
      }
      return key;
    }
  }
  if (typeof translation !== "string") {
    return key;
  }
  return replaceParams(translation, params);
}
function replaceParams(text, params) {
  return Object.entries(params).reduce((result, [key, value]) => {
    const regex = new RegExp(`{${key}}`, "g");
    return result.replace(regex, String(value));
  }, text);
}

const $$Astro$3 = createAstro("https://dolphilia.github.io");
const $$SearchBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SearchBar;
  const {
    lang,
    placeholder = t("search.placeholder", lang),
    className = ""
  } = Astro2.props;
  const translations = {
    placeholder,
    searchResults: t("search.searchResults", lang),
    noResults: t("search.noResults", lang),
    oneResult: t("search.oneResult", lang),
    manyResults: t("search.manyResults", lang),
    searching: t("search.searching", lang),
    closeSearch: t("search.closeSearch", lang),
    searchError: t("search.error", lang),
    ctrlKey: "Ctrl",
    slashKey: "/"
  };
  return renderTemplate`${renderComponent($$result, "site-search", "site-search", { "class": className, "data-translations": JSON.stringify(translations), "data-lang": lang, "data-base-url": "/docs/sample-docs", "data-astro-cid-m2gdk2tz": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<button data-open-modal${addAttribute(t("search.label", lang), "aria-label")} aria-keyshortcuts="Control+K /" data-astro-cid-m2gdk2tz> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "data-astro-cid-m2gdk2tz": true })} <span class="search-text" data-astro-cid-m2gdk2tz>${t("search.label", lang)}</span> <kbd class="shortcut-hint" data-astro-cid-m2gdk2tz> <kbd class="platform-key" data-astro-cid-m2gdk2tz>${translations.ctrlKey}</kbd><kbd data-astro-cid-m2gdk2tz>K</kbd> </kbd> </button> <dialog style="padding:0"${addAttribute(t("search.label", lang), "aria-label")} data-astro-cid-m2gdk2tz> <div class="dialog-frame" data-astro-cid-m2gdk2tz> <div class="dialog-header" data-astro-cid-m2gdk2tz> <div class="search-input-container" data-astro-cid-m2gdk2tz> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "class": "search-icon", "data-astro-cid-m2gdk2tz": true })} <input type="search" id="search-input"${addAttribute(placeholder, "placeholder")} autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" data-astro-cid-m2gdk2tz> </div> <button data-close-modal class="close-button" data-astro-cid-m2gdk2tz> ${renderComponent($$result, "Icon", $$Icon, { "name": "close", "data-astro-cid-m2gdk2tz": true })} <span class="sr-only" data-astro-cid-m2gdk2tz>${translations.closeSearch}</span> </button> </div> <div class="search-results" data-astro-cid-m2gdk2tz> <div id="search-results-container" class="results-container" data-astro-cid-m2gdk2tz> <div class="loading-indicator" data-astro-cid-m2gdk2tz> <div class="loading-spinner" data-astro-cid-m2gdk2tz></div> <p data-astro-cid-m2gdk2tz>${t("search.searching", lang)}</p> </div> </div> </div> </div> </dialog> ` })}  ${renderScript($$result, "/Users/dolphilia/github/docs-astro-dev/packages/search/src/components/SearchBar.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/dolphilia/github/docs-astro-dev/packages/search/src/components/SearchBar.astro", void 0);

const $$Astro$2 = createAstro("https://dolphilia.github.io");
const $$SearchResults = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SearchResults;
  const { lang, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="search-results-container"${addAttribute(["search-results-container hidden", className], "class:list")} data-astro-cid-ukimvwbe> <div class="modal-overlay" data-astro-cid-ukimvwbe> <div class="modal-container" data-astro-cid-ukimvwbe> <div class="modal-header" data-astro-cid-ukimvwbe> <h2 class="modal-title" data-astro-cid-ukimvwbe>${t("search.searchResults", lang)}</h2> <button id="close-search-results" class="close-button" aria-label="閉じる" data-astro-cid-ukimvwbe> <svg xmlns="http://www.w3.org/2000/svg" class="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ukimvwbe> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-ukimvwbe></path> </svg> </button> </div> <div id="search-results" class="search-results-content" data-astro-cid-ukimvwbe> <div class="loading-container" data-astro-cid-ukimvwbe> <div class="loading-animation" data-astro-cid-ukimvwbe> <div class="loading-content" data-astro-cid-ukimvwbe> <div class="loading-bar loading-bar-large" data-astro-cid-ukimvwbe></div> <div class="loading-bar-group" data-astro-cid-ukimvwbe> <div class="loading-bar loading-bar-full" data-astro-cid-ukimvwbe></div> <div class="loading-bar loading-bar-medium" data-astro-cid-ukimvwbe></div> </div> </div> </div> </div> </div> </div> </div> </div>  ${renderScript($$result, "/Users/dolphilia/github/docs-astro-dev/packages/search/src/components/SearchResults.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dolphilia/github/docs-astro-dev/packages/search/src/components/SearchResults.astro", void 0);

const $$Astro$1 = createAstro("https://dolphilia.github.io");
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const LANG_NAMES = {
    en: "English",
    ja: "\u65E5\u672C\u8A9E"
  };
  const LANG_FLAGS = {
    en: "\u{1F1FA}\u{1F1F8}",
    ja: "\u{1F1EF}\u{1F1F5}"
  };
  const ACTUAL_BASE_URL = docsConfig.baseUrl;
  const configuredSupportedLangs = docsConfig.supportedLangs;
  const {
    currentLang,
    currentVersion,
    // このプロパティはパス生成ロジックでは直接使用されません
    supportedLangs = configuredSupportedLangs,
    // propsのデフォルト値をconfigから取得
    className = "",
    showLanguageInfo = false
  } = Astro2.props;
  const currentPathname = Astro2.url.pathname;
  const normalizedPathname = currentPathname.endsWith("/") ? currentPathname : `${currentPathname}/`;
  let pathWithoutActualBase = normalizedPathname;
  if (normalizedPathname.startsWith(ACTUAL_BASE_URL + "/")) {
    pathWithoutActualBase = normalizedPathname.substring(ACTUAL_BASE_URL.length);
  } else if (normalizedPathname === ACTUAL_BASE_URL + "/") {
    pathWithoutActualBase = "/";
  }
  const pathSegments = pathWithoutActualBase.split("/").filter((segment) => segment !== "");
  let langFromPath = void 0;
  let versionFromPath = void 0;
  let slugParts = [];
  const langsForRegex = configuredSupportedLangs.join("|");
  const langRegex = new RegExp(`^(${langsForRegex})$`);
  if (pathSegments.length > 0 && pathSegments[0].match(langRegex)) {
    langFromPath = pathSegments.shift();
  }
  if (pathSegments.length > 0 && pathSegments[0].match(/^v\\d+([\\.-]\\d+)*$/)) {
    versionFromPath = pathSegments.shift();
  }
  slugParts = pathSegments;
  let slugFromPath = slugParts.join("/");
  if (slugFromPath && !slugFromPath.endsWith("/")) {
    slugFromPath += "/";
  } else if (!slugFromPath && slugParts.length === 0 && (langFromPath || versionFromPath)) {
    slugFromPath = "";
  }
  const langPaths = supportedLangs.map((langCode) => {
    const targetLang = langCode;
    const newPathParts = [ACTUAL_BASE_URL];
    newPathParts.push(targetLang);
    if (versionFromPath) {
      newPathParts.push(versionFromPath);
    }
    if (slugFromPath && slugFromPath !== "/") {
      const cleanSlug = slugFromPath.endsWith("/") ? slugFromPath.slice(0, -1) : slugFromPath;
      if (cleanSlug) {
        newPathParts.push(cleanSlug);
      }
    }
    let newPath = newPathParts.filter((part) => typeof part === "string" && part !== "").join("/");
    newPath = newPath.replace(/\/\/+/g, "/");
    if (newPath !== "/" && !newPath.endsWith("/")) {
      newPath += "/";
    }
    return {
      lang: langCode,
      name: LANG_NAMES[langCode] || langCode,
      flag: LANG_FLAGS[langCode] || "\u{1F310}",
      path: newPath,
      isCurrent: langCode === currentLang
    };
  });
  const languageInfo = {
    en: {
      nativeName: "English",
      englishName: "English",
      direction: "ltr",
      description: "Official documentation in English"
    },
    ja: {
      nativeName: "\u65E5\u672C\u8A9E",
      englishName: "Japanese",
      direction: "ltr",
      description: "\u65E5\u672C\u8A9E\u306E\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="language-selector-container" data-astro-cid-ltpqzwiw> ${renderComponent($$result, "Dropdown", $$Dropdown, { "label": LANG_NAMES[currentLang] || currentLang, "align": "right", "width": "14rem", "class": `language-dropdown ${className}`, "data-astro-cid-ltpqzwiw": true }, { "before-items": ($$result2) => renderTemplate`<div class="language-dropdown-header" data-astro-cid-ltpqzwiw> ${renderComponent($$result2, "Icon", $$Icon, { "name": "document", "class": "language-icon", "data-astro-cid-ltpqzwiw": true })} <span data-astro-cid-ltpqzwiw>言語を選択</span> </div>`, "default": ($$result2) => renderTemplate`  ${langPaths.map((pathInfo) => renderTemplate`${renderComponent($$result2, "DropdownItem", $$DropdownItem, { "label": pathInfo.name, "href": pathInfo.path, "isActive": pathInfo.isCurrent, "data-astro-cid-ltpqzwiw": true }, { "after-label": ($$result3) => renderTemplate`${pathInfo.isCurrent && renderTemplate`<span class="language-current-badge" data-astro-cid-ltpqzwiw>現在</span>`}`, "before-label": ($$result3) => renderTemplate`<span class="language-flag" data-astro-cid-ltpqzwiw>${pathInfo.flag}</span>`, "default": ($$result3) => renderTemplate`  ${showLanguageInfo && languageInfo[pathInfo.lang] && renderTemplate`<div class="language-info" data-astro-cid-ltpqzwiw> <div class="language-native-name" data-astro-cid-ltpqzwiw> ${languageInfo[pathInfo.lang].nativeName} ${languageInfo[pathInfo.lang].nativeName !== languageInfo[pathInfo.lang].englishName && renderTemplate`<span class="language-english-name" data-astro-cid-ltpqzwiw>(${languageInfo[pathInfo.lang].englishName})</span>`} </div> <div class="language-description" data-astro-cid-ltpqzwiw>${languageInfo[pathInfo.lang].description}</div> </div>`}` })}`)} ` })} ${showLanguageInfo && renderTemplate`<div class="language-info-panel" data-astro-cid-ltpqzwiw> <h3 class="language-info-title" data-astro-cid-ltpqzwiw>現在の言語: ${LANG_NAMES[currentLang]}</h3> <div class="language-info-content" data-astro-cid-ltpqzwiw> <p class="language-info-description" data-astro-cid-ltpqzwiw> ${languageInfo[currentLang]?.description || ""} </p> <div class="language-info-meta" data-astro-cid-ltpqzwiw> <div class="language-info-item" data-astro-cid-ltpqzwiw> <span class="language-info-label" data-astro-cid-ltpqzwiw>ネイティブ名:</span> <span class="language-info-value" data-astro-cid-ltpqzwiw>${languageInfo[currentLang]?.nativeName || currentLang}</span> </div> <div class="language-info-item" data-astro-cid-ltpqzwiw> <span class="language-info-label" data-astro-cid-ltpqzwiw>英語名:</span> <span class="language-info-value" data-astro-cid-ltpqzwiw>${languageInfo[currentLang]?.englishName || currentLang}</span> </div> <div class="language-info-item" data-astro-cid-ltpqzwiw> <span class="language-info-label" data-astro-cid-ltpqzwiw>テキスト方向:</span> <span class="language-info-value" data-astro-cid-ltpqzwiw>${languageInfo[currentLang]?.direction === "rtl" ? "\u53F3\u304B\u3089\u5DE6" : "\u5DE6\u304B\u3089\u53F3"}</span> </div> </div> </div> </div>`} </div>  ${renderScript($$result, "/Users/dolphilia/github/docs-astro-dev/apps/sample-docs/src/components/LanguageSelector.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dolphilia/github/docs-astro-dev/apps/sample-docs/src/components/LanguageSelector.astro", void 0);

const versions = [
  {
    id: "v1",
    name: "Version 1.0",
    date: /* @__PURE__ */ new Date("2024-01-01"),
    isLatest: false
  },
  {
    id: "v2",
    name: "Version 2.0",
    date: /* @__PURE__ */ new Date("2025-01-01"),
    isLatest: true
  }
];

const $$Astro = createAstro("https://dolphilia.github.io");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title,
    lang,
    version = "v1",
    hasSidebar = false,
    hasToc = false,
    showSearch = true,
    showVersionSelector = true
  } = Astro2.props;
  versions.find((v) => v.isLatest)?.id || version;
  const navItems = [
    { title: "Home", href: `${docsConfig.baseUrl}/${lang}` },
    { title: "Docs", href: `${docsConfig.baseUrl}/${lang}/${version}/guide/getting-started` },
    { title: "API", href: `${docsConfig.baseUrl}/${lang}/${version}/api` }
  ];
  const linkGroups = [
    {
      title: "Docs",
      links: [
        { title: "Getting Started", href: `${docsConfig.baseUrl}/${lang}/${version}/guide/getting-started` },
        { title: "API Reference", href: `${docsConfig.baseUrl}/${lang}/${version}/api` }
      ]
    },
    {
      title: "Community",
      links: [
        { title: "GitHub", href: "https://github.com" },
        { title: "Discord", href: "https://discord.com" }
      ]
    }
  ];
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const htmlDataAttributes = { "data-theme": "dark" };
  if (hasToc) htmlDataAttributes["data-has-toc"] = "";
  if (hasSidebar) htmlDataAttributes["data-has-sidebar"] = "";
  const numBaseSegments = docsConfig.baseUrl.split("/").filter((p) => p.length > 0).length;
  const slugSliceIndex = 1 + numBaseSegments + 1 + 1;
  const currentSlugForSelector = Astro2.url.pathname.split("/").slice(slugSliceIndex).join("/");
  return renderTemplate`<html${addAttribute(lang, "lang")}${spreadAttributes(htmlDataAttributes, void 0, { "class": "astro-ouamjn2i" })} data-astro-cid-ouamjn2i> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml"${addAttribute(`${docsConfig.baseUrl}/favicon.svg`, "href")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Documentation site built with Astro"><title>${title} | Docs</title>${renderScript($$result, "/Users/dolphilia/github/docs-astro-dev/apps/sample-docs/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body data-astro-cid-ouamjn2i> <div class="page sl-flex" data-astro-cid-ouamjn2i> <header class="header" data-astro-cid-ouamjn2i> <div class="header-container" data-astro-cid-ouamjn2i> <div class="header-content" data-astro-cid-ouamjn2i> <div class="title-wrapper sl-flex" data-astro-cid-ouamjn2i> <a${addAttribute(`${docsConfig.baseUrl}/${lang}`, "href")} class="site-title" data-astro-cid-ouamjn2i>Docs Astro</a> </div> <div class="sl-flex print:hidden" data-astro-cid-ouamjn2i> ${showSearch && renderTemplate`<div class="search-container" data-astro-cid-ouamjn2i> ${renderComponent($$result, "SearchBar", $$SearchBar, { "lang": lang, "placeholder": `\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u691C\u7D22...`, "data-astro-cid-ouamjn2i": true })} </div>`} </div> <div class="sl-hidden md:sl-flex print:hidden right-group" data-astro-cid-ouamjn2i> ${showVersionSelector && version && renderTemplate`<div class="version-selector-container" data-astro-cid-ouamjn2i> ${renderComponent($$result, "VersionSelector", $$VersionSelector, { "currentVersion": version, "versions": versions, "basePath": `${docsConfig.baseUrl}/${lang}`, "currentSlug": currentSlugForSelector, "data-astro-cid-ouamjn2i": true })} </div>`} <div aria-label="言語選択" data-astro-cid-ouamjn2i> ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "currentLang": lang, "data-astro-cid-ouamjn2i": true })} </div> <nav aria-label="メインナビゲーション" data-astro-cid-ouamjn2i> ${renderComponent($$result, "Navigation", $$Navigation, { "items": navItems, "data-astro-cid-ouamjn2i": true })} </nav> </div> </div> </div> </header> <div class="main-frame" data-astro-cid-ouamjn2i> <main id="main-content" data-astro-cid-ouamjn2i> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, { "linkGroups": linkGroups, "copyright": `\xA9 ${currentYear} Docs Astro. All rights reserved.`, "data-astro-cid-ouamjn2i": true })} </div> </body></html>`;
}, "/Users/dolphilia/github/docs-astro-dev/apps/sample-docs/src/layouts/MainLayout.astro", void 0);

export { $$Icon as $, $$Tabs as a, $$TabItem as b, $$MainLayout as c, $$Card as d, $$Button as e, $$Sidebar as f, $$TableOfContents as g, $$Pagination as h, $$EditLink as i, t, versions as v };
