# 8.3.2 DateFormat类和SimpleDateFormat类

## DateFormat类的作用

   把时间对象转化成**指定格式的字符串**。反之，把指定格式的字符串转化成时间对象。

   DateFormat是一个抽象类，一般使用它的的子类SimpleDateFormat类来实现。

## DateFormat类和SimpleDateFormat类的使用

```java {13}
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
public class TestDateFormat {
	public static void main(String[] args) throws ParseException {
		// new出SimpleDateFormat对象
		SimpleDateFormat s1 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		SimpleDateFormat s2 = new SimpleDateFormat("yyyy-MM-dd");
		// 将时间对象转换成字符串
		String daytime = s1.format(new Date());
		System.out.println(daytime);
		System.out.println(s2.format(new Date()));
		System.out.println(new SimpleDateFormat("hh:mm:ss").format(new Date()));
		// 将符合指定格式的字符串转成成时间对象.字符串格式需要和指定格式一致。
		String time = "2007-10-7";
		Date date = s2.parse(time);
		System.out.println("date1: " + date);
		time = "2007-10-7 20:15:30";
		date = s1.parse(time);
		System.out.println("date2: " + date);
	}
}
```

   执行结果如图8-16所示：

![图8-16 示例8-15运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495608746205492.png)

> 图8-16 示例8-15运行效果图

   代码中的格式化字符的具体含义见表8-2：

![表8-2 格式化字符的含义.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495609352295957.png)

   时间格式字符也可以为我们提供其他的便利。比如：获得当前时间是今年的第几天。代码如下：

## 时间格式字符的使用

```java {5}
import java.text.SimpleDateFormat;
import java.util.Date;
public class TestDateFormat2 {
	public static void main(String[] args) {
		SimpleDateFormat s1 = new SimpleDateFormat("D");
		String daytime = s1.format(new Date());
		System.out.println(daytime);
	}
}
```

   执行结果如图8-17所示：

![图8-17 示例8-16运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495609433755218.png)

> 图8-17 示例8-16运行效果图

