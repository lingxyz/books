# 5.9.3 接口的多继承

   ==接口完全支持多继承==。和类的继承类似，子接口扩展某个父接口，将会获得父接口中所定义的一切。

**【示例5-18】接口的多继承**

```java {8}
interface A {
	void testa();
}
interface B {
	void testb();
}
/* 接口可以多继承：接口C继承接口A和B */
interface C extends A, B {
	void testc();
}
public class Test implements C {
	public void testc() {
	}
	public void testa() {
	}
	public void testb() {
	}
}
```