<script setup>
import demo from './demo.vue'
import baseDemo from './base.vue'
import statusDemo from './status.vue'
import closeDemo from './close.vue'
</script>
## Message 消息提示

### 使用场景

- 对用户操作做出轻量级的操作（ajax操作结果）

### 说明

- Message 消息提示提供了`service`和`组件`俩种调用方式


### 基础用法
- 从顶部出现，3 秒后自动消失。

- Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

<baseDemo />

::: details 查看源代码
::: code-group

<<< ./base.vue [vue]

```md [react]
react code
```

```md [angular]
angular code
```

```sh [qwit]
qwit code
```

```sh [solid]
solid code
```

```sh [svelte]
svelte code
```

:::

### 不同状态
- 用来显示「成功、警告、消息、错误，疑问，加载中」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 `theme` 字段可以定义不同的状态，默认为`info`; 同时，我们也为 Message 的各种 `theme` 注册了方法，可以在不传入 `theme` 字段的情况下直接调用。

<statusDemo />


::: details 查看源代码
::: code-group

<<< ./status.vue [vue]

```md [react]
react code
```

```md [angular]
angular code
```

```sh [qwit]
qwit code
```

```sh [solid]
solid code
```

```sh [svelte]
svelte code
```

:::

### 可关闭的消息提示

::: danger
 组件调用还存在问题
:::

- 可以添加关闭按钮。

- 默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `closeBtn` 设置为 true 此外，还可以`自定义关闭内容`， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为0便表示该消息不会被自动关闭。
  
<!-- <closeDemo /> -->

### API

| 属性名          | 类型                                                                                    | 说明                                                                                                                                        | 默认值 | 必传 |
| --------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -----: | ---: |
| content         | (String 、 [HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement)) | 内容文案                                                                                                                                    |      - |    Y |
| theme           | ('info'、 'success'、 'warning'、 'error'、 'question'、 'loading')                     | message类型                                                                                                                                 |   info |    N |
| closeBtn        | (Boolean 、 String)                                                                     | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。也可以完全自定义按钮 |  false |    N |
| close-btn-click | Function                                                                                | 点击`X`时触发；TS 类型 :`(e: PointerEvent) => void`                                                                                         |      - |    N |
