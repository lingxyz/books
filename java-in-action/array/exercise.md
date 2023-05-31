**第七章 作业**

**一、 选择题**

1.在Java中，以下程序段能正确为数组赋值的是( )。(选择二项)

A.

```
int a[]={1,2,3,4};
```

B.

```
int b[4]={1,2,3,4};
```

C.

```
int c[];
c=new int[] {1,2,3,4};
```

D.

```
int d[];d=new int[]{1,2,3,4};
```

2.已知表达式int [] m={0,1,2,3,4,5,6};下面( )表达式的值与数组最大下标数相等。(选择一项)

A.

```
m.length()
```

B.

```
m.length-1
```

C.

```
m.length()+1
```

D.

```
m.length+1
```

3.在Java中，以下定义数组的语句正确的是( )。(选择二项)

A.

```
int  t[10]=new int[ ];
```

B.

```
char [ ]a=new char[5]; 
char []a={‘a’,’b’};
```

C.

```
String [ ] s=new String [10];
```

D.

```
double[ ] d [ ]=new double [4][ ]; 
double[][] d;
double d[][];
```

4.分析下面的Java源程序，编译后的运行结果是( )。(选择一项)

```
import java.util.*;
public class Test {
	public static void main(String[ ] args) {
		int [ ] numbers=new int[ ]{1,2,3};
		System.out.println(Arrays.binarySearch(numbers, 2));
	}
}
```

A.输出：0

B.输出：1

C.输出：2

D.输出：3

5.以下选项中能够正确创建一个数组的是( )。(选择二项)

A.

```
float []f[] = new float[6][6];
```

B.

```
float f[][] = new float[][];
```

C.

```
float [6][]f = new float[6][6];
```

D.

```
float [][]f = new float[6][];
```

**二、 简答题**

1. 数组的特点。

2. 数组的优缺点

3. 冒泡排序的算法。

4. 数组的三种初始化方式是什么?

**三、 编码题**

1. 数组查找操作：定义一个长度为10 的一维字符串数组，在每一个元素存放一个单词;然后运行时从命令行输入一个单词，程序判断数组是否包含有这个单词，包含这个单词就打印出“Yes”，不包含就打印出“No”。

2. 获取数组最大值和最小值操作：利用Java的Math类的random()方法，编写函数得到0到n之间的随机数，n是参数。并找出产生50个这样的随机数中最大的、最小的数，并统计其中>=60的有多少个。

提示：使用 int num=(int)(n*Math.random());获取随机数。

3. 数组逆序操作：定义长度为10的数组，将数组元素对调，并输出对调前后的结果。

  思路：把0索引和arr.length-1的元素交换，把1索引和arr.length-2的元素交换…..

  只要交换到arr.length/2的时候即可。