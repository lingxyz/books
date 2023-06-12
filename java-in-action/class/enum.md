# 8.6 枚举

   JDK1.5引入了枚举类型。枚举类型的定义包括枚举声明和枚举体。格式如下：

```java
enum  枚举名 {
      枚举体（常量列表）
}
```

   枚举体就是放置一些常量。我们可以写出我们的第一个枚举类型，如示例8-27所示：

## 创建枚举类型

```java
enum Season {
	SPRING, SUMMER, AUTUMN, WINDER 
}
```

   所有的枚举类型隐性地继承自 java.lang.Enum。枚举实质上还是类!而每个被枚举的成员实质就是一个枚举类型的实例，他们默认都是public static final修饰的。可以直接通过枚举类型名使用它们。

**老鸟建议**

1. 当你需要定义一组常量时，可以使用枚举类型。

   2. 尽量不要使用枚举的高级特性，事实上高级特性都可以使用普通类来实现，没有必要引入枚举，增加程序的复杂性!

## 枚举的使用

```java {5,10}
import java.util.Random;
public class TestEnum {
	public static void main(String[] args) {
		// 枚举遍历
		for (Week k : Week.values()) {
			System.out.println(k);
		}
		// switch语句中使用枚举
		int a = new Random().nextInt(4); // 生成0，1，2，3的随机数
		switch (Season.values()[a]) {
		case SPRING:
			System.out.println("春天");
			break;
		case SUMMER:
			System.out.println("夏天");
			break;
		case AUTUMN:
			System.out.println("秋天");
			break;
		case WINDTER:
			System.out.println("冬天");
			break;
		}
	}
}
/**季节*/
enum Season {
	SPRING, SUMMER, AUTUMN, WINDTER
}
/**星期*/
enum Week {
	星期一, 星期二, 星期三, 星期四, 星期五, 星期六, 星期日
}
```