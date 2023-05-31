# 3.1.3 if-else if-else多选择结构

## 语法结构

```java
if(布尔表达式1) {
语句块1;
} else if(布尔表达式2) {
语句块2;
}……
else if(布尔表达式n){
	语句块n;
} else {
	语句块n+1;
}
```

   当布尔表达式1为真时，执行语句块1;否则，判断布尔表达式2，当布尔表达式2为真时，执行语句块2;否则，继续判断布尔表达式3······;如果1~n个布尔表达式均判定为假时，则执行语句块n+1，也就是else部分。流程图如图3-7所示。

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494918202257279.png)

> 图3-7 if-else if-else多选择结构流程图

## 示例

**【示例3-5】if-else if-else多选择结构**

```java
public class Test5 {
	public static void main(String[] args) {
		int age = (int) (100 * Math.random());
		System.out.print("年龄是" + age + "， 属于");
		if (age < 15) {
			System.out.println("儿童， 喜欢玩！");
		} else if (age < 25) {
			System.out.println("青年， 要学习！");
		} else if (age < 45) {
			System.out.println("中年， 要工作！");
		} else if (age < 65) {
			System.out.println("中老年， 要补钙！");
		} else if (age < 85) {
			System.out.println("老年， 多运动！");
		} else {
			System.out.println("老寿星， 古来稀！");
		}
	}
}
```

　　

![2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494918283781121.png)

> 图3-8 示例3-5运行效果图1

![3.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494918291733484.png)

> 图3-9 示例3-5运行效果图2

## 课堂练习

**仿照【示例3-5】，实现如下功能：**

   随机生成一个100以内的成绩，当成绩在85及以上的时候输出”等级A”，70以上到84之间输出”等级B”，60到69之间输出”等级C”，60以下输出”等级D”。