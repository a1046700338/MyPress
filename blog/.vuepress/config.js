module.exports = {
    // 基础配置
    title: '花诽语Blog',//花诽语Blog
    description: '基于VuePress框架搭建的个人笔记网站',
    // docsDir: 'blog/_posts',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ["link", { rel: "stylesheet", href: "https://at.alicdn.com/t/c/font_3990738_8y38z31ubdc.css" }],
    ],
    // 日期格式设置
    dateFormat: 'YYYY-MM-DD',
    // permalink: "/:year/:month/:day/:slug",
    // 插件设置
    plugins: [
        ['@vuepress/back-to-top'],
        ['@vuepress/nprogress'],
        ['meting'],
        [
            '@vuepress/medium-zoom', {
                selector: 'img.zoom-custom-imgs',
                // medium-zoom options here
                // See: https://github.com/francoischalifour/medium-zoom#options
                options: {
                    margin: 16
                }
            }
        ],
        [
            '@vuepress/register-components',{
                componentsDir: [
                    'DemoLayout'
                ]
            }
        ],
        [
            'vuepress-plugin-comment',{
                choosen: 'valine',
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'CkA59kaHWYymv3LzYGFO2yT9-gzGzoHsz',
                    appKey: 'gP0FoW0FBogrBv1NT1WSrzJt'
                }
            }
        ],
        ['vuepress-plugin-awesome-musicplayer'],
        ['@vuepress-reco/extract-code'],
        ['@vuepress/active-header-links'],
    ],
    // 主题配置
    theme: 'reco',//@vuepress/theme-blog
    themeConfig: {
        type: 'blog',
        noFoundPageByTencent: false,
        logo: '../favicon.png', // 导航栏logo
        authorAvatar: '../avatar.png', // 头像
        author: '花诽语',
        nav: [
            { text: '时间轴', link: '/timeline/', icon: 'iconfont feiyu-shijian' },
            { text: '我的音乐', link: '/music/', icon: 'iconfont feiyu-music' },
            { text: '相册', link: '/remember/', icon: 'iconfont feiyu-xiangce' },
            { text: '网址导航', link: '/navigation/', icon: 'iconfont feiyu-daohang' },
            { text: '关于', link: '/about/', icon: 'iconfont feiyu-guanyuwomen' }
        ],
        lastUpdated: true, // string | boolean
        sidebar: 'auto', //自动生成侧边栏
        smoothScroll: true, //页面滚动
        // 以下是Git仓库编辑链接
        repo: 'a1046700338/MyPress',
        docsBranch: 'theme-reco',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'iconfont feiyu-github', link: 'https://github.com/a1046700338' },
                { icon: 'iconfont feiyu-email-fill', link: 'mailto:sakurafeiyu666@163.com' },
                { icon: 'iconfont feiyu-gitee-fill-round', link: 'https://gitee.com/sakurafeiyu/' },
                { icon: 'iconfont feiyu-qq', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=x4k21vSH5aDQTQZIUwAA2oFnuwEC43J4&noverify=0' },
            ],    
        },
        // or
        // vssueConfig: {
        //     platform: 'github',
        //     owner: 'sakurafeiyu',
        //     repo: 'a1046700338/MyPress',
        //     clientId: 'd6254a96649f1d95adfa',
        //     clientSecret: '',
        // },
        friendLink: [
            {
                title: '野草',
                desc: '一切都是那么的不尽人意',
                logo: 'http://api.sakurafeiyu.top/imgs/link_imgs/yecao.jpg',
                link: 'https://zjzh_yecao.gitee.io/'
            },
            {
                title: '⭐️齐下无贰⭐️',
                desc: 'May all the beauty be bless.✨',
                logo: 'http://api.sakurafeiyu.top/imgs/link_imgs/avatar1.png',
                link: 'https://weidows.gitee.io'
            },
            {
                title: "Yang's Harbor",
                desc: 'Space of Tech, Love and Thought.',
                logo: 'http://api.sakurafeiyu.top/imgs/link_imgs/avatar2.png',
                link: 'https://discover304.top/'
            },
        ],
        // 项目开始时间，只填写年份
        startYear: '2020',
        // 备案设置
        record: '蜀ICP备2022016473号-1',
        recordLink: 'https://beian.miit.gov.cn/',
        cyberSecurityRecord: '川公网安备 51030002000194号',
        cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51030002000194',
    }
}