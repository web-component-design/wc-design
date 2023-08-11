<script setup>
import baseDemo from './base.vue'
import disabledDemo from './disabled.vue'
import iconDemo from './icon.vue'
import routeDemo from './route.vue'
import sizeDemo from './size.vue'
import hoverDemo from './hover.vue'
import underlineDemo from './underline.vue'

</script>

## link 链接

### 使用场景

- 文字超链接，主要用于点击文字跳转

### 基础用法

- 基础的文字链接用法。

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

### 禁用的链接

- 文字链接不可用状态。

<disabledDemo />

::: details 查看源代码
::: code-group

<<< ./disabled.vue [vue]

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

### 不同尺寸

- 提供小、中（默认）、大，三种尺寸

<sizeDemo />

::: details 查看源代码
::: code-group

<<< ./size.vue [vue]

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

### 下划线

- 文字链接下划线。

<underlineDemo />

::: details 查看源代码
::: code-group

<<< ./underline.vue [vue]

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

### 图标

- 带图标的链接

<iconDemo />

::: details 查看源代码
::: code-group

<<< ./icon.vue [vue]

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

### 跳转的链接

- 文字链接可跳转。

<routeDemo />

::: details 查看源代码
::: code-group

<<< ./route.vue [vue]

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

### 链接悬浮态样式的链接

- 悬浮状态包含 2 种状态：文本颜色变化 和 添加下划线。由 `hover` 控制，可选值：`color` | `underline`

<hoverDemo />

::: details 查看源代码
::: code-group

<<< ./hover.vue [vue]

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

### API

<!--
| 属性名   | 类型                  | 说明                                                                   |  默认值 | 必传 |
| -------- | --------------------- | ---------------------------------------------------------------------- | ------: | ---: |
| color    | String                | 图标颜色                                                               |   black |    N |
| iconName | [参考图标](#全部图标) | 必需；图标名称                                                         |       - |    Y |
| size     | String                | 图标尺寸，支持 'small', 'medium', 'default', 'large'，'35px', '3em' 等 | default |    Y |
| onClick  | Function              | TS 类型 :`(e: PointerEvent) => void`                                   |       - |    N | -->
