**7.2.1 数组声明**

**【示例7-1】数组的声明方式有两种(以一维数组为例)**

```
type[]   arr_name; //（推荐使用这种方式）
type    arr_name[];
```

**注意事项**

1. 声明的时候并没有实例化任何对象，只有在实例化数组对象时，JVM才分配空间，这时才与长度有关。

2. 声明一个数组的时候并没有数组真正被创建。

3. 构造一个数组，必须指定长度。

**【示例7-2】创建基本类型一维数组**

```
public class Test {
	public static void main(String args[]) {
		int[] s = null; // 声明数组；
		s = new int[10]; // 给数组分配空间；
		for (int i = 0; i < 10; i++) {
			s[i] = 2 * i + 1;//给数组元素赋值；
			System.out.println(s[i]);
		} 
	}
}
```

![图7-1 基本类型数组内存分配图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495418560857133.png)

> 图7-1 基本类型数组内存分配图

**【示例7-3】创建引用类型一维数组**

```
class Man{
	private int age;
	private int id;
	public Man(int id,int age) {
		super();
		this.age = age;
		this.id = id;
	}
}
public class AppMain {
	public static void main(String[] args) {
		Man[] mans;  //声明引用类型数组； 
		mans = new Man[10];  //给引用类型数组分配空间；
		
		Man m1 = new Man(1,11);
		Man m2 = new Man(2,22);  
		
		mans[0]=m1;//给引用类型数组元素赋值；
		mans[1]=m2;//给引用类型数组元素赋值；
	}
}
```

![图7-2 引用类型数组内存分配图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495418626975934.png)

> 图7-2 引用类型数组内存分配图