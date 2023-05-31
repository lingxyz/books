# 5.4.2 封装的实现—使用访问控制符

   Java是使用“访问控制符”来控制哪些细节需要封装，哪些细节需要暴露的。 Java中4种“访问控制符”分别为private、default、protected、public，它们说明了面向对象的封装性，所以我们要利用它们尽可能的让访问权限降到最低，从而提高安全性。

   下面详细讲述它们的访问权限问题。其访问权限范围如表5-1所示。

> 表5-1 访问权限修饰符

![图1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170522/1495417749528447.png)

1. private 表示私有，只有自己类能访问

  2. default表示没有修饰符修饰，只有同一个包的类能访问

3. protected表示可以被==同一个包的类以及其他包中的子类==访问

4. public表示可以被该项目的所有包中的所有类访问

   下面做进一步说明Java中4种访问权限修饰符的区别：首先我们创建4个类：Person类、Student类、Animal类和Computer类，分别比较本类、本包、子类、其他包的区别。

## public访问权限修饰符

![图5-8 public访问权限—本类中访问public属性.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495251897514580.png)

> 图5-8 public访问权限—本类中访问public属性

![图5-9 public访问权限—本包中访问public属性.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495251910209664.png)

> 图5-9 public访问权限—本包中访问public属性

![图5-10 public访问权限—不同包中的子类访问public属性.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495251926154354.png)

> 图5-10 public访问权限—不同包中的子类访问public属性

![图5-11 public访问权限—不同包中的非子类访问public属性.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495251937942718.png)

> 图5-11 public访问权限—不同包中的非子类访问public属性

   通过图5-8 ~ 图5-11可以说明，public修饰符的访问权限为：该项目的所有包中的所有类。

## protected访问权限修饰符

将Person类中属性改为protected，其他类不修改。

![图5-12 protected访问权限—修改后的Person类.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495251999316349.png)

> 图5-12 protected访问权限—修改后的Person类

![图5-13 protected访问权限—不同包中的非子类不能访问protected属性.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495252016275089.png)

> 图5-13 protected访问权限—不同包中的非子类不能访问protected属性

   通过图5-12和图5-13可以说明，protected修饰符的访问权限为：同一个包中的类以及其他包中的子类。

## 默认访问权限修饰符

将Person类中属性改为默认的，其他类不修改。

![图5-14 默认访问权限—修改后的Person类.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495252053329405.png)

> 图5-14 默认访问权限—修改后的Person类

   通过图5-14可以说明，默认修饰符的访问权限为：同一个包中的类。

## private访问权限修饰符

将Person类中属性改为private，其他类不修改。

![图5-15 private访问权限—修改后的Person类.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495252087548083.png)

> 图5-15 private访问权限—修改后的Person类

   通过图5-15可以说明，private修饰符的访问权限为：同一个类。