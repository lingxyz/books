# 9.4.1 HashMap和HashTable

    HashMap采用**哈希算法**实现，是Map接口最常用的实现类。 由于底层采用了哈希表存储数据，我们要求键不能重复，如果发生重复，新的键值对会替换旧的键值对。 HashMap在**查找、删除、修改**方面都有非常高的效率。

**【示例9-7】Map接口中的常用方法**

```java
public class TestMap {
  public static void main(String[] args) {
    Map<Integer, String> m1 = new HashMap<Integer, String>();
    Map<Integer, String> m2 = new HashMap<Integer, String>();
    m1.put(1, "one");
    m1.put(2, "two");
    m1.put(3, "three");
    m2.put(1, "一");
    m2.put(2, "二");
    System.out.println(m1.size());
    System.out.println(m1.containsKey(1));
    System.out.println(m2.containsValue("two"));
    m1.put(3, "third"); //键重复了，则会替换旧的键值对
    Map<Integer, String> m3 = new HashMap<Integer, String>();
    m3.putAll(m1);
    m3.putAll(m2);
    System.out.println("m1:" + m1);
    System.out.println("m2:" + m2);
    System.out.println("m3:" + m3);
  }
}
```

    执行结果如图9-11所示：

![图9-11 示例9-7运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495617739123587.png)

> 图9-11 示例9-7运行效果图

    HashTable类和HashMap用法几乎一样，底层实现几乎一样，只不过**HashTable的方法添加了synchronized关键字确保线程同步检查，效率较低**。

**HashMap与HashTable的区别**

1. HashMap: **线程不安全，效率高**。允许key或value为null。

2. HashTable: **线程安全，效率低**。**不允许key或value为null**。