**7.3.2 for-each循环**

   增强for循环for-each是JDK1.5新增加的功能，专门用于读取数组或集合中所有的元素，即对数组进行遍历。

**【示例7-8】增强for循环**

```
public class Test {
	public static void main(String[] args) {
		String[] ss = { "aa", "bbb", "ccc", "ddd" };
		for (String temp : ss) {
			System.out.println(temp);
		}
	}
}
```

   执行结果如图7-4所示：

![图7-4 示例7-8运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495419535841440.png)

> 图7-4 示例7-8运行效果图

**注意事项**

1. for-each增强for循环在遍历数组过程中不能修改数组中某元素的值。

2. for-each仅适用于遍历，不涉及有关索引(下标)的操作。