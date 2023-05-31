# 6.4 异常的处理方式之一：捕获异常

   捕获异常是通过3个关键词来实现的：`try-catch-finally`。用try来执行一段程序，如果出现异常，系统抛出一个异常，可以通过它的类型来捕捉(catch)并处理它，最后一步是通过finally语句为异常处理提供一个统一的出口，finally所指定的代码都要被执行(catch语句可有多条;finally语句最多只能有一条，根据自己的需要可有可无)。如图6-10所示。

![图6-10 异常处理.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495273755315926.png)

> 图6-10 异常处理

**上面过程详细解析：**

## try

   try语句指定了一段代码，该段代码就是异常捕获并处理的范围。在执行过程中，当任意一条语句产生异常时，就会跳过该条语句中后面的代码。代码中可能会产生并抛出一种或几种类型的异常对象，它后面的catch语句要分别对这些异常做相应的处理。

   一个try语句必须带有至少一个catch语句块或一个finally语句块 。

**注意事项**

   当异常处理的代码执行结束以后，不会回到try语句去执行尚未执行的代码。

## catch

   n-每个try语句块可以伴随==一个或多个catch语句==，用于处理可能产生的不同类型的异常对象。

   n-常用方法，这些方法均==继承自Throwable类== 。

​     u-==toString ()==方法，显示异常的类名和产生异常的原因

​     u-==getMessage()==方法，只显示产生异常的原因，但不显示类名。

​     u-==printStackTrace()==方法，用来跟踪异常事件发生时堆栈的内容。

   n-catch捕获异常时的捕获顺序：

​     u-如果异常类之间有继承关系，在顺序安排上需注意。越是顶层的类，越放在下面，再不然就直接把多余的catch省略掉。 也就是==先捕获子类异常再捕获父类异常==。

## finally

   n-有些语句，不管是否发生了异常，都必须要执行，那么就可以把这样的语句放到finally语句块中。

   n-通常在finally中关闭程序块已打开的资源，比如：==关闭文件流、释放数据库连接==等。

## try-catch-finally语句块的执行过程

   try-catch-finally程序块的执行流程以及执行结果比较复杂。

   基本执行过程如下：

   程序首先执行可能发生异常的try语句块。如果try语句没有出现异常则执行完后跳至finally语句块执行;如果try语句出现异常，则中断执行并根据发生的异常类型跳至相应的catch语句块执行处理。catch语句块可以有多个，分别捕获不同类型的异常。catch语句块执行完后程序会继续执行finally语句块。finally语句是可选的，如果有的话，则不管是否发生异常，finally语句都会被执行。

**注意事项**

1. 即使try和catch块中存在return语句，finally语句也会执行。是在==执行完finally语句后再通过return退出==。
2. finally语句块只有一种情况是不会执行的，那就是在执行finally之前遇到了==System.exit(0)结束程序运行==。

**【示例6-8】典型代码(先不要敲!!)**

```java
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
public class Test8 {
    public static void main(String[] args) {
        FileReader reader = null;
        try {
            reader = new FileReader("d:/a.txt");
            char c = (char) reader.read();
            char c2 = (char) reader.read();
            System.out.println("" + c + c2);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```

