# 9.1.2 容器中使用泛型

​    容器相关类都定义了泛型，我们在开发和工作中，在使用容器类时都要使用泛型。这样，在容器的存储数据、读取数据时都避免了大量的类型判断，非常便捷。

**【示例9-3】泛型类的在集合中的使用**

```java
public class Test {
    public static void main(String[] args) {
        // 以下代码中List、Set、Map、Iterator都是与容器相关的接口;
        List<String> list = new ArrayList<String>();
        Set<Man> mans = new HashSet<Man>();
        Map<Integer, Man> maps = new HashMap<Integer, Man>();
        Iterator<Man> iterator = mans.iterator();
    }
}
```

​    通过阅读源码，我们发现Collection、List、Set、Map、Iterator接口都定义了泛型，如下图所示：

![图9-2容器的泛型定义.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495614353205506.png)

> 图9-2容器的泛型定义

​    因此，我们在使用这些接口及其实现类时，都要使用泛型。

**菜鸟雷区**

​    我们只是强烈建议使用泛型。事实上，不使用编译器也不会报错!