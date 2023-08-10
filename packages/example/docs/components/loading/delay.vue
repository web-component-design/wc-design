<template>
	<div class="delay">
		<button @click="loading = !loading" class="mr-30">点我延迟三秒执行</button>
		<wd-loading :loading="loading" size="large"></wd-loading>
	</div>
</template>
<script lang="ts" setup>
import 'wc-design/src/loading/index.tsx';
import { ref } from 'vue';
const loading = ref(false);
</script>
<style lang="less" scoped>
.delay {
	display: flex;
	width: 100%;
	height: 100px;
	align-items: center;
}
.mr-30 {
	margin-right: 30px;
}
</style>
