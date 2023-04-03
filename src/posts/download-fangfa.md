---
icon: edit
title: 下载解决方法
date: 2020-12-25 19:13:01
category:
- 教程
tag:
- 教程
- 分享
---
qBittorrent 是一款开源免费的种子和磁力链接下载工具，支持 Windows、Mac 和 Linux，且功能非常强大。
<!-- more -->
# qBittorrent
> 本文参考的文章有：https://trackerslist.com/#/zh  
> https://qu.js.cn/how-to-speed-github/#release%E4%B8%8B%E8%BD%BD%E5%8A%A0%E9%80%9F  
> https://zhuanlan.zhihu.com/p/64254201  

## qBittorrent 是一款开源免费的种子和磁力链接下载工具，支持 Windows、Mac 和 Linux，且功能非常强大。  
## qBittorrent的[下载链接](https://www.qbittorrent.org/download.php "官方网址")  
由于国内大部分用户并没有公网 IP，直接使用可能下载没速度，就需要安装好qBittorrent后再对设置配置一下  
https://trackerslist.com/#/zh 这个网站专门整合Tracker（具体Tracker是什么意思自行百度），每8小时都有更新  
## qBittorrent设置Tracker
点击齿轮图标进入设置界面  
[![qBittorrent主界面](https://z3.ax1x.com/2021/07/11/W9LOsK.png)](https://imgtu.com/i/W9LOsK)  
复制Tracker  
[![复制Tracker](https://z3.ax1x.com/2021/07/11/W9OgFH.png)](https://imgtu.com/i/W9OgFH)  
将Tracker粘贴到下方输入框中
[![粘贴Tracker](https://z3.ax1x.com/2021/07/11/W9O46P.png)](https://imgtu.com/i/W9O46P)  
然后点击 [Apply] 保存。(如下图所示)
[![qBittorrent设置](https://z3.ax1x.com/2021/07/11/W9OT0S.png)](https://imgtu.com/i/W9OT0S)  

# 国内加速Github的几种方案
国内最常用的镜像地址：
1. github.com.cnpmjs.org
2. hub.fastgit.org (推荐)
3. gitclone.com
网站的内容与GitHub完整同步，可进行下载克隆等操作。  
## 仓库克隆下载
原地址
```
git clone https://github.com/docker/compose.git
```

改为
```
git clone https://github.com.cnpmjs.org/docker/compose.git
```

或者
```
git clone https://hub.fastgit.org/docker/compose.git
```
## Release下载加速
原地址
```
wget https://github.com/golang/go/archive/go1.15.7.tar.gz
```

改为
```
wget https://hub.fastgit.org/golang/go/archive/go1.15.7.tar.gz
```
## jsDelivr
jsDelivr是一个开源的网站，是一款公共免费的CDN，提供稳定的CDN。
> CDN的全称是Content Delivery Network，即内容分发网络。CDN是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器,
> 通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN的关键
> 技术主要有内容存储和分发技术。(摘自[百度百科](https://baike.baidu.com/item/CDN "CDN百度百科")\)
也就是说你上传资源（比如：图片，js之类的文件）到互联网上，CDN服务器帮你存储下来，当你要使用又可以调用它给你的CDN url。
1. 直接引用(临时)
格式为：

https://cdn.jsdelivr.net/gh/<用户名>/<仓库名>/<文件及路径>

例如：GitHub

https://github.com/qimage/pub/blob/main/avatar.webp

转成 jsdelivr

https://cdn.jsdelivr.net/gh/qimage/pub/avatar.webp

github.com 替换成 cdn.jsdelivr.net/gh

/blob/main 删除

2. 引入版本号(推荐)
版本号用@符链接，格式为：

https://cdn.jsdelivr.net/gh/<用户名>/<仓库名>@版本号/<文件及路径>

例如：GitHub

https://github.com/qimage/pub/blob/main/avatar.webp

转成 jsdelivr

https://cdn.jsdelivr.net/gh/qimage/pub@main/avatar.webp

github.com 替换成 cdn.jsdelivr.net/gh

/blob/ 替换成 @

注：main为创建的版本号

建议使用发布版本号方案，只要单次版本号下的内容大小不超过50M即可，超过50M时使用多版本号。

## 更多详情请查看[这篇文章](https://qu.js.cn/how-to-speed-github/#release%E4%B8%8B%E8%BD%BD%E5%8A%A0%E9%80%9F)
