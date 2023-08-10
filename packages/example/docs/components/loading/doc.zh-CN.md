<script setup>
import baseDemo from './base.vue'
import areaDemo from './area.vue'
import customDemo from './custom.vue'
import sizeDemo from './size.vue'
import delayDemo from './delay.vue'
import funcDemo from './func.vue'

</script>

## loading 加载

### 使用场景

- 数据加载时显示，主要用在 ajax 响应期间显示

### 说明

- loading 提示提供了`service`和`组件`俩种调用方式
- 通过`组件`调用，`loading`遮罩会被添加到绑定元素的子节点上
- 通过`服务`调用，`loading`遮罩会被添加到`body`的子节点上

### 基础用法

- 加载过程中只有图标显示。适用于打开页面或操作完成后模块内等待刷新的加载场景。

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

### 区域加载

- 在需要的时候展示加载动画，防止页面失去响应提高用户体验（例如表格）。

<areaDemo />

::: details 查看源代码
::: code-group

<<< ./area.vue [vue]

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

### 自定义加载图标和文字

- 你可以自定义加载中组件的文字，图标。

<delayDemo />

::: details 查看源代码
::: code-group

<<< ./custom.vue [vue]

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

### 加载不同尺寸图标

- 小尺寸适用于组件内加载场景，中尺寸适用于容器如卡片、表格等区域的加载场景，大尺寸适用于页面全屏加载场景。

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

### 延时调用

- 设置最短延迟响应时间，低于响应时间的操作不显示加载状态。

<delayDemo />

::: details 查看源代码
::: code-group

<<< ./delay.vue [vue]

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

### 函数方式调用

- Loading 还可以以服务的方式调用

<funcDemo />

::: details 查看源代码
::: code-group

<<< ./func.vue [vue]

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
