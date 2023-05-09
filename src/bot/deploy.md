---
title: 栞栞部署
category:
  - bot
order: 2
tag:
  - bot部署
  - QQ群机器人
  - nonebot
---
栞栞的部署
<!--more-->
# 起步
【使用nbcli脚手架安装教程】  
由于使用的`NoneBot-v2`框架，所以python版本必须是3.8以上。  
[NoneBot-v2官网](https://v2.nonebot.dev/) | [python阿里源下载](https://registry.npmmirror.com/-/binary/python/3.11.2/python-3.11.2-amd64.exe)  

由于国内pip过慢，你可以先添加[清华镜像源](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/)：
```sh
# pip临时使用
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package

# 设为默认 升级 pip 到最新的版本 (>=10.0.0) 后进行配置：
python -m pip install --upgrade pip
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

# 如果您到 pip 默认源的网络连接较差，临时使用本镜像站来升级 pip：
python -m pip install -i https://pypi.tuna.tsinghua.edu.cn/simple --upgrade pip

# 配置多个镜像源，如果您想配置多个镜像源平衡负载，可在已经替换 index-url 的情况下通过以下方式继续增加源站：
pip config set global.extra-index-url "<url1> <url2>..."
# 请自行替换引号内的内容，源地址之间需要有空格

# 可用的 pypi 源列表（校园网联合镜像站）：https://mirrors.cernet.edu.cn/list/pypi
```
# 官方视频教程
<BiliBili bvid="BV1984y1b7JY" low-quality />

## 随后，创建一个bot项目文件夹。  
安装nb-cli
```sh
pip install nbcli
```

## 输入项目名称

## 选择驱动器
`FastAPI`

## 选择适配器
`OneBot V11`，如果需要使用mirai监听则把`mirai2`也勾选上。（空格键选中）

## 立即安装依赖
是（Y）

## 创建虚拟环境
是（Y）

## 要使用内置插件
`echo`

至此nonebot已安装完毕

# 启动
进入刚才nonebot项目创建的虚拟环境  
## 启动虚拟环境
```sh
cd <project>
cd .venv\Scripts\activate.ps1
```
## 运行nb
```sh
cd <project>
nb run
```

## Q&A
### go-cqhttp
nonbot社区有go-cqhttp的插件，将插件安装好后，可以通过web来访问管理go-cqhttp。  
http://127.0.0.1:9090/go-cqhttp/#/  

### 可能会遇到的问题
[需要安装C++运行环境](https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/)  