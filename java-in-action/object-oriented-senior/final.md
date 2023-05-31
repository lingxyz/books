# 5.7 final关键字

## final关键字的作用

1. **修饰变量**: 被他修饰的变量不可改变。一旦赋了初值，就==不能被重新赋值==。

```java
final int MAX_SPEED = 120;
```

2. **修饰方法**：该方法==不可被子类重写(Override)。但是可以被重载(Overload)!==

```java
final void study(){}
```

3. **修饰类**: 修饰的类==不能被继承==。比如：Math、String等。

```java
final class A {}
```

## final 使用举例

   final修饰变量详见第二章示例2-9。

   final修饰方法如图5-21所示。

![图5-21 final修饰方法.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495258739380250.png)

>图5-21 final修饰方法

   final修饰类如图5-22所示。

![图5-22 final修饰类.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495258781342385.png)

> 图5-22 final修饰类