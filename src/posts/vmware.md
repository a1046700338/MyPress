---
icon: edit
title: VMWare虚拟机软件教程
date: 2021-09-11
category:
- 教程
tag:
- 分享
- 小白
---
VMWare虚拟机软件是一个“虚拟PC”软件，它使你可以在一台机器上同时运行二个或更多Windows、DOS、LINUX系统。值得一提的是，VMware的母公司是戴尔。
<!-- more -->
# VMWare
# 安装说明
1、请卸载旧版本的VM，重启系统后再安装新版本的VM。
2、不能把VM安装到含有中文路径的目录下，否则安装过程中或使用中可能会出现问题。
3、Vista/Win7系统中请关闭UAC功能，以管理员权限运行安装程序。
4、请把安全软件关闭后再进行安装（安全软件会拦截VM的驱动安装）。
> 摘自[百度百科](https://baike.baidu.com/item/VMware#3)

# 选择
根据自己的使用场景选择合适的软件版本
《Workstation Player》适合个人用户，《Workstation Pro》适合企业用户。
## Workstation Player 与 Workstation Pro的功能对比
https://www.vmware.com/cn/products/workstation-player.html  
# VMWare Workstation 16 Player 的安装
- [官方下载地址](https://www.vmware.com/products/workstation-player.html)  
浏览器进入下载网址，点击“download for free”，开始下载  
打开下载好的程序  
安装流程很简单，点击下一步![vm16player1.png](https://img10.360buyimg.com/ddimg/jfs/t1/202356/18/6188/76151/613c7a6aEc5cad3f9/6f49eda121c6c038.png)
勾选“增强型键盘驱动程序”，自由选择安装目录（不推荐放c盘）  
用户体验设置，全部取消勾选，下一步  
![vm16player3.png](https://img12.360buyimg.com/ddimg/jfs/t1/76819/10/16265/17605/613c7a8fEb5c296c3/91cd3add1d2e4443.png)点击继续  
安装完成，稍后重启电脑  
# 使用 VMWare Workstation 16 Player 安装centos系统（centos7）
1. 打开软件后是这个界面![vm16player4.png](https://img12.360buyimg.com/ddimg/jfs/t1/198091/24/8122/52999/613c7ac3Eb7afef4f/bdb10fbb49a0f6c2.png)  
2. 选择创建新的虚拟机  
3. 新建虚拟机向导界面，点击浏览选择“安装程序光盘映像文件”，选择“稍后安装操作系统”可能会出现这个问题![error.png](https://img10.360buyimg.com/ddimg/jfs/t1/68150/20/17247/31373/613c6eb0E46c9d656/049e83190a965867.png)  
解决方法是：回到主界面![Snipaste_2021-09-11_16-19-47](https://img11.360buyimg.com/ddimg/jfs/t1/198962/2/8104/75661/613c6f54Eb2dd4707/0ff44862ad8760a5.png)然后![Snipaste_2021-09-11_16-20-04.png](https://img10.360buyimg.com/ddimg/jfs/t1/197666/35/8117/37980/613c6f8aE0c57db64/2f9f770939504145.png)
![Snipaste_2021-09-11_16-20-40.png](https://img12.360buyimg.com/ddimg/jfs/t1/71504/8/16593/30658/613c7051Edb9dfbb6/4c3237a5efe0710d.png)
选择你的映像文件![Snipaste_2021-09-11_16-23-20.png](https://img10.360buyimg.com/ddimg/jfs/t1/77347/40/16811/31894/613c70a7Eb6b432a8/d7c8b82802386210.png)  

4. 选择操作系统，以centos为例![Snipaste_2021-09-11_16-13-32.png](https://img12.360buyimg.com/ddimg/jfs/t1/171552/23/23557/15399/613c7229Ecd20d4de/e62cce40ced08743.png)  

5. 虚拟机命名，修改虚拟机文件目录![Snipaste_2021-09-11_16-15-36.png](https://img14.360buyimg.com/ddimg/jfs/t1/207920/11/185/13210/613c72e8E4b2b20b6/f6e16f56e85c5aba.png)下一步  

6. 指定磁盘容量![Snipaste_2021-09-11_16-16-05.png](https://img12.360buyimg.com/ddimg/jfs/t1/46365/40/16747/20240/613c7326E017bcbb8/4cb23522169ce679.png)  

7. 自定义硬件![Snipaste_2021-09-11_16-16-23.png](https://img12.360buyimg.com/ddimg/jfs/t1/60143/28/17242/19828/613c7369E74d60c19/c67b5f66cf147088.png)![Snipaste_2021-09-11_16-17-55.png](https://img12.360buyimg.com/ddimg/jfs/t1/76134/20/17240/35138/613c738eE1f53509f/5cd9c35b2e775aa7.png)修改好后点击完成![Snipaste_2021-09-11_16-18-06.png](https://img10.360buyimg.com/ddimg/jfs/t1/76761/33/16099/20269/613c73b3Ed3a6da08/a84490dfd0462eb2.png)  

8. 启动虚拟机![Snipaste_2021-09-11_16-18-28.png](https://img10.360buyimg.com/ddimg/jfs/t1/205743/39/6253/75653/613c73e8Ec019ba81/6bc1a0bb6bf2e7aa.png)  

9. 选择“install centos7”敲击enter![Snipaste_2021-09-11_16-23-42.png](https://img12.360buyimg.com/ddimg/jfs/t1/210497/14/165/18513/613c7419Ea2f68ae8/4779f27cb6e8cdb2.png)  

10. 请耐心等待  

## Welcome to centos  
![Snipaste_2021-09-11_16-24-48.png](https://img14.360buyimg.com/ddimg/jfs/t1/62357/34/17050/144151/613c74cbE70647e86/44ee12f74160f03c.png)
1. 选择系统语言![Snipaste_2021-09-11_16-25-17.png](https://img10.360buyimg.com/ddimg/jfs/t1/121509/5/18199/118420/613c74e0Eb42ee4b3/8ed96a7b7a9835f3.png)  
2. 本地化配置不管它默认即可，如图![Snipaste_2021-09-11_16-25-55.png](https://img11.360buyimg.com/ddimg/jfs/t1/198342/13/8105/143904/613c74f3Eeef6f686/e6577629e3962974.png)  
3. 软件选择![Snipaste_2021-09-11_16-26-18.png](https://img12.360buyimg.com/ddimg/jfs/t1/207440/38/251/136434/613c7546Eceb61b7a/b6664787b56f7679.png)如图：![Snipaste_2021-09-11_16-27-41.png](https://img14.360buyimg.com/ddimg/jfs/t1/210926/17/160/203508/613c7566E32b710e4/66e2e7ea1487216c.png)  
4. 配置好后，等待加载![Snipaste_2021-09-11_16-27-51.png](https://img13.360buyimg.com/ddimg/jfs/t1/208772/21/185/136314/613c757bE79a516c6/0753d41c061c8c89.png)  
5. 开启网络![Snipaste_2021-09-11_16-33-01.png](https://img14.360buyimg.com/ddimg/jfs/t1/72191/28/16373/142339/613c76eeE3d3f8782/d6bc1f5a97c01e83.png)![Snipaste_2021-09-11_16-32-25.png](https://img13.360buyimg.com/ddimg/jfs/t1/81588/20/17231/93736/613c76feE63f8bc67/322c75d45ccacb50.png)  
6. 所有项配置好后，开始安装  
7. 设置root超级管理员的密码，再设置一个初始用户![Snipaste_2021-09-11_16-33-42.png](https://img10.360buyimg.com/ddimg/jfs/t1/78959/12/16952/169392/613c7756E399b6433/a5b44d43b2420391.png)  
8. 耐心等待![Snipaste_2021-09-11_16-34-36.png](https://img12.360buyimg.com/ddimg/jfs/t1/63401/13/16873/153920/613c778eE39c0d650/a965ba300ff24be7.png)  
9. 安装完毕，重启![Snipaste_2021-09-11_16-41-13.png](https://img13.360buyimg.com/ddimg/jfs/t1/206464/5/354/95940/613c77c1Edf051111/9318dfa4ad631982.png)  
10. 进入系统![Snipaste_2021-09-11_16-41-33.png](https://img12.360buyimg.com/ddimg/jfs/t1/62986/23/16805/5696/613c77f2E9bf87992/feca7cbf2222e957.png)  
11. 选择许可证![Snipaste_2021-09-11_16-42-36.png](https://img12.360buyimg.com/ddimg/jfs/t1/206890/17/256/111765/613c77f2E8613e42b/4839caacb6a364b0.png)![Snipaste_2021-09-11_16-42-47.png](https://img12.360buyimg.com/ddimg/jfs/t1/203233/24/6283/53531/613c77f2Ecf7c50db/c2becc35c7091f02.png)  
12. 完成设置![Snipaste_2021-09-11_16-42-57.png](https://img11.360buyimg.com/ddimg/jfs/t1/171844/3/23485/111724/613c7831Ec015cf77/7a776f62bf5a827d.png)  
13. 登录账号![Snipaste_2021-09-11_16-43-13.png](https://img14.360buyimg.com/ddimg/jfs/t1/211657/13/186/278759/613c786eE7ae8fee0/4383bc22303e949c.png)  
14. 选择语言![Snipaste_2021-09-11_16-44-05.png](https://img13.360buyimg.com/ddimg/jfs/t1/76011/25/17327/35904/613c786eE1b503a8c/3b6cd15e2970b46f.png) 
15. 输入![Snipaste_2021-09-11_16-44-41.png](https://img13.360buyimg.com/ddimg/jfs/t1/206917/35/213/26062/613c786eE87dd66ea/c95b442ea3b7d92a.png)  
16. 隐私，我选择关闭位置服务![Snipaste_2021-09-11_16-44-53.png](https://img10.360buyimg.com/ddimg/jfs/t1/146769/40/23804/27746/613c786eE049622e9/593772343d81ab98.png)  
17. 可跳过![Snipaste_2021-09-11_16-45-19.png](https://img13.360buyimg.com/ddimg/jfs/t1/66783/27/16935/35008/613c786eEe036cc74/20f8fc5854a1dabd.png)  
18. Get Centos！![Snipaste_2021-09-11_16-45-35.png](https://img14.360buyimg.com/ddimg/jfs/t1/64627/24/17174/60250/613c786dE84cd1723/80c35441cb4e3776.png)  


## 可选：  
kdump 生产环境下开启，学习环境下可关闭
![Snipaste_2021-09-11_16-29-35.png](https://img12.360buyimg.com/ddimg/jfs/t1/204987/23/6190/76369/613c7640Eb91ee7bb/00479bfeced4bf14.png)  
security policy安全策略 生产环境下开启，学习环境下可关闭
![Snipaste_2021-09-11_16-30-14.png](https://img11.360buyimg.com/ddimg/jfs/t1/205516/36/6273/140519/613c76a8Eef69f34c/3be0f729032cd793.png)  

# VMWare Workstation 16 Pro 的安装
[官方下载地址](https://www.vmware.com/cn/products/workstation-pro.html)  
浏览器进入下载网址，下拉找到“试用 Workstation 16 Pro”，点击下载
待写...
