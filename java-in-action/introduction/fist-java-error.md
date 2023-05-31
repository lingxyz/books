# 1.5.2 第一个程序常见错误

## 常见问题-1：提示“javac不是内部或外部命令……”

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494840217176085.png)

> 图1-22常见错误-1

**出错原因：**Path变量配置错误导致没有找到javac命令

**解决方案：**参考1.4.2 <环境变量Path的配置>，细心重新设置Path，配置完成后需要重新输入cmd打开命令行窗口。

## 常见问题-2：文件夹中可以看到Welcome.java文件，在编译时出现’javac 找不到文件……’

![2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494840205551048.png)

> 图1-23常见错误-2

**出错原因：**可能是操作系统显示设置的问题，隐藏了文件的扩展名。

**解决方案：**打开我的电脑窗口,选择【组织】【文件夹和搜索选项】【查看】，如图1-24所示，去掉“隐藏已知文件夹类型的扩展名”复选框中的对勾，看到文件的实际名称为Welcome.java.txt，将后缀后.txt去掉。

![3.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494840197751869.png)

> 图1-24 常见问题-2解决方案

## 常见问题-3：NoSuchMethodError：main

**出错原因：**找不到main方法，应该是main方法书写有误。

**解决方案：**检查public static void main(String [] args){}是否有误。