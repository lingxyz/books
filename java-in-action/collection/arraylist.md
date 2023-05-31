# 9.3.2 ArrayList特点和底层实现

    ArrayList底层是用数组实现的存储。 特点：**查询效率高，增删效率低，线程不安全**。
    
    查看源码：

![图9-6 ArrayList底层源码(1).png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495616601500147.png)

> 图9-6 ArrayList底层源码(1)

    我们可以看出ArrayList底层使用**Object数组**来存储元素数据。所有的方法，都围绕这个核心的Object数组来开展。

    我们知道，数组长度是有限的，而ArrayList是可以存放任意数量的对象，长度不受限制，那么它是怎么实现的呢?本质上就是通过**定义新的更大的数组，将旧数组中的内容拷贝到新数组，来实现扩容**。 ArrayList的Object数组**初始化长度为10**，如果我们存储满了这个数组，需要存储第11个对象，就会定义新的长度更大的数组，并将原数组内容和新的元素一起加入到新数组中，源码如下：

![图9-7 ArrayList底层源码(2).png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495616624527034.png)

> 图9-7 ArrayList底层源码(2)