<template>
    <div>
        <button @click="handleClickMessage1">消息</button>{{ ' ' }}
        <button @click="handleClickMessage2">成功</button>{{ ' ' }}
        <button @click="handleClickMessage3">警告</button>{{ ' ' }}
        <button @click="handleClickMessage4">错误</button>{{ ' ' }}
        <button @click="handleClickMessage5">加载中</button>{{ ' ' }}
        <button @click="handleClickMessage6">疑问</button>{{ ' ' }}
    </div>
</template>
<script lang="ts" setup>
import { message } from 'wc-design/src/message';

const handleClickMessage1 = () => {
    message.info({
        content: 'info文本消息',
    });
}

const handleClickMessage2 = () => {
    message.success({
        content: 'success文本消息',
    });
}

const handleClickMessage3 = () => {
    message.warning({
        content: 'warning文本消息',
    });
}

const handleClickMessage4 = () => {
    message.error({
        content: 'error文本消息',
    });
}

const handleClickMessage5 = () => {
    message.loading({
        content: 'loading文本消息',
    });
}

const handleClickMessage6 = () => {
    message.question({
        content: 'question文本消息',
    });
}

</script>
