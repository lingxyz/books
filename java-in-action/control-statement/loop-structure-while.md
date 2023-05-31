# 3.2.1 while循环

## 语法结构

```java
while (布尔表达式) {
	循环体;
}
```

   在循环刚开始时，会计算一次“布尔表达式”的值，若条件为真，执行循环体。而对于后来每一次额外的循环，都会在开始前重新计算一次。

   语句中应有==使循环趋向于结束的语句，否则会出现无限循环–––"死"循环==。

   while循环结构流程图如图3.13所示。

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494919125339101.png)

> 图3-13 while流程图

## 示例

**【示例3-7】while循环结构：求1到100之间的累加和**

```java
public class Test7 {
	public static void main(String[] args) {
		int  i = 0;
		int  sum = 0;
		// 1+2+3+…+100=?
		while (i <= 100) {
			sum += i;//相当于sum = sum+i;
			i++;
		}
		System.out.println("Sum= " + sum);
	}
}
```



![2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494919188264576.png)

> 图3-14 示例3-7运行效果图