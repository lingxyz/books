# 3.2.4 嵌套循环

   在一个循环语句内部再嵌套一个或多个循环，称为嵌套循环。while、do-while与for循环可以任意嵌套多层。

**【示例3-14】嵌套循环**　

```java
public class Test14 {
	public static void main(String args[]) {
		for (int i=1; i <=5; i++) {
		    for(int j=1; j<=5; j++){
			    System.out.print(i+"  ");
		    }
			System.out.println();
		}
	}
}
```

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494920185494188.png)

> 图3-21 示例3-14运行效果图

**【示例3-15】使用嵌套循环实现九九乘法表**

```java
public class Test15 {
	public static void main(String args[]) {
		for (int i = 1; i < 10; i++) { // i是一个乘数
			for (int j = 1; j <= i; j++) { // j是另一个乘数
				System.out.print(j + "*" + i + "=" + (i * j < 10 ? (" " + i * j) : i * j) + "  ");
			}
			System.out.println();
		}
	}
}
```

![2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494920241544320.png)

> 图3-22 示例3-15运行效果图

**课堂练习**

1. 用while循环分别计算100以内的奇数及偶数的和，并输出。

2. 用while循环或其他循环输出1-1000之间能被5整除的数，且每行输出5个。