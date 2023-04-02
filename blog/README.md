---
sidebar: false
home: true
heroText: 'Hi！'
description: '这里是花诽语，练习时长两年半的前端web练习生，请多多指教。'
bgImage: '../bg.jpg'
bgImageStyle: {
  height: '400px'
}
---

:::slot home-icon
<div>
    <img src="../favicon.png" width="100px" height="100px">
    <span></span>
    <img src="./.vuepress/public/vuepresslogo.png" width="100px" height="100px">
</div>
:::
<Content slot-key="home-icon"/>


## 有趣的
比较好玩的是，VuePress框架提供的可玩性非常强。  
（包括markdown本身的语法就不多说了，主要对vue在markdown中的应用进行演示）

::: tip
在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。——VuePress中文网首页
:::


比如：  
### 具名插槽
::: tip 原文：https://www.vuepress.cn/guide/markdown-slot.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81-markdown-%E6%8F%92%E6%A7%BD
:::

通过以下语法定义插槽
```md
:::slot name

:::
```
在布局组件中利用`Content`组件来使用该插槽：
```vue
<Content slot-key="name"/>
```
当前页就是使用了`具名插槽`渲染组件，你可以查看源代码发现其中的奥秘。

### 定制的markdown容器
::: tip 原文：https://github.com/markdown-it/markdown-it-container https://vuepress.github.io/reference/plugin/container.html#container
:::

需要安装依赖
```shell
npm i -D @vuepress/plugin-container@next
// npm install markdown-it-container
```
安装好此插件后，还需要在`config.js`中配置：
```js
// ...
plugins: [
    // ...

]
```
使用此插件后，在 markdown 中就可以方便使用一些块容器，如：
```md
::: warning
*here be dragons*
:::
```
它看起来就会像这样：
```html
<div class="warning">
<em>here be dragons</em>
</div>
```

### 全局引入了APlayer
[插件地址](https://moefyit.github.io/moefy-vuepress/packages/meting.html)
```js
// .vuepress/config.js
module.exports = {
   plugins: [
      'meting',
      {
         meting: {
            server: 'netease',
            type: 'playlist',
            mid: '2130110815',
         }, // 不配置该项的话不会出现全局播放器
         aplayer: {
            lrcType: 3,
            volume: 0.5,
         },
      },
   ],
}
```

如果你想在md页面单独使用
```html
<Meting server="netease"
        type="playlist"
        mid="2130110815"
        :volume="0.5"
        :lrc-type="3"/>
```