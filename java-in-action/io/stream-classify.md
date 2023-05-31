# 10.1.4 Java中流的概念细分

## 按流的方向分类

1. 输入流：数据流向是数据源到程序(以InputStream、Reader结尾的流)。

2. 输出流：数据流向是程序到目的地(以OutPutStream、Writer结尾的流)。

![图10-5 输入输出流示意图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170525/1495702185421118.png)

> 图10-5 输入/输出流示意图

## 按处理的数据单元分类

1. **字节流**：以字节为单位获取数据，命名上以Stream结尾的流一般是字节流，如==FileInputStream、FileOutputStream==。

2. **字符流**：以字符为单位获取数据，命名上以Reader/Writer结尾的流一般是字符流，如==FileReader、FileWriter==。

## 按处理对象不同分类

1. **节点流**：可以直接从数据源或目的地读写数据，如==FileInputStream、FileReader、DataInputStream==等。

2.  **处理流**：不直接连接到数据源或目的地，是”处理流的流”。通过对其他流的处理提高程序的性能，如==BufferedInputStream、BufferedReader==等。处理流也叫包装流。

   节点流处于IO操作的第一线，所有操作必须通过它们进行;处理流可以对节点流进行包装，提高性能或提高程序的灵活性。

![图10-6 节点流处理流示意图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170525/1495702229684292.png)

> 图10-6 节点流/处理流示意图