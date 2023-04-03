---
icon: edit
title: jeecg
date: 2021-01-08 00:27:41
category:
  - 教程
tag:
- 分享
- 转载
- 小白
---
jeecg开发平台二次开发研究以及笔记
<!-- more -->
# 关于jeecg
[jeecg官方网站](http://www.jeecg.com/) <span>|</span> [jeecg源码下载](https://github.com/zhangdaiscott/jeecg-boot)
jeecg是一款基于代码生成器“低代码”开发平台的一个开源项目，帮助解决Java项目70%的重复工作，让开发更多关注业务逻辑。既能快速提高开发效率，帮助公司节省成本，同时又不失灵活性！
拥有众多的开发插件，有在线编辑，移动开发，流程设计，大屏报表，工作流，OA办公，微信管家等众多功能。
采用的最新主流前后分离式框架（Springboot+Mybatis+Antd），代码生成器依赖性低，扩展性强，可灵活实现二次开发。

# 使用jeecg
## jeecg开发所需要使用到的工具
详情查看[jeecg官方文档](http://doc.jeecg.com/2043872)
**开发工具包** 链接: https://pan.baidu.com/s/1RBcJ2Nc3ZGR_4lCRoCiv3g 提取码: jxrw （百度网盘链接）；https://cloud.189.cn/t/euEnAjjYj2U3 访问码:9i12  （天翼云盘链接）。
## 安装教程
### jdk
### mysql
### navicat
### nodejs
Node.js安装及环境配置（Windows）
参考https://my.oschina.net/jeecg/blog/4277939
说明：这里的环境配置主要配置的是npm安装的全局模块所在的路径，以及缓存cache的路径，之所以要配置，是因为以后在执行类似：npm install express [-g] （后面的可选参数-g，g代表global全局安装的意思）的安装语句时，会将安装的模块安装到【C:\Users\用户名\AppData\Roaming\npm】路径中，占C盘空间。
例如：我希望将全模块所在路径和缓存路径放在我node.js安装的文件夹中，则在我安装的文件夹【F:\workspace\node.js】下创建两个文件夹【node_global】及【node_cache】
创建完两个空文件夹之后，打开cmd命令窗口，输入
```
npm config set prefix "F:\workspace\node.js\node_global"
npm config set cache "F:\workspace\node.js\node_cache"
```
注意：引号内是指你的nodejs安装路径
Windows下Yarn安装与使用 参考https://my.oschina.net/jeecg/blog/4278012
### redis
redis安装包[]()，上面的开发工具包里也有，自由选择。
参考https://www.runoob.com/redis/redis-install.html
下载好redis后解压，
打开cmd命令窗口，<code>windows</code>键加<code>R</code>键，
使用cd命令进入到你的redis解压目录：
```
cd\
d:
cd D:\redis64-3.0.501
redis-server.exe redis.windows.conf
```
![](https://cdn.jsdelivr.net/gh/a1046700338/a1046700338.github.io@2.0/images/jeecg_01.jpg)
![](https://cdn.jsdelivr.net/gh/a1046700338/a1046700338.github.io@2.0/images/jeecg_02.jpg)
然后再启动一个 cmd 窗口，原来的不要关闭，不然就无法访问服务端了。
切换到 redis 目录下
```
cd\
d:
cd D:\redis64-3.0.501
```
运行：
```
redis-cli.exe -h 127.0.0.1 -p 6379
```
设置键值对：
```
set myKey abc
```
取出键值对：
```
get myKey
```
127.0.0.1 是本机 IP ，6379 是 redis 服务端口。现在输入 PING 命令
redis 127.0.0.1:6379><code>ping</code>
PONG
以上说明我们已经成功安装了redis。
### maven
## 环境配置
后端开发建议采用IDEA，方便多Maven模块开发，热部署请集成JRebel。
参考http://doc.jeecg.com/2043872
jdk8安装[]()
Maven安装[]()
[IDEA热部署JRebel安装](https://blog.csdn.net/weixin_42831477/article/details/82229436)
## 安装
安装好jdk，mysql，navicat，nodejs，redis，maven以及集成开发环境（eclipse或idea或webstrom）后，
## 导入Maven项目
![]()
![]()
参考https://blog.csdn.net/weixin_43151608/article/details/100121724
## 启动项目



