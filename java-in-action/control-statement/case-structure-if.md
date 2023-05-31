# 3.1.1 if单选择结构

## 语法结构

```java
if(布尔表达式){
    语句块
}
```

   if语句对布尔表达式进行一次判定，若判定为真，则执行{}中的语句块，否则跳过该语句块。流程图如图3-1所示。

##  if 单选择结构流程图和示例

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494915015552935.png)

**【示例3-1】if单选择结构**

```java
public class Test1 {
	public static void main(String[] args) {
		//通过掷三个骰子看看今天的手气如何？
		int i = (int)(6 * Math.random()) + 1;//通过Math.random()产生随机数
		int j = (int)(6 * Math.random()) + 1;
		int k = (int)(6 * Math.random()) + 1;
		int count = i + j + k;
		//如果三个骰子之和大于15，则手气不错
		if(count > 15) {
			System.out.println("今天手气不错");
		}
		//如果三个骰子之和在10到15之间，则手气一般
		if(count >= 10 && count <= 15) { //错误写法：10<=count<=15
			System.out.println("今天手气很一般");
		}
		//如果三个骰子之和小于10，则手气不怎么样
		if(count < 10) {
			System.out.println("今天手气不怎么样");
		}
		System.out.println("得了" + count + "分");
	}
}
```

![图片1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170517/1494983790710364.png)

> 图3-2 示例3-1运行效果图

## Math类的使用

   1**.**java.lang包中的Math类提供了一些用于数学计算的方法。

   2.Math.random()该方法用于产生一个0到1区间的double类型的随机数，但是不包括1。

​    int i = (int) (6 * Math.random()); //产生：[0，5]之间的随机整数

## 新手雷区

   1.如果if语句不写{}，则只能作用于后面的第一条语句。 

   2.强烈建议，任何时候都写上{}，即使里面只有一句话！