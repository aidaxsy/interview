<template>
<div class="home">
    <h1>首页</h1>
    <a-button type="danger" @click="shikpToLogin">
      signup
    </a-button>
</div>

</template>

<script>
import { Button } from 'ant-design-vue'
export default {
    components: {
        [Button.name]: Button
    },
    methods: {
        shikpToLogin() {
            this.$router.push('./signup')
        }
    }
}
</script>
<style lang='css' scoped>

</style>