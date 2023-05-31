# 第一章 作业

## 一、选择题

1. 以下（   ）不是Java的特点。（选择一项）  

A.平台无关性

B.高可靠性和安全性

C.指针运算

D.分布式应用和多线程

2. 以下选项中关于Java跨平台原理的说法正确的是（   ）。（选择二项）

A Java源程序要先编译成与平台无关的字节码文件(.class)，然后字节码文件再被解释成机器码运行

B. Java语言只需要编译，不需要进行解释

C. Java虚拟机是运行Java字节码文件的虚拟计算机。不同平台的虚拟机是不同的

D. Java语言具有一次编译，到处运行的特点，可以在所有的平台上运行

3. 以下选项中是对一个Java源文件进行正确编译的语句是（   ）（选择一项）

A. java Test 

B. java Test.class 

C. javac Test

D. javac Test.java

4. 在Java中，源文件Test.java中包含如下代码，则程序编译运行的结果是（   ）。（选择一项）

```java
public class Test {
	public static void main(String[ ] args) {
  	system.out.println("Hello!");
  }
}
```

A 输出：Hello！

B. 编译出错，提示“无法解析system”

C. 运行正常，但没有输出任何内容

D. 运行时出现异常

5. 有一段Java 程序，其中public类名是A1，那么保存它的源文件名可以是（   ）。（选择一项）

A A1.java

B. A1.class

C. A1

D. 都不对

## 二、简答题

1.计算机语言发展史中的主线。

2.Java的跨平台的实现原理。

3.JDK、JRE、JVM 的区别和联系。

4.Java程序的开发和执行过程。

5.环境变量Path的作用和配置。 

## 三、上机操作

1. 使用记事本编写第一个Java程序。

2. 使用记事本编写Java程序(重点练习打印语句System.out.println())，开发学生管理系统主菜单界面

​      ![image.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20171020/1508466235430156.png)

3. 照着敲小游戏代码，完成小游戏。遇到问题找到出错的行，对照老师代码进行修改。