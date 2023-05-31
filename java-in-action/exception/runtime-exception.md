# 6.3.3 RuntimeException运行时异常

   派生于RuntimeException的异常，如被 0 除、数组下标越界、空指针等，其产生比较频繁，处理麻烦，如果显式的声明或捕获将会对程序可读性和运行效率影响很大。 因此由系统自动检测并将它们交给缺省的异常处理程序(用户可不必对其处理)。

   这类异常通常是由==编程错误导致==的，所以在编写程序时，并不要求必须使用异常处理机制来处理这类异常,经常需要通过增加“逻辑处理来避免这些异常”。

## ArithmeticException 算数运算异常

​    程序试图除以0，会引发ArithmeticException 异常。

```java {4}
public class Test3 {
	public static void main(String[] args) {
		int b = 0;
		System.out.println(1/b);
	}
}
```

   执行结果如图6-2所示：

![图6-4 ArithmeticException异常.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495272824431581.png)

> 图6-4 ArithmeticException异常

   解决如上异常需要修改代码，==增加非零判断==：

```java {4}
public class Test3 {
	public static void main(String[] args) {
		int b = 0;
		if(b != 0){
			System.out.println(1/b);
		}
	}
}
```

## NullPointerException 空指针异常

   当程序访问一个空对象的成员变量或方法，或者访问一个空数组的成员时会发生空指针异常(NullPointerException)。怎么处理?

```java {4}
public class Test4 {
  public static void main(String[] args) {
    String str = null;
    System.out.println(str.charAt(0));
  }
}
```

   执行结果如图6-5所示：

![图6-5 NullPointerException异常.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495272942791321.png)

> 图6-5 NullPointerException异常

   解决空指针异常，通常是增加==非空判断==：

```java {4}
public class Test4 {
	public static void main(String[] args) {
		String str = null;
		if(str != null){
			System.out.println(str.charAt(0));
		}
	}
}
```

## ClassCastException 类型转换异常

   在引用数据类型转换时，有可能发生类型转换异常(ClassCastException)。

```java {10}
class Animal{
}
class Dog extends Animal{
}
class Cat extends Animal{
}
public class Test5 {
	public static void main(String[] args) {
		Animal a = new Dog();
		Cat c = (Cat)a;
	}
}
```

   执行结果如图6-6所示：

![图6-6 ClassCastException异常.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495273027294909.png)

> 图6-6 ClassCastException异常

   解决ClassCastException的典型方式，需要==增加 instanceof 判断==：

```java {4}
public class Test5 {
	public static void main(String[] args) {
		Animal a = new Dog();
		if (a instanceof Cat) {
			Cat c = (Cat) a;
		}
	}
}
```

## ArrayIndexOutOfBoundsException 数组下标越界异常

   当程序访问一个数组的某个元素时，如果这个元素的索引超出了0~数组长度-1这个范围，则会出现数组下标越界异常(ArrayIndexOutOfBoundsException)

```java {4}
public class Test6 {
	public static void main(String[] args) {
		int[] arr = new int[5];
		System.out.println(arr[5]);
	}
}
```

   执行结果如图6-7所示：

![图6-7 ArrayIndexOutOfBoundsException异常.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495273151308733.png)

> 图6-7 ArrayIndexOutOfBoundsException异常

   解决数组索引越界异常的方式，==增加关于边界的判断==：

```java {5}
public class Test6 {
	public static void main(String[] args) {
		int[] arr = new int[5];
		int a = 5;
		if (a < arr.length) {
			System.out.println(arr[a]);
		}
	}
}
```

## NumberFormatException 数字格式异常

   在使用包装类将字符串转换成基本数据类型时，如果字符串的格式不正确，则会出现数字格式异常(NumberFormatException)。

```java {4}
public class Test7 {
	public static void main(String[] args) {
		String str = "1234abcf";
		System.out.println(Integer.parseInt(str));
	}
}
```

   执行结果如图6-8所示：

![图6-8 NumberFormatException异常.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495273246414396.png)

> 图6-8 NumberFormatException异常

   数字格式化异常的解决，可以==引入正则表达式判断是否为数字==：

```java {9}
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Test7 {
	public static void main(String[] args) {
		String str = "1234abcf";
		Pattern p = Pattern.compile("^\\d+$");
		Matcher m = p.matcher(str);
		if (m.matches()) { // 如果str匹配代表数字的正则表达式,才会转换
			System.out.println(Integer.parseInt(str));
		}
	}
}
```

**注意事项**

1. 在方法抛出异常之后，运行时系统将转为==寻找合适的异常处理器==(exception handler)。潜在的异常处理器是异常发生时==依次存留在调用栈中的方法的集合==。当异常处理器所能处理的异常类型与方法抛出的异常类型相符时，即为合适的异常处理器。

2. 运行时系统从发生异常的方法开始，依次回查调用栈中的方法，直至找到含有合适异常处理器的方法并执行。==当运行时系统遍历调用栈而未找到合适的异常处理器，则运行时系统终止。同时，意味着Java程序的终止==。