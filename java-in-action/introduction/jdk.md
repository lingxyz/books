**1.3.6 JVM、JRE和JDK**

JVM(Java Virtual Machine)就是一个虚拟的用于执行bytecode字节码的”虚拟计算机”。他也定义了指令集、寄存器集、结构栈、垃圾收集堆、内存区域。JVM负责将Java字节码解释运行，边解释边运行，这样，速度就会受到一定的影响。

不同的操作系统有不同的虚拟机。Java 虚拟机机制屏蔽了底层运行平台的差别，实现了“一次编译，随处运行”。 Java虚拟机是实现跨平台的核心机制。如图1-6所示。

![图片8.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494837984812122.png "1494837984812122.png")

Java Runtime Environment (JRE) 包含：Java虚拟机、库函数、运行Java应用程序所必须的文件。

Java  Development Kit (JDK)包含：包含JRE，以及增加编译器和调试器等用于程序开发的文件。

JDK、JRE和JVM的关系如图1-7所示。

![图片7.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494837979897855.png "1494837979897855.png")

**老鸟建议：**

- 如果只是要运行Java程序，只需要JRE就可以。JRE通常非常小，其中包含了JVM。
- 如果要开发Java程序，就需要安装JDK。
