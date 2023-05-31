# 8.1.1包装类基本知识

   Java是面向对象的语言，但并不是“纯面向对象”的，因为我们经常用到的基本数据类型就不是对象。但是我们在实际应用中经常需要==将基本数据转化成对象，以便于操作==。比如：将基本数据类型存储到Object[]数组或集合中的操作等等。

   为了解决这个不足，Java在设计类时为每个基本数据类型设计了一个对应的类进行代表，这样八个和基本数据类型对应的类统称为包装类(Wrapper Class)。

   包装类均位于java.lang包，八种包装类和基本数据类型的对应关系如表8-1所示：

![表8-1基本数据类型对应的包装类.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495593568889579.png)

   在这八个类名中，除了Integer和Character类以外，其它六个类的类名和基本数据类型一致，只是类名的第一个字母大写而已。

   在这八个类中，除了Character和Boolean以外，其他的都是“数字型”，“数字型”都是java.lang.Number的子类。Number类是抽象类，因此它的抽象方法，所有子类都需要提供实现。Number类提供了抽象方法：intValue()、longValue()、floatValue()、doubleValue()，意味着所有的“数字型”包装类都可以互相转型。如图8-1和图8-2所示。

![图8-1 Number类的子类.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495593704462305.png)

> 图8-1 Number类的子类

![图8-2 Number类的抽象方法.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495593719360536.png)

> 图8-2 Number类的抽象方法

   下面我们通过一个简单的示例认识一下包装类。

**【示例8-1】初识包装类**

```java
public class WrapperClassTest {
    public static void main(String[] args) {
        Integer i = new Integer(10);
        Integer j = new Integer(50);
    }
}
```

   示例8-1的内存分析如图8-3所示：

![图8-3 示例8-1内存分析图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495593796672168.png)

> 图8-3 示例8-1内存分析图

