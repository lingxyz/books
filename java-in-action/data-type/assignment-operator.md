# 2.7.2 赋值及其扩展赋值运算符

> 表2-8 赋值及其扩展运算符

| 运算符 | 用法举例 | 等效的表达式 |
| ------ | -------- | ------------ |
| +=     | a += b   | a = a+b      |
| -=     | a -= b   | a = a-b      |
| *=     | a *= b   | a = a*b      |
| /=     | a *= b   | a = a/b      |
| %=     | a *= b   | a = a%b      |

【示例2-21】扩展运算符

```java
int a = 3;
int b = 4;
a += b;   // 相当于a=a+b;
System.out.println("a=" + a + "\nb=" + b);
a = 3;
a *= b + 3; // 相当于a=a*(b+3)
System.out.println("a=" + a + "\nb=" + b);
```

　　运行该程序，执行结果如图2-4所示。

　　![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494930157621902.png)

> 图2-4 示例2-21运行效果图