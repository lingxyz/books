# 6.3 异常分类

   JDK 中定义了很多异常类，这些类对应了各种各样可能出现的异常事件，所有异常对象都是派生于`Throwable`类的一个实例。如果内置的异常类不能够满足需要，还可以创建自己的异常类。

   Java对异常进行了分类，不同类型的异常分别用不同的Java类表示，所有异常的根类为`java.lang.Throwable`，`Throwable`下面又派生了两个子类：`Error`和`Exception`。Java异常类的层次结构如图6-2所示。

![图6-2 Java异常类层次结构图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495272017528669.png)

> 图6-2 Java异常类层次结构图