# 快速开始

可通过 sdk 方式和 react 方式引入。这里介绍通用的 sdk 方式，可以用于 Vue 项目。

## 框架集成 Amis

1.  项目中安装 amis

```bash
npm i amis -S
```

2. html 中引入 amis （vite中）

```javascript
// vite项目中：index.html
<link rel="stylesheet" href="node_modules/amis/sdk/sdk.css" />
<script src="node_modules/amis/sdk/sdk.js"></script>
```

::: details 微前端 qiankun.js 中的踩坑经验

1. Amis JS SDK 必须先于 qiankun 引入，否则会报`lifecycle entry` 未配置的错误。

2. 若主服务配置的 `font-size` 与子服务不同，会影响 amis 通过 `rem` 设置的样式。

* 最快的解决方案是页面中内嵌一个`<iframe src="amis路径"></iframe>`。iframe会引起一些全局弹窗的问题.
* 主流做法需要将子服务的 **rem 粒度** 设置与主服务相等。再用js脚本重置 amis 中 sdk.css 的rem，脚本如下：

::: code-group

```js [amis-rewrite-rem.js]
/*
 * 文件名：root/amis-rewrite-rem.js
 * 作用：将node_modules/amis/sdk/sdk.css 中的 rem 全局 * 2，解决子应用部署在主应用rem 单位不一致的 bug
 * 流程解析：
 * 1. 第一次执行，会把 sdk.css 重命名为 sdk-origin.css，再 rem * 2生成 sdk.css。以后每次执行，如果存在 sdk-origin.css，就会跳过。
 * 2. 也就是说 执行 npm install 之后，只有第一次执行 npm run serve 会执行脚本。
 */
const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');

try {
  const amisCssPath = path.resolve(__dirname, './node_modules/amis/sdk/sdk.css');
  const amisCssOriginPath = path.resolve(__dirname, './node_modules/amis/sdk/sdk-origin.css');

  // 原始文件留存：sdk.css 改为 sdk-origin.css
  if (!fs.existsSync(amisCssOriginPath)) {
    fs.renameSync(amisCssPath, amisCssOriginPath);
    // fs.unlinkSync(amisCssPath);
  } else {
    console.log('>>> amis.css 中的 rem 重写跳过');
    return;
  }

  // 定义 readStream、writeStream-利用缓存文件、transformStream-rem转换
  const readStream = fs.createReadStream(amisCssOriginPath, 'utf-8');
  let writeStream;
  try {
    fs.accessSync(amisCssPath, fs.constants.F_OK);
    writeStream = fs.createWriteStream(amisCssPath, 'utf-8');
  } catch (err) {
    writeStream = fs.createWriteStream(amisCssPath, { flags: 'w' });
  }
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      // rem转换核心逻辑
      const content = chunk.toString();
      // console.log("文件内容打印测试：", content);
      const replacedContent = content.replace(/(\d+(\.\d+)?)rem(\s|;|\)|\()/g, (match, p1, p2, p3) => {
        // console.log(p1, p2, p3, 111)
        return p1 * 2 + 'rem' + p3;
      });
      this.push(replacedContent);
      callback();
    }
  });
  readStream.pipe(transformStream).pipe(writeStream);
  // 文件重命名
  writeStream.on('finish', () => {
    console.log('>>> amis.css 中的 rem 重写完成');
  });
} catch (error) {
  console.error("amis.css 重写失败!\n请检查是否已执行 npm install!\n报错详情：\n", error);
}
```
```json [package.json]
/*
 * Usage 1:
 * 将脚本配置在 package.json > script 中。举例：
 */
{
  "scripts": {
    "serve": "node amis-rewrite-rem.js && vue-cli-service serve",
    "build": "node amis-rewrite-rem.js && vue-cli-service build"
  }
}
/*
 * Usage 2:
 * vue.config.js 的 webpack 钩子中。略。
 */
```
:::

## Amis 通用组件

1. 在 Vue 中定义通用的 Amis 组件

```javascript
// src > components > amis.vue
<template>
<div id="box">
  <slot></slot>
</div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

const props= defineProps({
  amisjson: {
    type: Object,
    required: true
  }
})

onMounted(() => {
  var amis = amisRequire('amis/embed');
  let amisScoped = amis.embed('#box', props.amisjson);
})
</script>
```

2. Vue 中使用 Amis 组件

```javascript
<Amis :amisjson="amisjson"></Amis>
```

## Amis 通用页面

::: code-group

```js [src/pages/amisPage/init.vue]
<template lang="pug">
.amis-home
  div(
    ref="amisBox"
  )
</template>

<script lang="ts" setup>
import { ref, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { $get, $post } from '@/http/request'

import jsonDefault from './json/index'

type TJson = keyof typeof jsonDefault

const amisBox = ref()
const route = useRoute()

/* amis 渲染器 */
const amisRender = (schemaJson: any) => {
  const amis = (window as any)?.amisRequire('amis/embed')

  amis.embed(amisBox.value, schemaJson, {}, {
    // 增加接口访问 fetcher 方法，访问项目接口， 区分不同环境
    fetcher: ({ url, method, body }: any) => {
      switch (method) {
        case 'get':
          // 根据项目现有接口请求工具添加对应 api
          // extraParams 扩展字段是根据树根请求模块扩展的特殊字段，用于统一处理amis接收数据的返回格式，可去除
          return $get(url, { ...body, extraParams: { type: 'amis' } })
        case 'post':
          return $post(url, { ...body, extraParams: { type: 'amis' } })
      }
    }
    // theme: 'antd'
  })
}

/* 执行渲染逻辑 */
const initPage = async (jsonSchema: any) => {
  const amisRequire = (window as any)?.amisRequire ?? null

  if (!amisRequire) {
    return
  }
  await nextTick() // 待完成跟选择器节点的渲染
  // 使用 amis 内置组件渲染
  amisRender(jsonSchema)
}

/*解析url参数，加载对应的amis配置文件*/
const loadJsonSchemaHook = () => {
  // 路由命名规则 /amis/xxx [xxx 使用小驼峰]
  // 根据规则获取 json 文件名
  const pathName = (route.path).split('/').at(-1) as TJson
  // 获取 json 数据
  const json = jsonDefault[pathName] ?? null
  json && initPage(json)
}

watch(() => route.path, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    loadJsonSchemaHook()
  }
}, {
  immediate: true,
  deep: true
})
</script>
```

```js [src/router.js]
/**
 * vue router 配置不同传参渲染到同一个 amis 组件
 */
{
  path: '/amis/:type',
  component: () => import('@/pages/amisPage/init.vue'),
  name: 'amis-demo'
}
```

```js [src/pages/amisPage/json]
/**
 * 存储 /amis/:type 匹配的 json 配置
 */
└─ index.json
└─ xxx.json
└─ ...
```
:::
