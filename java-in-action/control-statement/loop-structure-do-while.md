# 3.2.2 do-while循环

**语法结构：**

```java
do {
    循环体;
} while(布尔表达式) ;
```

   do-while循环结构会先执行循环体，然后再判断布尔表达式的值，若条件为真，执行循环体，当条件为假时结束循环。do-while循环的循环体至少执行一次。do-while循环结构流程图如图3.15所示。

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494919347187056.png)

> 图3-15 do-while流程图

**【示例3-8】do-while循环结构：1-100之间的累加和**

```java
public class Test8 {
	public static void main(String[] args) {
		int i = 0;
		int sum = 0;
		do {
			sum += i; // sum = sum + i
			i++;
		} while (i <= 100);//此处的；不能省略
		System.out.println("Sum= " + sum);
	}
}
```

![2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494919404947497.png)

> 图3-16 示例3-8运行效果图

**【示例3-9】while与do-while的区别**

```java
public class Test9 {
	public static void main(String[] args) {
		//while循环：先判断再执行
		int a = 0;
		while (a < 0) {
			System.out.println(a);
			a++;
		}
		System.out.println("-----");
		//do-while循环：先执行再判断
		a = 0;
		do {
			System.out.println(a);
			a++;
		} while (a < 0);
	}
}
```

![3.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494919475143305.png)

> 图3-17 示例3-9运行效果图

   从运行效图中可以看出do-while总是保证循环体至少会被执行一次!