<template>
	<div style="display: flex; flex-wrap: wrap">
		<div class="wd-icons-view__wrapper" v-for="item in iconArray" :key="item">
			<wd-icon :iconName="item" @click="handleClick(item)" size="large" />
		</div>
	</div>
</template>
<script lang="ts" setup>
import 'wc-design/src/icon/index';
import { iconArray } from './constants';
import { message } from 'wc-design/src/message';
const handleClick = (iconName: string) => {
	navigator.clipboard
		.writeText(`<wd-icon iconName="${iconName}"/>`)
		.then((res) => {
			message.success({
				content: '💖复制成功💖，快去使用吧'
			});
		})
		.catch((err) => {
			console.log(err);
		});
};
</script>
