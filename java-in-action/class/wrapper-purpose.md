# 8.1.2包装类的用途

对于包装类来说，这些类的用途主要包含两种：

1. 作为==和基本数据类型对应==的类型存在，方便涉及到==对象的操作==，如Object[]、集合等的操作。

2. 包含每种基本==数据类型的相关属性==如最大值、最小值等，以及==相关的操作方法==(这些操作方法的作用是在基本数据类型、包装类对象、字符串之间提供相互之间的转化!)。

> 【示例8-2】包装类的使用

```java {5,6,8,10,13,15}
public class Test {
  /* 测试 Integer 的用法，其他包装类与 Integer 类似 */
  void testInteger() {
    // 基本类型转化成Integer对象
    Integer int1 = new Integer(10);
    Integer int2 = Integer.valueOf(20); // 官方推荐这种写法
    // Integer对象转化成int
    int a = int1.intValue();
    // 字符串转化成Integer对象
    Integer int3 = Integer.parseInt("334");
    Integer int4 = new Integer("999");
    // Integer对象转化成字符串
    String str1 = int3.toString();
    // 一些常见int类型相关的常量
    System.out.println("int能表示的最大整数：" + Integer.MAX_VALUE); 
  }
  public static void main(String[] args) {
    Test test  = new Test();
    test.testInteger();
  }
}
```

   执行结果如图8-4所示：

![图8-4 示例8-2运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495594289564780.png)

> 图8-4 示例8-2运行效果图

