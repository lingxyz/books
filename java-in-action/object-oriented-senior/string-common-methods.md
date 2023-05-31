**5.11.4 String类常用的方法**

   String类是我们最常使用的类。字符串类的方法我们必须非常熟悉!我们列出常用的方法，请大家熟悉。

> 表5-2 String类的常用方法列表

**![图2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495417924711064.png)**

**【示例5-29】String类常用方法一**

```
public class StringTest1 {
	public static void main(String[] args) {
		String s1 = "core Java";
		String s2 = "Core Java";
		System.out.println(s1.charAt(3));//提取下标为3的字符
		System.out.println(s2.length());//字符串的长度
		System.out.println(s1.equals(s2));//比较两个字符串是否相等
		System.out.println(s1.equalsIgnoreCase(s2));//比较两个字符串（忽略大小写）
		System.out.println(s1.indexOf("Java"));//字符串s1中是否包含Java
		System.out.println(s1.indexOf("apple"));//字符串s1中是否包含apple
		String s = s1.replace(' ', '&');//将s1中的空格替换成&
		System.out.println("result is :" + s);
	}
}
```

   执行结果如图5-31所示：

![图5-31 示例5-29运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495267731684048.png)

> 图5-31 示例5-29运行效果图

**【示例5-30】String类常用方法二**

```
public class StringTest2 {
	public static void main(String[] args) {
		String s = "";
		String s1 = "How are you?";
		System.out.println(s1.startsWith("How"));//是否以How开头
		System.out.println(s1.endsWith("you"));//是否以you结尾
		s = s1.substring(4);//提取子字符串：从下标为4的开始到字符串结尾为止
		System.out.println(s);
		s = s1.substring(4, 7);//提取子字符串：下标[4, 7) 不包括7
		System.out.println(s);
		s = s1.toLowerCase();//转小写
		System.out.println(s);
		s = s1.toUpperCase();//转大写
		System.out.println(s);
		String s2 = "  How old are you!! ";
		s = s2.trim();//去除字符串首尾的空格。注意：中间的空格不能去除
		System.out.println(s);
		System.out.println(s2);//因为String是不可变字符串，所以s2不变
	}
}
```

   执行结果如图5-32所示：

![图5-32 示例5-30运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495267792980384.png)

> 图5-32 示例5-30运行效果图