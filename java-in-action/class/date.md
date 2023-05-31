# 8.3.1 Date时间类(java.util.Date)

   在标准Java类库中包含一个Date类。它的对象表示一个特定的瞬间，精确到毫秒。

1. Date() 分配一个Date对象，并初始化此对象为系统当前的日期和时间，可以精确到==毫秒==)。

2. Date(long date) 分配 Date 对象并初始化此对象，以表示自从标准基准时间(称为“历元(epoch)”，即 1970 年 1 月 1 日 00:00:00 GMT)以来的指定毫秒数。

3. boolean ==after==(Date when) 测试此日期是否在指定日期之后。

4. boolean ==before==(Date when) 测试此日期是否在指定日期之前。

5. boolean ==equals==(Object obj) 比较两个日期的相等性。

6. long getTime() 返回自 1970 年 1 月 1 日 00:00:00 GMT 以来此 Date 对象表示的毫秒数。

7. String ==toString==() 把此 Date 对象转换为以下形式的 String：

​    dow mon dd hh:mm:ss zzz yyyy 其中： dow 是一周中的某一天 (Sun、 Mon、Tue、Wed、 Thu、 Fri、 Sat)。

**【示例8-14】Date类的使用**

```java {4,5,6,9-14}
import java.util.Date;
public class TestDate {
	public static void main(String[] args) {
		Date date1 = new Date();
		System.out.println(date1.toString());
		long i = date1.getTime();
		Date date2 = new Date(i - 1000);
		Date date3 = new Date(i + 1000);
		System.out.println(date1.after(date2));
		System.out.println(date1.before(date2));
		System.out.println(date1.equals(date2));
		System.out.println(date1.after(date3));
		System.out.println(date1.before(date3));
		System.out.println(date1.equals(date3));
		System.out.println(new Date(1000L * 60 * 60 * 24 * 365 * 39L).toString());
	}
}
```

   执行结果如图8-15所示：

![图8-15 示例8-14运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495608258449100.png)

> 图8-15 示例8-14运行效果图

   查看API文档大家可以看到其实Date类中的很多方法都已经过时了。JDK1.1之前的Date包含了：日期操作、字符串转化成时间对象等操作。JDK1.1之后，日期操作一般使用Calendar类，而字符串的转化使用DateFormat类。