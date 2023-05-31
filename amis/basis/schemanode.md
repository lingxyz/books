# SchemaNode

在 amis 中，==**SchemaNode  = 组件 = 配置文件**==。简单示例：


```json
{
  "type": "page",
  "data": {"hello": "hello word"},
  "body": "${hello}"
}
```

::: info 渲染效果
<div id="hello">
  <slot></slot>
</div>
:::

*   其中 ==type 的值 = 要渲染的组件名==，必须有。
*   ==body== 中可以嵌套组件。格式为 `body: [{type, body}]`。
*   根据 body 中的组件嵌套关系树，来实现默认布局。
*   在 ==data== 属性中，定义组件需要的数据。
*   使用 ==\${xxx}== 动态获取数据。类似 js 模板字符串语法。
*   ==Definitions== 公共配置：

在`顶级节点`中定义 Definitions 属性，作为当前页面公共的配置项。在页面组件中通过 ==\$ref== 来引用组件。

主要用于页面中组件的==重复引用==和==递归引用==。

示例：from 表单中渲染全局配置的组件 `aa`。

```json
{
  "type": "page",
  "definitions": {
    "aa": {
      "type": "input-text",
      "name": "jack",
      "value": "ref value",
      "labelRemark": "通过<code>\\$ref</code>引入的组件"
    }
  },
  "body": [
    {
      "type": "form",
      "api": "api/xxx",
      "actions": [],
      "body": [
        {
          "$ref": "aa"
        }
      ]
    }
  ]
}
```

::: info 渲染效果
<div id="aa">
  <slot></slot>
</div>
:::

<script lang="ts" setup>
/* 根据 amis config 渲染组件 */
const hello = {
  "type": "page",
  "data": {"hello": "hello word"},
  "body": "${hello}"
}
const aa = {
  "type": "page",
  "definitions": {
    "aa": {
      "type": "input-text",
      "name": "jack",
      "value": "ref value",
      "labelRemark": "通过<code>\\$ref</code>引入的组件"
    }
  },
  "body": [
    {
      "type": "form",
      "api": "api/xxx",
      "actions": [],
      "body": [
        {
          "$ref": "aa"
        }
      ]
    }
  ]
}

// 仅在浏览器端执行（跳过SSR）
if (!import.meta.env.SSR) {
  setTimeout(() => {
    var amis = amisRequire('amis/embed');
    amis.embed('#hello', hello);
    amis.embed('#aa', aa);
  }, 1000)
}
</script>
