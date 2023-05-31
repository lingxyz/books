# 3.2.6 带标签的break和continue

   goto关键字很早就在程序设计语言中出现。尽管goto仍是Java的一个保留字，但并未在Java语言中得到正式使用;Java没有goto语句。然而，在break和continue这两个关键字的身上，我们仍然能看出一些==goto的影子---带标签的break和continue==。

   “标签”是指后面跟一个冒号的标识符，例如：“label:”。对Java来说唯一用到标签的地方是在循环语句之前。而在循环之前设置标签的唯一理由是：我们希望在其中嵌套另一个循环，==由于break和continue关键字通常只中断当前循环，但若随同标签使用，它们就会中断到存在标签的地方==。

   在 “goto有害”论中，最有问题的就是标签，而非goto， 随着标签在一个程序里数量的增多，产生错误的机会也越来越多。 但Java标签不会造成这方面的问题，因为它们的活动场所已被限死，不可通过特别的方式到处传递程序的控制权。由此也引出了一个有趣的问题：通过限制语句的能力，反而能使一项语言特性更加有用。

**【示例3-18】带标签break和continue：控制嵌套循环跳转(打印101-150之间所有的质数)**

```java {3,6}
public class Test18 {
	public static void main(String args[]) {
		outer: for (int i = 101; i < 150; i++) {
			for (int j = 2; j < i / 2; j++) {
				if (i % j == 0){
					continue outer;
				}
			}
			System.out.print(i + "  ");
		}
	}
}
```

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494920764681803.png)

> 图3-25 示例3-18运行效果图