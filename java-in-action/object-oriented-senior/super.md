# 5.3 super关键字

   super是直接==父类对象的引用==。可以通过super来==访问父类中被子类覆盖的方法或属性==。

   使用super调用普通方法，语句没有位置限制，可以在子类中随便调用。

   若是构造方法的第一行代码没有显式的调用super(...)或者this(...);那么Java==默认都会调用super(),含义是调用父类的无参数构造方法==。这里的super()可以省略。

**【示例5-7】super关键字的使用**

```java {16,20}
public class TestSuper01 { 
	public static void main(String[] args) {
		new ChildClass().f();
	}
}
class FatherClass {
    public int value;
    public void f(){
        value = 100;
        System.out.println ("FatherClass.value=" + value);
    }
}
class ChildClass extends FatherClass {
    public int value;
    public void f() {
        super.f();  // 调用父类对象的普通方法
        value = 200;
        System.out.println("ChildClass.value=" + value);
        System.out.println(value);
        System.out.println(super.value); // 调用父类对象的成员变量
    }
}
```

   执行结果如图5-5所示：

![图5-5 示例5-7运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170519/1495186136513650.png)

> 图5-5 示例5-7运行效果图