---
title: 音乐页开发
order: 2
category:
  - 开发笔记
tag:
  - music
---

# 前情提要
我想使用像aplayer或是meting那样的音乐播放器，但一圈开下来也达不到我的要求，直到我看到了[这篇文章](https://daodaolee.cn/posts/vuepress_plugin_awesome_musicplayer.html)，`可视化音乐播放器`深深吸引了我，我决定以此为目标开发出适合自己音乐页的可视化音乐播放器插件。  
vuepress_plugin_awesome_musicplayer 不完善的点：
- 不支持播放列表
- 不支持调整音量
- 不支持api调用
- 不支持上下一首

# 开发插件
[vuepress架构](https://v2.vuepress.vuejs.org/zh/advanced/architecture.html)  

## 参考
https://nyakku.moe/posts/2019/10/21/moefy-your-vuepress-blog.html#%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E6%BC%82%E4%BA%AE%E7%9A%84%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8
https://moefyit.github.io/moefy-vuepress/packages/meting.html#install  
https://github.com/moefyit/vuepress-plugin-meting  
[社区插件](https://theme-hope.vuejs.press/zh/cookbook/vuepress/plugin.html#%E4%BB%8B%E7%BB%8D)  
[插件开发官方文档](https://v2.vuepress.vuejs.org/zh/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks)  
