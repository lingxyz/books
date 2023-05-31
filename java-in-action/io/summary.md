# 第十章 总结

1. 按流的方向分类：

  ==输入流==：数据源到程序(InputStream、Reader读进来)。

  ==输出流==：程序到目的地(OutPutStream、Writer写出去)。

2. 按流的处理数据单元分类：

  ==字节流==：按照字节读取数据(InputStream、OutputStream)。

  ==字符流==：按照字符读取数据(Reader、Writer)。

3. 按流的功能分类：

  ==节点流==：可以直接从数据源或目的地读写数据。

  处理流：不直接连接到数据源或目的地，是处理流的流。通过对其他流的处理提高程序的性能。

4. IO的四个基本抽象类：InputStream、OutputStream、Reader、Writer

5. InputStream的实现类：

  FileInputStream

  ByteArrayInutStream

  BufferedInputStream

  DataInputStream

  ObjectInputStream

6. OutputStream的实现类：

  FileOutputStream

  ByteArrayOutputStream

  BufferedOutputStream

  DataOutputStream

  ObjectOutputStream

  PrintStream

7. Reader的实现类

  FileReader

  BufferedReader

  InputStreamReader

8. Writer的实现类

  FileWriter

  BufferedWriter

  OutputStreamWriter

9. 把Java对象转换为字节序列的过程称为对象的==序列化==。

10. 把字节序列恢复为Java对象的过程称为对象的==反序列化==。