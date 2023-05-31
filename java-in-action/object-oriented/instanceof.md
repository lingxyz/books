# 5.1.2  instanceof 运算符 

   instanceof是二元运算符，左边是对象，右边是类；==当对象是右面类或子类所创建对象时，返回true==；否则，返回false。比如：

**【示例5-2】使用instanceof运算符进行类型判断**

```java
public class Test{
    public static void main(String[] args) {
        Student s = new Student("高淇",172,"Java");
        System.out.println(s instanceof Person);
        System.out.println(s instanceof Student);
    }
}
```

   两条语句的输出结果都是true。