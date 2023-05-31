# 3.1.4 switch多选择结构

## 语法结构

```java
switch (表达式) {
case 值1: 
语句序列1;
[break];
case 值2:
 语句序列2;
[break];
     … … …      … …
[default:
 默认语句;]
}
```

   switch语句会根据表达式的值从相匹配的`case`标签处开始执行，一直执行到`break`语句处或者是switch语句的末尾。如果表达式的值与任一case值不匹配，则进入`default`语句(如果存在default语句的情况)。

   根据表达式值的不同可以执行许多不同的操作。switch语句中case标签在JDK1.5之前必须是整数(long类型除外)或者枚举，不能是字符串，在JDK1.7之后允许使用字符串(String)。

   大家要注意，当布尔表达式是等值判断的情况，可以使用if-else if-else多选择结构或者switch结构，如果布尔表达式区间判断的情况，则只能使用if-else if-else多选择结构。

   switch多选择结构的流程图如图3-10所示。

　　

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494918663569372.png)



> 图3-10 switch多选择结构流程图

**【示例3-6】switch结构**

```java
public class Test6 {
    public static void main(String[] args) {
        char c = 'a';
        int rand = (int) (26 * Math.random());
        char c2 = (char) (c + rand);
        System.out.print(c2 + ": ");
        switch (c2) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            System.out.println("元音");
            break;
        case 'y':
        case 'w':
            System.out.println("半元音");
            break;
        default:
            System.out.println("辅音");
        }
    }
}
```

![2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494918740540880.png)

> 图3-11 示例3-6运行效果图1

![3.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494918747692225.png)

> 图3-12 示例3-6运行效果图2