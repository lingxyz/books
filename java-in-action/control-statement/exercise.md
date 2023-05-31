# 第三章 作业

## 一、选择题

1. 分析如下Java代码，编译运行的输出结果是( )。(选择一项)

```java
public static void main(String[ ] args) {
    boolean a = true;
    boolean b = false;
    if (!(a&&b)) {
        System.out.print("!(a&&b)");
    }else if (!(a||b)) {
        System.out.println("!(a||b)");
    }else {
        System.out.println("ab");
    }
}
```

　　A. !(a&&b)

　　B. !(a||b)

　　C. ab

　　D. !(a||b)ab

2. 下列选项中关于变量x的定义，( )可使以下switch语句编译通过。(选择二项)

```java
switch(x) {
    case 100 :
        System.out.println("One hundred");
        break;
    case 200 :              
        System.out.println("Two hundred");                 
        break;
    case 300 :
        System.out.println( "Three hundred");
        break;
    default :
        System.out.println( "default");    
}
```

　　A. double x = 100;

　　B. char x = 100;

　　C. String x = "100";

　　D. int x = 100;

3. 给定如下Java代码，编译运行的结果是( )。(选择一项)

```java

public class Test { 
    public static void main(String[] args) {
        int sum=0;
        for(int i=1;i<10;i++){
            do{
                i++;
                if(i%2!=0)
                    sum+=i;
            }while(i<6);
        }
        System.out.println(sum);
    }
}
```

　　A. 8

　　B. 15

　　C. 24

　　D. 什么也不输出

4. 以下选项中添加到代码中横线处会出现错误的是( )。(选择二项)

```java
public class Test {
    public float aMethod(float a, float b) {
        return 0; 
    }                                       
}
```

　　A.

```java
public float  aMethod(float a, float b, float c) {
        return 0;
}
```

　　B.

```java
public float  aMethod(float c, float d) {
        return 0;
}
```

　　C.

```java
public int  aMethod(int a, int b) {
    return 0;
}
```

　　D.

```java
private int  aMethod(float a, float b) {
    return 0;
}
```

5. 以下关于方法调用的代码的执行结果是( )。(选择一项)

```java
public class Test {
    public static void main(String args[]) {
        int i = 99;
        mb_operate(i);
        System.out.print(i + 100);
    }
    static void mb_operate(int i) {
        i += 100;
    }
}
```

　　A. 99

　　B. 199

　　C. 299

　　D. 99100

## 二、简答题

1. if多分支语句和switch语句的异同之处。

2. break和continue语句的作用。

3. 在多重循环中，如何在内层循环中使用break跳出外层循环。

4. 方法重载的定义、作用和判断依据。

5. 递归的定义和优缺点。

## 三、编码题

1. 从键盘输入某个十进制整数数，转换成对应的二进制整数并输出。

2. 编程求：∑1+∑2+……+∑100。

3. 编写递归算法程序：一列数的规则如下: 1、1、2、3、5、8、13、21、34...... 求数列的第40位数是多少。