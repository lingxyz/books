# 5.2.1 Object类基本特性

   ==Object类是所有Java类的根基类==，也就意味着所有的Java对象都拥有Object类的属性和方法。如果在类的声明中未使用extends关键字指明其父类，则==默认继承Object类==。

**【示例5-4】Object类**

```java
public class Person {
    ...
}
// 等价于：
public class Person extends Object {
    ...
}
```