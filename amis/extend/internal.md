# 工作原理

## Amis 工作原理

​		amis 的渲染过程是将 `json` 转成对应的 React 组件。==先通过 `json` 的 type 找到对应的 `React Component`，然后把其他属性作为 `props` 传递过去，通过 React 组件中的代码完成渲染==。

​		拿一个表单页面来说，amis JSON 配置一般是：

```json
{
  "type": "page",
  "title": "页面标题",
  "subTitle": "副标题",
  "body": {
    "type": "form",
    "title": "用户登录",
    "body": [
      {
        "type": "input-text",
        "name": "username",
        "label": "用户名"
      }
    ]
  }
}
```

​		对应的 React 组件是：

```jsx
<Page title="页面标题" subTitle="副标题">
  <Form title="用户登录">
    <InputText name="username" label="用户名" />
  </Form>
</Page>
```

​	对应 Amis 中的 React 组件是：
::: code-group
```jsx [Page 组件的代码]
import * as React from 'react';
import {Renderer} from 'amis-core';

@Renderer({
  type: 'page'
  // ... 其他信息隐藏了
})
export class PageRenderer extends React.Component {
  // ... 其他信息隐藏了
  render() {
    const {
      title,
      body,
      render // 用来渲染孩子节点，如果当前是叶子节点则可以忽略。
    } = this.props;
    return (
      <div className="page">
        <h1>{title}</h1>
        <div className="body-container">
          {render('body', body) /*渲染孩子节点*/}
        </div>
      </div>
    );
  }
}

// 如果不支持 Decorators 语法也可以使用如下写法
export Renderer({
  type: 'page'
})(class PageRenderer extends React.Component {
  render() {
    // ...同上
  }
})
```

```jsx [Form 组件的代码]
@Renderer({
  type: 'form'
  // ... 其他信息隐藏了
})
export class FormRenderer extends React.Component {
  // ... 其他信息隐藏了
  render() {
    const {
      title,
      body,
      render // 用来渲染孩子节点，如果当前是叶子节点则可以忽略。
    } = this.props;
    return (
      <form className="form">
        {body.map((control, index) => (
          <div className="form-item" key={index}>
            {render(`${index}/control`, control)}
          </div>
        ))}
      </form>
    );
  }
}
```

```jsx [Text 组件的代码]
@Renderer({
    type: 'input-text'
    // ... 其他信息隐藏了
})
export class FormItemTextRenderer extends React.Component {
    // ... 其他信息隐藏了
    render() {
        const {
            label,
            name,
            onChange
        } = this.props;
        return (
            <div className="form-group">
                <label>{label}<label>
                <input type="text" onChange={(e) => onChange(e.currentTarget.value)} />
            </div>
        );
    }
}
```

## 仿 Amis 实现 Vue 低代码

​    Amis 是 React 开发的，虽然提供了 Vue 的使用方式，但不如直接使用 Vue 低代码灵活，API 的差异也大大增加了前端的使用成本。

​    参照 Amis 的原理，可以解析预置算的 JSON 配置，通过 ==Vue 的动态组件 + 递归调用==，将==组件名和属==map到动态组件上，实现 Vue 低代码。

​    下面是一个案例：

::: code-group
```vue [src/pages/LowDemo.vue]
/**
  * 在 pages 中，预期的使用方式
  */
<template>
  <div>递归动态组件</div>
  <LowTree :lowjson="lowjson"></LowTree>
</template>

<script setup>
import LowTree from "../components/LowTree.vue";

// 注意：实际使用时，lowjson放在统一的文件夹中，动态加载。
const lowjson = [{
  name: 'LowA',
  params: { msg: ' components 1' },
  click: () => { alert() },
  children: [
    {
      name: 'LowB',
      params: { msg: ' components 2' },
      children: [
        {
          name: 'LowC',
          params: { msg: ' components 3' },
        }
      ]
    }
  ]
}, {
  name: 'LowA'
}]
</script>
```

```vue [src/components/LowTree.vue]
/**
  * 根据json传参，动态完成组件渲染
  * 核心逻辑：组件名匹配、递归调用、参数结构
  */
<template>
  <component
    v-for="(item, index) in lowjson" :key="index"
    :is="components[item.name]"
    :params="item.params"
    @click="item.click"
  >
    <template v-if="item.children">
      <LowTree
        :lowjson="item.children"
      ></LowTree>
    </template>
  </component>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

import LowA from "../components/LowA.vue";
import LowB from "../components/LowB.vue";
import LowC from "../components/LowC.vue";

// 一个全局注册所有组件的对象（项目中通过app.use全局注册）
const components = {
  LowA,
  LowB,
  LowC
}

const props= defineProps({
  /**
   * 注意：json可传递属性、指令、生命周期callback、defineEmits等。
   * 参数全部由使用者自定义，下沉到使用者的自定义组件内实现。不在LowTree组件兼容。减少复杂度和熟悉成本。
   */
  lowjson: {
    type: Array,
    required: true
  }
})
</script>
```

```vue [src/components/LowA/B/C.vue]
/**
 * LowA 组件。LowB、LowC与LowA结构相同。
 */
<template lang="pug">
div LowA
  span {{params?.msg}}
  slot
</template>

<script setup>
import {defineProps} from 'vue'
const props= defineProps({
  params: {
    type: Object,
    required: false
  }
})
</script>

<style scoped>
div {
  border: 1px solid #585656;
  display: inline-block;
}
</style>
```
:::

实现效果：
<div style="border: 1px solid #333; display: inline-block;">
LowA
<span>components</span>
  <div style="border: 1px solid blue; display: inline-block;">
    LowB
    <span>components</span>
    <div style="border: 1px solid red; display: inline-block;">
      LowC
      <span>components</span>
    </div>
  </div>
</div>

::: danger Vue 项目使用
Vue 项目中快速在项目内实现低代码混合开发模式，可以直接引入 ==`LowTree.vue` + 自定义组件==即可。

若需继续提效，还需实现==可视化编辑器==。即在核心代码的基础上，做边缘功能的设计和开发。

就如同接下来介绍的 uni-app 低代码案例。
:::

## 仿 Amis 实现 uni-app 低代码

​    参照 [uni-lowcode](https://gitee.com/godoforange/uni-lowcode)：
- 可视化编辑器：[预览地址](https://rtvue-lowcode.upsilon.press/#/pages/index/design)。
- component 动态渲染的[核心代码](https://gitee.com/godoforange/uni-lowcode/blob/master/app/src/components/r-vue-edit/r-vue-edit.vue#L31)：


```vue [/app/src/components/r-vue-edit/r-vue-edit.vue]
<r-drag :index="index" @swapComp="swapComp" @addComp="addComp">
  <component
    :is="item.type"
    :option="item.option"
    :compStyle="item.compStyle"
  ></component>
</r-drag>
```
