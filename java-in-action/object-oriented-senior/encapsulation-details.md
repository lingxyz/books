# 5.4.3 封装的使用细节

## 类的属性的处理

1. 一般使用==private==访问权限。

2. 提供相应的==get/set==方法来访问相关属性，这些==方法通常是public修饰==的，以提供对属性的赋值与读取操作(注意：==boolean变量的get方法是is开头==!)。

3. 一些==只用于本类的辅助性方法可以用private修饰，希望其他类调用的方法用public修饰==。

## JavaBean的封装实例

```java
public class Person {
	// 属性一般使用private修饰
	private String name;
	private int age;
	private boolean flag;
	// 为属性提供public修饰的set/get方法
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public boolean isFlag() { // 注意：boolean类型的属性get方法是is开头的
		return flag;
	}
	public void setFlag(boolean flag) {
		this.flag = flag;
	}
}
```

## 封装的使用

​    下面我们使用封装来解决一下5.4.1中提到的年龄非法赋值的问题。

```java
class Person {
	private String name;
	private int age;
	public Person() {

	}
	public Person(String name, int age) {
		this.name = name;
		// this.age = age; // 构造方法中不能直接赋值，应该调用setAge方法
		setAge(age);
	}
	
	public void setName(String name) {
		this.name = name;
	}
	public String getName() {
		return name;
	}
	public void setAge(int age) {
		// 在赋值之前先判断年龄是否合法
		if (age > 130 || age < 0) {
			this.age = 18;  // 不合法赋默认值18
		} else {
			this.age = age; // 合法才能赋值给属性age
		}
	}
	public int getAge() {
		return age;
	}
	@Override
	public String toString() {
		return "Person [name=" + name + ", age=" + age + "]";
	}
}

public class Test2 {
	public static void main(String[] args) {
		Person p1 = new Person();
		// p1.name = "小红"; // 编译错误
		// p1.age = -45;    // 编译错误
		p1.setName("小红");
		p1.setAge(-45);
		System.out.println(p1);
		
		Person p2 = new Person("小白", 300);
		System.out.println(p2);
	}
}
```

   执行结果如图5-16所示：

![图5-16 示例5-11运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495253058271276.png)

> 图5-16 示例5-11运行效果图

