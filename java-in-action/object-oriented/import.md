# 4.12.2 导入类import

　　如果我们要使用其他包的类，需要使用import导入，从而可以在本类中直接通过类名来调用，否则就需要书写类的完整包名和类名。import后，便于编写代码，提高可维护性。

**注意要点：**

　　1. Java会==默认导入java.lang包下所有的类==，因此这些类我们可以直接使用。

　　2. 如果导入两个同名的类，只能用==包名+类名==来显示调用相关类：　

```
java.util.Date date  = new  java.util.Date();
```

**【示例4-15】导入同名类的处理**　　

```java
import java.sql.Date;
import java.util.*;// 导入该包下所有的类。会降低编译速度，但不会降低运行速度。

public class Test{
	public static void main(String[] args) {
		// 这里指的是java.sql.Date
		Date now; 
		// java.util.Date因为和java.sql.Date类同名，需要完整路径
		java.util.Date  now2 = new java.util.Date();
		System.out.println(now2);		
		// java.util包的非同名类不需要完整路径
		Scanner input = new Scanner(System.in);		
	}
}
```