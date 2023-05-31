**7.3.1 数组的遍历**

   数组元素下标的合法区间：[0, length-1]。我们可以通过下标来遍历数组中的元素，遍历时可以读取元素的值或者修改元素的值。

**【示例7-7】 使用循环遍历初始化和读取数组**

```
public class Test {
	public static void main(String[] args) {
		int[] a = new int[4];
		//初始化数组元素的值
		for(int i=0;i<a.length;i++){
			a[i] = 100*i;
		}
		//读取元素的值
		for(int i=0;i<a.length;i++){
			System.out.println(a[i]);
		}
	}
}
```

   执行结果如图7-3所示：

![图7-3 示例7-7运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495419298978404.png)

> 图7-3 示例7-7运行效果图

