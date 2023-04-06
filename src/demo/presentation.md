---
title: ppt
icon: markdown
order: 2
category:
  - Guide
tag:
  - ppt
---

@slidestart sky

# 幻灯片 1

你好这是幻灯片演示页面，为您展示启用了`presentation: true`的效果
```ts
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        presentation: true,
      },
    },
  }),
});
```

---

## 你可以通过鼠标滚动来浏览

---

一个有文字和 [链接](https://sakurafeiyu.top) 的段落

---
## 标注幻灯片
使用`--`来分割垂直幻灯片
使用`---`标注水平幻灯片
--
使用`<!-- .slide: ... -->`在幻灯片上添加属性  
使用`<!-- .element: ... -->`在前一个 HTML 元素上添加属性

---
## 超大字体
<!-- .element: class="r-fit-text" -->
--
## 背景
<!-- .slide: data-auto-animate data-background-color="rgb(70, 70, 255)" -->
--
## 渐隐
- fade-in
<!-- .element: class="fragment fade-in" -->
- fade-out
<!-- .element: class="fragment fade-out" -->
END
---

@slideend
