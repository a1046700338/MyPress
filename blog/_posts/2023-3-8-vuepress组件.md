---
title: vuepress组件
date: 2023-3-8 18:32:22
tags:
- 教程
- vuepress
---
# 使用组件

> 原文：https://www.vuepress.cn/guide/using-vue.html#%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6

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