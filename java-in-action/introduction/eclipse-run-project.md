# 1.7.3 使用eclipse开发和运行Java程序

## 使用eclipse开发第一个程序

   我们在上一节建好的Java项目中，开始开发Java程序。首先，新建一个Java类。在src目录上右键单击，建立一个Java类。如图1-32所示。

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494842405992839.png)

> 图1-32 新建Java类入口

   出现新建类的开始界面，如图1-33所示。我们只需输入类名即可，其他不需做任何设置：

![2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494842417827128.png)

> 图1-33 指定Java类的名称

   点击Finish后，新建Java类成功，出现如图1-34所示。

![3.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494842430268879.png)

> 图1-34 新建Java类完成

   在src下面出现了Welcome.java文件。点击该文件后，出现该文件的代码编辑，我们开发Eclipse下的第一个Java程序。

   【示例1-2】使用eclipse开发Java程序

```java
public class Welcome {
    public static void main(String[] args) {
        System.out.println("我是尚学堂的高淇！");
    }
}
```

   运行该程序： 在代码上单击右键后，点击Run as  Java  application。如图1-35所示。也可以使用快捷键“ctrl+F11”，直接实现运行。或者直接点击工具栏的中运行按钮。

![4.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494842478482362.png)

> 图1-35 运行Java程序

​    界面下方的控制台（console）出现运行结果，如图1-36所示。

![5.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494842500265687.png)

> 图1-36 显示运行结果

   至此，我们成功在eclipse中开发了我们的第一个Java程序！

## eclipse自动编译

   eclipse会自动执行javac进行编译，并且会将编译错误直接给出提示，一目了然，非常便于我们调试。

![6.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494842517619975.png)

> 图1-37 eclipse的自动编译

## Java项目的src目录和bin目录

   src用于存放源代码，bin用于存放生成的class文件。

   在eclipse视图里我们只看到了src目录，eclipse隐藏了bin目录。进入我的电脑，打开Java项目目录，我们可以看到src和bin目录：

![7.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494842523614536.png)

> 图1-38 Java项目的完整结构