# 第二章 作业

## 一、选择题

1. 以下选项中属于合法的Java标识符的是（   ）。（选择二项）

A.public

B.3num

C.name

D._age

2. 下面的代码段中，执行之后i和j的值是（   ）。（选择一项）

int i=1;  int j;

j=i++;

A1，1

B.1，2

C.2，1

D.2，2

3. 下面的赋值语句中错误的是（   ）。（选择一项）

Afloat f = 11.1;   

B.double d = 5.3E12;

C.double d = 3.14159;

D.double d = 3.14D;

4. 在Java中，下面（   ）语句能正确通过编译。（选择二项）

A.System.out.println(1+1);

B.char i =2+'2';

System.out.println(i);

C.String s="on"+'one';

D.int b=255.0;

5. 以下Java运算符中优先级别最低的两个选项是（   ）。（选择二项）

A赋值运算符=

B.条件运算符 ?=

C.逻辑运算符|

D.算术运算符+

## 二、简答题

1. Java是一种强类型语言，说明Java的数据类型分类。

2. i++和++i的异同之处

3. 运算符||和|的异同之处

4. Java中基本数据类型转换的规则

## 三、编码题

1. 输入圆形半径，求圆形的周长和圆形的面积，并将结果输出。

​    ![image.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20171020/1508466699775268.png)

2. 银行利率表如下表所示，请计算存款10000元，活期1年、活期2年，定期1年，定期2年后的本息合计。

  ![image.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20171020/1508466715983944.png)

结果如下图所示（结果四舍五入，不保留小数位。使用Math.round(double d)实现）。

  ![image.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20171020/1508466722406908.png)

3. 某个公司采用公用电话传递数据，数据是四位的整数，在传递过程中是加密的，加密规则如下：每位数字都加上5,然后用和除以10的余数代替该数字，再将第一位和第四位交换，第二位和第三位交换。结果如图所示。

  ![image.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20171020/1508466734474382.png)