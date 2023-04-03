---
icon: edit
title: mermaid
date: 2021-07-20 21:39:44
category:
- 教程
tag:
- 分享
- 转载
- 技术
---
# hexo标签外挂mermaid
使用mermaid插件可以绘制Flowchart（流程图）、Sequence diagram（时序图）、Class Diagram（类别图）、State Diagram（状态图）、Gantt（甘特图）和Pie Chart（饼图）。
{% tabs mermaid %}
<!-- tab -->
**Pie Chart**
```
{% mermaid %}
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
{% endmermaid %}

```

```

Syntax #语法
Drawing a pie chart is really simple in mermaid. #饼图在mermaid中非常简单

Start with keyword to begin the diagrampie #以图表作为关键字开始
Followed by keyword and its value in string to give a title to the pie-chart. This is OPTIONALtitle #title后就是pie的标题
Followed by dataSet #其次是数据集
label for a section in the pie diagram within quotes." " #引号内的标签自定义代表饼图元素
Followed by colon as separator:  #冒号后定义其元素的值
Followed by (supported upto two decimal places)positive numeric value  #数值最多支持两位小数
[pie] [title] [titlevalue] (OPTIONAL) "[datakey1]" : [dataValue1] "[datakey2]" : [dataValue2] "[datakey3]" : [dataValue3] . .
```
<!-- endtab -->

<!-- tab -->
**Flowchart**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

ok，接下来就是实践环节啦
# 本站访客数据图
{% mermaid %}
pie
    title 最近30天网站访客地域分布
    "四川" : 34
    "重庆" : 1
    "宁夏" : 5
    "河北" :  1
    "云南" :  5
    "山东" :  4
    "河南" :  1
    "浙江" :  3
    "广东" :  3
    "安徽" :  2
    "北京" :  2
    "山西" :  2
    "内蒙古" :  1
    "甘肃" :  1
    "陕西" :  1
    "江西" :  1
    "江苏" :  1
    "青海" :  1
    "海南" :  1
    "其他" :  1
{% endmermaid %}

{% label 数据来源百度统计 orange %}