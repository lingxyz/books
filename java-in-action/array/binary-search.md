**7.7 二分法查找**

   二分法检索(binary search)又称折半检索，二分法检索的基本思想是设数组中的元素从小到大有序地存放在数组(array)中，首先将给定值key与数组中间位置上元素的关键码(key)比较，如果相等，则检索成功;

   否则，若key小，则在数组前半部分中继续进行二分法检索；

   若key大，则在数组后半部分中继续进行二分法检索。

   这样，经过一次比较就缩小一半的检索区间，如此进行下去，直到检索成功或检索失败。

二分法检索是一种效率较高的检索方法。比如，我们要在数组[7, 8, 9, 10, 12, 20, 30, 40, 50, 80, 100]中查询到10元素，过程如下：

![图7-16 二分法示意图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495424458323195.png)

> 图7-16 二分法示意图

**【示例7-22】二分法查找**

```
import java.util.Arrays;
public class Test {
	public static void main(String[] args) {
		int[] arr = { 30,20,50,10,80,9,7,12,100,40,8};
		int searchWord = 20; // 所要查找的数
		Arrays.sort(arr); //二分法查找之前，一定要对数组元素排序
		System.out.println(Arrays.toString(arr));
		System.out.println(searchWord+"元素的索引："+binarySearch(arr,searchWord));
	}

	public static int binarySearch(int[] array, int value){
        int low = 0;
        int high = array.length - 1;
        while(low <= high){
            int middle = (low + high) / 2;
            if(value == array[middle]){
                return middle;			//返回查询到的索引位置
            }
            if(value > array[middle]){
                low = middle + 1;
            }
            if(value < array[middle]){
                high = middle - 1;
            }
        }
        return -1;		//上面循环完毕，说明未找到，返回-1
    }
}
```

执行结果如图7-17所示：

![图7-17 示例7-22运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495424527473230.png)

> 图7-17 示例7-22运行效果图