# 4.7.4 开发中容易造成内存泄露的操作

​    在实际开发中，经常会造成系统的崩溃。如下这些操作我们应该注意这些使用场景。 请大家学完相关内容后，回头过来温习下面的内容。不要求此处掌握相关细节。

　　如下四种情况时最容易造成内存泄露的场景，请大家开发时一定注意：

## 创建大量无用对象

　　比如，我们在需要大量拼接字符串时，==使用了String而不是StringBuilder==。

```java
String str = "";
for (int i = 0; i < 10000; i++) {   
	str += i;     // 相当于产生了10000个String对象
}
```

## 静态集合类的使用

　　像==HashMap、Vector、List==等的使用最容易出现内存泄露，这些==静态变量的生命周期和应用程序一致==，所有的对象Object也不能被释放。

## 各种连接对象(IO流对象、数据库连接对象、网络连接对象)未关闭

　　IO流对象、数据库连接对象、网络连接对象等连接对象属于物理连接，和硬盘或者网络连接，不使用的时候一定要关闭。

## 监听器的使用

　　释放对象时，没有==删除相应的监听器==。

## 要点：

　　1. 程序员==无权调用垃圾回收器==。

　　2. 程序员可以调用==System.gc()，该方法只是通知JVM==，并不是运行垃圾回收器。尽量少用，会申请==启动Full GC==，成本高，影响系统性能。

　　3. =finalize方法==，是Java提供给程序员用来释放对象或资源的方法，但是尽量少用。