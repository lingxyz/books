# 第六章 总结

1. Error与Exception都继承自Throwable类

2. Error类层次描述了Java运行时系统内部错误和资源耗尽错误。

3. Exception类是所有异常类的父类，其子类对应了各种各样可能出现的异常事件。

4. 常见的异常类型

   --ArithmeticException

   --NullPointerException

   --ClassCastException

   --ArrayIndexOutOfBoundsException

   --NumberFormatException

5. 方法重写中声明异常原则：子类声明的异常范围不能超过父类声明的范围

6. 异常处理的三种方式

   --捕获异常:try-catch-finally

   --声明异常:throws

7. 自定义异常类只需从Exception类或者它的子类派生一个子类即可。