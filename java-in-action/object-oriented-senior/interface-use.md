# 5.9.2 如何定义和使用接口?

## 声明格式

```java {1}
[访问修饰符]  interface 接口名   [extends  父接口1，父接口2…]  {
    常量定义；	
    方法定义；
}
```

## 详细说明

1. 访问修饰符：==只能是public或默认。==

2. 接口名：和类名采用相同命名机制。

3. extends：接口可以多继承。

4. 常量：接口中的属性只能是常量，总是：==public static final== 修饰。不写也是。

5. 方法：接口中的方法只能是：==public abstract==。 省略的话，也是public abstract。

## 要点

1. 子类通过==implements来实现==接口中的规范。

2. 接口不能创建实例，但是可用于声明引用变量类型。

3. 一个类实现了接口，==必须实现接口中所有的方法，并且这些方法只能是public的。==

4. JDK1.7之前，接口中只能包含静态常量、抽象方法，不能有普通属性、构造方法、普通方法。

5. JDK1.8后，接口中包含普通的静态方法。

## 使用示例

```java
public class TestInterface {
	public static void main(String[] args) {
    Volant volant = new Angel();
		volant.fly();
    System.out.println(Volant.FLY_HIGHT);
    Honest honest = new GoodMan();
    honest.helpOther();
	}
}
/* 飞行接口 */
interface Volant { 
	int FLY_HIGHT = 100; // 总是：public static final类型的；
	void fly(); // 总是：public abstract void fly();
}
/* 善良接口 */
interface Honest { 
	void helpOther();
}
/* Angle类实现飞行接口和善良接口 */
class Angel implements Volant, Honest{
	public void fly() {
		System.out.println("我是天使，飞起来啦！");
	}
	public void helpOther() {
		System.out.println("扶老奶奶过马路！");
	}
}
class GoodMan implements Honest {
 	public void helpOther() {
		System.out.println("扶老奶奶过马路！");
	}  
}
class BirdMan implements Volant {
	public void fly() {
		System.out.println("我是鸟人，正在飞！");
	}
}
```

   执行结果如果5-23所示：

![图5-23 示例5-17运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495260169113292.png)

> 图5-23 示例5-17运行效果图

