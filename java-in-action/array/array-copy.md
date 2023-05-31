**7.3.3数组的拷贝**

   System类里也包含了一个static void arraycopy(object src，int srcpos，object dest， int destpos，int length)方法，该方法可以将src数组里的元素值赋给dest数组的元素，其中srcpos指定从src数组的第几个元素开始赋值，length参数指定将src数组的多少个元素赋给dest数组的元素。

**【示例7-9】数组拷贝**

```
public class Test {
	public static void main(String args[]) {
		String[] s = {"阿里","尚学堂","京东","搜狐","网易"}; 
	    String[] sBak = new String[6];
	    System.arraycopy(s,0,sBak,0,s.length);
	    for (int i = 0; i < sBak.length; i++) {
			System.out.print(sBak[i]+ "\t");
		}
	}
}
```

   执行结果如图7-5所示：

![图7-5 示例7-9运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495419905505546.png)

> 图7-5 示例7-9运行效果图