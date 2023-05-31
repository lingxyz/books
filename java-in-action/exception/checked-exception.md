# 6.3.4 CheckedException已检查异常

   所有不是RuntimeException的异常，统称为Checked Exception，又被称为“已检查异常”，如IOException、SQLException等以及用户自定义的Exception异常。 这类异常在编译时就必须做出处理，否则无法通过编译。如图6-9所示。

![图6-9 CheckedException异常.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495273524104532.png)

> 图6-9 CheckedException异常

   如图6-9所示，异常的处理方式有两种：使用“==try/catch==”捕获异常、使用“==throws==”声明异常。