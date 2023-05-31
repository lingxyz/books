# 5.12.3 组合模式

   组合模式是==将对象组合成树形结构==以表示“==部分-整体==”的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。

**【示例5-34】对象的组合**

```java {22-24,28-31}
class Cpu {
	public void run() {
		System.out.println("quickly.........");
	}
}
class MainBoard {
	public void connect() {
		System.out.println("connect...........");
	}
}
class Memory {
	public void store() {
		System.out.println("store........");
	}
}
public class Computer {
	Cpu cpu;
	Memory memory;
	MainBoard mainBoard;

	public void work() {
		cpu.run();
		memory.store();
		mainBoard.connect();
	}
	
	public static void main(String[] args) {
		Computer computer = new Computer();
		computer.cpu = new Cpu();
		computer.mainBoard = new MainBoard();
		computer.memory = new Memory();
		computer.work();
	}
}
```

   执行结果如图5-36所示：

![图5-36 示例5-34运行效果图.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170520/1495269438396479.png)

> 图5-36 示例5-34运行效果图