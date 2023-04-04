---
icon: edit
title: ChatGLM
date: 2021-07-21 14:24:43
category: # 分类
- AIGC
tag: # 标签
- 分享
- 开源
- AI
- ChatGPT
star: true # 收藏
sticky: true # 置顶
---
ChatGLM 是清华大学的开源项目，其 ChatGLM-6B 是一个开源的、支持中英双语的对话语言模型，
，具有 62 亿参数。虽说参数在GPT中不算高，但是作为消费级的显卡上进行本地部署就非常实用。
<!-- more -->
# 官网
[博客](https://chatglm.cn/blog) | [ChatGLM-6B](https://github.com/THUDM/ChatGLM-6B)  

# 教学视频
<BiliBili bvid="BV1E24y1u7Go" low-quality />

根据视频简介提供的链接，将 模型`model`，主程序 `ChatGLM-webui`，环境包以及更新包下载下来。

# 使用过程
目录结构如下：
![img1]()

对应你的显存大小来启用bat
## 本地部署效果图
![img](https://s1.ax1x.com/2023/04/04/pp4dZIU.png)

## 个人使用
### 常见问题
报错：
```
Symbol cudaLaunchKernel not found in C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common\cudart64_65.dll

RuntimeError: Library cublasLt is not initialized
```
去[NVIDIA官网](https://developer.nvidia.com/cuda-downloads)安装cuda即可，安装时默认安装路径，直接下一步即可。