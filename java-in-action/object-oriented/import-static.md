# 4.12.3 静态导入

　　静态导入(static import)是在JDK1.5新增加的功能，其作用是用于导入指定类的静态属性，这样我们可以直接使用静态属性。

**【示例4-16】静态导入的使用**　　

```java
package cn.sxt;
 // 以下两种静态导入的方式二选一即可
import static java.lang.Math.*; //导入Math类的所有静态属性
import static java.lang.Math.PI;// 导入Math类的PI属性

public class Test2{
	public static void main(String [] args){
		System.out.println(PI);
		System.out.println(random());
	}
}
```

　　执行结果如图4-15所示。

![1.png](http://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494928654561591.png)

> 图4-15 示例4-16运行结果