---
title: 友链💖
sidebar: false
article: false
pageInfo: false
lastUpdated: false
editLink: false
prev: false
next: false
---

<LinkLayout :linkList="linkList"/>

<script>
export default {
        data() {
                return {
                        linkList: [
                                {
                                    name: "vuepress-theme-hope",
                                    description: '特别感谢VuePress主题hope，功能非常强大！',
                                    imgurl: '/hope.svg',
                                    href: 'https://theme-hope.vuejs.press/zh/',
                                },
                                {
                                    name: '野草',/* avatar-name */
                                    description: '一切都是那么的不尽人意',/* avatar-description */
                                    imgurl: 'http://api.sakurafeiyu.top/imgs/link_imgs/yecao.jpg',/* avatar-img */
                                    href: 'https://zjzh_yecao.gitee.io/',/* avatar-url */
                                },
                                {
                                    name: '⭐️齐下无贰⭐️',
                                    description: 'May all the beauty be bless.✨',
                                    imgurl: 'http://api.sakurafeiyu.top/imgs/link_imgs/avatar1.png',
                                    href: 'https://weidows.gitee.io',
                                },
                                {
                                    name: "Yang's Harbor",
                                    description: 'Space of Tech, Love and Thought.',
                                    imgurl: '/logo.png',
                                    href: 'https://discover304.top/',
                                },
                        ],
                }
        }
}
</script>