# 6.3.1 Error

   Error是程序无法处理的错误，表示运行应用程序中较严重问题。大多数错误与代码编写者执行的操作无关，而表示==代码运行时 JVM(Java 虚拟机)出现的问题==。例如，Java虚拟机运行错误(Virtual MachineError)，当 JVM 不再有继续执行操作所需的内存资源时，将出现 OutOfMemoryError。这些异常发生时，Java虚拟机(JVM)一般会选择线程终止。

   ==Error表明系统JVM已经处于不可恢复的崩溃状态中。我们不需要管它。==

![图6-3 java.lang包中Error的类.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495272264904706.png)

> 图6-3 java.lang包中Error的类

**Error与Exception的区别**

1. 我开着车走在路上，一头猪冲在路中间，我刹车。这叫一个异常。

2. 我开着车在路上，发动机坏了，我停车，这叫错误。系统处于不可恢复的崩溃状态。发动机什么时候坏?我们普通司机能管吗?不能。发动机什么时候坏是汽车厂发动机制造商的事。

