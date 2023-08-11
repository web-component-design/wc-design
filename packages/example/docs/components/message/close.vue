<template>
	<div class="base">
		<button @click="handleClickMessage1">可关闭的消息</button>
	</div>
</template>
<script lang="ts" setup>
import { mountMessage, message } from 'wc-design/src/message';

const handleClickMessage1 = () => {
	message.info({
		content: '可关闭的消息',
		duration: 0,
		closeBtn: true
	});
};
</script>
<style lang="less" scoped>
.base {
	display: flex;
	width: 100%;
	min-height: 150px;
	justify-content: center;
	align-items: center;
	// border: 1px solid blue;
}
.mr-30 {
	margin-right: 30px;
}
</style>
