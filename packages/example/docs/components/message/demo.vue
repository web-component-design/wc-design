<template>
	<div id="aac">
	</div>
</template>
<script lang="ts" setup>
import { message } from 'wc-design/src/message';
import { onMounted } from 'vue'
onMounted(() => {
	message.info({
		content: 'message消息',
		duration: 0,
		zIndex: 10010,
	});

})

// mountMessage({});
// mountMessage({});
const handleClick = () => {
	console.log(123);
};
</script>
