# 6.5 异常的处理方式之二：声明异常(throws子句)

   当CheckedException产生时，不一定立刻处理它，可以再把异常throws出去。

   在方法中使用try-catch-finally是由这个方法来处理异常。但是在一些情况下，当前方法并不需要处理发生的异常，而是向上传递给调用它的方法处理。

   如果一个方法中可能产生某种异常，但是并不能确定如何处理这种异常，则应根据异常规范在方法的首部声明该方法可能抛出的异常。

   如果一个方法抛出多个已检查异常，就必须在方法的首部列出所有的异常，之间以逗号隔开。

**【示例6-9】典型代码(先不敲!)**

```java
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Test9 {
	public static void main(String[] args) {
		try {
			readFile("joke.txt");
		} catch (FileNotFoundException e) {
			System.out.println("所需文件不存在！");
		} catch (IOException e) {
			System.out.println("文件读写错误！");
		}
	}	
	public static void readFile(String fileName) throws FileNotFoundException,          
    IOException {
		FileReader in = new FileReader(fileName);
		int tem = 0;
		try {
			tem = in.read();
			while (tem != -1) {
				System.out.print((char) tem);
				tem = in.read();
			}
		} finally {
			in.close();
		}
	}
}
```

**注意事项**

1. 方法重写中声明异常原则：==子类重写父类方法时，如果父类方法有声明异常，那么子类声明的异常范围不能超过父类声明的范围==。