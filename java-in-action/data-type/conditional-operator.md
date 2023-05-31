# 2.7.7 条件运算符

**语法格式：**

```java
x ? y : z
```

  其中 x 为 boolean 类型表达式，先计算 x 的值，若为true，则整个运算的结果为表达式 y 的值，否则整个运算结果为表达式 z 的值。

**【示例2-25】三目条件运算符**

```java
int score = 80; 
int x = -100;
String type = score < 60 ? "不及格" : "及格"; 
int flag = x > 0 ? 1 : (x == 0 ? 0 : -1);
System.out.println("type= " + type);
System.out.println("flag= "+ flag);
```

运行结果如图2-5所示。

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494905474866571.png)

> 图2-5 示例2-25运行效果图