# 9.3.3 LinkedList特点和底层实现

    LinkedList底层用**双向链表**实现的存储。特点：**查询效率低，增删效率高，线程不安全**。

    双向链表也叫双链表，是链表的一种，它的**每个数据节点中都有两个指针，分别指向前一个节点和后一个节点**。 所以，从双向链表中的任意一个节点开始，都可以很方便地找到所有节点。

![图9-8 LinkedList的存储结构图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495616843888130.png)

> 图9-8 LinkedList的存储结构图

    每个节点都应该有3部分内容：

```java
class  Node {
  Node  previous;  // 前一个节点
  Object  element; // 本节点保存的数据
  Node  next;      // 后一个节点
}
```

    我们查看LinkedList的源码，可以看到里面包含了双向链表的相关代码：

![图9-9 LinkedList的底层源码.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495616905610598.png)

> 图9-9 LinkedList的底层源码

**注意事项**

    entry在英文中表示“进入、词条、条目”的意思。在计算机英语中一般表示“项、条目”的含义。