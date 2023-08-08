## Icon 图标

### 使用场景

- 图标用于`见名之义`的提示，通过`Icon`可以迅速了解其所代表的功能,或者对功能模块起辅助作用

### 说明

- 你可以去定义它的颜色或者大小

- 点击图标可以复制代码

- 图标采用`svg`形式，如需添加图标，请[联系我们](https://github.com/web-component-design/wc-design/issues)

### 示例

<script setup>
import demo from './demo.vue'
import demoAll from './iconAll.vue'
</script>

<demo />

::: details 查看源代码
::: code-group

<<< ./demo.vue [vue]

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

### 全部图标

<demoAll />

### API

| 属性名   | 类型                  | 说明                                                                   |  默认值 | 必传 |
| -------- | --------------------- | ---------------------------------------------------------------------- | ------: | ---: |
| color    | String                | 图标颜色                                                               |   black |    N |
| iconName | [参考图标](#全部图标) | 必需；图标名称                                                         |       - |    Y |
| size     | String                | 图标尺寸，支持 'small', 'medium', 'default', 'large'，'35px', '3em' 等 | default |    Y |
| onClick  | Function              | TS 类型 :`(e: PointerEvent) => void`                                   |       - |    N |
