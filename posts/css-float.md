---
title: '如何理解 CSS 中的 float 属性'
date: '2015-03-09 13:34:45'
cover: 'assets/blog/css-float/cover.jpg'
tag: [ 'CSS' ]
excerpt: '从浅层面简单介绍 CSS 的 float 属性'
---

在最初的一段时间里，要说前端给人最直接的感受，心想要莫过于所见即所得了。我们前端所做的一切都那么直接裸露的呈现在我们面前。而几乎所有的呈现均需要`CSS`加以修饰，更需要`CSS`给予其布局。在布局当中，最让人捉摸不透的当属`float`属性。有人当说，`float`难以控制，我们就不用它，换一种方式呗。但是无论对于初学者，还是老手，`float`有其方便性和不可替代性。再者，换个角度来说，我们应该面对问题，而不是逃避问题。尤其是对于我们这种初学者，深入搞懂一个问题比学更多浅显的问题更有意义。所以，本文尝试解释一下什么是`float`以及如何解决`float`带来的问题。

## 一、两种观念

### 1.「望文生义」

我们在认识新事物时，往往是从该事物的名称获得对于它的第一感受。私以为第一认识准确了，这对于后面继续理解会有有极大的帮助。那我们首先从词典来看看什么叫做`float`。

词典结果：

> float [英][fləʊt] [美][floʊt]
>
> vt.& vi.（使）浮动; **（使）漂浮**; **自由浮动**;
>
> vi.**游荡**;
>
> vt.提出，提请考虑; （股票）上市;
>
> n.彩车; 漂浮物; 浮板; 浮有冰淇淋的饮料;

也许这时，有人该说我们是来说`float`属性的，你拿个词典结果出来，是让我们备战四六级吗？或者，有种我裤子都脱了，你让我看这个的愤怒。先别急，请问，你听说过`RegExp`吗？也许你该说，不就是正则表达式吗，地球人都知道！那好，这时，如果你让一个从没接触过这方面内容的人阐述一下，他觉的正则表达式应该是什么，以及干什么用的。我想，你问的极大多数人会完全说不出与实际正则相关的内容。因为这个名字太晦涩了有没有？或者请你回想一下，你第一次听到这个名字的时候，自己对于正则的第一认识，也许会有所感受。但反过来，请问`RegExp`的全称是什么？对，学过正则的你肯定知道是`Regular Expression`，那请你自己翻译一下这个短语什么意思。在没有了解正则，第一次见到这个的时候，你也许会说**「规则表达式」**。这就对了，不要以为和现在的惯用叫法不同。直接翻译过来的才更直接的说明`RegExp`是干嘛的，正则就是表示一种规则的表达式。这就是正则的本质。带着这种意识去学习正则，我想也许会轻松一些。

以上扯了这么多，就想说明一点——要**先从最简单直接的一面建立对于新事物的正确认知**。哦，对了，说`float`之前，请根据词典结果中加粗的部分感受一下`float`吧。

### 2.初衷

下面从另外一个方面说明认识事物的又一重要方法——**初衷**。

请问，为什么会有`float`属性？他是用来干什么的？还记得刚开始提到的一句话吗——`float`有其方便性和不可替代性。对，说的是不可替代性，那什么情况非得用`float`不可呢？答案是文字环绕效果，就像[张鑫旭](http://www.zhangxinxu.com/wordpress/2010/01/css-float%E6%B5%AE%E5%8A%A8%E7%9A%84%E6%B7%B1%E5%85%A5%E7%A0%94%E7%A9%B6%E3%80%81%E8%AF%A6%E8%A7%A3%E5%8F%8A%E6%8B%93%E5%B1%95%E4%B8%80/ "张鑫旭-博客")指出的那样，类似于word当中的图文混排效果。是的，`float`仅仅是为了让文字能够环绕着图片排列，严谨点说：**一个图像浮动时，允许其他内容（如文本）围绕该图像**，形象表示如下图。

![word](assets/blog/css-float/word.png)
![Example](assets/blog/css-float/code.png)

到这，我们还没有正式的认识`float`属性，只是在帮大家初步了解`float`，在脑海里有一个基本的概念。再重复一遍，还请牢记一个事实：**一个元素浮动时，其他内容会环绕该元素。**

## 二、初识`float`

下面正式来看`float`属性

> **float**
>
> 值：  left | right | none | inherit
>
> 应用于：所有元素
>
> 继承性：无
>
> 计算值：根据指定确定

浮动的普通应用，大家可以尝试看下实际效果，这里需要强调，并且值得注意的地方已经有前人帮我们总结，不过原文是英文的，为了方便大家阅读，我已尝试翻译了一下。

阅读中文请点：[【翻译】CSS float理论：你应该知道的那些事](http://chungguo.me/2015/03/09/CSS_float_theory/ "CSS Float 理论")

阅读原文请点：[CSS Float Theory: Things You Should Know](http://www.smashingmagazine.com/2007/05/01/css-float-theory-things-you-should-know/ "css-float-theory-things-you-should-know")

这里再次把其中重要的地方并且平时不会太注意的地方拿出来：

> You should always set a width on floated items (except if applied directly to an image – which has implicit width). If no width is set, the results can be unpredictable.
>
> 你应该始终为一个浮动元素指定宽度（除非被直接应用一个图片上，因为图片有隐式的宽度） ，如果不设置宽度，那么结果是不可预知的。
>
> 浮动元素的外边距不会合并。
>
> 无论浮动元素在浮动之前本身是什么，一旦设置浮动，该元素就会生成一个块级框。
>
>《CSS权威指南》指出的浮动元素摆放的九条规则 （P292-P297）
>
> 浮动元素会延伸，从而包含其所有后代浮动元素。
>
> 行内框与一个元素重叠时，其边框、背景和内容都在该浮动元素「之上」显示。
>
> 块框与一个浮动元素重叠时，其边框，背景在该浮动元素「之下」显示，而内容在浮动元素「之上」显示。

## 三、再识`float`

我非常赞同的一个观点是：
> In order to really understand float theory you have to understand what a line box means in CSS. Unfortunately, that in turn requires you to understand what is meant by an inline box. […] An inline box is generated by those elements that aren’t block-level, such as EM. […] A line box is an imaginary rectangle that contains all the inline boxes that make up a line in the containing block-level element. It is (at least) as tall as its tallest line box.
>
> 为了真正的理解浮动原理，你必须理解`CSS`中什么是行框。不幸的是，反过来，你必须理解什么是内联元素[…]。一个内联元素是由那些不是块级元素的元素生成的，比如em，[…]一个行框是一个包含所有的组成一行包含块级元素的内联盒子组成的虚构的矩形，它至少和他最高的行内框一样高。

这也是本文重点想说的，因为理解了什么是行框`（line box）`，是什么行内框`（inline box）`才能更好的理解因为`float`造成的比如高度坍塌问题。请看下图
![linebox.jpg](assets/blog/css-float/line-box.jpeg)

框模型，或者盒子模型是`CSS`的经典模型。`CSS`假定每一个元素都会生成一个或多个矩形框，成为元素框，这是我们所熟知的。一个元素框的中心有一个内容区，周围有可选的内边距，边框或外边距。**CSS布局实际上就是盒子盒子之间的摆放问题，也就是排版问题。在布局中，可以讲所有的元素（包括文字）全部看做是一个个矩形盒子，然后，将他们依次排列起来，这就是布局**。

再看上图，我们把`ABC`看做是一个单词，`DEFGH`看做是另外一个单词，他们都由字母组成。其中，每一个字母都是一个`em`框，或者称之为字符框。两个单词之间由空格隔开，那么，`ABC`、空格、`DEFGH`这三部分就是三个匿名文本，他们共同构成内容区，如灰色背景所示。上下半间距加在一起叫做行间距，其是`font-size`和`line-height`值之差，将行间距均等的分布在内容区上下形成半间距。如图可见，内容区加上行间距就构成了行内框。将在该行出现的所有行内框的最高点和最低点都包含进来的框就是行框了。其中，替换元素和非替换元素会分别形成行内框，而行框把他们之中最高点作为行框的上边界，最低点作为行框的下边界。

![lineBox](assets/blog/css-float/line-height.png)

图1每一个细线框就是一个行内框，图二每一个细线框就是一个行框

到这里我们再回头想想前面[CSS Float理论：你应该知道的那些事](http://varmoon.cn/2015/03/09/CSS_float_theory/ "CSS  Float理论")中提到的这么多，我们应该记得打事情。当我们给一个元素添加`float`属性时，他会从正常流中删除，其余内容会无视该`float`元素，而该`float`元素也会变成块级元素，向左或向右飘到其包含块的边界，如果还有其他的`float`元素，他们会一个接着一个的飘起来，按照《CSS权威指南》指出的浮动元素摆放的九条规则排列。同时，现在你也可以回头看看词典对于`float`的解释中加粗的词语。

你可以在[这里](https://jsfiddle.net/likuochung/ktg5zwn4/ "Exice")尝试更改`outer`的`width`属性

那好，现在我们就可以简单的两句话解释清楚为什么当元素浮动之后，父级会出现高度坍塌的问题了。还记得，行框的高度怎么决定的吗？如果行框内除了浮动元素没有其他元素的时候，当元素浮动之后，他会从普通流中删除，此时，父元素中什么都没有了，高度自然就消失了。但如果，还有其他元素，行框的高度就是现在剩余的所有行内框最高点到行内框最低点的高度。

## 四、再见`float`

现在我们清楚的认识了浮动，就可以其造成的问题开始说拜拜的了。不过，在挥手之前还有最后一个问题没有解决——闭合浮动。经典的闭合浮动的方法有以下集中，实际运用时，我们只取其中最优的方案。

不过，在使用这些方法之前，我会默认大家都了解什么叫做`hasLayout`和`BFC`。

### 1.使用`clear`属性

```text
clear：left | right | both | none；
```

这种方法大家最熟悉，不多说。

### 2.添加空标签

```html
<div style=”clear:both”></div>
```

或者

```html
<br clear="both"> //大多数浏览器的默认行为都是为生成行内框，所以clear不能应用于br，除非改变其display的值。
```

### 3.设置父元素

```css
  overflow: hidden; //触发BFC
  *zoom: 1; //为了IE兼容性
```

### 4.让父元素也浮动起来

### 6.父元素设置`display:table`

### 7.使用`:after` 伪元素

```css
.clearFloat:after {
  display:block;
  content:'任意字符';
  clear:both;
  line-height:0;
  visibility:hidden;
}
```

这种方法，也是大家推荐的比较好的方法。

---
参考资料

1. [那些年我们一起清除过的浮动](http://www.iyunlu.com/view/css-xhtml/55.html "那些年我们一起清除过的浮动")

2. [CSS float浮动的深入研究、详解及拓展(一)](http://www.zhangxinxu.com/wordpress/2010/01/css-float%e6%b5%ae%e5%8a%a8%e7%9a%84%e6%b7%b1%e5%85%a5%e7%a0%94%e7%a9%b6%e3%80%81%e8%af%a6%e8%a7%a3%e5%8f%8a%e6%8b%93%e5%b1%95%e4%b8%80/ "CSS float浮动的深入研究、详解及拓展(一)")

3. [CSS float浮动的深入研究、详解及拓展(二)](http://www.zhangxinxu.com/wordpress/2010/01/css-float%e6%b5%ae%e5%8a%a8%e7%9a%84%e6%b7%b1%e5%85%a5%e7%a0%94%e7%a9%b6%e3%80%81%e8%af%a6%e8%a7%a3%e5%8f%8a%e6%8b%93%e5%b1%95%e4%ba%8c/ "CSS float浮动的深入研究、详解及拓展(二)")