<template>
    <div class="nav-layout">
        <div class="box-main" v-for="(item, index) in navList" :key="index">
            <!-- 卡片 -->
            <li class="card">
                <ul class="card_img">
                    <img :src="item.imgurl" alt="this is images" no-view>
                </ul>
                <ul class="card_title">
                    <a rel="noopener" :href="item.href" target="_blank">{{ item.title }}</a>
                </ul>
            </li>
            <p class="dec">{{ item.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavLayout',
    data() {
        return {}
    },
    props: ['navList'],
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.nav-layout {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.box-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 10px;
    margin: 0 auto;
}

.dec {
    width: 180px;
}

.card {
    width: 240px;
    height: 50px;
    padding: 5px;
    /* border: 5px solid rgb(184, 188, 236); */
    border-radius: 10px;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.card img {
    width: 50px;
    height: 50px;
    border-radius: 15px;
}

.card:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transition: all 0.5s;
}
/* 针对小屏优化页面大小 */
@media (max-width: 280px) {
    .nav-layout {
        margin: 0 auto;
        padding: 5px;
    }
    .box-main {
        width: 220px;
        padding: 2px;
        margin: 0 auto;
    }
    .card {
        width: 210px;
        height: 60px;
    }
}
@media (max-width: 512px) {
    .nav-layout {
        width: 230px;
        margin: 0 auto;
    }
}
</style>