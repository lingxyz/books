# 8.5.2 递归遍历目录结构和树状展现

   本节结合前面给大家讲的递归算法，展示目录结构。大家可以先建立一个目录，下面增加几个子文件夹或者文件，用于测试。

**【示例8-26】使用递归算法，以树状结构展示目录树**

```java {24}
import java.io.File;
public class TestFile6 {
	public static void main(String[] args) {
		File f = new File("d:/电影");
		printFile(f, 0);
	}
	/**
	 * 打印文件信息
	 * @param file 文件名称
	 * @param level 层次数(实际就是：第几次递归调用)
	 */
	static void printFile(File file, int level) {
		// 输出层次数
		for (int i = 0; i < level; i++) {
			System.out.print("-");
		}
		// 输出文件名
		System.out.println(file.getName());
		// 如果file是目录，则获取子文件列表，并对每个子文件进行相同的操作
		if (file.isDirectory()) {
			File[] files = file.listFiles();
			for (File temp : files) {
				// 递归调用该方法：注意等+1
				printFile(temp, level + 1);
			}
		}
	}
}
```

   执行结果如图8-28所示：

![图8-28 示例8-26运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495611676693262.png)

> 图8-28 示例8-26运行效果图