# 8.2.1 String类

   String 类对象代表==不可变的Unicode字符序列==，因此我们可以将String对象称为“不可变对象”。 那什么叫做“不可变对象”呢?指的是对象内部的成员变量的值无法再改变。我们打开String类的源码，如图8-8所示：

![图8-8 String类的部分源码.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495606355697814.png)

> 图8-8 String类的部分源码

   我们发现==字符串内容全部存储到value[]数组中，而变量value是final类型的==，也就是常量(即只能被赋值一次)。 这就是“不可变对象”的典型定义方式。

   我们发现在前面学习String的某些方法，比如：substring()是对字符串的截取操作，但==本质是读取原字符串内容生成了新的字符串==。测试代码如下：

**【示例8-10】String测试代码**

```java
public class TestString1 {
	public static void main(String[] args) {
		String s1 = new String("abcdef");
		String s2 = s1.substring(2, 4);
		// 打印：ab199863
        System.out.println(Integer.toHexString(s1.hashCode()));
		// 打印：c61, 显然s1和s2不是同一个对象
        System.out.println(Integer.toHexString(s2.hashCode()));
	}
}
```

   执行结果如图8-9所示：

![图8-9 示例8-10运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495606432398317.png)

> 图8-9 示例8-10运行效果图

   在遇到字符串常量之间的拼接时，编译器会做出优化，即==在编译期间就会完成字符串的拼接==。因此，在使用==进行String对象之间的比较时，我们需要特别注意，如示例8-11所示。

**【示例8-11】字符串常量拼接时的优化**

```java {9-11}
public class TestString2 {
	public static void main(String[] args) {
		// 编译器做了优化,直接在编译的时候将字符串进行拼接
		String str1 = "hello" + " java"; // 相当于str1 = "hello java";
		String str2 = "hello java";
		System.out.println(str1 == str2); // true
		String str3 = "hello";
		String str4 = " java";
		// 编译的时候不知道变量中存储的是什么,所以没办法在编译的时候优化
		String str5 = str3 + str4;
		System.out.println(str2 == str5); // false
	}
}
```

   执行结果如图8-10所示：

![图8-10 示例8-11运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495606527841267.png)

> 图8-10 示例8-11运行效果图

   String类常用的方法有(可翻到第五章5.11.4查看，已讲过，此处不赘述)：

1. String类的下述方法能==创建并返回一个新的String对象: concat()、 replace()、substring()、 toLowerCase()、 toUpperCase()、trim()==。

2. 提供==查找功能的有关方法: endsWith()、 startsWith()、 indexOf()、lastIndexOf()==。

3. 提供==比较功能的方法: equals()、equalsIgnoreCase()、compareTo()==。

4. 其它方法: ==charAt() 、length()==。

