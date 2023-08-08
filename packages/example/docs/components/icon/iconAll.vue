<template>
	<div style="display: flex; flex-wrap: wrap">
		<div class="wd-icons-view__wrapper" v-for="item in iconArray" :key="item">
			<wc-icon :iconName="item" @click="handleClick(item)" />
		</div>
	</div>
</template>
<script lang="ts" setup>
import 'wc-design/src/icon/index';
import { iconArray } from './constants';
const handleClick = (iconName: string) => {
	navigator.clipboard.writeText(`<wc-icon iconName="${iconName}"/>`).then(res => {
		console.log(res);
	}).catch(err => {
		console.log(err);
	})

}
</script>
