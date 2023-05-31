# 第六章 作业

## 一、选择题

1. 以下关于异常的代码的执行结果是( )。(选择一项)

```java
public class Test {
    public static void main(String args[]) {
        try {
            System.out.print("try");           
            return;
        } catch(Exception e){
            System.out.print("catch");
        }finally {
            System.out.print("finally");
        }
    }
}
```

A.try catch finally

B.catch finally

C.try finally

D.try

2. 在异常处理中，如释放资源、关闭文件等由( )来完成。(选择一项)

Atry子句

B.catch子句

C.finally子句

D.throw子句

3. 阅读如下Java代码,其中错误的行是( )。(选择二项)

```java
public class Student {
    private String stuId;
    public void setStuId(String stuId) throw Exception { // 1
        if (stuId.length() != 4) { // 2
            throws new Exception("学号必须为4位!"); // 3
        } else {
            this.stuId = stuId;     //4
        }
    }
}
```

A.1

B.2

C.3

D.全部正确

4. 下面选项中属于运行时异常的是( )。(选择二项)

A.Exception和SexException

B.NullPointerException和InputMismatchException

C.ArithmeticException和ArrayIndexOutOfBoundsException

D.ClassNotFoundException和ClassCastException

5. 阅读如下Java代码，在控制台输入"-1",执行结果是()。(选择一项)

```java
public class Demo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("请输入数字：");
        try {
            int num = input.nextInt();
            if (num < 1 || num > 4) {
                throw new Exception("必须在1-4之间！");
            }
        } catch (InputMismatchException e) {
            System.out.println("InputMismatchException");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
```

A.输出：InputMismatchException

B.输出：必须在1-4之间!

C.什么也没输出

D.编译错误

## 二、简答题

1. Error和Exception的区别。
2. Checked异常和Runtime异常的区别。
3. Java异常处理中，关键字try、catch、finally、throw、throws分别代表什么含义?
4. throws和throw的区别。

## 三、编码题

1. 编写程序接收用户输入分数信息，如果分数在0—100之间，输出成绩。如果成绩不在该范围内，抛出异常信息，提示分数必须在0—100之间。

要求：使用自定义异常实现。

2. 写一个方法void isTriangle(int a,int b,int c)，判断三个参数是否能构成一个三角形， 如果不能则抛出异常IllegalArgumentException，显示异常信息 “a,b,c不能构成三角形”，如果可以构成则显示三角形三个边长，在主方法中得到命令行输入的三个整数， 调用此方法，并捕获异常。
3. 编写一个计算N个学生分数平均分的程序。程序应该提示用户输入N的值，如何必须输入所有N个学生分数。如果用户输入的分数是一个负数，则应该抛出一个异常并捕获，提示“分数必须是正数或者0”。并提示用户再次输入该分数。