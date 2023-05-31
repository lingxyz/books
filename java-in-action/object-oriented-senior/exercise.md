# 第五章 作业

## 一、选择题

1. 使用权限修饰符( )修饰的类的成员变量和成员方法，可以被当前包中所有类访问，也可以被它的子类(同一个包以及不同包中的子类)访问。(选择一项)

A. public

B. protected

C. 默认

D. private

2. 以下关于继承条件下构造方法执行过程的代码的执行结果是( )。(选择一项)

```java
class Person {	
	public Person() {
		System.out.println("execute Person()");
	}
}
class Student extends Person {	
	public Student() {		
		System.out.println("execute Student() ");
	}	
}
class PostGraduate extends Student {	
	public PostGraduate() {	
		System.out.println("execute PostGraduate()");
	}	
}
public class TestInherit {
	public static void main(String[] args) {
		new PostGraduate();		
	}
}
```

A. execute Person()

  execute Student()

  execute PostGraduate()

B. execute PostGraduate()

C. execute PostGraduate()

  execute Student()

  execute Person()

D. 没有结果输出

3. 编译运行如下Java代码，输出结果是( )。(选择一项)

```java
class Base {
	public void method(){
		System.out.print ("Base method");
	}
}
class Child extends Base{	
	public void methodB(){
		System.out.print ("Child methodB");
	}
}
class Sample {
	public static void main(String[] args) {
		Base base= new Child();
		base.methodB();
	}
}
```

A. Base method

B. Child methodB

C. hild methodB

D. 编译错误

4. 在Java中关于abstract关键字，以下说法正确的是( )。

A. abstract类中可以没有抽象方法

B. abstract类的子类也可以是抽象类

C. abstract方法可以有方法体

D. abstract类可以创建对象

5. 在Java接口中，下列选项中属于有效的方法声明是( )。(选择二项)

A. public void aMethod( );

B. final void aMethod( );

C. void aMethod();

D. private void aMethod( );

## 二、简答题

1. private、默认、protected、public四个权限修饰符的作用。

2. 继承条件下子类构造方法的执行过程。

3. 什么是向上转型和向下转型。

4. final和abstract关键字的作用。

5. ==和equals()的联系和区别。

## 三、编码题

1. 编写应用程序，创建类的对象，分别设置圆的半径、圆柱体的高，计算并分别显示圆半径、圆面积、圆周长，圆柱体的体积。

   **实现思路及关键代码：**

   1) 编写一个圆类Circle，该类拥有：

   a) 一个成员变量，radius(私有，浮点型);//存放圆的半径

   b) 两个构造方法(无参、有参);

   c) 三个成员方法

​    double getArea() //获取圆的面积

​    double getPerimeter() //获取圆的周长

​    void show() //将圆的关径、周长、面积输出到屏幕

   2) 编写一个圆柱体类Cylinder，它继承于上面的Circle类。还拥有：

   a) 一个成员变量，double hight (私有，浮点型); //圆柱体的高;

   b) 构造方法

   c) 成员方法

​    double getVolume() //获取圆柱体的体积

​    void showVolume() //将圆柱体的体积输出到屏幕

2. 编写程序实现乐手弹奏乐器。乐手可以弹奏不同的乐器从而发出不同的声音。可以弹奏的乐器包括二胡、钢琴和琵琶。

   **实现思路及关键代码：**

   1) 定义乐器类Instrument，包括方法makeSound();

   2) 定义乐器类的子类：二胡Erhu、钢琴Piano和小提琴Violin;

   3) 定义乐手类Musician，可以弹奏各种乐器play(Instrument i);

   4) 定义测试类，给乐手不同的乐器让他弹奏。

3. 编写程序描述影视歌三栖艺人。需求说明：请使用面向对象的思想，设计自定义类，描述影视歌三梄艺人。

   **实现思路：**

   1) 分析影视歌三栖艺人的特性：可以演电影，可以演电视剧，可以唱歌

   2) 定义多个接口描述特性

   a) 演电影的接口-----方法：演电影

   b) 演电视剧的接口-----方法：演电视剧

   c) 唱歌的接口-----方法：唱歌

   3) 定义艺人类实现多个接口

   程序运行结果如图5-36所示。

![图5-37 编码题3运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495270827867272.png)

> 图5-37 编码题3运行效果图