---
title: 我的音乐
sidebar: false
article: false
pageInfo: false
lastUpdated: false
editLink: false
prev: false
next: false
---
<!-- <Meting server="netease"
        type="playlist"
        mid="2130110815"
        :volume="0.5"
        :lrc-type="3"/> -->

<!-- require APlayer -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<!-- require MetingJS -->
<script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>

<meting-js
	server="netease"
	type="playlist"
	id="2130110815"
        autoplay="false">
</meting-js>

正在开发中...  
敬请期待

# 开发过程
我想使用像aplayer或是meting那样的音乐播放器，但一圈开下来也达不到我的要求，直到我看到了[这篇文章](https://daodaolee.cn/posts/vuepress_plugin_awesome_musicplayer.html)，`可视化音乐播放器`深深吸引了我，我决定以此为目标开发出适合自己音乐页的可视化音乐播放器插件。  
vuepress_plugin_awesome_musicplayer 不完善的点：
- 不支持播放列表
- 不支持调整音量
- 不支持api调用
- 不支持上下一首


# 联系方式
<div>
<i class="iconfont feiyu-email-fill"></i>
<a target="_blank" rel="noopener" href="mailto:sakurafeiyu666@163.com">Email me</a>
<span>|</span>
<i class="iconfont feiyu-github"></i>
<a target="_blank" rel="noopener" href="https://github.com/a1046700338">MyGitHub</a>
<span>|</span>
<i class="iconfont feiyu-gitee-fill-round"></i>
<a target="_blank" rel="noopener" href="https://gitee.com/sakurafeiyu/">MyGitee</a>
</div>