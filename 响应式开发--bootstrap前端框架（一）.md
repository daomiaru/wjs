# 响应式开发--bootstrap前端框架（一）

### 1.网页布局方式

1.固定宽度布局，为网页设置一个固定的宽度，通常以px为长度单位，常见于PC端网页

2.流式布局：为网页设置一个相对的宽度，通常以百分比作为长度单位

3.栅格式布局：将网页宽度人为的划分成均等的长度，然后排版布局时则以这些均等的长度为度量单位，通常利用百分比作为长度单位来划分成均等的长度

4.响应式布局：通过检测设备信息，决定网页的布局方式。即不同的设备之间所呈现的网页布局不同。一般情况下是检测设备的宽度来实现。**响应式网页设计是一种相对较新的网站设计方法，可确保用户无论使用何种类型的设备都能获得良好的观看体验。**

#### 简而言之，就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。这个概念是为解决移动互联网浏览而诞生的！

### ![1565253582435](C:\Users\14331\AppData\Roaming\Typora\typora-user-images\1565253582435.png)



**响应式开发的优点：**　

​	   面对不同分辨率设备灵活性强

​	   能够快捷解决多设备显示适应问题

**响应式开发的缺点：**

　　兼容各种设备工作量大，效率低下

　　代码累赘，会出现隐藏无用的元素，加载时间加长

　　其实这是一种折衷性质的设计解决方案，多方面因素影响而达不到最佳效果

　　一定程度上改变了网站原有的布局结构，会出现用户混淆的情况.域名查询 网站注册



### 2.媒体查询--响应式开发的原理

**移动端适配**

```html
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```



查询媒介，查询到当前屏幕(设备媒介)的宽度，针对不同的屏幕宽度设置不同的样式来适应不同的屏幕，当你重置浏览器窗口大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。简单说，你可以设置不同品目下的不同样式来达到网页适配不同屏幕的目的

实现方式：通过查询screen属性宽度来指定某个宽度区间内的网页布局

|   超小屏幕   |     移动设备     |       width<768px       |
| :----------: | :--------------: | :---------------------: |
| **小屏屏幕** | **768px-992px**  | **768px<=width<992px**  |
| **中等屏幕** | **992px-1200px** | **992px<=width<1200px** |
| **宽屏屏幕** |  **1200px以上**  |    **width>=1200px**    |

媒体查询的语法：

and：条件连接

```css
@media mediatype and|not|only (media feature) {
    CSS-Code;
}
```

**mediatype**属性说明

|   值   |                 描述                 |
| :----: | :----------------------------------: |
|  all   |             用于所有设备             |
| print  |         用于打印机和打印预览         |
| screen | 用于电脑屏幕，平板电脑，智能手机等。 |
| speech |      应用于屏幕阅读器等发声设备      |

**media feature**属性说明

|        值        |                           描述                           |
| :--------------: | :------------------------------------------------------: |
|    max-width     |          定义输出设备中的页面最大可见区域宽度。          |
|    min-width     |          定义输出设备中的页面最小可见区域宽度。          |
|    max-height    |          定义输出设备中的页面最大可见区域高度。          |
|    min-height    |          定义输出设备中的页面最小可见区域高度。          |
| min-device-width | 定义当前设备的最小宽度（不会因为浏览器的宽度变化而变化） |
| max-device-width | 定义当前设备的最大宽度（不会因为浏览器的宽度变化而变化） |

这里举一个简单的实例

要求使用媒体查询实现
**1.页面在屏幕宽度1080px以上时显示红色**
**2.页面在1080px到960px之间时显示蓝色**
**3.页面在960p到760px之间时显示紫色**
**4.页面在760p以下时显示粉红色**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @media screen and (min-width: 1080px) {
            body{
                background: red;
            }
        }
        @media screen and (max-width: 1080px) and (min-width: 960px){
            body{
                background: blue;
            }
        }
        @media screen and (max-width: 960px) and (min-width: 760px){
            body{
                background: purple;
            }
        }
        @media screen and (max-width: 760px){
            body{
                background: pink;
            }
        }
    </style>
</head>
<body>
</body>
</html>

```

以上要求我们还可以这样来写

当判断最小的值，并且从小到大进行判断（当满足条件的时候）

**1.向上兼容，如果设置了宽度更小的样式，默认这些样式会传递到宽度更大的条件范围内**

**2.向下覆盖，宽度更大的样式会将前面宽度更小的样式覆盖**

```html
    <style>
            body{
                background: pink;
            }
        @media screen and (min-width: 760px){
            body{
                background: purple;
            }
        }
        @media screen and (min-width: 960px){
            body{
                background: blee;
            }
        }
        @media screen and (min-width: 1080px){
            body{
                background: red;
            }
        }
    </style>
```

**有了上面的基础之后，我们后面就可以通过在link标签中加入条件判断，来调用不同的css文件了**

```html
<link rel="stylesheet" media="screen and (min-width:1080px) and (max-width:1920px)" href="a.css">
```

这边再举一个简单的实例

要求：**当宽度小于680px的时候一行可以放置1个div**

​			**当宽度大于680px，小于960px的时候一行可以放置2个div**

​			**当宽度大于960px，小于1200px的时候一行可以放置3个div**

​			**当宽度大于1200px的时候一行可以放置所有div**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <style>
        .box{
            width: 100%;
            height: 100px;
        }
        .box >div{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border-right: 2px solid green;
            border-bottom: 2px solid green;
            float: left;
            background-color: #2aabd2;
        }
        @media screen and (min-width: 680px) {
            .box>div{
                width: 50%;
            }
        }
        @media screen and  (min-width: 960px){
            .box>div{
                width: 33.3%;
            }
        }
        @media screen and (min-width: 1200px){
            .box>div{
                width: 12.5%;
            }
        }
    </style>
</head>
<body>
<div class="box">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
</body>
</html>
```



### 随着web应用变的越来越复杂，在大量的开发过程中我们发现有许多功能模块非常相似，比如轮播图、分页、选项卡、导航栏等，开发中往往会把这些具有通用性的功能模块进行一系列封装，使之成为一个个组件应用到项目中，可以极大的节约开发成本，将这些通用的组件缩合到一起就形成了前端框架，接下来我们主要就bootstrap框架进行讲解