---
title: aplayer
date: 2021-03-10 18:44:23
category:
- 教程
tag:
- aplayer
- 分享
- 技术
- 小白
---
# aplayer是一款非常漂亮的h5音乐播放器，是GitHub开源项目
## 1. 安装音乐插件
在你的hexo博客目录右键git bash here里输入这行代码
```
npm install --save hexo-tag-aplayer
```
## 2. 然后在网站的根目录下的配置文件_config.yml中填上以下代码：
注意冒号后都有空格
```
aplayer:
  #script_dir: some/place                        # Public 目录下脚本目录路径，默认: 'assets/js'
  #style_dir: some/place                         # Public 目录下样式目录路径，默认: 'assets/css'
  #cdn: http://xxx/aplayer.min.js                # 引用 APlayer.js 外部 CDN 地址 (默认不开启)
  #style_cdn: http://xxx/aplayer.min.css         # 引用 APlayer.css 外部 CDN 地址 (默认不开启)
  meting: true                                   # MetingJS 支持
  #meting_api: http://xxx/api.php                # 自定义 Meting API 地址
  #meting_cdn: http://xxx/Meing.min.js           # 引用 Meting.js 外部 CDN 地址 (默认不开启)
  asset_inject: true                             # 自动插入 Aplayer.js 与 Meting.js 资源脚本, 默认开启
  #externalLink: http://xxx/aplayer.min.js       # 老版本参数，功能与参数 cdn 相同
```
## 3. 建立音乐页面
使用命令创建音乐界面，比如命名为music。
<code>hexo new page music</code>
打开网站根目录source\music\index.md根据hexo-tag-aplayer文档书写即可。
打开index.md在markdown中要这样写
```
{% meting "4857802824" "netease" "playlist" "autoplay" "mutex:false" "listmaxheight:340px" "preload:none" "theme:#ad7a86"%}
```
其会被渲染为html
## 4. 在主题配置文件_config.yml中menu
```
  menu:
    - { key: "home", link: "/", icon: "iconfont icon-home-fill" }
    - { key: "archive", link: "/archives/", icon: "iconfont icon-archive-fill" }
    - { key: "category", link: "/categories/", icon: "iconfont icon-category-fill" }
    - { key: "tag", link: "/tags/", icon: "iconfont icon-tags-fill" }
    - { key: "about", link: "/about/", icon: "iconfont icon-user-fill" }
    - { key: "music", link: "/music/", icon: "iconfont icon-music" }

```
添加上这一行
```
- { key: "music", link: "/music/", icon: "iconfont icon-music" }
```
