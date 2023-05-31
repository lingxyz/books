**5.11.1 String基础**

1. String类又称作不可变字符序列。

2. String位于java.lang包中，Java程序默认导入java.lang包下的所有类。

3. Java字符串就是Unicode字符序列，例如字符串“Java”就是4个Unicode字符’J’、’a’、’v’、’a’组成的。

4. Java没有内置的字符串类型，而是在标准Java类库中提供了一个预定义的类String，每个用双引号括起来的字符串都是String类的一个实例。

**【示例5-25】String类的实例**

```
String e = ""  ; // 空字符串
String greeting = " Hello World ";
```

5. Java允许使用符号"+"把两个字符串连接起来。

**【示例5-26】字符串连接**

```
String s1 = "Hello";
String s2 = "World! ";
String s = s1 + s2; //HelloWorld!
```

​    n-符号"+"把两个字符串按给定的顺序连接在一起，并且是完全按照给定的形式。

​    n-当"+"运算符两侧的操作数中只要有一个是字符串(String)类型，系统会自动将另一个操作数转换为字符串然后再进行连接。

**【示例5-27】"+"连接符**

```
int age = 18;
String str = "age is" + age;  //str赋值为"age is 18"
//这种特性通常被用在输出语句中：
System.out.println("age  is" + age);
```

