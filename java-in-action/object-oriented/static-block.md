# 4.10 静态初始化块

　　构造方法用于对象的初始化!静态初始化块，用于类的初始化操作!==在静态初始化块中不能直接访问非static成员==。

**注意事项：**

　　静态初始化块执行顺序(学完继承再看这里)：

　　1. ==上溯到Object类==，先执行Object的静态初始化块，再向下执行子类的静态初始化块，直到我们的类的静态初始化块为止。

　　2. 构造方法执行顺序和上面顺序一样!!

**【示例4-11】static初始化块**

```java
public class User3 {
	int id;			 // id
	String name; // 账户名
	String pwd;  // 密码
	static String company; // 公司名称
	static {
		System.out.println("执行类的初始化工作");
		company = "北京尚学堂";
		printCompany();
	}	
	public static void printCompany(){
		System.out.println(company);
	}	
	public static void main(String[] args) {
		User3  u3 = new User3();
	}
}
```

　　执行结果如图4-11所示。

![1.png](http://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494927536518588.png)

> 图4-11 示例4-11的运行结果