**第七章 总结**

1. 数组是相同类型数据的有序集合。

2. 数组的四个基本特点：

   -- 其长度是确定的

   -- 其元素必须是相同类型

   -- 可以存储基本数据类型和引用数据类型

   -- 数组变量属于引用类型

3. 一维数组的声明方式

   -- type[] arr_name; (推荐使用这种方式)

   -- type arr_name[]。

4. 数组的初始化：静态初始化、动态初始化和默认初始化。

5. 数组的长度:数组名.length，下标的合法区间[0,数组名.length-1]。

6. 数组拷贝:System类中的static void arraycopy(object src，int srcpos，object dest， int destpos，int length)方法。

7. 数组操作的常用类java.util.Arrays类

   -- 打印数组:Arrays.toString(数组名);

   -- 数组排序:Arrays.sort(数组名);

   -- 二分查找:Arrays.binarySearch(数组名,查找的元素)。

8. 二维数组的声明

   -- type[][]arr_name=new type[length][];

   -- type arr_name[][]=new type[length][length]。