---
icon: edit
title: flutter
date: 2022-04-17 22:38:38
category:
- 教程
tag:
- 分享
- 笔记
---
Google公司推出的dark语言编写的多平台应用
<!-- more -->
# 什么是flutter
Google公司推出的dark语言编写的多平台应用
> Currently the most beautiful apps  

**Free and Open Source**  
[官网](https://flutter.dev/) | [中文站](https://flutter.cn/) | [Flutter中文网](https://flutterchina.club/)
# 起步
已拥有Android Studio, IntelliJ, VS Code等IDE可直接添加plugins。  
## 在AS中安装
“file”-->“settings”-->“plugins”，搜索“flutter”即可，如图：
[![flutter1](https://s1.ax1x.com/2022/04/18/LaJ2If.png)](https://imgtu.com/i/LaJ2If)
[![flutter2](https://s1.ax1x.com/2022/04/18/LaJhRg.png)](https://imgtu.com/i/LaJhRg)
[![flutter3](https://s1.ax1x.com/2022/04/18/LaJWi8.png)](https://imgtu.com/i/LaJWi8)
[![flutter4](https://s1.ax1x.com/2022/04/18/LaJgdP.png)](https://imgtu.com/i/LaJgdP)
[![flutter5](https://s1.ax1x.com/2022/04/18/LaJfJS.png)](https://imgtu.com/i/LaJfJS)
## 下载Flutter SDK
https://flutter.cn/docs/get-started/install/windows#get-the-flutter-sdk  
（Windows）
解压文件，将**flutter**整个目录放到你想放在你想放置 Flutter SDK 的路径中  
例如`E:\Program Files\flutter\flutter_windows_2.10.4-stable`  
[![flutter6](https://s1.ax1x.com/2022/04/18/LaJnaV.png)](https://imgtu.com/i/LaJnaV)

## 或者你可以直接git clone Flutter仓库直接下载发行版
```shell
$>git clone https://github.com/flutter/flutter.git -b stable
```

## 配置环境变量
开始菜单**搜索功能**，搜索`env`，选择编辑环境变量
[![flutter7](https://s1.ax1x.com/2022/04/18/LaJVrn.png)](https://imgtu.com/i/LaJVrn)
系统变量中找到“path”，编辑，加入 flutter\bin 目录的完整路径  
[![flutter8](https://s1.ax1x.com/2022/04/18/LaJZbq.png)](https://imgtu.com/i/LaJZbq)
[![flutter9](https://s1.ax1x.com/2022/04/18/LaJmV0.png)](https://imgtu.com/i/LaJmV0)
配置好环境变量后，就可以通过命令提示符访问了  
```shell
$>where flutter dart
```
[![flutter10](https://s1.ax1x.com/2022/04/18/LaJl24.png)](https://imgtu.com/i/LaJl24)


## 更多关于Flutter的安装配置请访问官方网站
[flutter-install](https://flutter.cn/docs/get-started/install)

<hr/>

## 好了，前面的弄好了之后，开始正式使用Flutter吧！
# 使用
## New Flutter Project
创建flutter项目  
[![flutter11](https://s1.ax1x.com/2022/04/18/LaJQGF.png)](https://imgtu.com/i/LaJQGF)
选中Flutter,在Flutter SDK path中添加刚刚下载Flutter SDK放置的目录，记住一定是`\flutter`根目录
[![flutter12](https://s1.ax1x.com/2022/04/18/LaJMPU.png)](https://imgtu.com/i/LaJMPU)
[![flutter13](https://s1.ax1x.com/2022/04/18/LaJ1xJ.png)](https://imgtu.com/i/LaJ1xJ)
新建项目会导入依赖，耐心等待
[![flutter14](https://s1.ax1x.com/2022/04/18/LaJ8M9.png)](https://imgtu.com/i/LaJ8M9)
## Run Flutter App
直接使用创建flutter的模板run！
[![flutter15](https://s1.ax1x.com/2022/04/18/LaJGrR.png)](https://imgtu.com/i/LaJGrR)
运行Flutter，报错了，不过不要着急，遇到问题不要慌，上网一搜总能找到答案
[![flutter16](https://s1.ax1x.com/2022/04/18/LaJJq1.png)](https://imgtu.com/i/LaJJq1)
报错的问题是：
```
Finished with error: Failed to bind web development server:
SocketException: Failed to create server socket (OS Error: Failed to start accept), address = localhost, port = 51321
```
应该是需要配置“Additional run args”参数
[![flutter17](https://s1.ax1x.com/2022/04/18/LaJtVx.png)](https://imgtu.com/i/LaJtVx)
[![flutter18](https://s1.ax1x.com/2022/04/18/LaJNa6.png)](https://imgtu.com/i/LaJNa6)

Additional run args:`--web-port=8080 --web-hostname=127.0.0.1`  

再次运行，成功！  
[![成功了](https://s1.ax1x.com/2022/04/18/LaJBxH.png)](https://imgtu.com/i/LaJBxH)
web端还是响应式布局，满足任何设备浏览器访问
[![响应1](https://s1.ax1x.com/2022/04/18/LaJrMd.png)](https://imgtu.com/i/LaJrMd)
[![响应2](https://s1.ax1x.com/2022/04/18/LaJssA.png)](https://imgtu.com/i/LaJssA)
### 热部署（hot reload）
在`lib/main.dart`中修改字符串
[![hotreload1](https://s1.ax1x.com/2022/04/18/LaJdPO.png)](https://imgtu.com/i/LaJdPO)
[![hotreload2](https://s1.ax1x.com/2022/04/18/LaJ0Re.png)](https://imgtu.com/i/LaJ0Re)
非常快的热部署到应用上！
[![查看1](https://s1.ax1x.com/2022/04/18/LaJwGD.png)](https://imgtu.com/i/LaJwGD)

## 编写第一个Flutter应用
根据[官网](https://flutter.cn/docs/get-started/codelab)的教程编写一个`英语单词滚动视图APP` 
将下面这段代码覆盖到`lib/main.dart`中，
```dart
// Copyright 2018 The Flutter team. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Welcome to Flutter'),
        ),
        body: const Center(
          child: Text('Hello World'),
        ),
      ),
    );
  }
}
```
创建`Material Design`风格的应用。在 pubspec.yaml 文件的 flutter 部分选择加入`uses-material-design: true`会是一个明智之举，通过这个可以让您使用更多 Material 的特性，比如其预定义好的图标集。  
[![flutter19](https://s1.ax1x.com/2022/04/18/LaJUIK.png)](https://imgtu.com/i/LaJUIK)


TO Be Continue...