# 5.3.1 继承树追溯

## 属性/方法查找顺序：(比如：查找变量h)

1. 查找当前类中有没有属性h

2. 依次上溯每个父类，查看每个父类中是否有h，直到Object

3. 如果没找到，则出现编译错误。

4. 上面步骤，只要找到h变量，则这个过程终止。

## 构造方法调用顺序

   构造方法第一句总是：super(…)来调用父类对应的构造方法。所以，流程就是：

- 查找：先==向上追溯每个父类，直到Object==
- 执行：然后再==依次向下执行类的初始化块和构造方法，直到当前子类为止==。

   注：静态初始化块调用顺序，与构造方法调用顺序一样，不再重复。

**【示例5-8】构造方法向上追溯执行测试**

```java {4,7,13}
public class TestSuper02 { 
	public static void main(String[] args) {
		System.out.println("开始创建一个ChildClass对象......");
		new ChildClass();
	}
}
class FatherClass {
	public FatherClass() {
		System.out.println("创建FatherClass");
	}
}
class ChildClass extends FatherClass {
	public ChildClass() {
		System.out.println("创建ChildClass");
	}
}
```

   执行结果如图5-6所示：

![图5-6 示例5-8运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170519/1495187263836897.png)

> 图5-6 示例5-8运行效果图