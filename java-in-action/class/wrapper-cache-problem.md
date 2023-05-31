# 8.1.4包装类的缓存问题

   **整型、char类型**所对应的包装类，==在自动装箱时，对于-128~127之间的值会进行缓存处理，其目的是提高效率==。

   缓存处理的原理为：

1. 如果数据在-128~127这个区间，那么==在类加载时就已经（JVM编译阶段）为该区间的每个数值创建了对象==，并将这==256个对象==存放到一个名为==cache的数组==中。
2. 每当自动装箱过程发生时(或者手动调用valueOf()时)，就会先判断数据是否在该区间，如果在则直接获取==数组中对应的包装类对象的引用==，如果不在该区间，则会通过==new调用包装类的构造方法来创建对象==。

   下面我们以Integer类为例，看一看Java为我们提供的源码，加深对缓存技术的理解，如示例8-7所示。

**【示例8-7】Integer类相关源码如下：**

```java
public static Integer valueOf(int i) {
    if (i >= IntegerCache.low && i <= IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
}
```

   这段代码中我们需要解释下面几个问题：

1. IntegerCache类为Integer类的一个静态内部类，仅供Integer类使用。

2. 一般情况下 IntegerCache.low为-128，IntegerCache.high为127，IntegerCache.cache为内部类的一个静态属性，如示例8-8所示。

**【示例8-8】IntegerCache类相关源码如下：**

```java
private static class IntegerCache {
    static final int low = -128;
    static final int high;
    static final Integer cache[];
    static {
        // high value may be configured by property
        int h = 127;
        String integerCacheHighPropValue =
                sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
        if (integerCacheHighPropValue != null) {
            try {
                int i = parseInt(integerCacheHighPropValue);
                i = Math.max(i, 127);
                // Maximum array size is Integer.MAX_VALUE
                h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
            } catch( NumberFormatException nfe) {
                // If the property cannot be parsed into an int, ignore it.
            }
        }
        high = h;
        cache = new Integer[(high - low) + 1];
        int j = low;
        for(int k = 0; k < cache.length; k++)
            cache[k] = new Integer(j++);
        // range [-128, 127] must be interned (JLS7 5.1.7)
        assert IntegerCache.high >= 127;
    }
    private IntegerCache() {}
}
```

   由上面的源码我们可以看到，==静态代码块的目的就是初始化数组cache的，这个过程会在类加载时完成==。

   下面我们做一下代码测试，如示例8-9所示。

**【示例8-9】测试代码**

```java {5,9,10}
public class Test3 {
	public static void main(String[] args) {
		Integer in1 = -128;
		Integer in2 = -128;
		System.out.println(in1 == in2); // true 因为123在缓存范围内
		System.out.println(in1.equals(in2)); // true
		Integer in3 = 1234;
		Integer in4 = 1234;
		System.out.println(in3 == in4); // false 因为1234不在缓存范围内
		System.out.println(in3.equals(in4)); // true
	}
}
```

   执行结果如图8-6所示：

![图8-6 示例8-9运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495596329392436.png)

> 图8-6 示例8-9运行效果图

   示例8-9的内存分析如图8-7所示：

![图8-7 示例8-9的内存分析图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170524/1495596432165735.png)

> 图8-7 示例8-9的内存分析图

**注意**

1. JDK1.5以后，增加了自动装箱与拆箱功能，如：

```java
Integer i = 100;  int j = new Integer(100);
```

  2. 自动装箱调用的是==valueOf==()方法，而不是new Integer()方法。

3. 自动拆箱调用的==xxxValue==()方法。

4. 包装类在自动装箱时为了提高效率，==对于-128~127之间的值会进行缓存处理==。==超过范围后，对象之间不能再使用\=\=进行数值的比较，而是使用equals方法==。

