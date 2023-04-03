---
icon: edit
title: vuepress组件
date: 2023-3-8 18:32:22
category:
- vuepress
tag:
- 组件
- vue
---
# 全局组件
注册全局组件，当你的VuePress每个页面都需要自定义容器时使用，它会像`footer` `header`那样全局布局。
::: tip
[原文](https://www.vuepress.cn/plugin/official/plugin-register-components.html#vuepress-plugin-register-components)
:::

引入插件
```sh
npm install -D @vuepress/plugin-register-components
```
配置config
```js
// .vuepress/config.js
module.exports = {
  // ...
  plugins: [
    // ....
    [
      '@vuepress/register-components',{
        componentsDir: [
          'DemoLayout',
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
      ├─ DemoLayout.vue
      ├─ BoxLayout.vue
      ├─ OtherComponent.vue
      └─ demo-2.vue
         └─ demo-2-1.vue
```
随后可以直接在 markdown 文件中使用
```md
<DemoLayout/>
<BoxLayout/>
<OtherComponent/>
<demo-2/>
<demo-2-1/>
```

## 更多实例
如果你想了解更多关于vuepress框架的注册组件运用，那么请看。
### [实例1：相册页](/remember/)  
[源码]()  

<!-- <RecoDemo :collapse="true">
  <template slot="code-template">
    <<< @/.vuepress/components/BoxLayout.vue?template
  </template>
  <template slot="code-script">
    <<< @/.vuepress/components/BoxLayout.vue?script
  </template>
  <template slot="code-style">
    <<< @/.vuepress/components/BoxLayout.vue?style
  </template>
</RecoDemo> -->

# 自定义页面
::: tip
[原文](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html#%E7%89%B9%E5%AE%9A%E9%A1%B5%E9%9D%A2%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B8%83%E5%B1%80)
:::

## 自定义md页面
如果你想要使用一个完全自定义的组件来代替当前的页面（而只保留导航栏），你可以再次使用 `YAML front matter` 来指定这个组件。
```yaml
---
layout: DemoLayout
---
```
这将会为当前的页面渲染 `.vuepress/components/DemoLayout.vue` 布局。  
也就是说，我们需要在 `.vuepress/components/` 目录下创建 `vue组件`。
```vue
<template>
    <div class="DemoLayout">
        <p>你的名字是：{{user.name}}</p>
        <p>你几岁了呀：{{user.age}}</p>
    </div>
</template>

<script>
export default {
    name: 'DemoLayout',
    data() {
        return {
            user: {
                name: '阿乐',
                age: '17',
            }
        }
    },
}
</script>
```
我们还可以在自定义页面中 自定义页面类。
## 自定义页面类
```yaml
---
# layout: DemoLayout
pageClass: demo-page-class
---
```
只能在 `.vuepress/styles/index.styl` 中编写针对该页面的 CSS ：
```css
/* .vuepress/styles/index.styl */

.theme-container.demo-page-class {
  /* 特定页面的 CSS */
}
```