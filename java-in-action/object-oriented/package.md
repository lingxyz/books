# 4.12 包

   包机制是Java中管理类的重要手段。 开发中，我们会遇到大量同名的类，通过包我们很容易对==解决类重名的问题==，也可以实现对类的有效管理。 包对于类，相当于==文件夹==对于文件的作用。

## package的命名

　　我们通过package实现对类的管理，package的使用有两个要点：

　　1. 通常是类的第一句非注释性语句。

　　2. 包名：==域名倒着写==即可，再加上模块名，便于内部管理类。

**【示例4-13】package的命名举例**

```java
com.sun.test;
com.oracle.test;
cn.sxt.gao.test;
cn.sxt.gao.view;
cn.sxt.gao.view.model;
```

**注意事项：**

　　1. 写项目时都要加包，不要使用默认包。

　　2. ==com.gao和com.gao.car，这两个包没有包含关系==，是两个完全独立的包。只是逻辑上看起来后者是前者的一部分。

## package的使用

**【示例4-14】package的使用**

```java
package cn.sxt;
public class Test {
	public static void main(String[] args) {
		System.out.println("helloworld");
	}
}
```

**·在eclipse项目中新建包**

　　在src目录上单击右键，选择new->package

![1.png](http://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494928098161998.png)

> 图4-13 创建package

　　在package窗口上输入包名即可

![2.png](http://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494928109616215.png)

> 图4-14 指定包名称

　　接下来，我们就可以在包上单击右键，新建类啦!