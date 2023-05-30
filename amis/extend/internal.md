# 工作原理

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
