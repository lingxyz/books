**5.11.5 字符串相等的判断**

1. equals方法用来检测两个字符串内容是否相等。如果字符串s和t内容相等，则s.equals(t)返回true，否则返回false。

2. 要测试两个字符串除了大小写区别外是否是相等的，需要使用equalsIgnoreCase方法。

3. 判断字符串是否相等不要使用"=="。

**【示例5-31】忽略大小写的字符串比较**

```
"Hello".equalsIgnoreCase("hellO");//true
```

**【示例5-32】字符串的比较"=="与equals()方法**

```
public class TestStringEquals {
	public static void main(String[] args) {
		String g1 = "北京尚学堂";
		String g2 = "北京尚学堂";
		String g3 = new String("北京尚学堂");
		System.out.println(g1 == g2); // true  指向同样的字符串常量对象
		System.out.println(g1 == g3); // false  g3是新创建的对象
		System.out.println(g1.equals(g3)); // true  g1和g3里面的字符串内容是一样的
	}
}
```

   执行结果如图5-33所示：

![图5-33 示例5-32运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495268338419387.png)

> 图5-33 示例5-32运行效果图

   示例5-32的内存分析如图5-34所示：

![图5-34 示例5-32内存分析图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495268347551446.png)

> 图5-34 示例5-32内存分析图