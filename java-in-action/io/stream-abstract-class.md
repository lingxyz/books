# 10.1.6 四大IO抽象类

    InputStream/OutputStream和Reader/writer类是所有IO流类的抽象父类，我们有必要简单了解一下这个四个抽象类的作用。然后，通过它们具体的子类熟悉相关的用法。

## InputStream

    此抽象类是表示字节输入流的所有类的父类。InputSteam是一个抽象类，它不可以实例化。 数据的读取需要由它的子类来实现。根据节点的不同，它派生了不同的节点流子类 。
    
    继承自InputSteam的流都是用于向程序中输入数据，且数据的单位为==字节==(==8 bit==)。
    
   **常用方法：**
    
    int read()：读取一个字节的数据，并将字节的值作为int类型返回(==0-255==之间的一个值)。如果未读出字节则返回-1(返回值为-1表示读取结束)。
    
    void close()：关闭输入流对象，释放相关系统资源。

## OutputStream

    此抽象类是表示字节输出流的所有类的父类。输出流接收输出字节并将这些==字节==发送到某个目的地。
    
   **常用方法：**
    
    void write(int n)：向目的地中写入一个字节。
    
    void close()：关闭输出流对象，释放相关系统资源。

## Reader

    Reader用于读取的字符流抽象类，数据单位为==字符==。
    
    int read(): 读取一个字符的数据，并将字符的值作为int类型返回(0-65535之间的一个值，即Unicode值)。如果未读出字符则返回-1(返回值为-1表示读取结束)。
    
    void close() ： 关闭流对象，释放相关系统资源。

## Writer

    Writer用于写入的字符流抽象类，数据单位为==字符==。
    
    void write(int n)： 向输出流中写入一个字符。
    
    void close() ： 关闭输出流对象，释放相关系统资源。