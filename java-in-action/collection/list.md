# 9.3.1 List特点和常用方法

## List 特点

​    List是有序、可重复的容器。

​    **有序：**List中每个元素都有索引标记。可以根据元素的索引标记(在List中的位置)访问元素，从而精确控制这些元素。

​    **可重复：**List允许加入重复的元素。更确切地讲，List通常允许满足 e1.equals(e2) 的元素重复加入容器。

## List 常用方法

​    除了Collection接口中的方法，List多了一些跟顺序(索引)有关的方法，参见下表：

> 表9-2 List接口中定义的方法

![表9-2 List接口中定义的方法.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495616109914665.png)

​    List接口常用的实现类有3个：**ArrayList、LinkedList和Vector**。

### 【示例9-4】List的常用方法

```java
public class TestList {
    /**
     * 测试add/remove/size/isEmpty/contains/clear/toArrays等方法
     */
    public static void test01() {
        List<String> list = new ArrayList<String>();
        System.out.println(list.isEmpty()); // true,容器里面没有元素
        list.add("高淇");
        System.out.println(list.isEmpty()); // false,容器里面有元素
        list.add("高小七");
        list.add("高小八");
        System.out.println(list);
        System.out.println("list的大小：" + list.size());
        System.out.println("是否包含指定元素：" + list.contains("高小七"));
        list.remove("高淇");
        System.out.println(list);
        Object[] objs = list.toArray();
        System.out.println("转化成Object数组：" + Arrays.toString(objs));
        list.clear();
        System.out.println("清空所有元素：" + list);
    }
    public static void main(String[] args) {
        test01();
    }
}
```

   执行结果如图9-3所示：

![图9-3 示例9-4运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495616180529639.png)

> 图9-3 示例9-4运行效果图

### 【示例9-5】两个List之间的元素处理

```java
public class TestList {
    public static void main(String[] args) {
        test02();
    }
    /**
     * 测试两个容器之间元素处理
     */
    public static void test02() {
        List<String> list = new ArrayList<String>();
        list.add("高淇");
        list.add("高小七");
        list.add("高小八");
 
        List<String> list2 = new ArrayList<String>();
        list2.add("高淇");
        list2.add("张三");
        list2.add("李四");
        System.out.println(list.containsAll(list2)); // false list是否包含list2中所有元素
        System.out.println(list);
        list.addAll(list2); 		// 将list2中所有元素都添加到list中
        System.out.println(list);
        list.removeAll(list2); // 从list中删除同时在list和list2中存在的元素
        System.out.println(list);
        list.retainAll(list2); // 取list和list2的交集
        System.out.println(list);
    }
}
```

   执行结果如图9-4所示：

![图9-4 示例9-5运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495616246235820.png)

图9-4 示例9-5运行效果图

### 【示例9-6】List中操作索引的常用方法

```java
public class TestList {
    public static void main(String[] args) {
        test03();
    }
    /**
     * 测试List中关于索引操作的方法
     */
    public static void test03() {
        List<String> list = new ArrayList<String>();
        list.add("A");
        list.add("B");
        list.add("C");
        list.add("D");
        System.out.println(list); // [A, B, C, D]
        list.add(2, "高");
        System.out.println(list); // [A, B, 高, C, D]
        list.remove(2);
        System.out.println(list); // [A, B, C, D]
        list.set(2, "c");
        System.out.println(list); // [A, B, c, D]
        System.out.println(list.get(1)); // 返回：B
        list.add("B");
        System.out.println(list); // [A, B, c, D, B]
        System.out.println(list.indexOf("B")); // 1 从头到尾找到第一个"B"
        System.out.println(list.lastIndexOf("B")); // 4 从尾到头找到第一个"B"
    }
}
```

   执行结果如图9-5所示：

![图9-5 示例9-6运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495616328435709.png)

> 图9-5 示例9-6运行效果图