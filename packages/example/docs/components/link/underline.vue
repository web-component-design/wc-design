<template>
	<div class="base">
		<wd-link class="mr-30" underline content="下划线文字链接" />
		<wd-link class="mr-30" underline content="下划线文字链接" theme="primary" />
		<wd-link class="mr-30" underline content="下划线文字链接" theme="success" />
		<wd-link class="mr-30" underline content="下划线文字链接" theme="danger" />
		<wd-link content="下划线文字链接" underline theme="warning" />
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
