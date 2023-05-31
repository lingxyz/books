# 10.1.3 第一个简单的IO流程序及深入理解

​    当程序需要读取数据源的数据时，就会通过IO流对象开启一个通向数据源的流，通过这个IO流对象的相关方法可以顺序读取数据源中的数据。

**【示例10-1】使用流读取文件内容(不规范的写法，仅用于测试)**

```java
import java.io.*;
public class TestIO1 {
    public static void main(String[] args) {
        try {
            // 创建输入流
            FileInputStream fis = new FileInputStream("d:/a.txt"); // 文件内容是：abc
            //一个字节一个字节的读取数据
            int s1 = fis.read(); // 打印输入字符a对应的ascii码值97
            int s2 = fis.read(); // 打印输入字符b对应的ascii码值98
            int s3 = fis.read(); // 打印输入字符c 对应的ascii码值99
            int s4 = fis.read(); // 由于文件内容已经读取完毕，返回-1
            System.out.println(s1);
            System.out.println(s2);
            System.out.println(s3);
            System.out.println(s4);
            // 流对象使用完，必须关闭！不然，总占用系统资源，最终会造成系统崩溃！
            fis.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

   执行结果如图10-3所示：

![图10-3 示例10-1运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170525/1495701361687425.png)

> 图10-3 示例10-1运行效果图

   通过示例10-1我们要注意以下几点：

1. 在示例10-1中我们读取的文件内容是已知的，因此可以使用固定次数的`int s= fis.read();`语句读取内容，但是在实际开发中通常我们根本不知道文件的内容，因此我们在读取的时候需要配合while循环使用。

2. 为了保证出现异常后流的正常关闭，通常要将流的关闭语句要放到finally语句块中，并且要判断流是不是null。

   IO流的经典写法如示例10-2所示。

**【示例10-2】使用流读取文件内容(经典代码，一定要掌握)**

```java
import java.io.*;
public class TestIO2 {
    public static void main(String[] args) {
        FileInputStream fis = null;
        try {
            fis = new FileInputStream("d:/a.txt"); // 内容是：abc
            StringBuilder sb = new StringBuilder();
            int temp = 0;
            // 当temp等于-1时，表示已经到了文件结尾，停止读取
            while ((temp = fis.read()) != -1) {
                sb.append((char) temp);
            }
            System.out.println(sb);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                // 这种写法，保证了即使遇到异常情况，也会关闭流对象。
                if (fis != null) {
                    fis.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

   执行结果如图10-4所示：

![图10-4 示例10-2运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170525/1495701584762201.png)

> 图10-4 示例10-2运行效果图

**老鸟建议**

   如上代码是一段非常典型的IO流代码，其他流对象的使用也基本是同样的模式!