# 混合开发

​		在之前介绍了使用 amis 开发的两种方式，分别是 [Amis 通用组件](../basis/getting-started.md#amis-通用组件) 和 [Amis 通用页面](../basis/getting-started.md#amis-通用页面)。

​		如果项目中当前页面可以全部使用 Amis 进行配置，尽量采用`Amis 通用页面` 的方式进行整个页面的配置。

​		但实际开发中更多的场景是，页面中部分组件是**企业定制化**的，在 ami 中没有现成的组件或通过简单修改（样式、扩展）后就能投入使用，这时就需要开发自定义组件，**注册到 Amis 中**，或采用**混合开发**的模式。

​    显然，在 Vue 中，**混合开发的成本更低**。

## 混合开发的优势

​		使用amis的目的是==快速==，混合开发可以节省时间。

​		先用amis替代部分vue组件，以后==逐渐提升组件替代率==。

​		具体可以采用 ==vue页面+嵌入amis组件== 的形式进行开发，哪些模块可以用 amis，就嵌入 amis 组件，不必在不熟悉的情况下，为了全面使用amis开发浪费大量时间，这样就本末倒置了。等于抛弃了熟悉的Vue，完全用新的框架。

::: code-group
```vue [pages/xx.vue]
<template>
	<div>Vue template</div>
	<Amis :amisjson="amisjson"></Amis>
</template>
```

```vue [components/Amis.vue]
<template>
<div id="box">
  <slot></slot>
</div>
</template>

<script lang="ts" setup>
import {  onMounted } from "vue";

const props= defineProps({
  amisjson: {
    type: Object,
    required: true
  }
})

onMounted(() => {
  // @ts-ignore
  var amis = amisRequire('amis/embed');
  let amisScoped = amis.embed('#box', props.amisjson);
})
</script>
```
:::

## 混合开发存在的问题

​	**数据传递**。涉及两方面，如何**将 Vue 中的数据传递到 Amis 配置**中，以及如何**将 Amis 配置中的数据传递到 Vue** 中。

## 从 Vue 变量 到 Amis 配置

### Amis 配置的动态值

​		从 Vue开发者 的角度思考，似乎只有在 .vue 页面里使用 computed 动态获取json，然后在 amis.vue 里面 watch 这个 json，进行 embed。

​		然而，Amis 配置中是可以==直接访问 Vue 变量并赋值==的。这给打通 Vue 变量到 Amis 配置的传值提供了便利性。

```js
// script setup
const text = '按钮'
const amisjson = {
    ...
    body: [{
      type: 'button',
      label: text
    }]
}
```

### 顶层数据域的初始值

​		在执行 `amis.embed` 初始化时，通过 ==props 里的 data== 属性来赋予 amis 顶层数据域的值。

```js
// 设置初始值
let amis = amisRequire('amis/embed');
let amisJSON = {
  type: 'page',
  body: {
    type: 'tpl',
    tpl: '${myData}'
  }
};
let amisScoped = amis.embed('#root', amisJSON, {
  data: {
    myData: 'amis'
  }
});
```

​		可以通过 amisScoped 对象的 updateProps 方法来更新下发到 amis 的属性。

```js
// 更新属性
amisScoped.updateProps(
  {
    // 新的属性对象
  } /*, () => {} 更新回调 */
);
```

## 从 Amis 配置 到 Vue 变量

​		实现 Amis 向 Vue 动态传参，需要在 click 等==事件==中设置 `Vue变量.value = 新值`。

```vue
<template>
	<Amis :amisjson="amisjson"></Amis>
</template>

<script setup>
let aaa = ref(1)
const amisjson = {
    ...
    body: [{
      type: 'button',
      label: '按钮',
      onClick: (e, props) => {
        // 将 amis 组件中的变量值赋给 vue 变量
        aaa.value = props.data.xxx
      }
    }]
}
</script>
```

