<template>
	<div style="display: flex; flex-wrap: wrap">
		<div class="wd-icons-view__wrapper" v-for="item in iconArray" :key="item">
			<wc-icon :iconName="item" />
		</div>
	</div>
</template>
<script lang="ts" setup>
import 'wc-design/src/icon/index';
import { iconArray } from './constants';
</script>
