# CSS 样式调整

amis 中大部分的组件都支持配置 ==className== 和 ==xxxClassName==，来添加自定义样式。

```json
{
	"type": "xxx",
	"className": {"text-danger": "this.status == 1"}
}
```

1.  给组件添加 amis 内置样式

通过 ==className== 给组件添加内置样式类。

具体可用样式列表请查阅 [旧版样式（可使用但不更新）](https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/style#%E5%AD%97%E4%BD%93%E9%A2%9C%E8%89%B2) 和 [新版样式](https://aisuda.bce.baidu.com/amis/zh-CN/style/layout/box-sizing)。

例如给按钮添加 `margin-left: 15px;`

```json
{
	"type": "button",
	"className": "m-l"
}
```

1.  使用 `wrapper` 组件直接内嵌 `style`

`wrapper` 是 amis 组件库中自带的组件，相当于 `div` 标签。最大的作用就是==用来布局==。

```json
{
    "type": "wrapper",
    "body": "内容",
    "className": "b" // 添加class
	"style": {		// 自定义样式（内联）
        "color": "#aaa"
     }
  }
```

1.  使用 CSS 变量动态修改全局样式

在 page 下设置 ==cssVars== 属性，修改 amis 内置 css 变量，达到修改全局 css 样式的目的。

具体的 CSS 变量参照 [CSS 变量](https://aisuda.bce.baidu.com/amis/zh-CN/style/css-vars)。

```json
{
  "type": "page",
  "cssVars": {
    "--text-color": "#CD3632",
    "--primary": "#CD3632",
    "--primary-onHover": "#F23F3A",
    "--primary-onActive": "#BB312D"
}
```

1.  生成自定义主题 CSS

    3.1 官方推荐通过源码方式，参考 scss\themes\cxd.scss 文件，修改变量后重新编译一个 css。

    3.2 实际项目中建议维护一个 ==reset-amis.scss==，覆盖 amis 组件默认样式。多项目建议将 reset-amis.scss 提取出来作为==公共 CSS 组件==，或者加入 CDN。

