# 2.6.2 浮点型变量/常量

​    带小数的数据在Java中称为浮点型。浮点型可分为==float类型和double类型==。

> 表 2-5浮点型数据类型

| **类型** | **占用存储空间** | **表数范围**        |
| -------- | ---------------- | -------------------- |
| float    | 4字节            | -3.403E38~3.403E38   |
| double   | 8字节            | -1.798E308~1.798E308 |

​    float类型又被称作单精度类型，尾数可以精确到==7位==有效数字，在很多情况下，float类型的精度很难满足需求。而double表示这种类型的数值精度约是==float类型的两倍==，又被称作双精度类型，绝大部分应用程序都采用double类型。==浮点型常量默认类型也是double==。

**Java浮点类型常量有两种表示形式**

- 十进制数形式，例如: 3.14    314.0    0.314 
- 科学记数法形式，如: 314e2    314E2    314E-2 

**【示例2-11】使用科学记数法给浮点型变量赋值**

```java
double f = 314e2;   // 314*10^2-->31400.0
double f2 = 314e-2; // 314*10^(-2)-->3.14
```

​    float类型的数值有一个后缀F或者f ，没有后缀F/f的浮点数值默认为double类型。也可以在浮点数值后添加后缀D或者d， 以明确其为double类型。

**【示例2-12】float类型赋值时需要添加后缀F/f**

```java
float  f = 3.14F;
double d1  = 3.14;
double d2 = 3.14D;
```

**老鸟建议**

- 浮点类型float，double的数据不适合在不容许舍入误差的金融计算领域。如果需要进行不产生舍入误差的==精确数字计算，需要使用BigDecimal类==。

**【示例2-13】浮点数的比较一** 

```java
float f = 0.1f;
double d = 1.0/10;
System.out.println(f==d); // 结果为false
```

**【示例2-14】浮点数的比较二**

```java
float d1 = 423432423f;
float d2 = d1+1;
if(d1 == d2){
   System.out.println("d1==d2"); // 输出结果为d1==d2
}else{
    System.out.println("d1!=d2");
}
```

​    运行以上两个示例，发现示例2-13的结果是“false”，而示例2-14的输出结果是“d1==d2”。这是因为==由于字长有限，浮点数能够精确表示的数是有限的，因而也是离散的。 浮点数一般都存在舍入误差==，很多数字无法精确表示(例如0.1)，其结果只能是接近， 但不等于。==二进制浮点数不能精确的表示0.1、0.01、0.001这样10的负次幂==。并不是所有的小数都能可以精确的用二进制浮点数表示。

​    java.math包下面的两个有用的类：==BigInteger和BigDecimal，这两个类可以处理任意长度的数值==。BigInteger实现了任意精度的整数运算。BigDecimal实现了任意精度的浮点运算。

**菜鸟雷区**

1. 不要使用浮点数进行比较！很多新人甚至很多理论不扎实的有工作经验的程序员也会犯这个错误！需要比较请使用BigDecimal类

**【示例2-15】使用BigDecimal进行浮点数的比较**

```java
import java.math.BigDecimal;
public class Main {
    public static void main(String[] args) {
        BigDecimal bd = BigDecimal.valueOf(1.0);
        bd = bd.subtract(BigDecimal.valueOf(0.1));
        bd = bd.subtract(BigDecimal.valueOf(0.1));
        bd = bd.subtract(BigDecimal.valueOf(0.1));
        bd = bd.subtract(BigDecimal.valueOf(0.1));
        bd = bd.subtract(BigDecimal.valueOf(0.1));
        System.out.println(bd); // 0.5
        System.out.println(1.0 - 0.1 - 0.1 - 0.1 - 0.1 - 0.1); // 0.5000000000000001
    }
}
```

**浮点数使用总结**

- 默认是double类型。
- 浮点数存在舍入误差，数字不能精确表示。如果需要进行不产生舍入误差的精确数字计算，需要使用**BigDecimal类。**
- 避免比较中使用浮点数，需要比较请使用BigDecimal类。