# 4.6 构造方法的重载

　　构造方法也是方法，只不过有特殊的作用而已。与普通方法一样，==构造方法也可以重载==。

**【示例4-6】构造方法重载(创建不同用户对象)**

```java
public class User {
	int id; // id
	String name; // 账户名
	String pwd; // 密码
	public User() {

	}
	public User(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	public User(int id, String name, String pwd) {
		this.id = id;
		this.name = name;
		this.pwd = pwd;
	}
	public static void main(String[] args) {
		User u1 = new User();
		User u2 = new User(101, "高小七");
		User u3 = new User(100, "高淇", "123456");		
	}
}
```

**雷区：**

　构造方法中访问class的属性，==默认省去this==；

​    如果==构造方法中形参名与属性名相同时，需要使用this关键字区分属性与形参==。如示例4-6所示：

　　this.id 表示属性id；id表示形参id。