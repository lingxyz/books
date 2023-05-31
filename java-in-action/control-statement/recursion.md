# 3.6 递归结构

​    递归是一种常见的解决问题的方法，即把问题逐渐简单化。递归的基本思想就是“自己调用自己”，一个使用递归技术的方法将会直接或者间接的调用自己。
​    利用递归可以用简单的程序来解决一些复杂的问题。比如：斐波那契数列的计算、汉诺塔、快排等问题。

## 递归结构包括两个部分

1. 定义递归头。解答：什么时候不调用自身方法。==如果没有头，将陷入死循环==，也就是==递归的结束条件==。

2. 递归体。解答：什么时候需要调用自身方法。

**【示例3-22】递归：计算n!**　　

```java
public class Test22 {
    public static void main(String[] args) {
        long d1 = System.currentTimeMillis();  
        System.out.printf("%d阶乘的结果:%s%n", 10, factorial(10));
        long d2 = System.currentTimeMillis();
        System.out.printf("递归费时：%s%n", d2-d1); // 耗时：32ms
    }
    /** 求阶乘的方法*/
    static long  factorial(int n){
        if(n==1){ // 递归头
            return 1;
        }else{   // 递归体
            return n*factorial(n-1);//n! = n * (n-1)!
        }
    }
}
```

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494921671901397.png)

> 图3-27 示例3-22运行效果图

![2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494921676253834.png)

> 图3-28 递归原理分析图

## 递归的缺陷

​    简单的程序是递归的优点之一。但是==递归调用会占用大量的系统堆栈，内存耗用多，在递归调用层次多时速度要比循环慢的多==，所以在使用递归时要慎重。
​    比如上面的递归耗时558ms。但是用普通循环的话快得多，如示例3-23所示。

**【示例3-23】使用循环求n!**　

```java
public class Test23 {
    public static void main(String[] args) {
        long d3 = System.currentTimeMillis();
        int a = 10;
        int result = 1;
        while (a > 1) {
            result *= a * (a - 1);
            a -= 2;
        }
        long d4 = System.currentTimeMillis();
        System.out.println(result);
        System.out.printf("普通循环费时：%s%n", d4 - d3);
    }
}
```

![3.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494921739716261.png)

> 图3-29 示例3-23运行效果图

## 注意事项

​     ==任何能用递归解决的问题也能使用迭代解决==。当==递归方法可以更加自然地反映问题，并且易于理解和调试==，并且不强调效率问题时，可以采用递归;
​    
​    在==要求高性能的情况下尽量避免使用递归，递归调用既花时间又耗内存==。