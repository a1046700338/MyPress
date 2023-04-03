---
icon: edit
title: python学习随笔
date: 2021-07-15 11:16:54
category:
- python
- 学习
tag:
- 学习
- 笔记
- 练习
---
啊啊我是python零基础萌新，初学python慢慢成长的python学习记录！
<!-- more -->

# 2021/7/2【hello,python】
```
# @Time:2021/7/2 10:20
# @Author:hetianle
# @File:demo.py
# @Software:Pycharm

#score = 2

score = int(input("请输入你的分数:"))

if score > 100:
    print("sorry,满分为100分")
if score == 100:
    print("你太棒了！恭喜你考了满分!")
else:
    if score < 100 and score >= 60:
        print("同学你很优秀")
    else:
        if score < 60 and score >= 50:
            print("同学加油！还差一点就能及格了")
        elif score < 50 and score >= 0:
            print("没关系下次努力")


```
{% note info flat %}
代码块之间缩进有严格的要求，层级关系
{% endnote %}