<template>
	<div class="base">
		<div class="mb-30">
			<wd-link class="mr-30" content="跳转链接" hover="underline" />
			<wd-link
				class="mr-30"
				content="跳转链接"
				theme="primary"
				hover="underline"
			/>
			<wd-link
				class="mr-30"
				content="跳转链接"
				theme="success"
				hover="underline"
			/>
			<wd-link
				class="mr-30"
				content="跳转链接"
				theme="danger"
				hover="underline"
			/>
			<wd-link content="跳转链接" theme="warning" hover="underline" />
		</div>
		<div class="mb-30">
			<wd-link class="mr-30" content="跳转链接" hover="color" />
			<wd-link class="mr-30" content="跳转链接" theme="primary" hover="color" />
			<wd-link class="mr-30" content="跳转链接" theme="success" hover="color" />
			<wd-link class="mr-30" content="跳转链接" theme="danger" hover="color" />
			<wd-link content="跳转链接" theme="warning" hover="color" />
		</div>
		<div>
			<wd-link class="mr-30" content="跳转链接" underline />
			<wd-link class="mr-30" content="跳转链接" theme="primary" underline />
			<wd-link class="mr-30" content="跳转链接" theme="success" underline />
			<wd-link class="mr-30" content="跳转链接" theme="danger" underline />
			<wd-link content="跳转链接" theme="warning" underline />
		</div>
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
	align-items: center;
	flex-wrap: wrap;
}
.mr-30 {
	margin-right: 30px;
}
.mb-30 {
	margin-bottom: 30px;
	width: 100%;
}
</style>
