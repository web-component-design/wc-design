<template>
	<div class="custom">
		<wd-loading class="mr-30" loading size="small"></wd-loading>
		<wd-loading class="mr-30" loading size="medium"></wd-loading>
		<wd-loading class="mr-30" loading size="large"></wd-loading>
		<wd-loading class="mr-30" loading size="80px"></wd-loading>
		<wd-loading class="mr-30" loading size="6em"></wd-loading>
	</div>
</template>
<script lang="ts" setup>
import 'wc-design/src/loading/index.tsx';
</script>
<style lang="less" scoped>
.custom {
	display: flex;
	width: 100%;
	height: 150px;
	align-items: center;
}
.mr-30 {
	margin-right: 30px;
}
</style>
