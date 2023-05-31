# 8.1.3自动装箱和拆箱

   自动装箱和拆箱就是==将基本数据类型和包装类之间进行自动的互相转换==。JDK1.5后，Java引入了自动装箱(autoboxing)/拆箱(unboxing)。

## 自动装箱

   ==基本类型的数据处于需要对象的环境中时，会自动转为“对象”==。

   我们以Integer为例：在JDK1.5以前，这样的代码 Integer i = 5 是错误的，必须要通过Integer i = new Integer(5) 这样的语句来实现基本数据类型转换成包装类的过程;而在JDK1.5以后，Java提供了自动装箱的功能，因此只需Integer i = 5这样的语句就能实现基本数据类型转换成包装类，这是因为==JVM为我们执行了Integer i = Integer.valueOf(5)这样的操作==，这就是Java的自动装箱。

**【示例8-3】自动装箱**

```java {1}
Integer i = 100; // 自动装箱
// 相当于编译器自动为您作以下的语法编译：
Integer i = Integer.valueOf(100); // 调用的是valueOf(100)，而不是new Integer(100)
```

## 自动拆箱

   ==每当需要一个值时，对象会自动转成基本数据类型，没必要再去显式调用intValue()、doubleValue()等转型方法==。

   如 Integer i = 5;int j = i; 这样的过程就是自动拆箱。

   我们可以用一句话总结自动装箱/拆箱：

   自动装箱过程是通过==JVM自动调用包装类的valueOf()方法==实现的，而自动拆箱过程是通过==JVM自动调用包装类的 xxxValue()方法==实现的(xxx代表对应的基本数据类型，如intValue()、doubleValue()等)。

   自动装箱与拆箱的功能事实上是编译器来帮的忙，编译器在编译时依据您所编写的语法，决定是否进行装箱或拆箱动作，如示例8-3与示例8-4所示。

**【示例8-4】自动拆箱**

```java {2}
Integer i = 100;
int j = i; // 自动拆箱
// 相当于编译器自动为您作以下的语法编译：
int j = i.intValue();
```

   所以自动装箱与拆箱的功能是所谓的“编译器蜜糖(Compiler Sugar)”，虽然使用这个功能很方便，但在程序运行阶段您得了解Java的语义。例如示例8-5所示的程序是可以通过编译的：

**【示例8-5】包装类空指针异常问题**

```java {4}
public class Test1 {
	public static void main(String[] args) {
		Integer i = null;
		int j = i;
	}
}
```

   执行结果如图8-5所示：

![图8-5 示例8-5运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495594789167294.png)

> 图8-5 示例8-5运行效果图

   示例8-5的运行结果之所以会出现空指针异常，是因为示例8-5中的代码相当于：

```java {5}
public class Test1 {
	public static void main(String[] args) {
		// 示例8-5的代码在编译时期是合法的，但是在运行时期会有错误，因为其相当于：
		Integer i = null; 
		int j = i.intValue();		 
	}
}
```

​    ==null表示i没有指向任何对象的实体。作为对象名称合法，但不存在intValue()方法。所以在自动拆箱时就会出现空指针异常（NullPointerException）==。

**【示例8-6】自动装箱与拆箱**

```java
public class Test2 {
	/**
	 * 测试自动装箱和拆箱 
	 * 结论：虽然很方便，但是如果不熟悉特殊情况，可能会出错！
	 */
	public static void main(String[] args) {
		Integer b = 23; // 自动装箱
		int a = new Integer(20); // 自动拆箱
		// 下面的问题我们需要注意：
		Integer c = null;
		int d = c; // 此处其实就是：c.intValue(),因此抛空指针异常。
	}
}
```

