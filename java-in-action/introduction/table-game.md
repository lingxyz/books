# 1.8 30分钟完成桌球小游戏项目

   我们秉承“快速入门、快速实战”的理念，开发这套系列教材；就是希望朋友们在学习过程中，尽快进入实战环节，尽快介入项目，让大家更有兴趣、更有成就感，从而带来更大的学习动力。

如下的小项目，对于第一次接触编程的朋友从理解上会有难度。但是，我们这个项目不在于让大家理解代码本身，而是让大家“重在体验敲代码的感觉”。

## 项目需求

**【项目】桌球游戏小项目**

**练习目标：**

1. 找到敲代码的感觉

2. 收获敲代码的兴趣

3. 作出效果，找到自信

4. 从一开始就学会调试错误

5. 掌握Java代码基本结构

**项目需求：**

   桌球在球桌中按照一定线路和角度移动，遇到边框会自动弹回。

![2017-6-7 10-36-30.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170607/1496802487319356.png)

> 图1-39 桌球游戏的运行结果

**要求：**

   即使看不太懂，也要照着敲如下游戏代码，至少5遍。要求所有字符和源文件一致。如果报异常，请细心看所在行和老师代码有何区别。现阶段不需要理解代码的语法功能，只要按照代码结构输入代码，能够经过调试实现代码的正常运行即可。

项目中用到的两个小图片，如下：

![ball.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170607/1496797408773563.png)

小球的图片如上，台球桌的图片如下：

![desk.jpg](https://www.sxt.cn/360shop/Public/admin/UEditor/20170607/1496802557924525.jpg)

开发步骤：

## 版本1

  目标：创建项目、创建窗口。

  创建项目并拷贝图片： 

​    在项目名MyPro01上单击右键，在菜单中依次选择new---Folder，创建一个名称是images的文件夹，并复制两 张图片到该目录下。并在src下创建类BallGame.java。eclipse下项目的最终结构如图1-40所示。

![QQ图片20170516170142.png](http://www.sxt.cn/360shop/Public/admin/UEditor/20170516/1494925441201939.png)

> 图1-40 桌球游戏的项目结构

 代码：

```java
import  java.awt.*;
import javax.swing.*;
  
public class BallGame extends JFrame {
     // 窗口加载
     void launchFrame(){
         setSize(300,300);
         setLocation(400,400);
         setVisible(true);
     }
      
     // main方法是程序执行的入口
     public static void main(String[] args){
         System.out.println(" 我是尚学堂高淇，这个游戏项目让大家体验编程的快感，寓教于乐！");
         BallGame game = new BallGame();
         game.launchFrame();
     }
      
}
```

运行效果：

![1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170607/1496805215766450.png)



## 版本2

  目标：加载两个图片

  代码：

```java
import  java.awt.*;
import javax.swing.*;
 
public class BallGame extends JFrame {
     
    Image ball = Toolkit.getDefaultToolkit().getImage("images/ball.png");
    Image desk = Toolkit.getDefaultToolkit().getImage("images/desk.jpg");
     
    double  x=100; // 小球的横坐标
    double  y=100; // 小球的纵坐标
    //画窗口的方法
    public void paint(Graphics  g){
        System.out.println("窗口被画了一次！");
        g.drawImage(desk, 0, 0, null);
        g.drawImage(ball, (int)x, (int)y, null);
    }
     
    // 窗口加载
    void launchFrame(){
        setSize(856,500);
        setLocation(50,50);
        setVisible(true);
    }
     
    // main方法是程序执行的入口
    public static void main(String[] args){
        System.out.println(" 我是尚学堂高淇，这个游戏项目让大家体验编程的快感，寓教于乐！");
        BallGame game = new BallGame();
        game.launchFrame();
    }
     
}
```

运行效果：  ![2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170607/1496805504230973.png)

注意：

  由于懒加载问题，有可能出现第一次加载图片无效的情况；请最小化窗口再打开即可（看视频上的说明）。大家完成了下一个动画的版本，就完全不存在这个问题了。

## 版本3

  目标：实现动画，小球沿着水平方向移动并做边界检测

  代码：

```java
import  java.awt.*;
import javax.swing.*;
 
public class BallGame extends JFrame {
     
    Image ball = Toolkit.getDefaultToolkit().getImage("images/ball.png");
    Image desk = Toolkit.getDefaultToolkit().getImage("images/desk.jpg");
     
    double  x=100; // 小球的横坐标
    double  y=100; // 小球的纵坐标
    boolean  right = true;   // 方向
    // 画窗口的方法
    public void paint(Graphics  g){
        System.out.println("窗口被画了一次！");
        g.drawImage(desk, 0, 0, null);
        g.drawImage(ball, (int)x, (int)y, null);
        if(right){
            x = x +10;            
        }else{
            x = x - 10;
        }
         
        if(x>856-40-30){ // 856是窗口宽度，40是桌子边框的宽度，30是小球的直径
            right = false;
        }
         
        if(x<40){       // 40是桌子边框的宽度
            right = true;
        }
 
         
    }
     
    // 窗口加载
    void launchFrame(){
        setSize(856,500);
        setLocation(50,50);
        setVisible(true);
         
        // 重画窗口,每秒画25次
        while(true){
            repaint(); 
            try{
                Thread.sleep(40); // 40ms,   1秒=1000毫秒.  大约一秒画25次窗口
            }catch(Exception e){
                e.printStackTrace();
            }
             
        }
         
    }
     
    // main方法是程序执行的入口
    public static void main(String[] args){
        System.out.println(" 我是尚学堂高淇，这个游戏项目让大家体验编程的快感，寓教于乐！");
        BallGame game = new BallGame();
        game.launchFrame();
    }
     
}
```

## 版本4

  目标：实现小球沿着任意角度飞行（会用到初中学习的三角函数，如果忘记了就想想你们的体育老师吧）

  代码（为了保存版本3的代码，我们新创建了一个类BallGame2）：

```java
import  java.awt.*;
import javax.swing.*;
 
public class BallGame2 extends JFrame {
     
    Image ball = Toolkit.getDefaultToolkit().getImage("images/ball.png");
    Image desk = Toolkit.getDefaultToolkit().getImage("images/desk.jpg");
     
    double  x=100; // 小球的横坐标
    double  y=100; // 小球的纵坐标
     
    double degree = 3.14/3; // 弧度。此处就是：60度
     
    // 画窗口的方法
    public void paint(Graphics  g){
        System.out.println("窗口被画了一次！");
        g.drawImage(desk, 0, 0, null);
        g.drawImage(ball,(int)x, (int)y, null);
         
         
        x  = x+ 10*Math.cos(degree);
        y  = y +10*Math.sin(degree); 
         
        // 碰到上下边界
        if(y>500-40-30||y<40+40){ // 500是窗口高度；40是桌子边框，30是球直径；最后一个40是标题栏的高度
            degree = -degree;
        }
         
        // 碰到左右边界
        if(x<40||x>856-40-30){
            degree = 3.14 - degree;
        }
         
    }
     
    // 窗口加载
    void launchFrame(){
        setSize(856,500);
        setLocation(50,50);
        setVisible(true);
         
        // 重画窗口,每秒画25次
        while(true){
            repaint(); 
            try{
                Thread.sleep(40); // 40ms,   1秒=1000毫秒.  大约一秒画25次窗口
            }catch(Exception e){
                e.printStackTrace();
            }
             
        }
         
    }
     
    // main方法是程序执行的入口
    public static void main(String[] args){
        System.out.println(" 我是尚学堂高淇，这个游戏项目让大家体验编程的快感，寓教于乐！");
        BallGame2 game = new BallGame2();
        game.launchFrame();
    }
     
}
```

最终项目源码：

![img](http://www.sxt.cn/public//admin/UEditor/dialogs/attachment/fileTypeImages/icon_rar.gif)[MyPro01.zip](https://www.sxt.cn/ueditor/php/upload/file/20170607/1496806267289442.zip)