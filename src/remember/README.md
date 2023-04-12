---
title: 相册
toc: false
sidebar: false
article: false
pageInfo: false
lastUpdated: false
editLink: false
prev: false
next: false
---
<BoxLayout :cardList="photoList"/>

<script>
export default {
        data() {
                return {
                        photoList: [
                                {
                                title: 'ChatGLM',/* 标题 */
                                description: '成功运行ChatGLM6B-webui✨',/* 描述 */
                                date: '2023',/* 日期 */
                                imgurl: 'https://s1.ax1x.com/2023/04/04/pp4dZIU.png',/* 图片地址 */
                                },
                                {
                                title: 'ChatGLM', 
                                description: '哈哈',
                                date: '2023',
                                imgurl: 'https://s1.ax1x.com/2023/04/04/pp4dVaT.png',
                                },
                                {
                                title: 'ChatGLM', 
                                description: '爆显存了QAQ（没有好显卡还想炼丹？😢）',
                                date: '2023',
                                imgurl: 'https://s1.ax1x.com/2023/04/04/pp4dmiF.png',
                                },
                                                            {
                                title: 'b站音乐区【JLRS日落fm】《すずめ feat.十明》', 
                                description: 'du du dududu~',
                                date: '2023',
                                imgurl: 'https://s1.ax1x.com/2023/04/04/pp4diMn.png',
                                },
                                {
                                title: '极限竞速：地平线 5', 
                                description: '地平线5打折了！史地价我就入手了，我有前作，但是我还是想尝试一下新作，不得不说打磨得真好，风火轮太好玩辣！ ',
                                date: '2023',
                                imgurl: 'https://s1.ax1x.com/2023/04/04/pp4aoPe.png',
                                },
                                {
                                title: '极限竞速：地平线 5', 
                                description: '开车过程中还能一边欣赏风景',
                                date: '2023',
                                imgurl: 'https://s1.ax1x.com/2023/04/04/pp4a55D.png',
                                },
                                {
                                title: '极限竞速：地平线 5', 
                                description: '地平线5 超级无敌好玩！！！',
                                date: '2023',
                                imgurl: 'https://s1.ax1x.com/2023/04/04/pp4ahVK.png',
                                },
                                {
                                title: '极限竞速：地平线 5', 
                                description: '',
                                date: '2023',
                                imgurl: 'https://s1.ax1x.com/2023/04/04/pp4aWb6.png',
                                },
                                {
                                title: '手机-风景-夜晚', 
                                description: '夜晚景色很美',
                                date: '2023',
                                imgurl: 'https://s1.ax1x.com/2023/04/04/pp4wkSH.jpg',
                                },
                                {
                                title: '手机-风景-天空', 
                                description: '',
                                date: '2023',
                                imgurl: 'https://s1.ax1x.com/2023/04/04/pp4wemt.jpg',
                                },
                                {
                                title: '手机-户外-猫猫', 
                                description: '这只猫一点也不怕生😊',
                                date: '2023',
                                imgurl: 'https://s1.ax1x.com/2023/04/04/pp4wVOI.jpg',
                                },
                                {
                                title: '手机-户外-猫猫', 
                                description: '',
                                date: '2023',
                                imgurl: 'https://s1.ax1x.com/2023/04/04/pp4wAld.jpg',
                                },
                                {
                                title: '手机-户外-彩灯',
                                description: '',
                                date: '2022',
                                imgurl: 'https://s1.ax1x.com/2023/04/04/pp4wm0P.jpg',
                                },
                                {
                                title: '手机-户外-美食',
                                description: '绵竹米粉绝绝子！',
                                date: '2022',
                                imgurl: 'https://s1.ax1x.com/2023/04/04/pp4w86s.jpg',
                                },
                        ],
                }
        }
}
</script>
