# 4.3.1 第一个类的定义

## 【示例4-1】类的定义方式

```java
// 每一个源文件必须有且只有一个public class，并且类名和文件名保持一致！
public class Car { 
}
class Tyre { // 一个Java文件可以同时定义多个class
}
class Engine {
}
class Seat {
}
```

　　上面的类定义好后，没有任何的其他信息，就跟我们拿到一张张图纸，但是纸上没有任何信息，这是一个空类，没有任何实际意义。所以，我们需要定义类的具体信息。对于一个类来说，一般有三种常见的成员：属性field、方法method、构造器constructor。这三种成员都可以定义零个或多个。

## 【示例4-2】简单的学生类编写

```java
public class SxtStu {
  // 属性（成员变量）
	int id;
	String sname;
	int age;	
	// 方法
	void study(){
		System.out.println("我正在学习！");
	}	
	// 构造方法
 	SxtStu(){
 	}
}
```