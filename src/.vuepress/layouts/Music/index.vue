<template>
    <div class="box-layout">
        <div class="box-main" v-for="(item, index) in cardList" :key="index">
            <!-- 卡片标题 -->
            <p class="title">{{ item.title }}</p>
            <!-- 卡片 -->
            <div class="card">
                <img :src="item.imgurl" alt="this is photos">
            </div>
            <p class="date"><i class="iconfont feiyu-shijian">{{ item.date }}</i></p>
            <p class="dec">{{ item.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {}
    },
    props: ['cardList'],
}
</script>