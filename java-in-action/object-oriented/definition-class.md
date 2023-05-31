# 4.3.4 一个典型类的定义和UML图

**【示例4-3】模拟学生使用电脑学习**

```java
class Computer {
	String brand;	//品牌
}
public class SxtStu {
	// field
	int id;
	String sname;
	int age;
	Computer comp;
	void study() {
		System.out.println("我正在学习！使用我们的电脑，"+comp.brand);
	}
	SxtStu() {
	}
	public static void main(String[] args) {
		SxtStu stu1 = new SxtStu();
		stu1.sname = "张三";
        Computer comp1 = new Computer();
       	comp1.brand = "联想";
        stu1.comp = comp1;
		stu1.study();
	}
}
```

　　执行结果：

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494924993319375.png)

> 图4-2 示例4-3运行结果

　　对应的UML图如下：

![2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494924998558667.png)

> 图4-3 SxtStu和Computer的UML类图