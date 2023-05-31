**7.3.4 java.util.Arrays类**

   JDK提供的java.util.Arrays类，包含了常用的数组操作，方便我们日常开发。Arrays类包含了：排序、查找、填充、打印内容等常见的操作。

**【示例7-10】打印数组**

```
import java.util.Arrays;
public class Test {
	public static void main(String args[]) {
		int[] a = { 1, 2 };
		System.out.println(a); // 打印数组引用的值；
		System.out.println(Arrays.toString(a)); // 打印数组元素的值；
	}
}
```

   执行结果如图7-6所示：

![图7-6 示例7-10运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495420219239731.png)

> 图7-6 示例7-10运行效果图

**菜鸟雷区**

   此处的Arrays.toString()方法是Arrays类的静态方法，不是前面讲的Object的toString()方法。

**【示例7-11】数组元素的排序**

```
import java.util.Arrays;
public class Test {
	public static void main(String args[]) {
		int[] a = {1,2,323,23,543,12,59};
		System.out.println(Arrays.toString(a));
		Arrays.sort(a);
		System.out.println(Arrays.toString(a));
	}
}
```

   执行结果如图7-7所示：

![图7-7 示例7-11运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495420289354500.png)

图7-7 示例7-11运行效果图

**【示例7-12】数组元素是引用类型的排序(Comparable接口的应用)**

```
import java.util.Arrays;
public class Test {
	public static void main(String[] args) {
		Man[] msMans = { new Man(3, "a"), new Man(60, "b"), new Man(2, "c") };
		Arrays.sort(msMans);
		System.out.println(Arrays.toString(msMans));
	}
}

class Man implements Comparable {
	int age;
	int id;
	String name;

	public Man(int age, String name) {
		super();
		this.age = age;
		this.name = name;
	}

	public String toString() {
		return this.name;
	}

	public int compareTo(Object o) {
		Man man = (Man) o;
		if (this.age < man.age) {
			return -1;
		}
		if (this.age > man.age) {
			return 1;
		}
		return 0;
	}
}
```

**【示例7-13】二分法查找**

```
import java.util.Arrays;
public class Test {
	public static void main(String[] args) {
		int[] a = {1,2,323,23,543,12,59};
		System.out.println(Arrays.toString(a));
		Arrays.sort(a);   //使用二分法查找，必须先对数组进行排序;
		System.out.println(Arrays.toString(a));
        //返回排序后新的索引位置,若未找到返回负数。
		System.out.println("该元素的索引："+Arrays.binarySearch(a, 12)); 
	}
}
```

   执行结果如图7-8所示：

![图7-8 示例7-13运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495420398219658.png)

> 图7-8 示例7-13运行效果图

**【示例7-14】数组填充**

```
import java.util.Arrays;
public class Test {
	public static void main(String[] args) {
		int[] a= {1,2,323,23,543,12,59};
		System.out.println(Arrays.toString(a));
		Arrays.fill(a, 2, 4, 100);  //将2到4索引的元素替换为100;
		System.out.println(Arrays.toString(a));
	}
}
```

   执行结果如图7-9所示：

![图7-9 示例7-14运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495420475650749.png)

> 图7-9 示例7-14运行效果图

