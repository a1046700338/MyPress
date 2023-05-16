---
icon: edit
title: maven
date: 2022-05-10 01:12:43
category:
- 教程
tag:
- 分享
- 转载
- 小白
---
 
> Maven是一个软件项目管理和理解工具。基于根据项目对象模型（POM）的概念，Maven可以管理项目的从中心信息构建、报告和记录。  
<!-- more -->

# maven
[官网](https://maven.apache.org/) | [教程](https://www.runoob.com/maven/maven-setup.html) | [下载地址](https://maven.apache.org/download.cgi) | [历史版本](https://archive.apache.org/dist/maven/maven-3/
)

## Maven阿里镜像配置
https://developer.aliyun.com/mirror/maven

## Maven 引入外部依赖
在你的 pom.xml 文件`<denpendencies></denpendencies>`节点中加入你要引用的文件信息：
```xml
<dependency>
  <groupId>[GROUP_ID]</groupId><!-- 库名称，也可以自定义 -->
  <artifactId>[ARTIFACT_ID]</artifactId><!--库名称，也可以自定义-->
  <version>[VERSION]</version><!--版本号-->
  <scope>system</scope> <!--作用域-->
  <systemPath>${project.basedir}/src/main/resources/Name_Your_JAR.jar</systemPath> <!--项目根目录下的lib文件夹下-->
</dependency>
```
## IntelliJ IDEA 已经内建了对 Maven 的支持
https://www.runoob.com/maven/maven-intellij.html

## Maven 项目文档
https://www.runoob.com/maven/maven-project-documents.html  

修改 pom.xml，添加以下配置
```xml
<project>
  ...
<build>
<pluginManagement>
    <plugins>
        <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-site-plugin</artifactId>
          <version>3.3</version>
        </plugin>
        <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-project-info-reports-plugin</artifactId>
          <version>2.7</version>
        </plugin>
    </plugins>
    </pluginManagement>
</build>
 ...
</project>
```
在项目根目录下执行命令：
`mvn site`
To be Continue...
