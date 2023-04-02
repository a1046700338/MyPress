<template>
    <div class="box-layout">
        <div class="box-main" v-for="(item, index) in cardList" :key="index">
            <!-- 卡片标题 -->
            <p class="title">{{item.title}}</p>
            <!-- 卡片 -->
            <li class="card">
                <ul>
                    <!-- a标签可能不是所有方块布局页面都会用上 -->
                    <a rel="noopener" :href="item.href" target="_blank"></a>
                </ul>
                <ul>
                    <img :src="item.imgurl" alt="this is photos">
                </ul>
            </li>
            <p class="date"><i class="iconfont feiyu-shijian">{{item.date}}</i></p>
            <p class="dec">{{item.description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BoxLayout',
    data() {
        return {
            cardList: [
                {
                    title: 'test',/* 标题 */
                    description: '',/* 描述 */
                    date: '2023',/* 日期 */
                    imgurl: '/avatar.png',/* 图片地址 */
                    href: '',/* 跳转链接 */
                },
            ],

        }
    },
    props: ['cardList'],
}
</script>

<style lang="stylus" scoped>
* {
    margin: 0;
    padding: 0;
}

.box-layout {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: auto;
    padding: 20px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.box-main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; /* 对称轴居中 */
    flex-wrap: wrap;
    padding: 15px;
    p {
        width: 180px;
    }
}

.title{
    background: #3e73af;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
    border-radius: 15px;
    height: 25px;
    width: 180px;
    font-size: 20px;
    text-align: center;
    line-height: 20px;
    padding: 5px;
    margin: 0 0 20px 0;
}

.card {
    width: 200px;
    height: 200px;
    // border: 5px solid rgb(184, 188, 236);
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.card img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
}

.card img:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transition: all 0.5s;
}
</style>