# 第八章 总结

1. 每一个基本数据类型对应一个包装类。

2. 包装类的用途：

   作为和基本数据类型对应的引用类型存在，方便涉及到对象的操作。

   包含每种基本数据类型的相关属性如最大值、最小值以及相关的操作方法。

3. JDK1.5后在Java中引入自动装箱和拆箱。

4. 字符串相关类String、StringBuffer与StringBuilder

   String：不可变字符序列。

   StringBuffer：可变字符序列，并且线程安全，但是效率低。

   StringBuilder：可变字符序列，线程不安全，但是效率高(一般用它)。

   日期与时间类Date、DateFormat、SimpleDateFormat、Calendar、GregorianCalendar。

5. Math类的常用方法

   pow(double a,double b)

   max(double a,double b)

   min(double a,double b)

   random()

   long round(double a)

6. 与操作文件相关的File类。

7. 当需要定义一组常量时，使用枚举类型。