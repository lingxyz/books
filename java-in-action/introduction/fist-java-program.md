# 1.5.1 开发第一个Java程序

## 使用记事本，编写代码

   【示例1-1】使用记事本开发第一个Java程序

```java
public  class  Welcome{
    public static void main(String[] args){
        System.out.println("Hello Java!我是尚学堂学员，程许愿");
    }
}
```

   可在d盘下建立文件夹mycode，用于保存学习的代码。保存路径建议为：”d:/mycode”。保存为：Welcome.java  （文件名必须为Welcome，大小写也必须一致）。如图1-19所示。

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494839751861170.png)

## 菜鸟雷区

1. 代码中的引号、分号必须为英文引号和分号，不能是中文全角的引号和分号

2. 注意大小写

## 编译（编译器创建class字节码文件）

   打开命令行窗口，进入Java文件所在目录；执行命令：javac  Welcome.java，生成class文件。

![2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494839822258615.png)

> 上图编译Java源文件

## 解释并运行阶段

   执行：”java  Welcome”（就是运行编译生成的Welcome.class文件），输出执行结果。

![3.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494839849841268.png)

> 上图解释并运行程序

**菜鸟雷区**

1. 修改完java源文件，一定要重新编译才能生效；