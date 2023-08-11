<template>
	<div class="base">
		<wd-link class="mr-30" content="默认文字链接" />
		<wd-link
			class="mr-30"
			size="small"
			content="小号文字链接"
			theme="primary"
		/>
		<wd-link
			class="mr-30"
			size="medium"
			content="中号文字链接"
			theme="success"
		/>
		<wd-link class="mr-30" size="large" content="大号文字链接" theme="danger" />
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
