# 4.7.3 JVM调优和Full GC

　　在对JVM调优的过程中，很大一部分工作就是对于Full GC的调节。有如下原因可能导致Full GC：

1. ==年老代(Tenured)被写满==

2. ==持久代(Perm)被写满==
3. ==System.gc()被显式调用==（程序建议GC启动，不是调用GC）

4. 上一次GC之后Heap的==各域分配策略动态变化==