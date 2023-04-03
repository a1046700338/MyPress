---
icon: edit
title: lively_aplayerjs
date: 2022-03-23 22:14:07
category:
- 教程
tag:
- 分享
- lively-wallpaper
---
关于LivelyWallpaper指路[☞](https://sakurafeiyu.gitee.io/2022/01/07/lively/)  
由于LivelyWallpaper的特性，可以将网页代码作为壁纸背景。  
所以我就有了接下来的想法~
<!-- more -->

# 我想要做一个aplayerjs的音乐在线播放壁纸
[aplayer](https://aplayer.js.org/#/)  
> Wow, such a beautiful HTML5 music player
这是一个漂亮的H5音乐播放器
# 看文档[📕](https://aplayer.js.org/#/home)

可以通过npm或yarn（[npm是什么?]()）安装  
而我选择直接引入  
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js">
	<title>liveAplayer</title>
</head>
<body>
	<div id="aplayer"></div>
	<script src="APlayer.min.js">
		var c = "hello,liveAplayer";
		console.log(c);
		const ap = new APlayer({
    	container: document.getElementById('aplayer'),
    	audio: [{
    		name: 'name',//歌名
    		artist: 'artist',//艺术家
    		url: 'url.mp3',//歌曲
    		cover: 'cover.jpg'//歌曲图片
    	}]
    });
	</script>
</body>
</html>
```

[![la1.md.png](https://b.picbed.cn/file/picbed-cn/2022/03/24/la1.md.png)](https://www.picbed.cn/image/roxU3)
更多参数，[参见](https://aplayer.js.org/#/zh-Hans/?id=%E5%8F%82%E6%95%B0)  
我想要引入我的网易云歌单，所以我需要用到[MetingJS](https://github.com/metowolf/MetingJS)  
快速开始
```HTML
<!-- require APlayer -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<!-- require MetingJS -->
<script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>

<meting-js
	server="netease"
	type="playlist"
	id="60198">
</meting-js>
```

```
server:音乐服务器提供商，网易云orQQor酷狗等等
type:显示类型，建议选择playlist
id:音乐源的歌单id，如'https://music.163.com/#/playlist?id=2130110815'，这串url，id就为2130110815
auto:音乐链接，netease, tencent, xiami
autoplay:设置是否自动播放，true or false
theme:主题，可自定义颜色
loop:是否循环播放，'all', 'one', 'none' ，分别是，全部播放完毕后循环，循环一次，不循环
order:默认为list
preload:预加载，默认为auto
volume:播放音量，值在1到0之间，默认值70%
```

```HTML
<!DOCTYPE html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>liveAplayer</title>
	<!-- require APlayer -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
	<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js">
		const ap = new APlayer({
			container: document.getElementById('player'),
			fixed: false,//底部吸盘模式
		});
	</script>
	<!-- require MetingJS -->
	<script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>
	<meting-js
		server="netease"
		type="playlist"
		id="2130110815"
		fixed="true"
		autoplay="false">
	</meting-js>
</head>
<body>
	<h1></h1>
</body>
</html>
```

# 代码实现

```HTML
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- require APlayer -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
	<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js">
		const ap = new APlayer({
    		container: document.getElementById('player'),
    		listFolded:true,
    	});
	</script>
	<!-- require MetingJS -->
	<script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>
	<meting-js
		server="netease"
		type="playlist"
		id="2130110815"
		autoplay="false">
	</meting-js>
	<title>liveAplayer</title>
</head>
<body>
	<div id="app">
	</div>
</body>
</html>
```

效果图
[![la3.md.png](https://b.picbed.cn/file/picbed-cn/2022/03/24/la3.md.png)](https://www.picbed.cn/image/roPJa)
to be continue...
明天写style

## 将播放器居中
让播放器位置居中，使桌面看起来更赏心悦目

