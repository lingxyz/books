**7.6.1 冒泡排序的基础算法**

   冒泡排序是最常用的排序算法，在笔试中也非常常见，能手写出冒泡排序算法可以说是基本的素养。

   算法重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来，这样越大的元素会经由交换慢慢“浮”到数列的顶端。

**冒泡排序算法的运作如下：**

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。

2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。

3. 针对所有的元素重复以上的步骤，除了最后一个。

4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

   大家可以用如上思想，将下面的人按照身高从低到高重新排列：

![图7-13 身高图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495423693187158.png)

> 图7-13 身高图

**【示例7-20】冒泡排序的基础算法**

```
import java.util.Arrays;
public class Test {
	public static void main(String[] args) {
		int[] values = { 3, 1, 6, 2, 9, 0, 7, 4, 5, 8 };
		bubbleSort(values);
		System.out.println(Arrays.toString(values));
	}

	public static void bubbleSort(int[] values) {
		int temp;
		for (int i = 0; i < values.length; i++) {
			for (int j = 0; j < values.length - 1 - i; j++) {
				if (values[j] > values[j + 1]) {
					temp = values[j];
					values[j] = values[j + 1];
					values[j + 1] = temp;
				}
			}
		}
	}
}
```

   执行结果如图7-14所示：

![图7-14 示例7-20运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495423809155046.png)

> 图7-14 示例7-20运行效果图