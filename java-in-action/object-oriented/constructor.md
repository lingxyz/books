# 4.5 构造方法

　　构造器也叫构造方法(constructor)，用于对象的初始化。构造器是一个创建对象时被自动调用的特殊方法，目的是对象的初始化。构造器的名称应与类的名称一致。Java通过new关键字来调用构造器，从而返回该类的实例，是一种特殊的方法。

## 声明格式

```java
[修饰符] 类名(形参列表){
	// n条语句
}
```

## 要点

　　1. 通过new关键字调用!!

　　2. 构造器虽然有返回值，但是==不能定义返回值类型==(返回值的类型肯定是本类)，不能在构造器里使用return返回某个值。

　　3. 如果我们没有定义构造器，则==编译器会自动定义一个无参的构造函数==。如果已定义则编译器不会自动添加!

　　4.构造器的 ==方法名必须和类名一致==!

## 课堂练习

　　1. 定义一个“点”(Point)类用来表示二维空间中的点(有两个坐标)。要求如下：

　　(1) 可以生成具有特定坐标的点对象。

　　(2) 提供可以设置坐标的方法。

　　(3)提供可以计算该“点”距另外一点距离的方法。

**参考答案：**　

```
class Point {
	double x, y;
	public Point(double _x, double _y) {
		x = _x;
		y = _y;	
	}
	public double getDistance(Point p) {
		return Math.sqrt((x - p.x) * (x - p.x) + (y - p.y) * (y - p.y));
	}
}
public class TestConstructor {
	public static void main(String[] args) {
		Point p = new Point(3.0, 4.0);
		Point origin = new Point(0.0, 0.0);
		System.out.println(p.getDistance(origin));
	}
}
```

## 作业

1. 很多零基础同学会在这个地方开始晕菜。大家都学过内存分析，将这个程序的执行过程的内存分析画出来。如果画不出，好好再温习一下内存分析那一节课 [面向对象内存分析](./memory-analysis.md)　　