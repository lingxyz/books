# 第十章 作业

## 一、选择题

1. 使用Java IO流实现对文本文件的读写过程中，需要处理下列( )异常。(选择一项)

A. ClassNotFoundException

B. IOException

C. SQLException

D. RemoteException

2. 在Java的IO操作中，( )方法可以用来刷新流的缓冲。(选择两项)

A. void release()

B. void close()

C. void remove()

D. void flush()

3. 在Java中，下列关于读写文件的描述错误的是( )。(选择一项)

A. Reader类的read()方法用来从源中读取一个字符的数据

B. Reader类的read(int n )方法用来从源中读取一个字符的数据

C. Writer类的write(int n)方法用来向输出流写入单个字符

D. Writer类的write(String str)方法用来向输出流写入一个字符串

4. 阅读下列文件定入的Java代码，共有( )处错误。(选择一项)

```java
import java.io.*;
public class TestIO {
	public static void main(String []args){
		String str ="文件写入练习";
		FileWriter fw = null;        //1
		try{
			fw = new FileWriter("c:\mytext.txt");  //2
			fw.writerToEnd(str);   //3
		}catch(IOException e){   //4
			e.printStackTrace();
		}finally{
			//此处省略关闭流
		}
	}
}
```

A. 0

B. 1

C. 2

D. 3

5. 分析如下Java代码，有标注的四行代码中，有错误的是第( )处。(选择一项)

```java
import java.io.FileWriter;
import java.io.IOException;
public class Test {
	public static void main(String[ ] args) {
		String str = "Hello World";
		FileWriter fw = null;
		try {
			fw = new FileWriter("c:\\hello.txt"); // 1
			fw.write(str);                        // 2
		} catch (IOException e) {
			e.printStackTrace();                  // 3
		} finally {
			fw.close();                           // 4
		}
	}
}
```

A. 1

B. 2

C. 3

D. 4

## 二、简答题

1. 说出本章最基本的四个抽象类及他们的区别?

2. 读入读出流的数据必须是按照顺序，依次读出吗? 如果我想读取某个文件指定位置，如何做到?

3. 想copy一个文本数据，使用哪些流? 如果考虑效率问题，使用那些流较好?

4. 对象的序列化接口的特点。

5. 想把一个字节流转化成字符流，使用什么流?

## 三、编码题

1. 实现字节数组和任何基本类型和引用类型执行的相互转换

  提示：使用ByteArrayInutStream和ByteArrayOutputStream。

2. 复制文件夹d:/sxtjava下面所有文件和子文件夹内容到d:/sxtjava2。

  提示：涉及单个文件复制、目录的创建、递归的使用

3. 使用IO包中的类读取D盘上exam.txt文本文件的内容，每次读取一行内容，将每行作为一个输入放入ArrayList的泛型集合中并将集合中的内容使用加强for进行输出显示。
