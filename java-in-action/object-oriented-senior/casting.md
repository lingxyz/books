# 5.6 对象的转型(casting)

   ==父类引用指向子类对象，我们称这个过程为向上转型，属于自动类型转换==。

   向上转型后的==父类引用变量只能调用它编译类型的方法，不能调用它运行时类型的方法==。这时，我们就需要进行==类型的强制转换，我们称之为向下转型==!

## 对象的转型

```java {3,7}
public class TestCasting {
	public static void main(String[] args) {
		Object obj = new String("北京尚学堂"); // 向上可以自动转型
		// obj.charAt(0) 无法调用。编译器认为obj是Object类型而不是String类型
		/* 编写程序时，如果想调用运行时类型的方法，只能进行强制类型转换。
		 * 不然通不过编译器的检查。 */
		String str = (String) obj; // 向下转型
		System.out.println(str.charAt(0)); // 位于0索引位置的字符
		System.out.println(obj == str); // true.他们俩运行时是同一个对象
	}
}
```

   执行结果如果5-18所示：

![图5-18 示例5-13运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495254148771321.png)

> 图5-18 示例5-13运行效果图

## 类型转换异常

   在向下转型过程中，必须将引用变量转成真实的子类类型(运行时类型)否则会出现类型转换异常ClassCastException。如示例5-14所示。

```java {5}
public class TestCasting2 {
	public static void main(String[] args) {
		Object obj = new String("北京尚学堂");
		// 真实的子类类型是String，但是此处向下转型为StringBuffer
		StringBuffer str = (StringBuffer) obj;
		System.out.println(str.charAt(0));
	}
}
```

   执行结果如果5-19所示：

![图5-19 示例5-14运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495256025435935.png)

> 图5-19 示例5-14运行效果图

## 向下转型中使用instanceof

为了避免出现这种异常，我们可以使用5.1.2中所学的instanceof运算符进行判断，如示例5-15所示。

```java {4}
public class TestCasting3 {
	public static void main(String[] args) {
		Object obj = new String("北京尚学堂");
		if(obj instanceof String){
			String str = (String)obj;
			System.out.println(str.charAt(0));
		}else if(obj instanceof StringBuffer){
			StringBuffer str = (StringBuffer) obj;
			System.out.println(str.charAt(0));
		}
	}
}
```

   执行结果如果5-20所示：

![图5-20 示例5-15运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495256138635602.png)

> 图5-20 示例5-15运行效果图