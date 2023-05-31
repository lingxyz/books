# 2.6.3 字符型变量/常量

​    ==字符型在内存中占2个字节==，在Java中==使用单引号来表示字符常量==。例如’A’是一个字符，它与”A”是不同的，”A”表示含有一个字符的字符串。

​    char 类型用来表示==在Unicode编码表中的字符==。Unicode编码被设计用来处理各种语言的文字，它==占2个字节，可允许有65536个字符==。

## 字符型举例

```java
char eChar = 'a'; 
char cChar ='中';
```

​    Unicode具有==从0到65535==之间的编码，他们通常用==从’\u0000’到’\uFFFF’之间的十六进制值==来表示（前缀为u表示Unicode） 

## 字符型的十六进制值表示方法

```java
char c = '\u0061';
```

​    Java 语言中还允许使用转义字符 ‘\’ 来将其后的字符转变为其它的含义。常用的转义字符及其含义和Unicode值如表2-6所示。

## 转义字符

```java
char c2 = '\n';  // 代表换行符
```

> 表 2-6 转义字符

| **转义符** | **含义**        | **Unicode****值** |
| ---------- | ----------------- | ----------------- |
| \b         | 退格（backspace） | \u0008            |
| \n         | 换行              | \u000a            |
| \r         | 回车              | \u000d            |
| \t         | 制表符（tab）     | \u0009            |
| \“         | 双引号            | \u0022            |
| \‘         | 单引号            | \u0027            |
| \\         | 反斜杠            | \u005c            |

## 注意事项

- 以后我们学的String类，其实是==字符序列==(char sequence)。

## 课堂代码

```java
/* 测试字符类型 */
public class TestPrimitiveDataType3 {
    public static void main(String[] args) {
        char  a = 'T';
        char  b = '尚';
        char c = '\u0061';
        System.out.println(c);
        
        // 转义字符
        System.out.println(""+'a'+'\n'+'b'); 
        System.out.println(""+'a'+'\t'+'b'); 
        System.out.println(""+'a'+'\''+'b'); // a'b
        // String就是字符序列
        String  d = "abc";
    }
}
```