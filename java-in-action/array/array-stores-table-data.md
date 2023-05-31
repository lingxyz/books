**7.5 数组存储表格数据**

   表格数据模型是计算机世界最普遍的模型，可以这么说，大家在互联网上看到的所有数据本质上都是“表格”，无非是表格之间互相套用。如下表格是一张雇员表：

> 表7-1 雇员表

![图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495423351617812.png)

   我们观察表格，发现每一行可以使用一个一维数组存储：

```
Object[] a1 = {1001,"高淇",18,"讲师","2006-2-14"};
Object[] a2 = {1002,"高小七",19,"助教","2007-10-10"};
Object[] a3 = {1003,"高小琴",20,"班主任","2008-5-5"};
```

**注意事项**

   此处基本数据类型”1001”，本质不是Object对象。JAVA编译器会自动把基本数据类型“自动装箱”成包装类对象。大家在下一章学了包装类后就懂了。

   这样我们只需要再定义一个二维数组，将上面3个数组放入即可：

```
Object[][]  emps = new Object[3][];
emps[0] = a1;
emps[1] = a2;
emps[2] = a3;
```

**【示例7-19】 二维数组保存表格数据**

```
import java.util.Arrays;
public class Test {
	public static void main(String[] args) {
		Object[] a1 = {1001,"高淇",18,"讲师","2006-2-14"};
		Object[] a2 = {1002,"高小七",19,"助教","2007-10-10"};
		Object[] a3 = {1003,"高小琴",20,"班主任","2008-5-5"};
		Object[][]  emps = new Object[3][];
		emps[0] = a1;
		emps[1] = a2;
		emps[2] = a3;
		System.out.println(Arrays.toString(emps[0]));
		System.out.println(Arrays.toString(emps[1]));
		System.out.println(Arrays.toString(emps[2]));	
	}
}
```

   执行结果如图7-12所示：

![图7-12 示例7-19运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495423269352453.png)

> 图7-12 示例7-19运行效果图