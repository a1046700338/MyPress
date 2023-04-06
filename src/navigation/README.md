---
title: 网址导航
sidebar: false
article: false
pageInfo: false
lastUpdated: false
editLink: false
prev: false
next: false
---

<NavLayout :navList="navList"/>
<ButtonCommponent/>
<script>
export default {
        data() {
                return {
                        navList: [
                                {
                                    title: 'ElementUI',/* 标题 */
                                    description: '饿了么组件库',/* 描述 */
                                    imgurl: '/logo.png',/* 图片地址 */
                                    href: 'https://element.eleme.cn/#/zh-CN',/* 跳转链接 */
                                },
                                {
                                    title: 'MDN官方文档',/* 标题 */
                                    description: 'MDN官方文档，前端标准都可以在这里查看',/* 描述 */
                                    imgurl: '/logo.png',/* 图片地址 */
                                    href: 'https://developer.mozilla.org/zh-CN/',/* 跳转链接 */
                                },
                                {
                                    title: 'codepen',/* 标题 */
                                    description: '在线进行css,html,js编写，实时预览，在线编辑',/* 描述 */
                                    imgurl: '/logo.png',/* 图片地址 */
                                    href: 'https://codepen.io/',/* 跳转链接 */
                                },
                                {
                                    title: 'iconfont',/* 标题 */
                                    description: '阿里巴巴图标库',/* 描述 */
                                    imgurl: '/logo.png',/* 图片地址 */
                                    href: 'https://www.iconfont.cn/',/* 跳转链接 */
                                },
                                {
                                    title: 'coolbackgrounds',/* 标题 */
                                    description: '渐变色的背景图片网站，支持css',/* 描述 */
                                    imgurl: '/logo.png',/* 图片地址 */
                                    href: 'https://coolbackgrounds.io/',/* 跳转链接 */
                                },
                                {
                                    title: '数字校园',/* 标题 */
                                    description: '我学校的数字校园',/* 描述 */
                                    imgurl: '/logo.png',/* 图片地址 */
                                    href: 'http://ai.scit.cn/unified_identity_logon/#/login',/* 跳转链接 */
                                },
                        ],
                }
        }
}
</script>