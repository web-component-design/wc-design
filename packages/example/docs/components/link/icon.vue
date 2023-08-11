<template>
	<div class="base">
		<wd-link class="mr-30" content="无图标链接" />
		<wd-link
			class="mr-30"
			prefix-icon="link"
			content="前置图标链接"
			theme="primary"
		/>
		<wd-link
			class="mr-30"
			suffix-icon="jump"
			content="后置图标链接"
			theme="success"
		/>
		<wd-link
			class="mr-30"
			prefix-icon="link"
			suffix-icon="jump"
			content="前后置图标链接"
			theme="danger"
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
