# 3.1.2 if-else双选择结构

## 语法结构

```java
if(布尔表达式){
 语句块1
}else{
       语句块2
}
```

   当布尔表达式为真时，执行语句块1，否则，执行语句块2。也就是else部分。流程图如图3-3所示。

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494917663543171.png)

> 图3-3 if-else双选择结构流程图

## 示例

**【示例3-2】if-else结构**

```java
public class Test2 {
	public static void main(String[] args) {
		//随机产生一个[0.0, 4.0)区间的半径，并根据半径求圆的面积和周长
		double r = 4 * Math.random();
       //Math.pow(r, 2)求半径r的平方
		double area = Math.PI * Math.pow(r, 2);
		double circle = 2 * Math.PI * r;
		System.out.println("半径为： " + r);
		System.out.println("面积为： " + area);
		System.out.println("周长为： " + circle);
		//如果面积>=周长，则输出"面积大于等于周长"，否则，输出周长大于面积
		if(area >= circle) {
			System.out.println("面积大于等于周长");
		} else {
			System.out.println("周长大于面积");
		}
	}
}
```



![2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494917747605880.png)

> 图3-4 示例3-2运行效果图

   条件运算符有时候可用于代替if-else，如示例3-3与示例3-4所示。

**【示例3-3】使用if-else**

```java
public class Test3 {
	public static void main(String[] args) {
		int a=2; 
		int b=3;
		if (a<b) {
			System.out.println(a);
		} else {
			System.out.println(b);
		}
	}
}
```

![3.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494917807854177.png)

> 图3-5 示例3-3运行效果图

**【示例3-4】使用条件运算符**

```java
public class Test4 {
	public static void main(String[] args) {
		int a=2;
		int b=3;
		System.out.println((a<b)?a:b);
	}
}
```



![4.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494917862967746.png)

> 图3-6 示例3-4运行效果图

