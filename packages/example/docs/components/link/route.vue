<template>
	<div class="base">
		<wd-link
			class="mr-30"
			href="http://www.baidu.com"
			target="_blank"
			content="跳转链接"
		/>
		<wd-link
			class="mr-30"
			href="http://www.baidu.com"
			target="_blank"
			content="跳转链接"
			theme="primary"
		/>
		<wd-link
			class="mr-30"
			href="http://www.baidu.com"
			target="_blank"
			content="跳转链接"
			theme="success"
		/>
	</div>
</template>
<script lang="ts" setup>
import 'wc-design/src/link/index.tsx';
</script>
<style lang="less" scoped>
.base {
	display: flex;
	width: 100%;
	min-height: 150px;
	justify-content: center;
	align-items: center;
}
.mr-30 {
	margin-right: 30px;
}
</style>
