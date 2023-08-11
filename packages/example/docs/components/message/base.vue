<template>
	<div class="base">
		<button @click="handleClickMessage" class="mr-30">Message</button>
		<button @click="handleClickMessageHTML">Message HTML</button>
	</div>
</template>
<script lang="ts" setup>
import { mountMessage } from 'wc-design/src/message';

const handleClickMessage = () => {
	mountMessage({
		content: 'message文本消息',
		theme: 'info'
	});
};

const handleClickMessageHTML = () => {
	mountMessage({
		content: '<i>斜体messageHTML消息</i> ',
		theme: 'success'
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
