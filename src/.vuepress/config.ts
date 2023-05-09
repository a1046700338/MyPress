import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from "@vuepress/utils";
// import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: '花诽语Blog',
  description: '你知道吗，樱花飘落的速度是秒速五厘米',
  markdown: {
    headers: {
      level: [2,3,4]
    }
  },
  // locales: {
  //   // 根据实际情况来，我不需要国际化，所以把en删了
  //   "/": {
  //     lang: 'zh-CN',
  //   }
  // },
  // theme,
  // 原文：https://theme-hope.vuejs.press/zh/cookbook/advanced/component.html
  // 由于“注册组件”是全局注册Vue组件，访问首页页面时就会载入，
  // 会影响markdown页面的Vue SFC转换，所以使用“alias”避免在VuePress-Markdown中使用多于一个 <script> 标签。
  alias: {
    "@ButtonCommponent": path.resolve(__dirname, "components/ButtonCommponent.vue"),
    "@LinkLayout": path.resolve(__dirname, "components/LinkLayout.vue"),
    "@BoxLayout": path.resolve(__dirname, "components/BoxLayout.vue"),
    "@NavLayout": path.resolve(__dirname, "components/NavLayout.vue"),
  },
  plugins: [
    // 注册组件
    registerComponentsPlugin({
      // components: {
      //   BoxLayout: path.resolve(__dirname, "./components/BoxLayout.vue"),
      // }
      // componentsDir写法，该文件夹下的组件都会被注册为Vue组件。
      componentsDir: path.resolve(__dirname, './components'),
    }),
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
      include: true, // 导入文件
      demo: {
        codepen: true,
      },
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
        "ArtPlayer", // 用法：https://plugin-components.vuejs.press/zh/guide/artplayer.html
      ]
    },
    comment: {
      provider: 'Giscus',
      repo: 'a1046700338/MyPress',
      repoId: 'R_kgDOJGTYdg',
      category: 'General',
      categoryId: 'DIC_kwDOJGTYds4CVgwF',
      lazyLoading: true,
      reactionsEnabled: true
    },
  },
  // 主题色
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  iconAssets: [
    'iconfont',
    'https://at.alicdn.com/t/c/font_3990738_hdlcyym9qmo.css',
  ],
  navbar: [
    { text: '首页', link: '/', icon: 'iconfont feiyu-shouye' },
    { text: '时间轴', link: '/timeline/', icon: 'iconfont feiyu-shijian' },
    { text: '友链', link: '/link/', icon: 'iconfont feiyu-link' },
    { text: '我的音乐', link: '/music/', icon: 'iconfont feiyu-music' },
    { text: '相册', link: '/remember/', icon: 'iconfont feiyu-xiangce' },
    { text: '网址导航', link: '/navigation/', icon: 'iconfont feiyu-daohang' },
    { text: '栞栞', link: '/bot/', icon: 'iconfont feiyu-robot' },
    {
      text: "笔记",
      icon: "iconfont feiyu-notes",
      children: ["/notes/vue基础.md"],
    },
    { text: '关于', link: '../about/', icon: 'iconfont feiyu-guanyuwomen' },
  ],
})
  // Enable it with pwa
  // shouldPrefetch: false,
});
