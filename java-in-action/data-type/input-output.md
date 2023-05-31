# 2.9 简单的键盘输入和输出

​    为了我们能写出更加复杂的程序，可以让我们的程序和用户可以通过键盘交互，我们先学习一下简单的键盘输入和输出。

**【示例2-31】使用Scanner获取键盘输入**

```java {5}
import  java.util.Scanner;
/* 测试获得键盘输入 */
public class TestScanner {
	public static void main(String[] args) {
		Scanner   scanner =  new Scanner(System.in);
		System.out.println("请输入名字：");
		String   name =  scanner.nextLine();
		System.out.println("请输入你的爱好：");
		String  favor = scanner.nextLine();
		System.out.println("请输入你的年龄：");
		int   age = scanner.nextInt();
		
		System.out.println("###############");
		System.out.println(name);
		System.out.println(favor);
		System.out.println("来到地球的天数："+age*365);
		System.out.println("离开地球的天数："+(72-age)*365);
		
	}
}
```

**运行结果如图2-9所示。**

![image.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20171018/1508314351247501.png)

> 图2-9 示例2-31运行效果图