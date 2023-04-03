import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
// import { getDirname, path } from "@vuepress/utils";
// import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

// const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  // locales: {
  //   // 根据实际情况来，我不需要国际化，所以把en删了
  //   "/": {
  //     lang: 'zh-CN',
  //   }
  // },
  // theme,
  plugins: [
    searchProPlugin({
      indexContent: true,
      // 给分类和标签添加索引
      customFields: [
        {
          getter: (page) => 'page.frontmatter.category',
          formatter: "分类：$content"
        },
        {
          getter: (page) => 'page.frontmatter.tag',
          formatter: "标签：$content",
        },
      ]
    }),
  ],
  theme: hopeTheme({
    logo: "/logo.png",
    repo: "a1046700338/MyPress",
    repoLabel: "GitHub",
    repoDisplay: true,
    // 个人信息栏设置
    blog: {
      name: "花诽语",
      avatar: "/avatar.png",
      description: "花，华丽的姿态，但终有凋零的一天。",
      medias: {
        GitHub: "https://github.com/a1046700338",
        Gitee: "https://gitee.com/sakurafeiyu/",
        Email: "mailto:sakurafeiyu666@163.com",
        QQ: "https://qm.qq.com/cgi-bin/qm/qr?k=x4k21vSH5aDQTQZIUwAA2oFnuwEC43J4&noverify=0"
      }
    },
    //全屏按钮
    fullscreen: true,
    backToTop: 400,
    plugins: {
      // 强大的主题内置插件功能
      blog: true,
      mdEnhance: {
        // 添加选项卡支持，用法：https://theme-hope.vuejs.press/zh/guide/markdown/tabs.html#%E7%94%A8%E6%B3%95
        tabs: true, // 代码选项卡
        echarts: true, // 图表
        mermaid: true,
        vuePlayground: true, // 演示
        tasklist: true, // 任务列表
        presentation: true, // 幻灯片
        footnote: true, // 脚注，用法：https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html#%E4%BE%8B%E5%AD%90
      },
      components: {
        components: [
          "AudioPlayer",
          "BiliBili",
          "Badge",
          "CodePen",
          "FontIcon",
          "PDF",
          "ArtPlayer" // 用法：https://plugin-components.vuejs.press/zh/guide/artplayer.html
        ]
      },
      comment: {
        provider: "Waline",
        serverURL: "https://cka59kah.lc-cn-n1-shared.com", // your server url
      },
    },
    // 主题色
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },
    navbar: [
      { text: '首页', link: '/' },
      { text: '时间轴', link: '/timeline/', icon: 'iconfont feiyu-shijian' },
      { text: '我的音乐', link: '/music/', icon: 'iconfont feiyu-music' },
      { text: '相册', link: '/remember/', icon: 'iconfont feiyu-xiangce' },
      { text: '网址导航', link: '/navigation/', icon: 'iconfont feiyu-daohang' },
      { text: '关于', link: '../about/', icon: 'iconfont feiyu-guanyuwomen' }
    ],
  })
  // Enable it with pwa
  // shouldPrefetch: false,
});
