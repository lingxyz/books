# 5.10.2内部类的分类

   在Java中内部类主要分为成员内部类(非静态内部类、静态内部类)、匿名内部类、局部内部类。

**.成员内部类(可以使用private、default、protected、public任意进行修饰。 类文件：外部类$内部类.class)**

**a) 非静态内部类(外部类里使用非静态内部类和平时使用其他类没什么不同)**

   i. 非静态内部类必须寄存在一个外部类对象里。因此，如果有一个非静态内部类对象那么一定存在对应的外部类对象。非静态内部类对象单独属于外部类的某个对象。

   ii. 非静态内部类可以直接访问外部类的成员，但是外部类不能直接访问非静态内部类成员。

   iii. 非静态内部类不能有静态方法、静态属性和静态初始化块。

   iv. 外部类的静态方法、静态代码块不能访问非静态内部类，包括不能使用非静态内部类定义变量、创建实例。

   **v. 成员变量访问要点：**

1. 内部类里方法的局部变量：变量名。

2. 内部类属性：this.变量名。

3. 外部类属性：外部类名.this.变量名。

**【示例5-20】成员变量的访问要点**

```
class Outer {
	private int age = 10;
	class Inner {
		int age = 20;
		public void show() {
			int age = 30;
			System.out.println("内部类方法里的局部变量age:" + age);// 30
			System.out.println("内部类的成员变量age:" + this.age);// 20
			System.out.println("外部类的成员变量age:" + Outer.this.age);// 10
		}
	}
}
```

   **vi. 内部类的访问：**

1. 外部类中定义内部类：

```
new Inner()
```

2. 外部类以外的地方使用非静态内部类：

```
 Outer.Inner  varname = new Outer().new Inner()。
```

**【示例5-21】内部类的访问**

```
public class TestInnerClass {
	public static void main(String[] args) {
		//先创建外部类实例，然后使用该外部类实例创建内部类实例
		Outer.Inner inner = new Outer().new Inner();
		inner.show();
		Outer outer = new Outer();
		Outer.Inner inn = outer.new Inner();
		inn.show();
	}
}
```

   执行结果如图5-25所示：

![图5-25 示例5-21运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495262283489060.png)

图5-25 示例5-21运行效果图

**b) 静态内部类**

   **i. 定义方式：**

```
static  class   ClassName {
//类体
}
```

   **ii. 使用要点：**

1. 当一个静态内部类对象存在，并不一定存在对应的外部类对象。 因此，静态内部类的实例方法不能直接访问外部类的实例方法。

2. 静态内部类看做外部类的一个静态成员。 因此，外部类的方法中可以通过：“静态内部类.名字”的方式访问静态内部类的静态成员，通过 new 静态内部类()访问静态内部类的实例。

【示例5-22】静态内部类的访问

```
class Outer{
	//相当于外部类的一个静态成员
	static class Inner{
	}
}
public class TestStaticInnerClass {
	public static void main(String[] args) {
		//通过 new 外部类名.内部类名() 来创建内部类对象
		Outer.Inner inner =new Outer.Inner();
	}
}
```

**. 匿名内部类**

   适合那种只需要使用一次的类。比如：键盘监听操作等等。

**语法：**

```
new  父类构造器(实参类表) \实现接口 () {
	     	//匿名内部类类体！
}
```

**【示例5-23】匿名内部类的使用**

```
this.addWindowListener(new WindowAdapter(){
		@Override
		public void windowClosing(WindowEvent e) {
			System.exit(0);
		}
    }
);
this.addKeyListener(new KeyAdapter(){
		@Override
		public void keyPressed(KeyEvent e) {
			myTank.keyPressed(e);
		}		
		@Override
		public void keyReleased(KeyEvent e) {
			myTank.keyReleased(e);
		}
	}
);
```

**注意**

1. 匿名内部类没有访问修饰符。

2. 匿名内部类没有构造方法。因为它连名字都没有那又何来构造方法呢。

**.局部内部类**

   还有一种内部类，它是定义在方法内部的，作用域只限于本方法，称为局部内部类。

   局部内部类的的使用主要是用来解决比较复杂的问题，想创建一个类来辅助我们的解决方案，到那时又不希望这个类是公共可用的，所以就产生了局部内部类。局部内部类和成员内部类一样被编译，只是它的作用域发生了改变，它只能在该方法中被使用，出了该方法就会失效。

   局部内部类在实际开发中应用很少。

**【示例5-24】方法中的内部类**

```
public class Test2 {
	public void show() {
		//作用域仅限于该方法
		class Inner {
			public void fun() {
				System.out.println("helloworld");
			}
		}
		new Inner().fun();
	}
	public static void main(String[] args) {
		new Test2().show();
	}
}
```

   执行结果如图5-26所示：

![图5-26 示例5-24运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495262685367524.png)

图5-26 示例5-24运行效果图