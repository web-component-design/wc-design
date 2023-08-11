<template>
	<div class="base">
		<wd-loading loading></wd-loading>
	</div>
</template>
<script lang="ts" setup>
import 'wc-design/src/loading/index.tsx';
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
</style>
