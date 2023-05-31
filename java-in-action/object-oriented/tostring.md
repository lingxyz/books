# 5.2.2 toString方法

   ==Object类中定义==有public String toString()方法，其返回值是 String 类型。Object类中toString方法的源码为：

```java
public String toString() {
    return getClass().getName() + "@" + Integer.toHexString(hashCode());
}
```

   根据如上源码得知，默认会返回“==类名+@+16进制的hashcode==”。在==打印输出或者用字符串连接对象==时，会==自动调用==该对象的toString()方法。

**【示例5-5】toString()方法测试和重写toString()方法**

```java
class Person {
    String name;
    int age;
    @Override
    public String toString() {
        return name+",年龄："+age;
    }
}
public class Test {
    public static void main(String[] args) {
        Person p = new Person();
        p.age = 20;
        p.name = "李东";
        System.out.println("info:" + p);
         
        Test t = new Test();
        System.out.println(t);
    }
}
```

   执行结果如图5-4所示：

![图5-4 示例5-5运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170519/1495183720428188.png)

> 图5-4 示例5-5运行效果图