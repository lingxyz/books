# 2.8.3 基本类型转化时常见错误和问题

## 操作比较大的数时，要留意是否==溢出==，尤其是整数操作时。

**【示例2-29】常见问题一**

```java {4,7,10}
int money = 1000000000; // 10亿
int years = 20;
// 返回的total是负数，超过了int的范围
int total = money*years;
System.out.println("total=" + total);
// 返回的total仍然是负数。默认是int，因此结果会转成int值，再转成long。但是已经发生//了数据丢失
long total1 = money*years; 
System.out.println("total1=" + total1);
// 返回的total2正确:先将一个因子变成long，整个表达式发生提升。全部用long来计算。
long total2 = money*((long)years); 
System.out.println("total2=" + total2);
```

**运行结果如图2-8所示。**

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494906673550331.png)

> 图2-8 示例2-29运行效果图

## L和l 的问题：

不要命名名字为l的变量，l容易和1混淆。long类型使用大写L不要用小写。

**【示例2-30】常见问题二**

```java
int l = 2;       // 分不清是L还是1,
long a = 23451l; // 建议使用大写L
System.out.println(l + 1);
```