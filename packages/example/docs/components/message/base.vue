<template>
    <div>
        <button @click="handleClickMessage">Message</button>{{ ' ' }}
        <button @click="handleClickMessageHTML">Message HTML</button>
    </div>
</template>
<script lang="ts" setup>
import { mountMessage } from 'wc-design/src/message';

const handleClickMessage = () => {
    mountMessage({
        content: 'message文本消息',
        theme: 'info',
    });
}

const handleClickMessageHTML = () => {
    mountMessage({
        content: '<i>斜体messageHTML消息</i> ',
        theme: 'success',
    });
}
</script>
