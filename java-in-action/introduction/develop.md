# 1.1 计算机语言发展史以及未来方向

- [语雀资料-待整理](https://www.yuque.com/zeroll/read/gzgwds/edit)


## 计算机已经成为人大脑的延伸

　　计算机已经成为我们这个时代的核心设备，每时每刻都需要它。计算机也不再是大家以前印象中的台式机、服务器，已经演变成了我们身边随处可见的物体。比如：手机、平板电脑、笔记本，以及很多人没意识到，但实际上设备内部包含“计算机”的设备。比如：电视机、微波炉、汽车，甚至小孩玩的智能小机器人等。

　　可以这么说，计算机已经成为了人类身体的延伸、大脑的延伸，成为不可或缺的一部分。未来，计算机将真的进入人体、进入大脑，真正成为人体的一部分。比如，在科幻电影《黑客帝国》中，主角被超级针头插在颈部后方，便能使他快速学习，改变大脑神经网络，几秒就成为功夫高手，如图1-1所示。

![图片4.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494834467868650.png "1494834467868650.png")

## 算法是计算机的灵魂，编程语言是塑造计算机灵魂的工具

　　计算机是如何工作的？对于普通人来说，这很神秘。让计算机具备“灵魂”，可以按照人的意志运行，甚至某天按照计算机自己的意志运行（如果这一天实现，科幻电影《终结者》中的场景也会成为人类社会的可能选项），其核心就是“算法”。 “算法就是计算机的灵魂”算法的实现又依赖于“计算机编程语言”。

　　计算机编程语言的发展，是随着计算机本身硬件发展而发展的。硬件速度越快、体积越小、成本越低，应用到人类社会的场景就会越多，那么所需要的算法就会越复杂，也就要求计算机编程语言越高级。

　　最初重达几十吨但一秒只能运算5000次的ENIAC(世界上第一台计算机)，只能做非常小的应用，比如：某些情况的弹道计算。现在任何一个人的手机运算能力都可以秒杀那个年代地球上所有计算机运算能力的总和。

　　计算机编程语言的发展历经了从低级到高级发展。发展的核心思想就是“让人更容易编程”。越容易使用的语言，就有越多人使用；越多人使用，就有越多协作；越多协作，就可以创造越复杂的物体；现代社会，一个软件动辄几十人协作、几百人协作、甚至几千人协作也成为可能，这自然就为开发复杂软件提供了“人力基础”。这是一个人类普遍的社会现象，越容易使用的工具，通过使用数量，通过大量人的协作，彻底改变某个行业甚至人类社会。

## 计算机语言经历了三代：第一代是机器语言，第二代是汇编语言，第三代是高级语言。

### 第一代语言：机器语言(相当于人类的原始阶段)

　　机器语言由数字组成所有指令。当让你使用数字编程，写几百个数字、甚至几千个数字，每天面对的是纯数字，我大胆预测：“程序员群体100%会有精神问题”。

　　机器语言通常由数字串组成（最终被简化成01），对于人类来说，机器语言过于繁琐。使用机器语言，人类无法编出复杂的程序。如下为一段典型的机器码：

1. 0000,0000,000000010000 代表 LOAD A, 16
2. 0000,0001,000000000001 代表 LOAD B, 1
3. 0001,0001,000000010000 代表 STORE B, 16

### 第二代语言：汇编语言（相当于人类的手工业阶段）

　　为了编程的方便，以及解决更加复杂的问题。程序员开始改进机器语言，使用英文缩写的助记符来表示基本的计算机操作。这些助记符构成了汇编语言的基础。如下是一些常见的汇编语言助记符(单词)比如：LOAD、MOVE之类，这样人更容易使用了。识别几百、几千个单词，感觉要比几百几千个数字，美妙多了。汇编语言相当于人类的手工业社会，需要技术极其娴熟的工匠，但是开发效率也非常低。

　　汇编语言虽然能编写高效率的程序，但是学习和使用都不是易事，并且很难调试。另一个复杂的问题，汇编语言以及早期的计算机语言（Basic、Fortran等）没有考虑结构化设计原则，而是使用goto语句来作为程序流程控制的主要方法。这样做的后果是：一大堆混乱的调转语句使得程序几乎不可能被读懂。对于那个时代的程序员，能读懂上个月自己写的代码都成为一种挑战。

　　汇编语言仍然应用于工业电子编程领域、软件的加密解密、计算机病毒分析等。

### 第三代：高级语言（相当于人类的工业阶段）

　　对于简单的任务，汇编语言可以胜任。但是随着计算机的发展，渗透到了工作生活的更多的方面，一些复杂的任务出现了，汇编语言就显得力不从心（应该说是程序员使用汇编语言解决复杂问题出现了瓶颈）。于是，出现了高级语言。像我们熟知的C、C++、Java等等都是高级语言。 高级语言允许程序员使用接近日常英语的指令来编写程序。例如，实现一个简单的任务：A+B=C  , 使用机器语言、汇编语言和高级语言的的实现如下图1-2所示. ``

![图片3.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494834483891550.png "1494834483891550.png")

　　从上面这个简单的加法计算，可以看出越到高级语言，越接近人的思维，人使用起来就越方便。

　　高级语言的出现，尤其是面向对象语言的出现，相当于人类的工业社会，高级语言极其易用，编程门槛和难度大大降低，大量的人员进入软件开发行业，为软件爆发性的增长提供了充足的人力资源。目前以及可预见的将来，计算机语言仍然处于“第三代高级语言”阶段。

## 为什么担心软件开发人才饱和是多余的？

　　很多未进入或刚进入软件行业的朋友，特别担心一个问题“这么多人学，会不会饱和？”。这其实是杞人忧天，越多人编程，才能为软件行业提供巨量的人力资源，才能实现我们以前都不敢想的应用开发。要以发展的眼光看问题，而不是静态的眼光。

　　越多人编程，越多应用需要做，越多应用需要做，更需要越多人编程。这就像一个农夫刚刚进入工业社会，担心服装工厂工人招满了怎么办? 他没有想到工业发展后，钢铁厂也需要工人、汽车厂也需要工人。年轻朋友请记住“软件行业发展永无止境，将会整合人类现有所有行业，也会创造很多新的行业”。

## 未来30年必将是软件人才的世界

　　未来30年的世界必将是软件人才的世界；除了普通软件的应用，大批的人工智能应用也将出现；未来自动驾驶、自动翻译、机器人保姆甚至机器人女友都会进入我们的生活，甚至计算机编程和基因工程结合，长生不老都能实现；有兴趣的童鞋，推荐大家看《未来简史》这本书，把握一下未来的脉搏。

![图片2.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494834494868544.png "1494834494868544.png")![图片1.png](https://www.sxt.cn/360shop/Public/admin/UEditor/20170515/1494834503277552.png "1494834503277552.png")

　　请发挥我们年轻人的想象力，尽情的在IT的世界中挥洒吧！
