<template>
    <!-- 这是一个侧边按钮组件，你可以对它进行丰富的自定义 -->
    <div class="button-layout">
        <div class="main">
            <div class="item">{{ item.title }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ButtonCommponent',
    data() {
        return {
            item: {
                title: "click click"
            }
        }
    },
    props: [''],
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.button-layout{
    position: absolute;
    /* background: #000; */
    right: 1rem;
    bottom: 120px;
    width: auto;
}

.main {
    width: 48px;
    height: 48px;
    border-radius: 1rem;
    padding: 0px;
    overflow: hidden;
    background: var(--vp-bg);
    color: var(--vp-tc);
    box-shadow: 2px 2px 10px 0 var(--card-shadow);
}

.main:hover {
    cursor: pointer;
}
/* .img-container {
    background: url(/logo.png);
    background-repeat: repeat;
    z-index: 999;
} */
/* .item {
    margin: 0 auto;
} */

</style>