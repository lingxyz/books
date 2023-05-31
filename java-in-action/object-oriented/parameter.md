# 4.11 参数传值机制

　　Java中，方法中所有参数都是“==值传递==”，也就是“传递的是值的副本”。 也就是说，我们得到的是“原参数的复印件，而不是原件”。因此，==复印件改变不会影响原件==。

## 基本数据类型参数的传值

　　传递的是==值的副本==。 **副本改变不会影响原件**。

## 引用类型参数的传值

　　传递的是值的副本。但是引用类型指的是“对象的地址”。因此，==副本和原参数都指向了同一个“地址”==，改变“副本指向地址对象的值，也意味着原参数指向对象的值也==发生了改变==”。

**【示例4-12】 多个变量指向同一个对象**

```java
/**
 * 测试参数传值机制
 * @author 高淇
 *
 */
public class User4 {
    int id;        //id
    String name;   //账户名
    String pwd;   //密码
      
    public User4(int id, String name) {
        this.id = id;
        this.name = name;
    }
     
    public   void   testParameterTransfer01(User4  u){
        u.name="高小八";
    }
    
    public   void   testParameterTransfer02(User4  u){
        u  =  new  User4(200,"高三");
    }
     
    public static void main(String[] args) {
        User4   u1  =  new User4(100, "高小七");
        
        u1.testParameterTransfer01(u1); 
        System.out.println(u1.name);

        u1.testParameterTransfer02(u1);
        System.out.println(u1.name);
    }
}
```

　　执行结果如图4-12所示。

![image.png](http://www.sxt.cn/360shop/Public/admin/UEditor/20171028/1509162364830276.png)

> 图4-12 示例4-12的运行结果