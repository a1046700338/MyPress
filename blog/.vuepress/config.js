module.exports = {
    title: '花诽语Blog',
    description: 'MyPress is Docs',
    theme: '@vuepress/theme-blog',
    dateFormat: 'YYYY-MM-DD',
    plugins: [
        ['@vuepress/back-to-top'],
        [
            '@vssue/vuepress-plugin-vssue', {
                platform: 'github',
                // 其他的 Vssue 配置
                owner: 'sakurafeiyu',
                locale: 'zh-CN',
                repo: 'a1046700338/MyPress',
                clientId: 'd6254a96649f1d95adfa',
                clientSecret: '6eada70e761b5eecc5b5d871b2c6062a0db7c077',
            }
        ],
        ['@vuepress/nprogress'],
        ['@vuepress/medium-zoom', {
            selector: 'img.zoom-custom-imgs',
            // medium-zoom options here
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16
            }
        }],
        ['@vuepress/active-header-links'],
        ['@vuepress/pwa', {
            serviceWorker: false,
            updatePopup: true
        }],
        ['@vuepress/blog',
            {
                directories: [
                    {
                        // Unique ID of current classification
                        id: 'post',
                        // Target directory
                        dirname: '_posts',
                        // Path of the `entry page` (or `list page`)
                        path: '/posts/',
                        pagination: {
                            prevText: '上一页',
                            nextText: '下一页',
                            lengthPerPage: 6,
                        },
                        itemLayout: 'Post',
                        itemPermalink: '/post/:year/:month/:day/:slug',
                    },
                ],
                frontmatters: [
                    {
                        // Unique ID of current classification
                        id: 'tags',
                        // Decide that the frontmatter keys will be grouped under this classification
                        keys: ['tags'],
                        // Path of the `entry page` (or `list page`)
                        path: '/tag/',
                        // Layout of the `entry page`
                        layout: 'Tags',
                        // Layout of the `scope page`
                        scopeLayout: 'Tag'
                    },
                ],
            },
        ],
    ],
    themeConfig: {
        logo: '../favicon.png', // 导航栏logo
        nav: [
            { text: '首页', link: '/' },
            { text: '文章', link: '/posts/' },
            { text: '分类', link: '/tags/' },
            { text: '关于', link: '/about/' },
        ],
        footer: {
            contact: [
                {
                    type: 'mail',
                    link: 'mailto:sakurafeiyu666@163.com'
                },
                {
                    type: 'music',
                    link: 'https://music.163.com/#/user/home?id=304008837'
                }
            ],
            copyright: [
                {
                    text: 'Copyright © 2023-present 花诽语',
                    link: 'https://sakurafeiyu.top',
                },
                {
                    text: 'VuePress v1.9.9',
                    link: 'https://www.npmjs.com/package/vuepress',
                },
            ],
        },
        lastUpdated: 'Last Updated', // string | boolean
        sidebar: 'auto', //自动生成侧边栏
        smoothScroll: true, //页面滚动
        // 以下是Git仓库编辑链接
        repo: 'a1046700338/MyPress',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！'
    },
    head: [
        ['link', { rel: 'shortcut icon', href: '../favicon.png' }],
        ['link', { rel: 'manifest', href: '../manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3e73af' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '../icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '../icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '../icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ]
}