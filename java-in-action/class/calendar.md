# 8.3.3 Calendar日历类

   Calendar 类是一个抽象类，为我们提供了关于日期计算的相关功能，比如：年、月、日、时、分、秒的展示和计算。

   GregorianCalendar 是 Calendar 的一个具体子类，提供了世界上大多数国家/地区使用的标准日历系统。

**菜鸟雷区**

   注意月份的表示，一月是0，二月是1，以此类推，12月是11。 因为大多数人习惯于使用单词而不是使用数字来表示月份，这样程序也许更易读，父类Calendar使用常量来表示月份：JANUARY、FEBRUARY等等。

**【示例8-17】GregorianCalendar类和Calendar类的使用**

```java
import java.util.*;
public class TestCalendar {
	public static void main(String[] args) {
		// 得到相关日期元素
		GregorianCalendar calendar = new GregorianCalendar(2999, 10, 9, 22, 10, 50);
		int year = calendar.get(Calendar.YEAR); // 打印：1999
		int month = calendar.get(Calendar.MONTH); // 打印：10
		int day = calendar.get(Calendar.DAY_OF_MONTH); // 打印：9
		int day2 = calendar.get(Calendar.DATE); // 打印：9
		// 日：Calendar.DATE和Calendar.DAY_OF_MONTH同义
		int date = calendar.get(Calendar.DAY_OF_WEEK); // 打印：3
		// 星期几 这里是：1-7.周日是1，周一是2，。。。周六是7
		System.out.println(year);
		System.out.println(month);
		System.out.println(day);
		System.out.println(day2);
		System.out.println(date);
		// 设置日期
		GregorianCalendar calendar2 = new GregorianCalendar();
		calendar2.set(Calendar.YEAR, 2999);
		calendar2.set(Calendar.MONTH, Calendar.FEBRUARY); // 月份数：0-11
		calendar2.set(Calendar.DATE, 3);
		calendar2.set(Calendar.HOUR_OF_DAY, 10);
		calendar2.set(Calendar.MINUTE, 20);
		calendar2.set(Calendar.SECOND, 23);
		printCalendar(calendar2);
		// 日期计算
		GregorianCalendar calendar3 = new GregorianCalendar(2999, 10, 9, 22, 10, 50);
		calendar3.add(Calendar.MONTH, -7); // 月份减7
		calendar3.add(Calendar.DATE, 7); // 增加7天
		printCalendar(calendar3);
		// 日历对象和时间对象转化
		Date d = calendar3.getTime();
		GregorianCalendar calendar4 = new GregorianCalendar();
		calendar4.setTime(new Date());
		long g = System.currentTimeMillis();
	}
	static void printCalendar(Calendar calendar) {
		int year = calendar.get(Calendar.YEAR);
		int month = calendar.get(Calendar.MONTH) + 1;
		int day = calendar.get(Calendar.DAY_OF_MONTH);
		int date = calendar.get(Calendar.DAY_OF_WEEK) - 1; 		 // 星期几
		String week = "" + ((date == 0) ? "日" : date);
		int hour = calendar.get(Calendar.HOUR);
		int minute = calendar.get(Calendar.MINUTE);
		int second = calendar.get(Calendar.SECOND);
		System.out.printf("%d年%d月%d日,星期%s %d:%d:%d\n", year, month, day,  
                        week, hour, minute, second);
	}
}
```

   执行结果如图8-18所示：

![图8-18 示例8-17运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495609730317814.png)

> 图8-18 示例8-17运行效果图

   编写程序，利用GregorianCalendar类，打印当前月份的日历，今天的日期是 2017-05-18 ，如图8-19所示为今日所在月份的日历：

![图8-19 示例8-18运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495609776732875.png)

> 图8-19 示例8-18运行效果图

**【示例8-18】可视化日历的编写**

```java
import java.text.ParseException;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Scanner;
public class TestCalendar2 {
	public static void main(String[] args) throws ParseException {
		System.out.println("请输入日期（格式为：2010-3-3）：");
		Scanner scanner = new Scanner(System.in);
		String dateString = scanner.nextLine(); // 2010-3-1
		// 将输入的字符串转化成日期类
		System.out.println("您刚刚输入的日期是：" + dateString);
		String[] str = dateString.split("-");
		int year = Integer.parseInt(str[0]);
		int month = new Integer(str[1]);
		int day = new Integer(str[2]);
		Calendar c = new GregorianCalendar(year, month - 1, day); // Month:0-11
		// 大家自己补充另一种方式：将字符串通过SImpleDateFormat转化成Date对象，
        //再将Date对象转化成日期类
		// SimpleDateFormat sdfDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		// Date date = sdfDateFormat.parse(dateString);
		// Calendar c = new GregorianCalendar();
		// c.setTime(date);
		// int day = c.get(Calendar.DATE);
		c.set(Calendar.DATE, 1);
		int dow = c.get(Calendar.DAY_OF_WEEK); // week:1-7 日一二三四五六
		System.out.println("日\t一\t二\t三\t四\t五\t六");
		for (int i = 0; i < dow - 1; i++) {
			System.out.print("\t");
		}
		int maxDate = c.getActualMaximum(Calendar.DATE);
		// System.out.println("maxDate:"+maxDate);
		for (int i = 1; i <= maxDate; i++) {
			StringBuilder sBuilder = new StringBuilder();
			if (c.get(Calendar.DATE) == day) {
				sBuilder.append(c.get(Calendar.DATE) + "*\t");
			} else {
				sBuilder.append(c.get(Calendar.DATE) + "\t");
			}
			System.out.print(sBuilder);
			// System.out.print(c.get(Calendar.DATE)+
     // ((c.get(Calendar.DATE)==day)?"*":"")+"\t");
			if (c.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY) {
				System.out.print("\n");
			}
			c.add(Calendar.DATE, 1);
		}
	}
}
```

