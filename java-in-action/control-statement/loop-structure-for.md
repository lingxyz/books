# 3.2.3 for循环

## 语法结构　

```java
for (初始表达式; 布尔表达式; 迭代因子) {
      循环体;
}
```

   for循环语句是支持迭代的一种通用结构，是最有效、最灵活的循环结构。for循环在第一次反复之前要进行初始化，即执行初始表达式;随后，对布尔表达式进行判定，若判定结果为true，则执行循环体，否则，终止循环;最后在每一次反复的时候，进行某种形式的“步进”，即执行迭代因子。

   A. 初始化部分设置循环变量的初值

   B. 条件判断部分为任意布尔表达式

   C. 迭代因子控制循环变量的增减

   for循环在执行条件判定后，先执行的循环体部分，再执行步进。

   for循环结构的流程图如图3-18所示。

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494919708427157.png)

> 图3-18 for循环流程图

## 示例

**【示例3-10】for循环**　　

```java
public class Test10 {
    public static void main(String args[]) {
        int sum = 0;
        //1.求1-100之间的累加和
        for (int i = 0; i <= 100; i++) {
            sum += i;
        }
        System.out.println("Sum= " + sum);
        //2.循环输出9-1之间的数
        for(int i=9;i>0;i--){
            System.out.print(i+"、");
        }
        System.out.println();
        //3.输出90-1之间能被3整除的数
        for(int i=90;i>0;i-=3){
            System.out.print(i+"、");
        }
        System.out.println();
    }
}
```



![2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494919882344126.png)

> 图3-19 示例3-10运行效果图

   Java里能用到逗号运算符的地方屈指可数，其中一处就是for循环的控制表达式。在控制表达式的初始化和步进控制部分，我们可以使用一系列由逗号分隔的表达式，而且那些表达式均会独立执行。

**【示例3-11】逗号运算符**　

```java
public class Test11 {
    public static void main(String[] args) { 
        for(int i = 1, j = i + 10; i < 5; i++, j = i * 2) {
            System.out.println("i= " + i + " j= " + j); 
        } 
    }
}
```



![3.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494919920133938.png)

> 图3-20 示例3-11运行效果图

1. 无论在初始化还是在步进部分，语句都是顺序执行的。

2. 尽管初始化部分可设置任意数量的定义，但都属于同一类型。

3. 约定:只在for语句的控制表达式中写入与循环变量初始化，条件判断和迭代因子相关的表达式。

   初始化部分、条件判断部分和迭代因子可以为空语句，但必须以“;”分开，如示例3-12所示。

**【示例3-12】无限循环**

```java
public class Test12 {
    public static void main(String[] args) { 
        for ( ; ; ) {    // 无限循环: 相当于 while(true)
            System.out.println("北京尚学堂");
        }
    }
}
```

   编译器将while(true)与for(;;)看作同一回事，都指的是无限循环。

   在for语句的初始化部分声明的变量，其作用域为整个for循环体，不能在循环外部使用该变量。如示例3-13所示。

**【示例3-13】初始化变量的作用域**

![4.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494920002726434.png)