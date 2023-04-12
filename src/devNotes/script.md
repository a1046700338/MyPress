---
title: 脚本开发
order: 2
category:
  - 开发笔记
tag:
  - 脚本开发
---


# 技术选型
开发游戏脚本实现懒人化操作，想要对一些频繁的操作添加自定义事件。  
目前合适的相关轮子有：
- [autojs](https://pro.autojs.org/docs/zh/guide/)
- 网易游戏的自动化测试项目[AirtestProject](https://airtest.doc.io.netease.com/)

优缺点比较：
略

# AirtestProject
AirtestProject是由网易游戏推出的UI自动化测试解决方案，其中包含了：
- Airtest框架
- Poco框架

项目基于基于Python，建议在使用前，先学习Python的基础语法知识。  

# 需求分析
## 流程
```mermaid
---
title: 流程图
---
flowchart TB
    打开游戏-->点击扭蛋-->选择普通-->点击免费抽取-->点击公会之家-->点击全部收取-->点击冒险-->点击探索
-->点击经验关卡-->等待-->点击玛娜关卡-->点击地下城-->选择最后一个-->进行爬塔
```

需求分析好了之后，现在开始脚本编写吧！


