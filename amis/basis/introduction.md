# Amis 简介

​		Amis 是一个基于 **React** 的**低代码前端**开发框架。

​		它使用 **JSON 配置**或 **JS Object** 作为 **AST 语法树**，先通过 `json` 的 type 找到对应的 `React Component`，然后把其他属性作为 `props` 传递过去，通过 React 组件中的代码生成 **React DOM**，最终由 React 框架完成页面渲染。
