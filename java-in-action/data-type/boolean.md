# 2.6.4 boolean类型变量/常量

​    boolean类型有两个常量值，==true和false，在内存中占一位==（不是一个字节），不可以使用 0 或非 0 的整数替代 true 和 false ，这点和C语言不同。 boolean 类型用来判断逻辑条件，一般用于程序流程控制 。

**【示例2-19】boolean类型**

```java
boolean flag ;
flag = true; // 或者flag=false;
if(flag) {
// true分支
} else {
//  false分支
}
```

**老鸟建议**

  Less is More！！请不要这样写：if ( flag == true )，只有新手才那么写。关键也很容易写错成if(flag=true)，这样就变成赋值flag 为true而不是判断！老鸟的写法是if ( flag )或者if ( !flag)