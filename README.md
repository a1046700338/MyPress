# MyPress
基于[VuePress](https://www.vuepress.cn/)修改的个人笔记网站

## 使用
## theme-hope
请克隆该分支:main
```shell
git clone git@github.com:a1046700338/MyPress.git
```
## theme-default
请克隆该分支:origin
```shell
git clone -b origin git@github.com:a1046700338/MyPress.git
```

随后
```shell
npm i
```
如果你在使用 `npm` 的过程，遇到依赖下载失败的情况，那么请使用[nvm](https://github.com/coreybutler/nvm-windows)

## 运行
```shell
// 项目调试
npm run docs:dev
// or
// npm run dev
// 项目打包
npm run docs:build
// or
// npm run build
```

## 加入了git commit规范
[github](https://github.com/ITxiaohao/conventional-changelog-custom-config)

### 如何使用它
生成 CHANGELOG 之前得先 commit，记得在 master 主分支上发布版本，再生成 CHANGELOG，流程如下：
```
git add .

npm run commit

npm run release

npm run changelog
```