# 第八章 作业

## 一、选择题

1. 以下选项中关于int和Integer的说法错误的是( )。(选择二项)

A. int是基本数据类型，Integer是int的包装类，是引用数据类型

B. int的默认值是0，Integer的默认值也是0

C. Integer可以封装了属性和方法提供更多的功能

D. Integer i=5;该语句在JDK1.5之后可以正确执行，使用了自动拆箱功能

2. 分析如下Java代码，该程序编译后的运行结果是( )。(选择一项)

```java
public static void main(String[ ] args) {
	String str=””;
	str.concat("abc");
	str.concat("def");
	System.out.println(str);
}
```

A. null

B. abcdef

C. 编译错误

D. 运行时出现NullPointerException异常

3. 以下关于String类的代码的执行结果是( )。(选择一项)

```java
public class Test2 {
    public static void main(String args[]) {
        String s1 = new String("bjsxt");
        String s2 = new String("bjsxt");
        if (s1 == s2)            
             System.out.println("s1 == s2");
        if (s1.equals(s2))        
             System.out.println("s1.equals(s2)");
    }
}
```

A. s1 == s2

B. s1.equals(s2)

C. s1 == s2

  s1.equals(s2)

D. 以上都不对

4. 在Java中，以下File类的方法中( )用来判断是否是目录。(选择一项)

A. isFile( )

B. getFile( )

C. isDirectory( )

D. getPath( )

5. 分析下面代码的结果( )。(选择一项)

```java
public static void main(String args[]) {
		String s = "abc";
		String ss = "abc";
		String s3 = "abc" + "def";
		String s4 = "abcdef";
		String s5 = ss + "def";
		String s2 = new String("abc");
		System.out.println(s == ss);
		System.out.println(s3 == s4);
		System.out.println(s4 == s5);
		System.out.println(s4.equals(s5));
	}
```

A. true true false true

B. true true true false

C. true false true true

D. false true false true

## 二、简答题

1. 什么是自动装箱和自动拆箱?

2. String、StringBuffer、StringBuilder区别与联系。

3. String str=”bjsxt”; 和String str= new String(“bjsxt”); 的区别。

4. File类的方法mkdir跟mkdirs，有什么区别?

5. 简述枚举的使用。

## 三、编码题

1. 验证键盘输入的用户名不能为空，长度大于6，不能有数字。

  提示：使用字符串String类的相关方法完成

  可以使用Scanner的nextLine()方法，该方法可以接口空的字符串。

2. 接收从键盘输入的字符串格式的年龄，分数和入学时间，转换为整数、浮点数、日期类型，并在控制台输出。

  提示：使用包装类Integer、Double和日期转换类DateFormat实现

3. 根据交通信号灯颜色决定汽车停车、行驶和慢行

  提示：使用枚举实现
