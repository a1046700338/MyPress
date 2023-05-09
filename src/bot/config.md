---
title: 栞栞插件配置
category:
  - bot
order: 3
tag:
  - bot插件
  - 插件配置
  - QQ群机器人
  - nonebot
---
栞栞的插件配置
<!--more-->
# NoneBot官方商店
NoneBot社区提供了一个插件平台，可以在上面找到你所需要的插件。
[nonebot插件网址](https://v2.nonebot.dev/store)

# nbcli命令
```sh
# 卸载插件
nb plugin uninstall <插件名称>
# 安装插件
nb plugin install <插件名称>
# 列出商店所有适配器
nb adapter list
# 搜索商店适配器
nb adapter search [可选关键词]
# 卸载适配器
nb adapter uninstall <适配器名称>
```

## 实例
```sh
nb plugin install nonebot-plugin-help
nb plugin uninstall nonebot-plugin-help
```
