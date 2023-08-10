<template>
	<div class="delay">
		<button @click="handleClick">点我函数调用,4秒后loading消失</button>
	</div>
</template>
<script lang="ts" setup>
import { loading } from 'wc-design/src/loading';
const handleClick = () => {
	loading.service({
		fullScreen: true,
		loading: true
	});

	setTimeout(() => {
		loading.clear();
	}, 4000);
};
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
