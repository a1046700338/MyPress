---
title: vuepress组件
date: 2023-3-8 18:32:22
tags:
- 教程
- vuepress
---
# 全局组件
定义全局组件，当你的VuePress每个页面都需要自定义容器时使用，它会像`footer` `header`那样全局布局。
> 原文：https://www.vuepress.cn/plugin/official/plugin-register-components.html#vuepress-plugin-register-components

引入插件
```sh
npm install -D @vuepress/plugin-register-components
```
配置config
```js
module.exports = {
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: [
         'demo1'
        ]
      }
    ]
  ]
}
```
在`.vuepress`中创建`components`目录结构如下：
```
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      ├─ OtherComponent.vue
      └─ demo-2.vue
         └─ demo-2-1.vue
```
随后可以直接在 markdown 文件中使用
```md
<demo-1/>
<OtherComponent/>
<demo-2/>
<demo-2-1/>
```

<Vssue :title="$title" />