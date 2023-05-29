# 事件与行为

#### &#x20;事件动作

<https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/event-action>&#x20;

#### 内置行为

使用 ==action== 行为按钮组件，触发 amis 内置的页面交互操作。

使用 `actionType` 来配置组件具体的行为。

完整的行为列表可以查看 [action](https://aisuda.bce.baidu.com/amis/zh-CN/components/action) 组件。

```json
{
  "type": "page",
  "body": {
    "label": "action示例：弹框",
    "type": "button",
    "actionType": "dialog",
    "dialog": {
      "title": "弹框",
      "body": "这是个简单的弹框。"
    }
  }
}
```

```json
{
  "type": "page",
  "body": {
    "type": "action",
    "label": "action示例：发出一个请求",
    "actionType": "ajax",
    "api": "/amis/api/mock2/form/saveForm"
  }
}
```

#### 事件监听

事件监听用于给**复杂的UI交互场景**提供了**通用的解决方案**。

[将 amis 当成 UI 库用 > 事件监听](https://aisuda.bce.baidu.com/amis/zh-CN/docs/extend/ui-library)