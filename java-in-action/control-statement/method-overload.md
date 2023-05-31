# 3.5 方法的重载(overload)

    方法的重载是指一个类中可以定义多个==方法名相同，但参数不同==的方法。 调用时，会根据不同的参数自动匹配对应的方法。

**雷区**

    重载的方法，实际是完全不同的方法，只是名称相同而已!

## 构成方法重载的条件

1. 不同的含义：==形参类型、个数、顺序不同==

2. 只有==返回值不同不构成==方法的重载

   如：

```java
int a(String str){} 与 void a(String str){}
```

   不构成方法重载

3. 只有形参的==名称不同不构成==方法的重载

   如：

```java
int a(String str){}与int a(String s){}
```

   不构成方法重载

## 【示例3-21】方法重载

```java
public class Test21 {
    public static void main(String[] args) {
        System.out.println(add(3, 5));    // 8
        System.out.println(add(3, 5, 10));// 18
        System.out.println(add(3.0, 5));  // 8.0
        System.out.println(add(3, 5.0));  // 8.0
        // 我们已经见过的方法的重载
        System.out.println();   // 0个参数
        System.out.println(1);  // 参数是1个int
        System.out.println(3.0);// 参数是1个double
    }
    /** 求和的方法 */
    public static int add(int n1, int n2) {
        int sum = n1 + n2;
        return sum;
    }
    // 方法名相同，参数个数不同，构成重载
    public static int add(int n1, int n2, int n3) {
        int sum = n1 + n2 + n3;
        return sum;
    }
    // 方法名相同，参数类型不同，构成重载
    public static double add(double n1, int n2) {
        double sum = n1 + n2;
        return sum;
    }
    // 方法名相同，参数顺序不同，构成重载
    public static double add(int n1, double n2) {
        double sum = n1 + n2;
        return sum;
    }
    // 编译错误：只有返回值不同，不构成方法的重载
    public static double add(int n1, int n2) {
        double sum = n1 + n2;
        return sum;
    }
    // 编译错误：只有参数名称不同，不构成方法的重载
    public static int add(int n2, int n1) {
        double sum = n1 + n2;         
        return sum;
    }  
}
```