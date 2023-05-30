# 10.1.5 Java中IO流类的体系

   Java为我们提供了多种多样的IO流，我们可以根据不同的功能及性能要求挑选合适的IO流，如图10-7所示，为Java中IO流类的体系。

​    注：这里只列出常用的类，详情可以参考JDK API文档。粗体标注为常用!

![图10-7 Java中的IO流体系.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170525/1495702617213156.png)

> 图10-7 Java中的IO流体系

​    从上图发现，很多流都是成对出现的，比如：FileInputStream/FileOutputStream，显然是对文件做输入和输出操作的。我们下面简单做个总结：

1. **InputStream** / **OutputStream**

​     字节流的抽象类。

2. **Reader** / **Writer**

​     字符流的抽象类。

3. **FileInputStream** / **FileOutputStream**

​     节点流：以字节为单位直接操作“文件”。

4. **ByteArrayInputStream** / **ByteArrayOutputStream**

​     节点流：以字节为单位直接操作“字节数组对象”。

5. **ObjectInputStream** / **ObjectOutputStream**

​     处理流：以字节为单位直接操作“对象”。

6. **DataInputStream** / **DataOutputStream**

​     处理流：以字节为单位直接操作“基本数据类型与字符串类型”。

7. **FileReader** / **FileWriter**

​     节点流：以字符为单位直接操作“文本文件”(注意：只能读写文本文件)。

8. **BufferedReader** / **BufferedWriter**

​     处理流：将Reader/Writer对象进行包装，增加缓存功能，提高读写效率。

9. **BufferedInputStream** / **BufferedOutputStream**

​     处理流：将InputStream/OutputStream对象进行包装，增加缓存功能，提高 读写效率。

10. **InputStreamReader** / **OutputStreamWriter**

​     处理流：将字节流对象转化成字符流对象。

11. **PrintStream**

​     处理流：将OutputStream进行包装，可以方便地输出字符，更加灵活。

**老鸟建议**

​    上面的解释，一句话就点中了流的核心作用。大家在后面学习的时候，用心体会。