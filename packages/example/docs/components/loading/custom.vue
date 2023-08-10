<template>
	<div class="custom">
		<wd-loading class="mr-30" loading size="small"></wd-loading>
		<wd-loading
			class="mr-30"
			loading
			size="medium"
			text="自定义文字"
		></wd-loading>
		<wd-loading
			loading
			icon-name="star-filled"
			size="large"
			text="自定义文字"
		></wd-loading>
	</div>
</template>
<script lang="ts" setup>
import 'wc-design/src/loading/index.tsx';
</script>
<style lang="less" scoped>
.custom {
	display: flex;
	width: 100%;
	height: 100px;
	align-items: center;
}
.mr-30 {
	margin-right: 30px;
}
</style>
