---
icon: edit
title: 焕然一新的blog
date: 2023-04-04
category:
- blog
tag:
- 分享
star: true
sticky: true
---
sakurafeiyu.top
<!-- more -->
# 博客框架更换为VuePress
博客焕然一新！  
为了更好的使用和学习Vue，所以我决定使用VuePress框架来驱动博客。  
通过`vercel`来自动化部署项目，实现解放双手。  
那么它的好处是什么呢？它可以：
- 支持vue，vue的特性，它统统都有，我们可以直接在vuepress上进行组件的编写
- 文档化支持丰富，作为博客也是不错的选择
- 社区支持，丰富的插件，以及任何有关于vue，或是支持vue的插件，你都可以部署到你的vuepress上

# 主题使用
Blog采用VuePress驱动markdown文档，已[hope](https://vuepress.vuejs.org/zh/)为VuePress主题使用。
## 如何使用该主题
克隆我的仓库[GitHub](https://github.com/a1046700338/MyPress)  
当然你也可以直接去hope官网进行主题安装
::: tabs

@tab git clone

```sh
git clone git@github.com:a1046700338/MyPress.git
```

@tab or

```sh
git clone https://github.com/a1046700338/MyPress.git
```

:::


随后
```shell
npm i
```
如果你在使用 `npm` 的过程中，遇到依赖下载失败的情况，那么请使用[nvm](https://github.com/coreybutler/nvm-windows)

## 运行
::: tabs

@tab 项目调试

```sh
npm run docs:dev
```

@tab 项目打包

```sh
npm run docs:build
```

:::

## 项目文件结构
```
  <docs> → 由你指定的项目文件夹
     │
     ├── .github → github 配置文件，github aciton部署
     │
     ├── package.json → Nodejs 配置文件
     │
     ├── .gitignore → git 配置文件
     │
     ├── CHANGELOG.MD → git commit 文件
     │
     │── src
          ├── .vuepress (可选的) → 用于存放全局的配置、组件、静态资源等
          │
          ├── dist (默认的) → 构建输出目录
          │
          ├── public (可选的) → 静态资源目录
          │
          ├── styles (可选的) → 用于存放样式相关的文件
          │
          ├── config.{js,ts} (可选的) → 配置文件的入口文件
          │
          └── client.{js,ts} (可选的) → 客户端文件
          │
          ├── ... → 其他项目文档
          ├── README.md → 项目主页

```

## 首页配置
[参考](https://theme-hope.vuejs.press/zh/guide/blog/home.html)  
你需要在相应的页面的`frontmatter`中，设置`home: true`和`layout: BlogHome`来使用博客主页。  
你可以使用`heroText`设置主标题，并通过`tagline`设置副标题。
### 我的配置参考
```md
# src/README.md
---
home: true
layout: BlogHome
icon: home
title: Home
bgImage: /bg.jpg
heroText: 寄蜉蝣于天地，渺沧海之一粟。
heroFullScreen: true
copyright: false
footer: MIT Licensed | Copyright © 2020-present sakurafeiyu
---

```
图片资源的默认路径是`src/.vuepress/public`，所以你只要将图片资源放于该文件夹下即可。  
更多详细配置可以看我的仓库源码。 
...To be continue

# ChatGLM
[我的博客文章有详细介绍](../posts/chatGLM.md)  
笔电拖不动www，爆显存了QAQ
