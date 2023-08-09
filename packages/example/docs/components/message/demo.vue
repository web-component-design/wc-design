<template>
	<div>
		<wc-message content="aad" @on-close-btn-click="handleClick" />
	</div>
</template>
<script lang="ts" setup>
import { mountMessage } from 'wc-design/src/message';
// mountMessage({
// 	content: 'message消息',
// 	duration: 0,
// 	theme: 'loading',
// 	zIndex: 10010,
// 	'on-close-btn-click': (e: MouseEvent) => {
// 		console.log('eee', e);
// 	}
// });

// mountMessage({});
// mountMessage({});
const handleClick = () => {
	console.log(123);
};
</script>
