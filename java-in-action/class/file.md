# 8.5.1 File类的基本用法

   java.io.File类：代表文件和目录。 在开发中，读取文件、生成文件、删除文件、修改文件的属性时经常会用到本类。

File类的常见构造方法：`public File(String pathname)`

   以pathname为路径创建File对象，如果pathname是相对路径，则==默认的当前路径在系统属性user.dir中存储==，如示例8-21所示。

## 文件的创建

```java {6}
import java.io.File;
public class TestFile1 {
	public static void main(String[] args) throws Exception {
		System.out.println(System.getProperty("user.dir"));
		File f = new File("a.txt"); // 相对路径：默认放到user.dir目录下面
		f.createNewFile();          // 创建文件
		File f2 = new File("d:/b.txt"); // 绝对路径
		f2.createNewFile();
	}
}
```

   在eclipse项目开发中，user.dir就是本项目的目录。因此，执行完毕后，在本项目和D盘下都生成了新的文件(如果是eclipse下，一定按F5刷新目录结构才能看到新文件)。如图8-22所示。

![图8-22 本项目目录中新增文件效果.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495610643830434.png)

> 图8-22 本项目目录中新增文件效果

## 访问文件的属性

**表8-3 File类访问属性的方法列表**

**![表8-3 File类访问属性的方法列表.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495611382530451.png)**

**【示例8-22】测试File类访问属性的基本用法**

```java {6-12}
import java.io.File;
import java.util.Date;
public class TestFile2 {
	public static void main(String[] args) throws Exception {
		File f = new File("d:/b.txt");
		System.out.println("File是否存在：" + f.exists());
		System.out.println("File是否是目录："+f.isDirectory());
		System.out.println("File是否是文件：" + f.isFile());
		System.out.println("File最后修改时间：" + new Date(f.lastModified()));
		System.out.println("File的大小：" + f.length());
		System.out.println("File的文件名：" + f.getName());
		System.out.println("File的目录路径：" + f.getPath());
	}
}
```

   执行结果如图8-23所示：

![图8-23 示例8-22运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495610901564219.png)

> 图8-23 示例8-22运行效果图

## 创建空文件或目录

**表8-4 File类创建文件或目录的方法列表**

**![表8-4 File类创建文件或目录的方法列表.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495611400819053.png)**

**【示例8-23】使用mkdir创建目录**

```java {5,6,8}
import java.io.File;
public class TestFile3 {
	public static void main(String[] args) throws Exception {
		File f = new File("d:/c.txt");
		f.createNewFile(); // 会在d盘下面生成c.txt文件
		f.delete(); // 将该文件或目录从硬盘上删除
		File f2 = new File("d:/电影/华语/大陆");
		boolean flag = f2.mkdir(); // 目录结构中有一个不存在，则不会创建整个目录树
		System.out.println(flag); //创建失败
	}
}
```

   执行结果如图8-24所示：

![图8-24 示例8-23运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495611063923797.png)

> 图8-24 示例8-23运行效果图

**【示例8-24】使用mkdirs创建目录**

```java {8}
import java.io.File;
public class TestFile4 {
	public static void main(String[] args) throws Exception {
		File f = new File("d:/c.txt");
		f.createNewFile(); // 会在d盘下面生成c.txt文件
		f.delete(); // 将该文件或目录从硬盘上删除
		File f2 = new File("d:/电影/华语/大陆");
		boolean flag = f2.mkdirs();// 目录结构中有一个不存在也没关系；创建整个目录树
		System.out.println(flag); // 创建成功
	}
}
```

   执行结果如图8-25所示：

![图8-25 示例8-24运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495611122691032.png)

> 图8-25 示例8-24运行效果图

## File类的综合应用

```java {8,12,20,23,24,26}
import java.io.File;
import java.io.IOException;
public class TestFile5 {
	public static void main(String[] args) {
		// 指定一个文件
		File file = new File("d:/sxt/b.txt");
		// 判断该文件是否存在
		boolean flag = file.exists();
		// 如果存在就删除，如果不存在就创建
		if (flag) {
			// 删除
			boolean flagd = file.delete();
			if (flagd) {
				System.out.println("删除成功");
			} else {
				System.out.println("删除失败");
			}
		} else {
			// 创建
			boolean flagn = true;
			try {
				// 如果目录不存在，先创建目录
				File dir = file.getParentFile();
				dir.mkdirs();
				// 创建文件
				flagn = file.createNewFile();
				System.out.println("创建成功");
			} catch (IOException e) {
				System.out.println("创建失败");
				e.printStackTrace();
			}			
		}
		// 文件重命名(同学可以自己测试一下)
		// file.renameTo(new File("d:/readme.txt"));
	}
}
```

   第一次执行结果如图8-26所示：

![图8-26 示例8-25第一次运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495611203132963.png)

> 图8-26 示例8-25第一次运行效果图

   第二次执行结果如图8-27所示：

![图8-27 示例8-25第二次运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495611240881469.png)

> 图8-27 示例8-25第二次运行效果图