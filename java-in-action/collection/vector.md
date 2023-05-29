# 9.3.4 Vector向量

   Vector底层是**用数组实现的List**，相关的方法都加了同步检查，因此**线程安全,效率低**。 比如，indexOf方法就增加了**synchronized**同步标记。

![图9-10 Vector的底层源码.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495617071989433.png)

> 图9-10 Vector的底层源码

**老鸟建议**

   如何选用ArrayList、LinkedList、Vector?

1. **需要线程安全时，用Vector**。

2. 不存在线程安全问题时，并且**查找较多用ArrayList**(一般使用它)。

3. 不存在线程安全问题时，增加或删除元素较多用LinkedList。