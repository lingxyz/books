# 2.4.2 变量的分类

​		从整体上可将变量划分为**局部变量、成员变量(也称为实例变量)和静态变量**。

> 表 2-2 局部变量、成员变量、静态变量的区别

| 类型               | 声明位置           | 从属于      | 生命周期                                                     |
| -------- | -------- | -------- | -------- |
| 局部变量           | 方法或语句块内部   | 方法/语句块 | 从声明位置开始，直到方法或语句块执行完毕，局部变量消失       |
| 成员变量(实例变量) | 类内部，方法外部   | 对象        | 对象创建，成员变量也跟着创建。对象消失，成员变量也跟着消失； |
| 静态变量(类变量)   | 类内部，static修饰 | 类          | 类被加载，静态变量就有效；类被卸载，静态变量消失。           |

**老鸟建议**

​		成员变量和静态变量不是目前重点，不要过多纠结理解与否。我们学习面向对象时，再重点讲解成员变量和静态变量

## 局部变量(local  variable)

​		方法或语句块内部定义的变量。生命周期是从声明位置开始到到方法或语句块执行完毕为止。局部变量在使用前必须先声明、初始化(赋初值)再使用。

**【示例2-7】局部变量**

```java
public void test() {
  int i;
  int j = i + 5 ; // 编译出错，变量i还未被初始化
}

public void test() {
  int i;
  i=10;
  int j = i + 5 ; // 编译正确
}
```

## 成员变量（也叫实例变量  member variable）

​		方法外部、类的内部定义的变量。从属于对象，生命周期伴随对象始终。如果不自行初始化，它会自动初始化成该类型的默认初始值。

> 表 2-3 实例变量的默认初始值

| 数据类型 | 实始值   |
| -------- | -------- |
| int      | 0        |
| double   | 0.0      |
| char     | \u0000 |
| boolean  | false    |

**【示例2-8】实例变量的声明**

```java
public class Test {
  int i;
}
```

## 静态变量（类变量 static variable）

​		使用`static`定义。 从属于类，生命周期伴随类始终，从类加载到卸载。 (注：讲完内存分析后我们再深入！先放一放这个概念！)如果不自行初始化，与成员变量相同会自动初始化成该类型的默认初始值，如表 2-3所示。

## 课堂练习

**课堂练习1：变量的声明并赋值**

```java
public class LocalVariableTest {
  public static void main(String[ ] args) {
    boolean flag = true;  // 声明boolean型变量并赋值
    char c1, c2;          // 声明char型变量
    c1 = '\u0041';        // 为char型变量赋值
    c2 = 'B';             // 为char型变量赋值
    int x;                // 声明int型变量
    x = 9;                // 为int型变量赋值
    int y = x;            // 声明并初始化int型变量
    float f = 3.15f;      // 声明float型变量并赋值
    double d = 3.1415926; // 声明double型变量并赋值
  }
}
```

**课堂代码：**

```java
/**
 * 测试变量
 * @author 高淇
 */
public class TestVariable {
  int a;               // 成员变量, 从属于对象； 成员变量会自动被初始化
  static int size;   // 静态变量，从属于类

  public static void main(String[] args) {
    {
      int age;         // 局部变量，从属于语句块；
      age = 18;
    }

    int salary = 3000; // 局部变量，从属于方法

    int gao = 13;
    System.out.println(gao);

    int i;
    // int j = i + 5;  // 编译出错，变量i还未被初始化
  }
}
```