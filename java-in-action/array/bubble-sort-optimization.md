**7.6.2 冒泡排序的优化算法**

   其实，我们可以把7.6.1的冒泡排序的算法优化一下，基于冒泡排序的以下特点：

   1.整个数列分成两部分：前面是无序数列，后面是有序数列。

   2.初始状态下，整个数列都是无序的，有序数列是空。

   3.每一趟循环可以让无序数列中最大数排到最后，(也就是说有序数列的元素个数增加1)，也就是不用再去顾及有序序列。

   4.每一趟循环都从数列的第一个元素开始进行比较，依次比较相邻的两个元素，比较到无序数列的末尾即可(而不是数列的末尾);如果前一个大于后一个，交换。

   5.判断每一趟是否发生了数组元素的交换，如果没有发生，则说明此时数组已经有序，无需再进行后续趟数的比较了。此时可以中止比较。

【示例7-21】冒泡排序的优化算法

```
import java.util.Arrays;
public class Test1 {
	public static void main(String[] args) {
		int[] values = { 3, 1, 6, 2, 9, 0, 7, 4, 5, 8 };
		bubbleSort(values);
		System.out.println(Arrays.toString(values));
	}
	public static void bubbleSort(int[] values) {
		int temp;
		int i;
		// 外层循环：n个元素排序，则至多需要n-1趟循环
		for (i = 0; i < values.length - 1; i++) {
			// 定义一个布尔类型的变量，标记数组是否已达到有序状态
			boolean flag = true;
	/*内层循环：每一趟循环都从数列的前两个元素开始进行比较，比较到无序数组的最后*/
			for (int j = 0; j < values.length - 1 - i; j++) {
				// 如果前一个元素大于后一个元素，则交换两元素的值；
				if (values[j] > values[j + 1]) {
					temp = values[j];
					values[j] = values[j + 1];
					values[j + 1] = temp;
					   //本趟发生了交换，表明该数组在本趟处于无序状态，需要继续比较；
					flag = false;
				}
			}
		   //根据标记量的值判断数组是否有序，如果有序，则退出；无序，则继续循环。
			if (flag) {
				break;
			}
		}
	}
}
```

   执行结果如图7-15所示：

![图7-15 示例7-21运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495424095376828.png)

> 图7-15 示例7-21运行效果图