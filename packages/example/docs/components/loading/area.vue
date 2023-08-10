<template>
	<div class="area">
		<wd-loading loading show-overlay>
			<p>这是一段描述</p>
			<p>这是一段描述</p>
			<p>这是一段描述</p>
			<p>这是一段描述</p>
		</wd-loading>
	</div>
</template>
<script lang="ts" setup>
import 'wc-design/src/loading/index.tsx';
</script>
<style lang="less" scoped>
.area {
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	// border: 1px solid blue;
}
</style>
