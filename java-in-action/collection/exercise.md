# 第九章 作业

## 一、 选择题

1. 以下选项中关于Java集合的说法错误的是( )。(选择二项)

A. List接口和Set接口是Collections接口有两个子接口

B. List接口中存放的元素具有有序，不唯一的特点

C. Set接口中存放的元素具有无序，不唯一的特点

D. Map接口存放的是映射信息，每个元素都是一个键值对

2. 如下Java代码，输出的运行结果是( )。(选择一项)

```java
public class Test {
	public static void main(String[ ] args) {
		List<String> list=new ArrayList<String>();
		list.add("str1");
		list.add(2, "str2");
		String s=list.get(1);
		System.out.println(s);
	}
}
```

A. 运行时出现异常

B. 正确运行，输出str1

C. 正确运行，输出str2

D. 编译时出现异常

3. 在Java中,下列集合类型可以存储无序、不重复的数据的是( )。(选择一项)

A. ArrayList

B. LinkedList

C. TreeSet

D. HashSet

4. 以下代码的执行结果是( )。(选择一项)

```java
Set<String> s=new HashSet<String>();
s.add("abc");
s.add("abc");
s.add("abcd");
s.add("ABC");
System.out.println(s.size());
```

A. 1

B. 2

C. 3

D. 4

5. 给定如下Java代码，编译运行的结果是( )。(选择一项)

```java
public class Test {
	public static void main(String[] args) {
		Map<String, String> map = new HashMap<String, String>();
		String s = "code";
		map.put(s, "1");
		map.put(s, "2");
		System.out.println(map.size());
	}
}
```

A. 编译时发生错误

B. 运行时引发异常

C. 正确运行，输出：1

D. 正确运行，输出：2

## 二、 简答题

1. 集合和数组的比较。

2. 简述List、Set、Collection、Map的区别和联系。

3. ArrayList和LinkedList的区别和联系。它们的底层分别是用什么实现的?

4. HashSet采用了哈希表作为存储结构，请说明哈希表的特点和实现原理。

  提示：结合Object类的hashCode()和equals()说明其原理。

5. 使用泛型有什么好处?

## 三、 编码题

1. 使用List和Map存放多个图书信息，遍历并输出。其中商品属性：编号，名称，单价，出版社;使用商品编号作为Map中的key。

2. 使用HashSet和TreeSet存储多个商品信息，遍历并输出;其中商品属性：编号，名称，单价，出版社;要求向其中添加多个相同的商品，验证集合中元素的唯一性。

  提示：向HashSet中添加自定义类的对象信息，需要重写hashCode和equals( )。

向TreeSet中添加自定义类的对象信息，需要实现Comparable接口，指定比较 规则。

3. 实现List和Map数据的转换。具体要求如下：

  功能1：定义方法public void listToMap( ){ }将List中Student元素封装到Map中

​     1) 使用构造方法Student(int id,String name,int age,String sex )创建多个学生信息并加入List;

​     2) 遍历List，输出每个Student信息;

​     3) 将List中数据放入Map，使用Student的id属性作为key，使用Student对象信息作为value;

​     4) 遍历Map，输出每个Entry的key和value。

  功能2：定义方法public void mapToList( ){ }将Map中Student映射信息封装到List

​     1) 创建实体类StudentEntry，可以存储Map中每个Entry的信息;

​     2) 使用构造方法Student(int id,String name,int age,String sex )创建多个学生信息，并使用Student的id属性作为key，存入Map;

​     3) 创建List对象，每个元素类型是StudentEntry;

​     4) 将Map中每个Entry信息放入List对象。

  功能3：说明Comparable接口的作用，并通过分数来对学生进行排序。