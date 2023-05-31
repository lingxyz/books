# 第四章 作业

## 一、选择题

1. 以下语句中关于Java构造方法的说法错误的是( )。(选择一项)

　　A. 构造方法的作用是为创建对象进行初始化工作，比如给成员变量赋值

　　B. 一个Java类可以没有构造方法，也可以提供1个或多个构造方法

　　C. 构造方法与类同名，不能书写返回值类型

　　D. 构造方法的第一条语句如果是super()，则可以省略，该语句作用是调用父类无参数的构造方法

2. 在Java中，以下程序编译运行后的输出结果为( )。(选择一项)

```java
public class Test {
    int x, y;
    Test(int x, int y) {
        this.x = x;
        this.y = y;
    }
    public static void main(String[] args) {
        Test pt1, pt2;
        pt1 = new Test(3, 3);
        pt2 = new Test(4, 4);
        System.out.print(pt1.x + pt2.x);
    }
}
```

　　A. 6

　　B. 34

　　C. 8

　　D. 7

3. 在Java中关于静态方法，以下说法中正确的是( )。(选择二项)

　　A. 静态方法中不能直接调用非静态方法

　　B. 非静态方法中不能直接调用静态方法

　　C. 静态方法可以用类名直接调用

　　D. 静态方法里可以使用this

4. 下列选项中关于Java中类方法的说法错误的是( )。(选择二项)

　　A. 在类方法中可用this来调用本类的类方法

　　B. 在类方法中调用本类的类方法时可直接调用

　　C. 在类方法中只能调用本类中的类方法

　　D. 在类方法中调用实例方法需要先创建对象

5. 分析如下Java程序的代码所示，则编译运行后的输出结果是( )。(选择一项)

```java
public class Test {
    int count=9;
    public void count1(){
        count=10;
        System.out.print("count1="+count);
    }
    public void count2(){
        System.out.print("count2="+count);
    }
    public static void main(String[ ] args) {
        Test t=new Test();
        t.count1();
        t.count2();
    }
}
```

　　A. count1=9; count2=9;

　　B. count1=10;count2=9;

　　C. count1=10; count2=10;

　　D. count1=9; count2=10;

## 二、简答题

1. 面向过程和面向对象的区别。

2. 类和对象的关系

3. 构造方法的作用和特征

4. this关键字的作用和用法

5. 简述static关键字的作用。

    提示：从static可以修饰变量，方法，代码块，三个方面来回答。

## 三、编码题

1. 编写 Java 程序_用于显示人的姓名和年龄。定义一个人类Person。 该类中应该有两个私有属性： 姓名 (name) 和年龄 (age) 。定义构造方法用来初始化数据成员。再定义显示(display()) 方法将姓名和年龄打印出来。在 main 方法中创建人类的实例然后将信息显示。

2. 定义一个圆类——Circle，在类的内部提供一个属性：半径(r)，同时 提供 两个 方 法 ： 计算 面积 ( getArea() ) 和 计算 周长(getPerimeter()) 。 通过两个方法计算圆的周长和面积并且对计算结果进行输出。最后定义一个测试类对 Circle 类进行使用。

3. 构造方法与重载：定义一个网络用户类，信息有用户 ID、用户密码、 email 地址。在建立类的实例时把以上三个信息都作为构造函数的参数输入， 其中用户 ID 和用户密码时必须缺省时 email地址是用户 ID 加上字符串"@gameschool.com"。

