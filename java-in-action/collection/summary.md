# 第九章 总结

1. Collection 表示一组对象，它是集中、收集的意思，就是把一些数据收集起来。

2. Collection接口的两个子接口：

   1) List中的元素有顺序，可重复。常用的实现类有ArrayList、LinkedList和 vector。

​    Ø ArrayList特点：==查询效率高，增删效率低，线程不安全==。

​    Ø LinkedList特点：==查询效率低，增删效率高，线程不安全==。

​    Ø vector特点：==线程安全，效率低==，其它特征类似于ArrayList。

2) Set中的元素==没有顺序，不可重复==。常用的实现类有HashSet和TreeSet。

​    Ø HashSet特点：采用哈希算法实现,查询效率和增删效率都比较高。

​    Ø TreeSet特点：内部需要对存储的元素进行排序。因此，我们对应的类需要实现Comparable接口。这样，才能根据compareTo()方法比较对象之间的大小，才能进行内部排序。

3. 实现Map接口的类用来存储键(key)-值(value) 对。Map 接口的实现类有HashMap和TreeMap等。Map类中存储的键-值对通过键来标识，所以键值不能重复。

4. Iterator对象称作迭代器，用以方便的实现对容器内元素的遍历操作。

5. 类 java.util.Collections 提供了对Set、List、Map操作的工具方法。

6. 如下情况，可能需要我们重写equals/hashCode方法：

   1) 要将我们自定义的对象放入HashSet中处理。

   2) 要将我们自定义的对象作为HashMap的key处理。

   3) 放入Collection容器中的自定义对象后，可能会调用remove、contains等方法时。

7. JDK1.5以后增加了泛型。泛型的好处：

   1) 向集合添加数据时保证数据安全。

   2) 遍历集合元素时不需要强制转换。