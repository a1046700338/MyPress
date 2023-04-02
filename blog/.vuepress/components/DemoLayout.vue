<template>
    <div class="demo-page-class">
        <p>你好，这里是自定义页面</p>
        <p>你的名字是：{{user.name}}</p>
        <p>你几岁了呀：{{user.age}}</p>
    </div>
</template>

<script>
export default {
    name: 'DemoLayout',
    data() {
        return {
            user: {
                name: '阿乐',
                age: '17',
            }
        }
    },
}
</script>