# 响应式开发--bootstrap前端框架（二）

#### Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。



1.首先上官网下载bootstrap框架https://v3.bootcss.com/getting-started/#download

2.下载好之后解压得到bootstrap文件夹

3.配置页面  

```css
<meta name="viewport" content="width=device-width, initial-scale=1.0,  maximum-scale=1.0, ser-scalable=no"> //移动端适配

<meta http-equiv="X-UA-Compatible" content="IE=edge"> //IE兼容


<script src="node_modules/jquery/dist/jquery.js"></script> //jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边)

<script src="node_modules/bootstrap/js/bootstrap.js"></script> //加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。
```

进行完以上配置之后就可以直接使用bootstrap啦



## 1.栅格系统

栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。

### 1.1布局容器container和container-fluid

- container容器居中。在不同的屏幕宽度下，容器的宽度会做出适当改变

1. w>1200:1170   -**lg**
2. w:992~1200:970   -**md**
3. w:768~992:750  -**sm**
4. w<768:100%   -**xs**

- container-fluid容器不管在什么设备宽度下都是100%

### 1.2栅格参数

使用栅格系统时，规定行（row）要包含在布局容器中，在行中设置col-xs等子容器的属性

1.先添加容器container和container-fluid

2.在容器中添加row

3.在row中添加子元素，设置栅格样式

4.在子元素中添加具体内容

```html
<div class="container">
	<div class="row">
		<div class="col-xs-4"></div>
		<div class="col-xs-4"></div>
		<div class="col-xs-4"></div>
	</div>
</div>
```



可以通过设置子容器中**.col-xs-数字**(1-12)的样式来划分一个子容器占据几个栅格。默认一行有12个栅格

![1565320500659](C:\Users\14331\AppData\Roaming\Typora\typora-user-images\1565320500659.png)

![1565320280748](C:\Users\14331\AppData\Roaming\Typora\typora-user-images\1565320280748.png)

### 1.3列排序

**col-xs-offset-(1~12)**：偏移，可以通过设置这个属性来实现子元素的偏移。**偏移的原理是通过设置magin属性来实现的**，它会将其他的元素往后推。

**col-xs-push-(1~12)**：右偏移，可以通过设置这个属性来实现子元素的偏移。**偏移的原理是通过设置定位left属性来实现的**，它不会将其他元素往后推，但是可能会和其他元素重合。

**col-xs-pull-(1~12)**：左偏移，可以通过设置这个属性来实现子元素的偏移。**偏移的原理是通过设置定位right属性来实现的**，它不会将其他元素往后推，但是可能会和其他元素重合。



### 1.4嵌套列

1.如果在外层没有再包含container,那么嵌套列的宽度就是参照当前所在的栅格

2.如果外层添加了container,那么参照就是核心样式文件所设置的容器宽度



### 1.4响应式工具

通过单独或联合使用以下列出的类，**可以针对不同屏幕尺寸隐藏或显示页面内容。**

![1565323893549](C:\Users\14331\AppData\Roaming\Typora\typora-user-images\1565323893549.png)



## 2.LESS

CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域），需要书写大量看似没有逻辑的代码，不方便维护及扩 展，不利于复用，尤其对于非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码。为了方便前端开发的工作量，出现了sass和less.

**less使动态的样式表语言，通过简洁明了的语法定于，使编写CSS的工作变得非常简单，本质上，less包含一套自定义的语法及一个解析器**

1.先安装less环境

```shell
npm install -g less
```

2.新建一个text.less文件,使用less语法

```css
@color : #fff;
div{
  color: @color;
}
```

3.通过lessc命令编译输出css文件

```css
lessc text.less text.css
```

4.编译器编译生成的text.css文件如下

```css
div {
  color: #fff;
}
```

**2.1变量**

定义变量：@变量名：值

可直接写@变量名调用变量

**2.2混入**

可以将一个定义好的样式引入到另外一个样式中，类似于函数的调用.允许默认值

```
//less文件
.addRadius(@r){
	border-radius:@r;
}
div{
	width:200px;
	height:200px;
	.addRadius(5px);
}

//编译后的css文件
div{
	width:200px;
	height:200px;
	border-radius:5px
```

**2.3嵌套**



## 3.导航条

这里主要是根据个人的需求来修改bootstrap插件导航条样式，不同的需求可有不同的修改。这里就关键的几个类样式做讲解

```html
<!--导航条-->
    <nav class="navbar navbar-default">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Brand</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">Link</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">个人中心</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
```

**.navbar**——设置nav元素为导航条组件；

**.navbar-default**——指定导航条组件为默认主题；

**.navbar-brand**——设置导航条组件内的品牌图标；

展开效果pc端

![1565355197093](C:\Users\14331\AppData\Roaming\Typora\typora-user-images\1565355197093.png)

收缩效果移动端

![1565355239798](C:\Users\14331\AppData\Roaming\Typora\typora-user-images\1565355239798.png)

```html
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
```

button按钮定义的就是小屏幕下那个3横杠的东西，其样式**“navbar-toggle collapsed"**

**.collapsed**——设置button元素为在视口小于768px时才显示

是必不可少的。

1.**navbar-toggl**e——设置button元素为导航条组件的切换钮，可通过设置**<span class="icor"></span>**的个数来修改斑马线的条数

2.**data-toggle=“collapse”**表明这个button是一个折叠控件，**其折叠的内容指向data-target="#bs-example-navbar-collapse-1"，即是id为bs-example-navbar-collapse-1的内容。**

3**.aria-expanded="false**表示控件开始是折叠的



## 4.轮播图

这里主要是根据个人的需求来修改bootstrap插件轮播图样式，不同的需求可有不同的修改。这里就关键的几个类样式做讲解

```html
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="..." alt="...">
      <div class="carousel-caption">
        ...
      </div>
    </div>
    <div class="item">
      <img src="..." alt="...">
      <div class="carousel-caption">
        ...
      </div>
    </div>
    ...
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```

#### 1.底部按扭区

**.slide**：是否加上滑动效果，

**data-ride="carousel"**：初始化轮播图属性

**.carousel-indicators**:为轮播添加一个指示符，就是轮播图下的按钮

**data-target="#carousel-example-generic**：指向目标轮播图

**data-slide-to="数字"** ：控制的是轮播图当中的第几张 （索引）

**class="active"** ：当前选中的点

#### 2.轮播区

**.carousel-inner**:创建一个轮播区

**.item**:底部文字描述

#### 3.左右按钮区

**data-slide="prev"**：上一张控件

**data-slide="next"**：下一张控件



### 轮播案例

要求当屏幕宽度小于768px时

轮播图片自适应变化

要求当屏幕宽度大于768px时

轮播图片居中显示，并随着屏幕的展开而展开

**方案一**

使用响应式工具，当width小于768px的时候，设置类样式为.hidden-sm,.hidden-md,.hidden-lg

```html
  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active hidden-sm hidden-md hidden-lg">
      <img src="..." alt="...">
      <div class="carousel-caption">
        ...
      </div>
    </div>
    <div class="item hidden-sm hidden-md hidden-lg">
      <img src="..." alt="...">
      <div class="carousel-caption">
        ...
      </div>
    </div>
    ...
  </div>
```

当width大于768时，设置类样式为.hidden-xs

```html
  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active hidden-xs">
      <img src="..." alt="...">
      <div class="carousel-caption">
        ...
      </div>
    </div>
    <div class="item hidden-xs">
      <img src="..." alt="...">
      <div class="carousel-caption">
        ...
      </div>
    </div>
    ...
  </div>
```

这样带来的不足就是当屏幕小于768px时,PC端的图片虽然不会显示，但是客户端依然会向服务端发起请求，这样会造成资源的浪费，加大客户端的负担。显然是很不合理的

![1565442819207](C:\Users\14331\AppData\Roaming\Typora\typora-user-images\1565442819207.png)

​																**在pc端下移动端的图片依然被加载**



正确的做法应该是使用js来判断屏幕宽度做出不同的加载

html

```html
<div class="carousel-inner"role="listbox" >
    <div class="item  active"  data-large-img="img/slide_01_2000x410.jpg" data-small-img="img/slide_01_640x340.jpg">
    </div>

    <div class="item" data-large-img="img/slide_02_2000x410.jpg" data-small-img="img/slide_02_640x340.jpg">
    </div>

    <div class="item" data-large-img="img/slide_03_2000x410.jpg" data-small-img="img/slide_03_640x340.jpg">
    </div>

    <div class="item" data-large-img="img/slide_04_2000x410.jpg" data-small-img="img/slide_04_640x340.jpg">
    </div>

</div>
```

js

```js
$(function(){
    //获取所有item
    var items = $('.carousel-inner .item')
    //监听屏幕变化
    $(window).on('resize',function(){
        //获取屏幕宽度
        var width = $(window).width()
        //判断屏幕宽度，如果大于768显示pc端轮播
        if(width>=768){
            //遍历item
            items.each(function(index,value){
                //获取当前item
                var item = $(this)
                //获取自定义图片路径属性值
                var imgSrc = item.data('largeImg')
                //添加item中的PC端内容
                item.html($('<a href="" class="PC"></a>').css("backgroundImage","url('"+imgSrc+"')"))
            })
        }else{
            items.each(function(index,value){
                var item = $(this)
                var imgSrc = item.data('smallImg')
                item.html('<a href="" class="moblie"><img src="'+imgSrc+'" alt="..."></a>');
            })
        }
    }).trigger('resize')
})
```

css

```css
<style>
.moblie{
  width: 100%;
  display: block;
}
/*使用img标签来设置图片大小随着width的减少自适应缩减*/
.moblie>img{
  width: 100%;
  display: block;
}
.PC{
  /*PC端图片居中，随着width的增加，图片宽度增加高度不变*/
  background-position: center center;
  display: block;
  height: 500px;
  width: 100%;
  background-size: cover;
}
</style>
```

**完美解决**

![1565443218297](C:\Users\14331\AppData\Roaming\Typora\typora-user-images\1565443218297.png)